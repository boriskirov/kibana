/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  EuiBadge,
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingElastic,
  useEuiTheme,
} from '@elastic/eui';
import { css } from '@emotion/react';
import { i18n } from '@kbn/i18n';
import React from 'react';
import { useStreamsAppBreadcrumbs } from '../../hooks/use_streams_app_breadcrumbs';
import { useStreamsAppParams } from '../../hooks/use_streams_app_params';
import { useStreamsAppRouter } from '../../hooks/use_streams_app_router';
import { useStreamsPrivileges } from '../../hooks/use_streams_privileges';
import { useUnbackedQueriesCount } from '../../hooks/use_unbacked_queries_count';
import { FeedbackButton } from '../feedback_button';
import { RedirectTo } from '../redirect_to';
import { StreamsAppPageTemplate } from '../streams_app_page_template';
import { FeaturesTable } from './components/features_table/features_table';
import { QueriesTable } from './components/queries_table/queries_table';
import { StreamsView } from './components/streams_view/streams_view';
import { DiscoveriesTab } from './components/discoveries/tab';
import { SuggestionsTab } from './components/suggestions/suggestions_tab';
import { TopologyTab } from './components/topology/topology_tab';
import { SettingsPage } from './components/settings/settings_page';
import { OverviewTab } from './components/overview/overview_tab';

const discoveryTabs = [
  'overview',
  'streams',
  'features',
  'queries',
  'discoveries',
  'suggestions',
  'topology',
  'settings',
] as const;
type DiscoveryTab = (typeof discoveryTabs)[number];

const CONFIGURE_TABS: DiscoveryTab[] = [
  'streams',
  'features',
  'queries',
  'discoveries',
  'suggestions',
  'topology',
  'settings',
];

function isValidDiscoveryTab(value: string): value is DiscoveryTab {
  return discoveryTabs.includes(value as DiscoveryTab);
}

