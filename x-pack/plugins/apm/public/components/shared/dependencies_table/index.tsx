/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { useEuiTheme } from '@elastic/eui';
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiTitle } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import React from 'react';
import { ConnectionStatsItemWithComparisonData } from '../../../../common/connections';
import { useBreakpoints } from '../../../hooks/use_breakpoints';
import { FETCH_STATUS } from '../../../hooks/use_fetcher';
import { SparkPlotBig } from '../charts/spark_plot_big';
import { EmptyMessage } from '../empty_message';
import { ITableColumn, ManagedTable } from '../managed_table';
import { OverviewTableContainer } from '../overview_table_container';
import { TruncateWithTooltip } from '../truncate_with_tooltip';
import {
  getSpanMetricColumns,
  SpanMetricGroup,
} from './get_span_metric_columns';

export type DependenciesItem = Omit<
  ConnectionStatsItemWithComparisonData,
  'location'
> & {
  name: string;
  link: React.ReactElement;
};

interface Props {
  dependencies: DependenciesItem[];
  initialPageSize: number;
  fixedHeight?: boolean;
  link?: React.ReactNode;
  title: React.ReactNode;
  nameColumnTitle: React.ReactNode;
  status: FETCH_STATUS;
  compact?: boolean;
  showPerPageOptions?: boolean;
}

type FormattedSpanMetricGroup = SpanMetricGroup & {
  name: string;
  link: React.ReactElement;
};

export function DependenciesTable(props: Props) {
  const {
    dependencies,
    fixedHeight,
    link,
    title,
    nameColumnTitle,
    status,
    compact = true,
    showPerPageOptions = true,
    initialPageSize,
  } = props;

  // SparkPlots should be hidden if we're in two-column view and size XL (1200px)
  const breakpoints = useBreakpoints();

  const items: FormattedSpanMetricGroup[] = dependencies.map((dependency) => ({
    name: dependency.name,
    link: dependency.link,
    latency: dependency.currentStats.latency.value,
    throughput: dependency.currentStats.throughput.value,
    failureRate: dependency.currentStats.errorRate.value,
    impact: dependency.currentStats.impact,
    currentStats: {
      latency: dependency.currentStats.latency.timeseries,
      throughput: dependency.currentStats.throughput.timeseries,
      failureRate: dependency.currentStats.errorRate.timeseries,
    },
    previousStats: dependency.previousStats
      ? {
          latency: dependency.previousStats.latency.timeseries,
          throughput: dependency.previousStats.throughput.timeseries,
          failureRate: dependency.previousStats.errorRate.timeseries,
          impact: dependency.previousStats.impact,
        }
      : undefined,
  }));

  const columns: Array<ITableColumn<FormattedSpanMetricGroup>> = [
    {
      field: 'name',
      name: nameColumnTitle,
      render: (_, item) => {
        const { name, link: itemLink } = item;
        return <TruncateWithTooltip text={name} content={itemLink} />;
      },
      sortable: true,
      width: '30%',
    },
    ...getSpanMetricColumns({
      breakpoints,
      comparisonFetchStatus: status,
    }),
  ];

  const noItemsMessage = !compact ? (
    <EmptyMessage
      heading={i18n.translate('xpack.apm.dependenciesTable.notFoundLabel', {
        defaultMessage: 'No dependencies found',
      })}
    />
  ) : (
    i18n.translate('xpack.apm.dependenciesTable.notFoundLabel', {
      defaultMessage: 'No dependencies found',
    })
  );

  const data1 = [
    { x: 0, y: 2 },

    { x: 1, y: 7 },

    { x: 2, y: 3 },

    { x: 3, y: 6 },
  ];

  const data2 = [
    { x: 0, y: 1 },

    { x: 1, y: 41 },

    { x: 2, y: 15 },

    { x: 3, y: 1 },
  ];

  const data3 = [
    { x: 0, y: 17 },

    { x: 1, y: 16 },

    { x: 2, y: 12 },

    { x: 3, y: 0 },
  ];

  const { euiTheme } = useEuiTheme();

  return (
    <EuiFlexGroup
      direction="column"
      gutterSize="s"
      data-test-subj="dependenciesTable"
    >
      <EuiFlexItem>
        <EuiPanel hasBorder={true}>
          <EuiFlexGroup direction="row" gutterSize="s">
            <EuiFlexItem>
              <SparkPlotBig
                title="Throughput"
                color={euiTheme.colors.warning}
                isLoading={false}
                series={data2}
                valueLabel={i18n.translate(
                  'xpack.apm.errorsTable.occurrences',
                  {
                    defaultMessage: `74,9 tpm`,
                    values: {
                      occurrences: 2,
                    },
                  }
                )}
                comparisonSeries={data2}
                comparisonSeriesColor={euiTheme.colors.warning}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <SparkPlotBig
                title="Error rate"
                color={euiTheme.colors.success}
                isLoading={false}
                series={data1}
                valueLabel={i18n.translate(
                  'xpack.apm.errorsTable.occurrences',
                  {
                    defaultMessage: `24%`,
                    values: {
                      occurrences: 2,
                    },
                  }
                )}
                comparisonSeries={data1}
                comparisonSeriesColor={euiTheme.colors.success}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <SparkPlotBig
                title="Latency"
                color={euiTheme.colors.accent}
                isLoading={false}
                series={data3}
                valueLabel={i18n.translate(
                  'xpack.apm.errorsTable.occurrences',
                  {
                    defaultMessage: `38,2 ms`,
                    values: {
                      occurrences: 2,
                    },
                  }
                )}
                comparisonSeries={data3}
                comparisonSeriesColor={euiTheme.colors.accent}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiFlexGroup responsive={false} justifyContent="spaceBetween">
          <EuiFlexItem grow={false}>
            <EuiTitle size="xs">
              <h2>{title}</h2>
            </EuiTitle>
          </EuiFlexItem>
          {link && <EuiFlexItem grow={false}>{link}</EuiFlexItem>}
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem>
        <OverviewTableContainer
          fixedHeight={fixedHeight}
          isEmptyAndNotInitiated={
            items.length === 0 && status === FETCH_STATUS.NOT_INITIATED
          }
        >
          <ManagedTable
            isLoading={status === FETCH_STATUS.LOADING}
            error={status === FETCH_STATUS.FAILURE}
            columns={columns}
            items={items}
            noItemsMessage={noItemsMessage}
            initialSortField="impact"
            initialSortDirection="desc"
            pagination={true}
            showPerPageOptions={showPerPageOptions}
            initialPageSize={initialPageSize}
          />
        </OverviewTableContainer>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
