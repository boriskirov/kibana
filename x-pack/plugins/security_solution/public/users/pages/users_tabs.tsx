/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { memo, useCallback } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from '@kbn/kibana-react-plugin/public';

import type { UsersTabsProps } from './types';
import { UsersTableType } from '../store/model';
import { USERS_PATH } from '../../../common/constants';
import { AllUsersQueryTabBody, AuthenticationsQueryTabBody } from './navigation';
import { AnomaliesQueryTabBody } from '../../common/containers/anomalies/anomalies_query_tab_body';
import { AnomaliesUserTable } from '../../common/components/ml/tables/anomalies_user_table';
import type { Anomaly } from '../../common/components/ml/types';
import { scoreIntervalToDateTime } from '../../common/components/ml/score/score_interval_to_datetime';
import type { UpdateDateRange } from '../../common/components/charts/common';

import { UserRiskScoreQueryTabBody } from './navigation/user_risk_score_tab_body';
import { EventsQueryTabBody } from '../../common/components/events_tab';
import { TimelineId } from '../../../common/types';

export const UsersTabs = memo<UsersTabsProps>(
  ({
    deleteQuery,
    filterQuery,
    pageFilters,
    from,
    indexNames,
    isInitializing,
    setQuery,
    to,
    type,
    setAbsoluteRangeDatePicker,
  }) => {
    const narrowDateRange = useCallback(
      (score: Anomaly, interval: string) => {
        const fromTo = scoreIntervalToDateTime(score, interval);
        setAbsoluteRangeDatePicker({
          id: 'global',
          from: fromTo.from,
          to: fromTo.to,
        });
      },
      [setAbsoluteRangeDatePicker]
    );

    const updateDateRange = useCallback<UpdateDateRange>(
      ({ x }) => {
        if (!x) {
          return;
        }
        const [min, max] = x;
        setAbsoluteRangeDatePicker({
          id: 'global',
          from: new Date(min).toISOString(),
          to: new Date(max).toISOString(),
        });
      },
      [setAbsoluteRangeDatePicker]
    );

    const tabProps = {
      deleteQuery,
      endDate: to,
      filterQuery,
      indexNames,
      skip: isInitializing || filterQuery === undefined,
      setQuery,
      startDate: from,
      type,
      narrowDateRange,
      updateDateRange,
    };

    return (
      <Switch>
        <Route path={`${USERS_PATH}/:tabName(${UsersTableType.allUsers})`}>
          <AllUsersQueryTabBody {...tabProps} />
        </Route>
        <Route path={`${USERS_PATH}/:tabName(${UsersTableType.authentications})`}>
          <AuthenticationsQueryTabBody {...tabProps} />
        </Route>
        <Route path={`${USERS_PATH}/:tabName(${UsersTableType.anomalies})`}>
          <AnomaliesQueryTabBody {...tabProps} AnomaliesTableComponent={AnomaliesUserTable} />
        </Route>
        <Route path={`${USERS_PATH}/:tabName(${UsersTableType.risk})`}>
          <UserRiskScoreQueryTabBody {...tabProps} />
        </Route>
        <Route path={`${USERS_PATH}/:tabName(${UsersTableType.events})`}>
          <EventsQueryTabBody
            {...tabProps}
            pageFilters={pageFilters}
            timelineId={TimelineId.usersPageEvents}
          />
        </Route>
      </Switch>
    );
  }
);

UsersTabs.displayName = 'UsersTabs';
