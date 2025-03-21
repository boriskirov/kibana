/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type * as estypes from '@elastic/elasticsearch/lib/api/typesWithBodyKey';
import type { EventCountOptions, EventsOptions, EventDoc } from './types';
import { getQueryFilter } from '../../../../../common/detection_engine/get_query_filter';
import { singleSearchAfter } from '../single_search_after';
import { buildEventsSearchQuery } from '../build_events_query';

export const MAX_PER_PAGE = 9000;

export const getEventList = async ({
  services,
  ruleExecutionLogger,
  query,
  language,
  index,
  perPage,
  searchAfter,
  exceptionItems,
  filters,
  tuple,
  primaryTimestamp,
  secondaryTimestamp,
  runtimeMappings,
}: EventsOptions): Promise<estypes.SearchResponse<EventDoc>> => {
  const calculatedPerPage = perPage ?? MAX_PER_PAGE;
  if (calculatedPerPage > 10000) {
    throw new TypeError('perPage cannot exceed the size of 10000');
  }

  ruleExecutionLogger.debug(
    `Querying the events items from the index: "${index}" with searchAfter: "${searchAfter}" for up to ${calculatedPerPage} indicator items`
  );

  const filter = getQueryFilter(query, language ?? 'kuery', filters, index, exceptionItems);

  const { searchResult } = await singleSearchAfter({
    searchAfterSortIds: searchAfter,
    index,
    from: tuple.from.toISOString(),
    to: tuple.to.toISOString(),
    services,
    ruleExecutionLogger,
    filter,
    pageSize: Math.ceil(Math.min(tuple.maxSignals, calculatedPerPage)),
    primaryTimestamp,
    secondaryTimestamp,
    sortOrder: 'desc',
    trackTotalHits: false,
    runtimeMappings,
  });

  ruleExecutionLogger.debug(`Retrieved events items of size: ${searchResult.hits.hits.length}`);
  return searchResult;
};

export const getEventCount = async ({
  esClient,
  query,
  language,
  filters,
  index,
  exceptionItems,
  tuple,
  primaryTimestamp,
  secondaryTimestamp,
}: EventCountOptions): Promise<number> => {
  const filter = getQueryFilter(query, language ?? 'kuery', filters, index, exceptionItems);
  const eventSearchQueryBodyQuery = buildEventsSearchQuery({
    index,
    from: tuple.from.toISOString(),
    to: tuple.to.toISOString(),
    filter,
    size: 0,
    primaryTimestamp,
    secondaryTimestamp,
    searchAfterSortIds: undefined,
    runtimeMappings: undefined,
  }).body.query;
  const response = await esClient.count({
    body: { query: eventSearchQueryBodyQuery },
    ignore_unavailable: true,
    index,
  });
  return response.count;
};
