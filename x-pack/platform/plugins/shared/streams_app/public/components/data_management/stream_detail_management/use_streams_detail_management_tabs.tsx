/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { i18n } from '@kbn/i18n';
import { Streams } from '@kbn/streams-schema';
import React from 'react';
import { useStreamsPrivileges } from '../../../hooks/use_streams_privileges';
import { useAIFeatures } from '../../../hooks/use_ai_features';
import { StreamDetailSignificantEventsView } from '../../stream_detail_significant_events_view';
import { StreamDetailEnrichment } from '../stream_detail_enrichment';
import { StreamDiscoveryConfiguration } from '../../stream_detail_systems/stream_discovery_configuration';

export function useStreamsDetailManagementTabs({
  definition,
  refreshDefinition,
}: {
  definition: Streams.all.GetResponse;
  refreshDefinition: () => void;
}) {
  const {
    features: { significantEvents },
    isLoading,
  } = useStreamsPrivileges();
  const aiFeatures = useAIFeatures();

  const isSignificantEventsEnabled = !!significantEvents?.enabled;
  const isProcessingEnabled = Streams.ingest.all.GetResponse.is(definition);

  return {
    isLoading,
    ...(isProcessingEnabled && {
      processing: {
        content: (
          <StreamDetailEnrichment definition={definition} refreshDefinition={refreshDefinition} />
        ),
        label: i18n.translate('xpack.streams.streamDetailView.processingTab', {
          defaultMessage: 'Processing',
        }),
      },
    }),
    ...(isSignificantEventsEnabled
      ? {
          knowledgeIndicators: {
            content: (
              <StreamDiscoveryConfiguration
                definition={definition.stream}
                aiFeatures={aiFeatures}
              />
            ),
            label: i18n.translate('xpack.streams.streamDetailView.knowledgeIndicatorsTab', {
              defaultMessage: 'Knowledge indicators',
            }),
          },
          significantEvents: {
            content: <StreamDetailSignificantEventsView definition={definition} />,
            label: i18n.translate('xpack.streams.streamDetailView.significantEventsTab', {
              defaultMessage: 'Rules',
            }),
          },
        }
      : {}),
  };
}
