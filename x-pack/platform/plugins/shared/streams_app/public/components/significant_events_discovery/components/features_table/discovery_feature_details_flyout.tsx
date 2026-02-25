/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { Feature } from '@kbn/streams-schema';
import React from 'react';
import { FeatureDetailsFlyout } from '../../../stream_detail_systems/stream_features/feature_details_flyout';

/**
 * Discovery-specific feature details flyout with star/unstar functionality.
 * Used only in the Significant Events Discovery > Features tab.
 * The stream advanced settings use the base FeatureDetailsFlyout (with delete, no star).
 */
interface DiscoveryFeatureDetailsFlyoutProps {
  feature: Feature;
  onClose: () => void;
  isStarred: boolean;
  onStarToggle: () => void;
}

export function DiscoveryFeatureDetailsFlyout({
  feature,
  onClose,
  isStarred,
  onStarToggle,
}: DiscoveryFeatureDetailsFlyoutProps) {
  return (
    <FeatureDetailsFlyout
      feature={feature}
      onClose={onClose}
      isStarred={isStarred}
      onStarToggle={onStarToggle}
    />
  );
}
