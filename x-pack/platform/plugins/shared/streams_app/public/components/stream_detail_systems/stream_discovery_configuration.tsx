/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React, { useState, useCallback } from 'react';
import type { Feature, Streams } from '@kbn/streams-schema';
import { useStreamFeatures } from '../../hooks/use_stream_features';
import { StreamFeaturesTable } from './stream_features/stream_features_table';
import type { AIFeatures } from '../../hooks/use_ai_features';

interface StreamDiscoveryConfigurationProps {
  definition: Streams.all.Definition;
  aiFeatures: AIFeatures | null;
}

export function StreamDiscoveryConfiguration({ definition }: StreamDiscoveryConfigurationProps) {
  const { features, refreshFeatures, featuresLoading } = useStreamFeatures(definition);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const onSelectFeature = useCallback((feature: Feature | null) => {
    setSelectedFeature(feature);
  }, []);

  return (
    <StreamFeaturesTable
      definition={definition}
      features={features}
      isLoadingFeatures={featuresLoading}
      refreshFeatures={refreshFeatures}
      isIdentifyingFeatures={false}
      selectedFeature={selectedFeature}
      onSelectFeature={onSelectFeature}
    />
  );
}
