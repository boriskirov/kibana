/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  EuiButton,
  EuiButtonEmpty,
  EuiButtonGroup,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingElastic,
  useEuiTheme,
} from '@elastic/eui';
import { css } from '@emotion/react';
import { usePerformanceContext } from '@kbn/ebt-tools';
import { i18n } from '@kbn/i18n';
import { Streams } from '@kbn/streams-schema';
import { isEmpty } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import useAsync from 'react-use/lib/useAsync';
import { useKibana } from '../../hooks/use_kibana';
import { useStreamsAppFetch } from '../../hooks/use_streams_app_fetch';
import { useStreamsAppRouter } from '../../hooks/use_streams_app_router';
import { useStreamsPrivileges } from '../../hooks/use_streams_privileges';
import { useTimefilter } from '../../hooks/use_timefilter';
import { useStreamDocCountsFetch } from '../../hooks/use_streams_doc_counts_fetch';
import { FeedbackButton } from '../feedback_button';
import { StreamsAppPageTemplate } from '../streams_app_page_template';
import { WelcomeTourCallout } from '../streams_tour';
import { ClassicStreamCreationFlyout } from './classic_stream_creation_flyout';
import { StreamsListEmptyPrompt } from './streams_list_empty_prompt';
import { StreamsSettingsFlyout } from './streams_settings_flyout';
import { StreamsTreeTable } from './tree_table';
import { StreamsMap } from './streams_map';
import { CreateQueryStreamFlyout } from '../query_streams/create_query_stream_flyout';
import { getFormattedError } from '../../util/errors';
import { STREAM_LIST_VIEW_LABEL, STREAM_MAP_VIEW_LABEL } from './translations';

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

