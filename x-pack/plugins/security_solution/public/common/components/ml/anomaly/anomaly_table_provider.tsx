/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import type { InfluencerInput, Anomalies, CriteriaFields } from '../types';
import { useAnomaliesTableData } from './use_anomalies_table_data';

interface ChildrenArgs {
  isLoadingAnomaliesData: boolean;
  anomaliesData: Anomalies | null;
}

interface Props {
  influencers?: InfluencerInput[];
  startDate: string;
  endDate: string;
  criteriaFields?: CriteriaFields[];
  children: (args: ChildrenArgs) => React.ReactNode;
  skip: boolean;
}

export const AnomalyTableProvider = React.memo<Props>(
  ({ influencers, startDate, endDate, children, criteriaFields, skip }) => {
    const [isLoadingAnomaliesData, anomaliesData] = useAnomaliesTableData({
      criteriaFields,
      influencers,
      startDate,
      endDate,
      skip,
    });
    return <>{children({ isLoadingAnomaliesData, anomaliesData })}</>;
  }
);

AnomalyTableProvider.displayName = 'AnomalyTableProvider';
