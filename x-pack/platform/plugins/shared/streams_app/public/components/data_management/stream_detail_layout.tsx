/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { css } from '@emotion/react';
import { i18n } from '@kbn/i18n';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useStreamsAppParams } from '../../hooks/use_streams_app_params';
import { useStreamsAppRouter } from '../../hooks/use_streams_app_router';
import { useStreamsPrivileges } from '../../hooks/use_streams_privileges';
import { useTimeRange } from '../../hooks/use_time_range';
import { StreamsAppPageTemplate } from '../streams_app_page_template';

export function StreamDetailLayout({ children }: { children: React.ReactNode }) {
  const router = useStreamsAppRouter();
  const { path: { key } = { key: '' } } = useStreamsAppParams('/{key}', true);
  const { rangeFrom, rangeTo } = useTimeRange();
  const location = useLocation();
  const {
    features: { significantEvents },
  } = useStreamsPrivileges();

  const isSignificantEvents = location.pathname.includes('/significant-events');

  const streamSectionTabs = [
    {
      id: 'streams',
      label: i18n.translate('xpack.streams.streamDetailLayout.streamsTab', {
        defaultMessage: 'Streams',
      }),
      href: router.link('/{key}/management/{tab}', {
        path: { key, tab: 'retention' },
        query: { rangeFrom, rangeTo },
      }),
      isSelected: !isSignificantEvents,
    },
    ...(significantEvents?.enabled
      ? [
          {
            id: 'significant-events',
            label: i18n.translate('xpack.streams.streamDetailLayout.significantEventsTab', {
              defaultMessage: 'Significant events',
            }),
            href: router.link('/{key}/significant-events', {
              path: { key },
              query: { rangeFrom, rangeTo },
            }),
            isSelected: isSignificantEvents,
          },
        ]
      : []),
  ];

  if (streamSectionTabs.length <= 1) {
    return <>{children}</>;
  }

  return (
    <>
      <StreamsAppPageTemplate.Header
        paddingSize="s"
        bottomBorder="extended"
        css={css`
          .euiPageHeaderContent > .euiFlexGroup:first-of-type {
            margin-bottom: 0;
          }
        `}
        tabs={streamSectionTabs.map(({ id, label, href, isSelected }) => ({
          label,
          href,
          isSelected,
        }))}
      />
      {children}
    </>
  );
}