export function SignificantEventsDiscoveryPage() {
  const {
    path: { tab },
  } = useStreamsAppParams('/_discovery/{tab}');

  const router = useStreamsAppRouter();

  const {
    features: { significantEventsDiscovery },
  } = useStreamsPrivileges();
  const { euiTheme } = useEuiTheme();
  const { count: unbackedQueriesCount, refetch } = useUnbackedQueriesCount();

  useStreamsAppBreadcrumbs(() => {
    return [
      {
        title: i18n.translate('xpack.streams.significantEventsDiscovery.breadcrumbTitle', {
          defaultMessage: 'Significant events',
        }),
        path: '/_discovery',
      },
    ];
  }, []);

  if (significantEventsDiscovery === undefined) {
    return <EuiLoadingElastic size="xxl" />;
  }

  if (!significantEventsDiscovery.available || !significantEventsDiscovery.enabled) {
    return <RedirectTo path="/" />;
  }

  if (!isValidDiscoveryTab(tab)) {
    return <RedirectTo path="/_discovery/{tab}" params={{ path: { tab: 'overview' } }} />;
  }

  const isOverview = tab === 'overview';
  const overviewHref = router.link('/_discovery/{tab}', { path: { tab: 'overview' } });
  const firstConfigureHref = router.link('/_discovery/{tab}', { path: { tab: 'streams' } });

  const configureTabs = [
    {
      id: 'streams',
      label: i18n.translate('xpack.streams.significantEventsDiscovery.streamsTab', {
        defaultMessage: 'Streams',
      }),
      href: router.link('/_discovery/{tab}', { path: { tab: 'streams' } }),
      isSelected: tab === 'streams',
    },
    {
      id: 'features',
      label: i18n.translate('xpack.streams.significantEventsDiscovery.featuresTab', {
        defaultMessage: 'Knowledge Indicators',
      }),
      href: router.link('/_discovery/{tab}', { path: { tab: 'features' } }),
      isSelected: tab === 'features',
    },
    {
      id: 'queries',
      label: (
        <EuiFlexGroup alignItems="center" gutterSize="xs" responsive={false} wrap={false}>
          <EuiFlexItem grow={false}>
            {i18n.translate('xpack.streams.significantEventsDiscovery.queriesTab', {
              defaultMessage: 'Rules',
            })}
          </EuiFlexItem>
          {unbackedQueriesCount > 0 && (
            <EuiFlexItem grow={false}>
              <EuiBadge color="accent">{unbackedQueriesCount}</EuiBadge>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      ),
      href: router.link('/_discovery/{tab}', { path: { tab: 'queries' } }),
      isSelected: tab === 'queries',
    },
    {
      id: 'discoveries',
      label: i18n.translate('xpack.streams.significantEventsDiscovery.discoveriesTab', {
        defaultMessage: 'Discoveries',
      }),
      href: router.link('/_discovery/{tab}', { path: { tab: 'discoveries' } }),
      isSelected: tab === 'discoveries',
    },
    {
      id: 'suggestions',
      label: i18n.translate('xpack.streams.significantEventsDiscovery.suggestionsTab', {
        defaultMessage: 'Suggestions',
      }),
      href: router.link('/_discovery/{tab}', { path: { tab: 'suggestions' } }),
      isSelected: tab === 'suggestions',
    },
    {
      id: 'topology',
      label: i18n.translate('xpack.streams.significantEventsDiscovery.topologyTab', {
        defaultMessage: 'Topology',
      }),
      href: router.link('/_discovery/{tab}', { path: { tab: 'topology' } }),
      isSelected: tab === 'topology',
    },
    {
      id: 'settings',
      label: i18n.translate('xpack.streams.significantEventsDiscovery.settingsTab', {
        defaultMessage: 'Settings',
      }),
      href: router.link('/_discovery/{tab}', { path: { tab: 'settings' } }),
      isSelected: tab === 'settings',
    },
  ];

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
            <EuiFlexItem grow={false}>
              <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                {!isOverview && (
                  <EuiFlexItem grow={false}>
                    <EuiButtonEmpty
                      iconType="arrowLeft"
                      size="xs"
                      href={overviewHref}
                      flush="left"
                    />
                  </EuiFlexItem>
                )}
                <EuiFlexItem grow={false}>
                  {i18n.translate('xpack.streams.significantEventsDiscovery.pageHeaderTitle', {
                    defaultMessage: 'Significant events',
                  })}
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                {isOverview && (
                  <>
                    <EuiFlexItem grow={false}>
                      <EuiButton
                        iconType="play"
                        size="s"
                      >
                        {i18n.translate(
                          'xpack.streams.significantEventsDiscovery.runDiscoveryButton',
                          { defaultMessage: 'Run a Discovery' }
                        )}
                      </EuiButton>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiButtonEmpty
                        iconType="gear"
                        size="s"
                        color="text"
                        href={firstConfigureHref}
                      >
                        {i18n.translate(
                          'xpack.streams.significantEventsDiscovery.settingsButton',
                          { defaultMessage: 'Settings' }
                        )}
                      </EuiButtonEmpty>
                    </EuiFlexItem>
                  </>
                )}
                <EuiFlexItem grow={false}>
                  <FeedbackButton />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        }
        tabs={isOverview ? undefined : configureTabs}
      />
      <StreamsAppPageTemplate.Body grow>
        {isOverview && <OverviewTab />}
        {CONFIGURE_TABS.includes(tab as DiscoveryTab) && (
          <>
            {tab === 'streams' && <StreamsView refreshUnbackedQueriesCount={refetch} />}
            {tab === 'features' && <FeaturesTable />}
            {tab === 'queries' && <QueriesTable />}
            {tab === 'discoveries' && <DiscoveriesTab />}
            {tab === 'suggestions' && <SuggestionsTab />}
            {tab === 'topology' && <TopologyTab />}
            {tab === 'settings' && <SettingsPage />}
          </>
        )}
      </StreamsAppPageTemplate.Body>
    </>
  );
}
