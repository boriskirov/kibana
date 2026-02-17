/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { EuiSearchBarProps, Query } from '@elastic/eui';
import {
  EuiButtonEmpty,
  EuiButtonGroup,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSearchBar,
  EuiText,
} from '@elastic/eui';
import { css } from '@emotion/react';
import { i18n } from '@kbn/i18n';
import type { OnboardingResult, TaskResult } from '@kbn/streams-schema';
import { TaskStatus } from '@kbn/streams-schema';
import pMap from 'p-map';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useAsync from 'react-use/lib/useAsync';
import type { TableRow } from './utils';
import { useAIFeatures } from '../../../../hooks/use_ai_features';
import { useKibana } from '../../../../hooks/use_kibana';
import { useOnboardingApi } from '../../../../hooks/use_onboarding_api';
import { useStreamDocCountsFetch } from '../../../../hooks/use_streams_doc_counts_fetch';
import { getFormattedError } from '../../../../util/errors';
import { StreamsAppSearchBar } from '../../../streams_app_search_bar';
import { useOnboardingStatusUpdateQueue } from '../../hooks/use_onboarding_status_update_queue';
import {
  ONBOARDING_FAILURE_TITLE,
  ONBOARDING_SCHEDULING_FAILURE_TITLE,
  RUN_BULK_STREAM_ONBOARDING_BUTTON_LABEL,
  STREAMS_TABLE_SEARCH_ARIA_LABEL,
  STREAM_LIST_VIEW_LABEL,
  STREAM_MAP_VIEW_LABEL,
} from './translations';
import { StreamsTreeTable } from './tree_table';
import { StreamsMap } from './streams_map';
import { useFetchStreams } from '../../hooks/use_fetch_streams';

type StreamsViewMode = 'list' | 'map';

const VIEW_MODE_OPTIONS = [
  {
    id: 'list' as const,
    label: STREAM_LIST_VIEW_LABEL,
    iconType: 'list',
  },
  {
    id: 'map' as const,
    label: STREAM_MAP_VIEW_LABEL,
    iconType: 'graphApp',
  },
];

const datePickerStyle = css`
  .euiFormControlLayout,
  .euiSuperDatePicker button,
  .euiButton {
    height: 40px;
  }
`;

interface StreamsViewProps {
  refreshUnbackedQueriesCount: () => void;
}

