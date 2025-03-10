/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { ElasticsearchClient } from '@kbn/core/server';
import type {
  AggregationsMultiBucketAggregateBase as Aggregation,
  QueryDslQueryContainer,
  SearchRequest,
} from '@elastic/elasticsearch/lib/api/types';
import { Cluster } from '../../../common/types';
import {
  getFailedFindingsFromAggs,
  failedFindingsAggQuery,
} from './get_grouped_findings_evaluation';
import type { FailedFindingsQueryResult } from './get_grouped_findings_evaluation';
import { findingsEvaluationAggsQuery, getStatsFromFindingsEvaluationsAggs } from './get_stats';
import { KeyDocCount } from './compliance_dashboard';

type UnixEpochTime = number;

export interface ClusterBucket extends FailedFindingsQueryResult, KeyDocCount {
  failed_findings: {
    doc_count: number;
  };
  passed_findings: {
    doc_count: number;
  };
  benchmarks: Aggregation<KeyDocCount>;
  timestamps: Aggregation<KeyDocCount<UnixEpochTime>>;
}

interface ClustersQueryResult {
  aggs_by_cluster_id: Aggregation<ClusterBucket>;
}

export type ClusterWithoutTrend = Omit<Cluster, 'trend'>;

export const getClustersQuery = (query: QueryDslQueryContainer, pitId: string): SearchRequest => ({
  size: 0,
  query,
  aggs: {
    aggs_by_cluster_id: {
      terms: {
        field: 'cluster_id',
      },
      aggs: {
        benchmarks: {
          terms: {
            field: 'rule.benchmark.name',
          },
        },
        timestamps: {
          terms: {
            field: '@timestamp',
            size: 1,
            order: {
              _key: 'desc',
            },
          },
        },
        ...failedFindingsAggQuery,
        ...findingsEvaluationAggsQuery,
      },
    },
  },
  pit: {
    id: pitId,
  },
});

export const getClustersFromAggs = (clusters: ClusterBucket[]): ClusterWithoutTrend[] =>
  clusters.map((cluster) => {
    // get cluster's meta data
    const benchmarks = cluster.benchmarks.buckets;
    if (!Array.isArray(benchmarks)) throw new Error('missing aggs by benchmarks per cluster');
    const timestamps = cluster.timestamps.buckets;
    if (!Array.isArray(timestamps)) throw new Error('missing aggs by timestamps per cluster');

    const meta = {
      clusterId: cluster.key,
      benchmarkName: benchmarks[0].key,
      lastUpdate: timestamps[0].key,
    };

    // get cluster's stats
    if (!cluster.failed_findings || !cluster.passed_findings)
      throw new Error('missing findings evaluations per cluster');
    const stats = getStatsFromFindingsEvaluationsAggs(cluster);

    // get cluster's resource types aggs
    const resourcesTypesAggs = cluster.aggs_by_resource_type.buckets;
    if (!Array.isArray(resourcesTypesAggs))
      throw new Error('missing aggs by resource type per cluster');
    const groupedFindingsEvaluation = getFailedFindingsFromAggs(resourcesTypesAggs);

    return {
      meta,
      stats,
      groupedFindingsEvaluation,
    };
  });

export const getClusters = async (
  esClient: ElasticsearchClient,
  query: QueryDslQueryContainer,
  pitId: string
): Promise<ClusterWithoutTrend[]> => {
  const queryResult = await esClient.search<unknown, ClustersQueryResult>(
    getClustersQuery(query, pitId)
  );

  const clusters = queryResult.aggregations?.aggs_by_cluster_id.buckets;
  if (!Array.isArray(clusters)) throw new Error('missing aggs by cluster id');

  return getClustersFromAggs(clusters);
};