export function StreamListView() {
  const { euiTheme } = useEuiTheme();
  const context = useKibana();
  const {
    dependencies: {
      start: {
        streams: { streamsRepositoryClient, getClassicStatus },
      },
    },
    core,
  } = context;
  const { onPageReady } = usePerformanceContext();
  const router = useStreamsAppRouter();

  const { timeState } = useTimefilter();
  const streamsListFetch = useStreamsAppFetch(
    async ({ signal }) =>
      streamsRepositoryClient.fetch('GET /internal/streams', {
        signal,
      }),
    // time state change is used to trigger a refresh of the listed
    // streams metadata but we operate on stale data if we don't
    // also refresh the streams
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [streamsRepositoryClient, timeState.start, timeState.end]
  );

  const {
    ui: { manage: canManageStreamsKibana },
    features: { significantEventsDiscovery, queryStreams },
  } = useStreamsPrivileges();

  const [canManageClassicElasticsearch, setCanManageClassicElasticsearch] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchClassicStatus = async () => {
      try {
        const status = await getClassicStatus();
        setCanManageClassicElasticsearch(Boolean(status.can_manage));
      } catch (error) {
        core.notifications.toasts.addError(getFormattedError(error), {
          title: i18n.translate('xpack.streams.streamsListView.fetchClassicStatusErrorToastTitle', {
            defaultMessage: 'Error fetching classic streams status',
          }),
        });
      }
    };
    fetchClassicStatus();
  }, [getClassicStatus, core.notifications.toasts]);

  const { hasClassicStreams, firstClassicStreamName } = useMemo(() => {
    const allStreams = streamsListFetch.value?.streams ?? [];
    const classicStreams = allStreams.filter(
      (item) => item.stream && Streams.ClassicStream.Definition.is(item.stream)
    );
    return {
      hasClassicStreams: classicStreams.length > 0,
      firstClassicStreamName: classicStreams[0]?.stream?.name,
    };
  }, [streamsListFetch.value?.streams]);

  // Telemetry for TTFMP (time to first meaningful paint)
  useEffect(() => {
    if (!streamsListFetch.loading && streamsListFetch.value !== undefined) {
      const streams = streamsListFetch.value.streams ?? [];
      const classicStreamsCount = streams.filter((item) =>
        Streams.ClassicStream.Definition.is(item.stream)
      ).length;
      const wiredStreamsCount = streams.filter((item) =>
        Streams.WiredStream.Definition.is(item.stream)
      ).length;

      onPageReady({
        customMetrics: {
          key1: 'total_streams_count',
          value1: streams.length,
          key2: 'classic_streams_count',
          value2: classicStreamsCount,
          key3: 'wired_streams_count',
          value3: wiredStreamsCount,
        },
      });
    }
  }, [streamsListFetch.loading, streamsListFetch.value, onPageReady]);

  const [isSettingsFlyoutOpen, setIsSettingsFlyoutOpen] = React.useState(false);
  const [isClassicStreamCreationFlyoutOpen, setIsClassicStreamCreationFlyoutOpen] =
    React.useState(false);
  const [viewMode, setViewMode] = useState<StreamsViewMode>('list');

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
    <>
      <StreamsAppPageTemplate.Header
        bottomBorder="extended"
        css={css`
          background: ${euiTheme.colors.backgroundBasePlain};
        `}
        pageTitle={
          <EuiFlexGroup
            justifyContent="spaceBetween"
            gutterSize="s"
            responsive={false}
            alignItems="center"
          >
            <EuiFlexItem>
              <EuiFlexGroup alignItems="center" gutterSize="m">
                {i18n.translate('xpack.streams.streamsListView.pageHeaderTitle', {
                  defaultMessage: 'Streams',
                })}
              </EuiFlexGroup>
            </EuiFlexItem>
            {significantEventsDiscovery?.available && significantEventsDiscovery.enabled && (
              <EuiFlexItem grow={false}>
                <EuiButton
                  href={router.link('/_discovery')}
                  iconType="crosshairs"
                  data-test-subj="streamsSignificantEventsDiscoveryButton"
                >
                  {i18n.translate('xpack.streams.streamsListView.sigEventsDiscoveryButtonLabel', {
                    defaultMessage: 'SigEvents Discovery',
                  })}
                </EuiButton>
              </EuiFlexItem>
            )}
            <FeedbackButton />
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                iconType="gear"
                size="s"
                onClick={() => setIsSettingsFlyoutOpen(true)}
                aria-label={i18n.translate('xpack.streams.streamsListView.settingsButtonLabel', {
                  defaultMessage: 'Settings',
                })}
              >
                {i18n.translate('xpack.streams.streamsListView.settingsButtonLabel', {
                  defaultMessage: 'Settings',
                })}
              </EuiButtonEmpty>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                onClick={() => setIsClassicStreamCreationFlyoutOpen(true)}
                size="s"
                disabled={!(canManageStreamsKibana && canManageClassicElasticsearch)}
              >
                {i18n.translate('xpack.streams.streamsListView.createClassicStreamButtonLabel', {
                  defaultMessage: 'Create classic stream',
                })}
              </EuiButton>
            </EuiFlexItem>
            {queryStreams?.enabled && (
              <EuiFlexItem grow={false}>
                <CreateQueryStreamFlyout onQueryStreamCreated={streamsListFetch.refresh} />
              </EuiFlexItem>
            )}
            <EuiFlexItem grow={false}>
              <EuiButtonGroup
                legend={i18n.translate('xpack.streams.streamsListView.viewModeLegend', {
                  defaultMessage: 'Select view mode',
                })}
                options={VIEW_MODE_OPTIONS}
                idSelected={viewMode}
                onChange={handleViewModeChange}
                buttonSize="compressed"
                data-test-subj="streamsViewModeToggle"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        }
      />
      <StreamsAppPageTemplate.Body grow>
        {streamsListFetch.loading && streamsListFetch.value === undefined ? (
          <EuiEmptyPrompt
            icon={<EuiLoadingElastic size="xl" />}
            title={
              <h2>
                {i18n.translate('xpack.streams.streamsListView.loadingStreams', {
                  defaultMessage: 'Loading Streams',
                })}
              </h2>
            }
          />
        ) : !streamsListFetch.loading && isEmpty(streamsListFetch.value?.streams) ? (
          <StreamsListEmptyPrompt />
        ) : (
          <>
            <WelcomeTourCallout
              hasClassicStreams={hasClassicStreams}
              firstClassicStreamName={firstClassicStreamName}
            />
            {viewMode === 'list' ? (
              <StreamsTreeTable
                loading={streamsListFetch.loading}
                streams={streamsListFetch.value?.streams}
                canReadFailureStore={streamsListFetch.value?.canReadFailureStore}
              />
            ) : (
              <div
                css={css`
                  height: 100%;
                  width: 100%;
                  flex: 1;
                `}
              >
                <StreamsMap
                  loading={streamsListFetch.loading}
                  streams={streamsListFetch.value?.streams}
                  docsByStream={docsByStream}
                  qualityByStream={qualityByStream}
                />
              </div>
            )}
          </>
        )}
      </StreamsAppPageTemplate.Body>
      {isSettingsFlyoutOpen && (
        <StreamsSettingsFlyout
          onClose={() => setIsSettingsFlyoutOpen(false)}
          refreshStreams={streamsListFetch.refresh}
        />
      )}
      {isClassicStreamCreationFlyoutOpen && (
        <ClassicStreamCreationFlyout onClose={() => setIsClassicStreamCreationFlyoutOpen(false)} />
      )}
    </>
  );
}