export function StreamsView({ refreshUnbackedQueriesCount }: StreamsViewProps) {
  const {
    core: {
      notifications: { toasts },
    },
  } = useKibana();
  const isInitialStatusUpdateDone = useRef(false);
  const [searchQuery, setSearchQuery] = useState<Query | undefined>();
  const [viewMode, setViewMode] = useState<StreamsViewMode>('list');
  const streamsListFetch = useFetchStreams({
    select: (result) => {
      return {
        ...result,
        /**
         * Significant events discovery for now only works with logs streams.
         */
        streams: result.streams.filter((stream) => stream.stream.name.startsWith('logs')),
      };
    },
  });

  const [selectedStreams, setSelectedStreams] = useState<TableRow[]>([]);
  const [streamOnboardingResultMap, setStreamOnboardingResultMap] = useState<
    Record<string, TaskResult<OnboardingResult>>
  >({});
  const aiFeatures = useAIFeatures();
  const { scheduleOnboardingTask, cancelOnboardingTask } = useOnboardingApi(
    aiFeatures?.genAiConnectors.selectedConnector
  );
  const onStreamStatusUpdate = useCallback(
    (streamName: string, taskResult: TaskResult<OnboardingResult>) => {
      setStreamOnboardingResultMap((currentMap) => ({
        ...currentMap,
        [streamName]: taskResult,
      }));

      /**
       * Preventing showing error toasts and doing extra work
       * for the initial status update when the page loads for
       * the first time
       */
      if (!isInitialStatusUpdateDone.current) {
        return;
      }

      if (taskResult.status === TaskStatus.Failed) {
        toasts.addError(getFormattedError(new Error(taskResult.error)), {
          title: ONBOARDING_FAILURE_TITLE,
        });
      }

      if (taskResult.status === TaskStatus.Completed) {
        refreshUnbackedQueriesCount();
      }
    },
    [refreshUnbackedQueriesCount, toasts]
  );
  const { onboardingStatusUpdateQueue, processStatusUpdateQueue } =
    useOnboardingStatusUpdateQueue(onStreamStatusUpdate);

  const handleQueryChange: EuiSearchBarProps['onChange'] = ({ query }) => {
    if (query) setSearchQuery(query);
  };

  useEffect(() => {
    if (streamsListFetch.data === undefined) {
      return;
    }

    streamsListFetch.data.streams.forEach((item) => {
      onboardingStatusUpdateQueue.add(item.stream.name);
    });
    processStatusUpdateQueue().finally(() => {
      isInitialStatusUpdateDone.current = true;
    });
  }, [onboardingStatusUpdateQueue, processStatusUpdateQueue, streamsListFetch.data]);

  const bulkScheduleOnboardingTask = async (streamList: string[]) => {
    try {
      await pMap(
        streamList,
        async (streamName) => {
          await scheduleOnboardingTask(streamName);
        },
        { concurrency: 10 }
      );
    } catch (error) {
      toasts.addError(getFormattedError(error), {
        title: ONBOARDING_SCHEDULING_FAILURE_TITLE,
      });
    }
  };

  const onBulkOnboardStreamsClick = async () => {
    const streamList = selectedStreams
      .filter((item) => {
        const onboardingResult = streamOnboardingResultMap[item.stream.name];

        return ![TaskStatus.InProgress, TaskStatus.BeingCanceled].includes(onboardingResult.status);
      })
      .map((item) => item.stream.name);

    setSelectedStreams([]);

    await bulkScheduleOnboardingTask(streamList);
    streamList.forEach((streamName) => {
      onboardingStatusUpdateQueue.add(streamName);
    });
    processStatusUpdateQueue();
  };

  const onOnboardStreamActionClick = async (streamName: string) => {
    await bulkScheduleOnboardingTask([streamName]);

    onboardingStatusUpdateQueue.add(streamName);
    processStatusUpdateQueue();
  };

  const onStopOnboardingActionClick = (streamName: string) => {
    cancelOnboardingTask(streamName);
  };

  const handleViewModeChange = (id: string) => {
    setViewMode(id as StreamsViewMode);
  };

  // Fetch doc counts and quality data for the map view
  const numDataPoints = 25;
  const { getStreamDocCounts } = useStreamDocCountsFetch({
    groupTotalCountByTimestamp: true,
    canReadFailureStore: false,
    numDataPoints,
  });

  const docCountsFetch = getStreamDocCounts();
  const totalDocsResult = useAsync(() => docCountsFetch.docCount, [docCountsFetch]);
  const degradedDocsResult = useAsync(() => docCountsFetch.degradedDocCount, [docCountsFetch]);

  const docsByStream = useMemo(() => {
    if (!totalDocsResult.value) {
      return {} as Record<string, number>;
    }
    return totalDocsResult.value.reduce(
      (acc, { stream, count }) => {
        acc[stream] = count;
        return acc;
      },
      {} as Record<string, number>
    );
  }, [totalDocsResult.value]);

  const degradedByStream = useMemo(() => {
    if (!degradedDocsResult.value) {
      return {} as Record<string, number>;
    }
    return degradedDocsResult.value.reduce(
      (acc, { stream, count }) => {
        acc[stream] = count;
        return acc;
      },
      {} as Record<string, number>
    );
  }, [degradedDocsResult.value]);

  const qualityByStream = useMemo(() => {
    const qualities: Record<string, 'good' | 'degraded' | 'poor'> = {};
    const datasets = new Set([...Object.keys(docsByStream), ...Object.keys(degradedByStream)]);

    datasets.forEach((dataset) => {
      const totalDocs = docsByStream[dataset] ?? 0;
      const degradedDocs = degradedByStream[dataset] ?? 0;

      // Calculate quality based on degraded percentage
      if (totalDocs === 0) {
        qualities[dataset] = 'good';
      } else {
        const degradedPercentage = (degradedDocs / totalDocs) * 100;
        if (degradedPercentage >= 3) {
          qualities[dataset] = 'poor';
        } else if (degradedPercentage >= 0.5) {
          qualities[dataset] = 'degraded';
        } else {
          qualities[dataset] = 'good';
        }
      }
    });

    return qualities;
  }, [docsByStream, degradedByStream]);

  return (
    <EuiFlexGroup direction="column" gutterSize="m">
      <EuiFlexItem grow={false}>
        <EuiFlexGroup gutterSize="s" alignItems="center">
          <EuiFlexItem>
            <EuiSearchBar
              query={searchQuery}
              onChange={handleQueryChange}
              box={{
                incremental: true,
                'aria-label': STREAMS_TABLE_SEARCH_ARIA_LABEL,
              }}
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false} css={datePickerStyle}>
            <StreamsAppSearchBar showDatePicker />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiFlexGroup alignItems="center" justifyContent="spaceBetween" gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="center" gutterSize="s">
              <EuiText size="s">
                {i18n.translate(
                  'xpack.streams.significantEventsDiscovery.streamsTree.streamsCountLabel',
                  {
                    defaultMessage: '{count} streams',
                    values: { count: streamsListFetch.data?.streams.length ?? 0 },
                  }
                )}
              </EuiText>

              {viewMode === 'list' && (
                <EuiButtonEmpty
                  onClick={onBulkOnboardStreamsClick}
                  iconType="securitySignal"
                  disabled={selectedStreams.length === 0}
                >
                  {RUN_BULK_STREAM_ONBOARDING_BUTTON_LABEL}
                </EuiButtonEmpty>
              )}
            </EuiFlexGroup>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <EuiButtonGroup
              legend={i18n.translate(
                'xpack.streams.significantEventsDiscovery.streamsView.viewModeLegend',
                {
                  defaultMessage: 'Select view mode',
                }
              )}
              options={VIEW_MODE_OPTIONS}
              idSelected={viewMode}
              onChange={handleViewModeChange}
              buttonSize="compressed"
              data-test-subj="streamsViewModeToggle"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>

      <EuiFlexItem
        css={css`
          ${viewMode === 'map' ? 'min-height: 500px;' : ''}
        `}
      >
        {viewMode === 'list' ? (
          <StreamsTreeTable
            streams={streamsListFetch.data?.streams}
            streamOnboardingResultMap={streamOnboardingResultMap}
            loading={streamsListFetch.isLoading}
            searchQuery={searchQuery}
            selection={{ selected: selectedStreams, onSelectionChange: setSelectedStreams }}
            onOnboardStreamActionClick={onOnboardStreamActionClick}
            onStopOnboardingActionClick={onStopOnboardingActionClick}
          />
        ) : (
          <StreamsMap
            streams={streamsListFetch.data?.streams}
            loading={streamsListFetch.isLoading}
            docsByStream={docsByStream}
            qualityByStream={qualityByStream}
          />
        )}
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
