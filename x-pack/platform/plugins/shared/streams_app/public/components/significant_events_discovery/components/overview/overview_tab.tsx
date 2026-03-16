/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { css } from '@emotion/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  EuiAccordion,
  EuiBadge,
  EuiButton,
  EuiCard,
  EuiCodeBlock,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
  EuiLoadingSpinner,
  EuiPanel,
  EuiSpacer,
  EuiStat,
  EuiText,
  EuiTitle,
  useEuiTheme,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import type { Discovery, Recommendation, Suggestion } from '@kbn/streams-schema';
import { useFetchDiscoveryQueries } from '../../../../hooks/use_fetch_discovery_queries';
import { useFetchFeatures } from '../../../../hooks/use_fetch_features';
import { useKibana } from '../../../../hooks/use_kibana';
import { useStreamsAppFetch } from '../../../../hooks/use_streams_app_fetch';
import { useStreamsAppRouter } from '../../../../hooks/use_streams_app_router';
import { MermaidDiagram } from '../topology/topology_tab';
import { SignificantEventsDiscoveryIllustration } from './overview_empty_illustration';

const severityColors: Record<string, 'danger' | 'warning' | 'primary' | 'hollow'> = {
  critical: 'danger',
  high: 'warning',
  medium: 'primary',
  low: 'hollow',
};

const priorityOrder: Record<string, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
};

const typeIcons: Record<string, string> = {
  alert: 'bell',
  dashboard: 'dashboardApp',
  slo: 'visGauge',
  viz: 'visArea',
  investigation: 'folderCheck',
};

const typeLabels: Record<string, string> = {
  alert: 'Alert',
  dashboard: 'Dashboard',
  slo: 'SLO',
  viz: 'Visualization',
  investigation: 'Investigation',
};

// Severity dot colors matching Discovery summary design
const SEVERITY_DOT_COLORS = {
  danger: '#B7293D',
  warning: '#F47B20',
  primary: '#FDC937',
} as const;

const SEVERITY_DOTS_ACCORDION: readonly string[] = [
  SEVERITY_DOT_COLORS.danger,
  SEVERITY_DOT_COLORS.warning,
  SEVERITY_DOT_COLORS.primary,
];

function SeverityDots({ colors }: { colors: readonly string[] }) {
  return (
    <span
      css={css`
        display: inline-flex;
        align-items: center;
        & > span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid #fff;
          box-sizing: border-box;
          flex-shrink: 0;
        }
        & > span + span {
          margin-left: -5px;
        }
      `}
    >
      {colors.map((color, i) => (
        <span
          key={i}
          css={css`
            background-color: ${color};
          `}
        />
      ))}
    </span>
  );
}

const DISCOVERY_SEVERITY_DOTS: Record<string, readonly string[]> = {
  critical: [SEVERITY_DOT_COLORS.danger, SEVERITY_DOT_COLORS.danger, SEVERITY_DOT_COLORS.danger],
  high: [SEVERITY_DOT_COLORS.warning, SEVERITY_DOT_COLORS.warning, SEVERITY_DOT_COLORS.warning],
  medium: [SEVERITY_DOT_COLORS.primary, SEVERITY_DOT_COLORS.primary, SEVERITY_DOT_COLORS.primary],
  low: [SEVERITY_DOT_COLORS.primary, SEVERITY_DOT_COLORS.primary, SEVERITY_DOT_COLORS.primary],
};

const DESCRIPTION_MAX_LENGTH = 150;

function truncateDescription(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen)}...`;
}

interface RankedRecommendation extends Recommendation {
  discoveryTitle: string;
  discoverySeverity: string;
}

export function OverviewTab() {
  const {
    dependencies: {
      start: {
        streams: { streamsRepositoryClient },
      },
    },
  } = useKibana();
  const router = useStreamsAppRouter();
  const { euiTheme } = useEuiTheme();
  const [topDiscoveriesAccordionOpen, setTopDiscoveriesAccordionOpen] = useState(true);
  const [topRecommendationsAccordionOpen, setTopRecommendationsAccordionOpen] = useState(true);
  const [topologyAccordionOpen, setTopologyAccordionOpen] = useState(true);

  const discoveriesFetch = useStreamsAppFetch(
    async ({ signal }) =>
      streamsRepositoryClient.fetch('GET /internal/streams/_discoveries', {
        params: { query: {} },
        signal,
      }),
    [streamsRepositoryClient]
  );

  const suggestionsFetch = useStreamsAppFetch(
    async ({ signal }) =>
      streamsRepositoryClient.fetch('GET /internal/streams/_suggestions', {
        params: { query: {} },
        signal,
      }),
    [streamsRepositoryClient]
  );

  const { data: featuresData, isLoading: featuresLoading, refetch: refetchFeatures } = useFetchFeatures();
  const featuresCount = featuresData?.features?.length ?? 0;

  const { data: queriesData, isLoading: queriesLoading, refetch: refetchQueries } = useFetchDiscoveryQueries({
    page: 1,
    perPage: 1,
  });
  const queriesCount = queriesData?.total ?? 0;

  const [topologyCode, setTopologyCode] = useState<string | null>(null);
  const [topologyLoading, setTopologyLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const loadTopology = async () => {
      try {
        const result = await streamsRepositoryClient.fetch('GET /internal/streams/_topology', {});
        if (!cancelled && result.mermaid) {
          setTopologyCode(result.mermaid);
        }
      } catch {
        // No persisted topology
      } finally {
        if (!cancelled) setTopologyLoading(false);
      }
    };
    loadTopology();
    return () => {
      cancelled = true;
    };
  }, [streamsRepositoryClient]);

  const discoveries = (discoveriesFetch.value ?? []) as Discovery[];
  const suggestions = (suggestionsFetch.value ?? []) as Suggestion[];

  // Top Discoveries: sorted by relevance_score descending (highest relevance first).
  // relevance_score (0-100) is LLM-assigned based on: impact breadth (30%),
  // evidence confidence (25%), novelty (25%), actionability (20%).
  const topDiscoveries = useMemo(
    () =>
      [...discoveries]
        .sort((a, b) => (b.relevance_score ?? 0) - (a.relevance_score ?? 0))
        .slice(0, 3),
    [discoveries]
  );

  // Top Recommendations: collected from all discoveries' embedded recommendations[],
  // sorted by priority (critical > high > medium > low). Each recommendation is
  // tagged with its source discovery for context.
  const { topRecommendations, totalRecommendationsCount } = useMemo(() => {
    const all: RankedRecommendation[] = [];
    for (const d of discoveries) {
      if (d.recommendations) {
        for (const rec of d.recommendations) {
          all.push({
            ...rec,
            discoveryTitle: d.title,
            discoverySeverity: d.severity,
          });
        }
      }
    }
    const sorted = all.sort(
      (a, b) => (priorityOrder[a.priority] ?? 3) - (priorityOrder[b.priority] ?? 3)
    );
    return {
      topRecommendations: sorted.slice(0, 3),
      totalRecommendationsCount: all.length,
    };
  }, [discoveries]);

  // Top Suggestions: sorted by priority (critical > high > medium > low).
  // Priority is derived from the source discovery's severity and relevance_score
  // during Stage 3 of the pipeline.
  const topSuggestions = useMemo(
    () =>
      [...suggestions]
        .sort((a, b) => (priorityOrder[a.priority] ?? 3) - (priorityOrder[b.priority] ?? 3))
        .slice(0, 3),
    [suggestions]
  );

  const pendingSuggestions = suggestions.filter((s) => s.status === 'pending');
  const isLoading =
    discoveriesFetch.loading || suggestionsFetch.loading || featuresLoading || queriesLoading;

  const uniqueStreams = useMemo(() => {
    const streams = new Set<string>();
    for (const d of discoveries) {
      for (const ref of d.stream_refs) {
        streams.add(ref);
      }
    }
    for (const s of suggestions) {
      for (const ref of s.stream_refs) {
        streams.add(ref);
      }
    }
    return streams.size;
  }, [discoveries, suggestions]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await Promise.all([
        discoveriesFetch.refresh(),
        suggestionsFetch.refresh(),
        refetchFeatures(),
        refetchQueries(),
      ]);
    } finally {
      setIsRefreshing(false);
    }
  }, [discoveriesFetch, suggestionsFetch, refetchFeatures, refetchQueries]);

  if (isLoading) {
    return (
      <EuiFlexGroup justifyContent="center" alignItems="center" style={{ minHeight: 300 }}>
        <EuiFlexItem grow={false}>
          <EuiLoadingSpinner size="xl" />
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }

  if (discoveries.length === 0 && suggestions.length === 0) {
    return (
      <EuiEmptyPrompt
        color="plain"
        layout="horizontal"
        css={{
          '.euiEmptyPrompt__icon': {
            maxInlineSize: 'unset !important',
          },
          '.euiEmptyPrompt__actions': {
            flexShrink: 0,
          },
        }}
        icon={<SignificantEventsDiscoveryIllustration />}
        title={
          <h2>
            {i18n.translate('xpack.streams.overview.emptyTitle', {
              defaultMessage: 'Currently no insights detected',
            })}
          </h2>
        }
        body={
          <p>
            {i18n.translate('xpack.streams.overview.emptyDescription', {
              defaultMessage:
                'We are listening for events, it seems your system is currently smoothly currently',
            })}
          </p>
        }
        footer={
          <EuiFlexGroup justifyContent="center">
            <EuiFlexItem grow={false}>
              <EuiButton
                iconType="pause"
                size="m"
                fill
                isLoading
                data-test-subj="streamsOverviewListeningButton"
              >
                {i18n.translate(
                  'xpack.streams.significantEventsDiscovery.runDiscoveryButton',
                  { defaultMessage: 'Listening for events' }
                )}
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        }
      />
    );
  }

  return (
    <EuiFlexGroup
      direction="column"
      gutterSize="none"
      css={css`
        gap: 12px;
      `}
    >
      {/* Refresh button */}
      <EuiFlexItem grow={false}>
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton
              iconType="refresh"
              onClick={handleRefresh}
              isLoading={isRefreshing}
              isDisabled={isRefreshing}
              size="s"
            >
              {i18n.translate('xpack.streams.overview.refreshButton', {
                defaultMessage: 'Refresh',
              })}
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>

      {/* Summary stats */}
      <EuiFlexItem grow={false}>
        <EuiFlexGroup
          gutterSize="none"
          css={css`
            gap: 12px;
          `}
        >
          <EuiFlexItem>
            <EuiPanel hasBorder paddingSize="l">
              <EuiStat
                title={discoveries.length}
                description={i18n.translate('xpack.streams.overview.totalDiscoveries', {
                  defaultMessage: 'Discoveries',
                })}
                titleColor="primary"
              />
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel hasBorder paddingSize="l">
              <EuiStat
                title={`${suggestions.length} / ${pendingSuggestions.length}`}
                description={i18n.translate('xpack.streams.overview.suggestionsAndPending', {
                  defaultMessage: 'Suggestions / pending review',
                })}
                titleColor="accent"
              />
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel hasBorder paddingSize="l">
              <EuiStat
                title={featuresCount}
                description={i18n.translate('xpack.streams.overview.totalFeatures', {
                  defaultMessage: 'Knowledge Indicators',
                })}
                titleColor="subdued"
              />
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel hasBorder paddingSize="l">
              <EuiStat
                title={queriesCount}
                description={i18n.translate('xpack.streams.overview.totalQueries', {
                  defaultMessage: 'Rules',
                })}
                titleColor="subdued"
              />
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel hasBorder paddingSize="l">
              <EuiStat
                title={uniqueStreams}
                description={i18n.translate('xpack.streams.overview.streamsAnalyzed', {
                  defaultMessage: 'Streams analyzed',
                })}
                titleColor="subdued"
              />
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>

      {/* Top Discoveries */}
      {topDiscoveries.length > 0 && (() => {
        const panelStyles = {
          gradientBorder:
            'linear-gradient(90deg, rgba(217, 232, 255, 0.3) 17%, rgba(236, 226, 254, 0.3) 83%)',
          gradientBackground:
            'linear-gradient(90deg, rgba(217, 232, 255, 0.3) 17%, rgba(236, 226, 254, 0.3) 83%)',
          separatorColor: euiTheme.border.color,
          discoveriesBadgeBg: '#FFDAD6',
        };
        const extraActionContent = (
          <div onClick={(e) => e.stopPropagation()} role="presentation">
            <EuiFlexGroup alignItems="center" gutterSize="none" responsive={false}>
              <EuiFlexItem grow={false}>
                <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                  <EuiText size="xs" color="subdued">
                    {i18n.translate('xpack.streams.overview.discoveries', {
                      defaultMessage: 'Discoveries',
                    })}
                  </EuiText>
                  <EuiBadge
                    color="hollow"
                    css={css`
                      background-color: ${panelStyles.discoveriesBadgeBg};
                      color: ${euiTheme.colors.text};
                    `}
                  >
                    {discoveries.length}
                  </EuiBadge>
                </EuiFlexGroup>
              </EuiFlexItem>
              <EuiFlexItem
                grow={false}
                css={css`
                  width: 1px;
                  height: 16px;
                  margin: 0 ${euiTheme.size.m};
                  background-color: ${panelStyles.separatorColor};
                `}
              />
              <EuiFlexItem grow={false}>
                <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                  <EuiText size="xs" color="subdued">
                    {i18n.translate('xpack.streams.overview.severity', {
                      defaultMessage: 'Severity',
                    })}
                  </EuiText>
                  <SeverityDots colors={SEVERITY_DOTS_ACCORDION} />
                </EuiFlexGroup>
              </EuiFlexItem>
              <EuiFlexItem
                grow={false}
                css={css`
                  width: 1px;
                  height: 16px;
                  margin: 0 ${euiTheme.size.m};
                  background-color: ${panelStyles.separatorColor};
                `}
              />
              <EuiFlexItem grow={false}>
                <EuiLink href={router.link('/_discovery/{tab}', { path: { tab: 'discoveries' } })}>
                  {i18n.translate('xpack.streams.overview.viewAll', {
                    defaultMessage: 'View all',
                  })}
                </EuiLink>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
        );
        return (
          <EuiFlexItem grow={false}>
            <div
              css={css`
                border-radius: 6px;
                overflow: hidden;
                background-color: #ffffff;
                border: 1px solid transparent;
                background-image: ${panelStyles.gradientBackground}, ${panelStyles.gradientBorder};
                background-origin: padding-box, border-box;
                background-clip: padding-box, border-box;
              `}
            >
              <EuiPanel
                hasBorder={false}
                hasShadow={false}
                paddingSize="none"
                css={css`
                  padding: 8px;
                  background: transparent !important;
                `}
              >
                <EuiAccordion
                  id="top-discoveries-accordion"
                  buttonContent={
                    <EuiText size="xs">
                      <strong>
                        {i18n.translate('xpack.streams.overview.topDiscoveries', {
                          defaultMessage: 'Top Discoveries',
                        })}
                      </strong>
                    </EuiText>
                  }
                  initialIsOpen={true}
                  forceState={topDiscoveriesAccordionOpen ? 'open' : 'closed'}
                  onToggle={() => setTopDiscoveriesAccordionOpen(!topDiscoveriesAccordionOpen)}
                  extraAction={extraActionContent}
                >
                  <EuiSpacer size="s" />
                  <EuiFlexGroup
                    gutterSize="none"
                    wrap
                    css={css`
                      gap: 12px;
                    `}
                  >
                    {topDiscoveries.map((d) => (
                      <EuiFlexItem key={d.uuid} css={css({ minWidth: 280, flex: '1 1 280px' })}>
                        <EuiCard
                          paddingSize="m"
                          title=""
                          description=""
                          display="plain"
                          hasBorder={false}
                          css={css`
                            padding: 12px;
                            min-height: 120px;
                            background: #ffffff !important;
                            border: 1px solid ${euiTheme.border.color};
                            border-radius: 4px;
                            .euiCard__content {
                              padding-top: 0;
                            }
                          `}
                        >
                          <EuiFlexGroup direction="column" gutterSize="s">
                            <EuiFlexGroup
                              justifyContent="spaceBetween"
                              alignItems="center"
                              gutterSize="s"
                              responsive={false}
                              wrap
                            >
                              <EuiFlexItem grow={false}>
                                <EuiBadge color={severityColors[d.severity] ?? 'hollow'}>
                                  {d.severity}
                                </EuiBadge>
                              </EuiFlexItem>
                              <EuiFlexItem grow={false}>
                                <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                                  <EuiText size="xs" color="subdued">
                                    {i18n.translate('xpack.streams.overview.relevance', {
                                      defaultMessage: 'Relevance: {score}',
                                      values: { score: d.relevance_score },
                                    })}
                                  </EuiText>
                                  <SeverityDots
                                    colors={
                                      DISCOVERY_SEVERITY_DOTS[d.severity] ??
                                      DISCOVERY_SEVERITY_DOTS.low
                                    }
                                  />
                                </EuiFlexGroup>
                              </EuiFlexItem>
                            </EuiFlexGroup>
                            <EuiText size="s" textAlign="left">
                              <strong>{d.title}</strong>
                            </EuiText>
                            <EuiText size="xs" color="subdued" textAlign="left">
                              {truncateDescription(d.description, DESCRIPTION_MAX_LENGTH)}
                            </EuiText>
                            {d.stream_refs.length > 0 && (
                              <EuiFlexItem grow={false} css={css({ alignSelf: 'flex-start' })}>
                                <EuiFlexGroup gutterSize="xs" wrap responsive={false}>
                                  {d.stream_refs.slice(0, 2).map((ref) => (
                                    <EuiFlexItem grow={false} key={ref}>
                                      <EuiBadge color="hollow">{ref}</EuiBadge>
                                    </EuiFlexItem>
                                  ))}
                                  {d.stream_refs.length > 2 && (
                                    <EuiFlexItem grow={false}>
                                      <EuiText size="xs" color="subdued">
                                        +{d.stream_refs.length - 2}
                                      </EuiText>
                                    </EuiFlexItem>
                                  )}
                                </EuiFlexGroup>
                              </EuiFlexItem>
                            )}
                          </EuiFlexGroup>
                        </EuiCard>
                      </EuiFlexItem>
                    ))}
                  </EuiFlexGroup>
                </EuiAccordion>
              </EuiPanel>
            </div>
          </EuiFlexItem>
        );
      })()}

      {/* Top Recommendations */}
      {topRecommendations.length > 0 &&
        (() => {
          const panelStyles = {
            gradientBorder:
              'linear-gradient(90deg, rgba(217, 232, 255, 0.3) 17%, rgba(236, 226, 254, 0.3) 83%)',
            gradientBackground:
              'linear-gradient(90deg, rgba(217, 232, 255, 0.3) 17%, rgba(236, 226, 254, 0.3) 83%)',
            separatorColor: euiTheme.border.color,
            recommendationsBadgeBg: '#FFDAD6',
          };
          const extraActionContent = (
            <div onClick={(e) => e.stopPropagation()} role="presentation">
              <EuiFlexGroup alignItems="center" gutterSize="none" responsive={false}>
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                    <EuiText size="xs" color="subdued">
                      {i18n.translate('xpack.streams.overview.recommendations', {
                        defaultMessage: 'Recommendations',
                      })}
                    </EuiText>
                    <EuiBadge
                      color="hollow"
                      css={css`
                        background-color: ${panelStyles.recommendationsBadgeBg};
                        color: ${euiTheme.colors.text};
                      `}
                    >
                      {totalRecommendationsCount}
                    </EuiBadge>
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem
                  grow={false}
                  css={css`
                    width: 1px;
                    height: 16px;
                    margin: 0 ${euiTheme.size.m};
                    background-color: ${panelStyles.separatorColor};
                  `}
                />
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                    <EuiText size="xs" color="subdued">
                      {i18n.translate('xpack.streams.overview.priority', {
                        defaultMessage: 'Priority',
                      })}
                    </EuiText>
                    <SeverityDots colors={SEVERITY_DOTS_ACCORDION} />
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem
                  grow={false}
                  css={css`
                    width: 1px;
                    height: 16px;
                    margin: 0 ${euiTheme.size.m};
                    background-color: ${panelStyles.separatorColor};
                  `}
                />
                <EuiFlexItem grow={false}>
                  <EuiLink href={router.link('/_discovery/{tab}', { path: { tab: 'discoveries' } })}>
                    {i18n.translate('xpack.streams.overview.viewAll', {
                      defaultMessage: 'View all',
                    })}
                  </EuiLink>
                </EuiFlexItem>
              </EuiFlexGroup>
            </div>
          );
          return (
            <EuiFlexItem grow={false}>
              <div
                css={css`
                  border-radius: 6px;
                  overflow: hidden;
                  background-color: #ffffff;
                  border: 1px solid transparent;
                  background-image: ${panelStyles.gradientBackground}, ${panelStyles.gradientBorder};
                  background-origin: padding-box, border-box;
                  background-clip: padding-box, border-box;
                `}
              >
                <EuiPanel
                  hasBorder={false}
                  hasShadow={false}
                  paddingSize="none"
                  css={css`
                    padding: 8px;
                    background: transparent !important;
                  `}
                >
                  <EuiAccordion
                    id="top-recommendations-accordion"
                    buttonContent={
                      <EuiText size="xs">
                        <strong>
                          {i18n.translate('xpack.streams.overview.topRecommendations', {
                            defaultMessage: 'Top Recommendations',
                          })}
                        </strong>
                      </EuiText>
                    }
                    initialIsOpen={true}
                    forceState={topRecommendationsAccordionOpen ? 'open' : 'closed'}
                    onToggle={() =>
                      setTopRecommendationsAccordionOpen(!topRecommendationsAccordionOpen)
                    }
                    extraAction={extraActionContent}
                  >
                    <EuiSpacer size="s" />
                    <EuiFlexGroup
                      gutterSize="none"
                      wrap
                      css={css`
                        gap: 12px;
                      `}
                    >
                      {topRecommendations.map((rec, idx) => (
                        <EuiFlexItem key={idx} css={css({ minWidth: 280, flex: '1 1 280px' })}>
                          <EuiCard
                            paddingSize="m"
                            title=""
                            description=""
                            display="plain"
                            hasBorder={false}
                            css={css`
                              padding: 12px;
                              min-height: 120px;
                              background: #ffffff !important;
                              border: 1px solid ${euiTheme.border.color};
                              border-radius: 4px;
                              .euiCard__content {
                                padding-top: 0;
                              }
                            `}
                          >
                            <EuiFlexGroup direction="column" gutterSize="s">
                              <EuiFlexGroup
                                justifyContent="spaceBetween"
                                alignItems="center"
                                gutterSize="s"
                                responsive={false}
                                wrap
                              >
                                <EuiFlexItem grow={false}>
                                  <EuiBadge color={severityColors[rec.priority] ?? 'hollow'}>
                                    {rec.priority}
                                  </EuiBadge>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                  <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                                    <EuiText size="xs" color="subdued">
                                      {i18n.translate('xpack.streams.overview.stepsCount', {
                                        defaultMessage: '{count} {count, plural, one {step} other {steps}}',
                                        values: { count: rec.steps.length },
                                      })}
                                    </EuiText>
                                    <SeverityDots
                                      colors={
                                        DISCOVERY_SEVERITY_DOTS[rec.priority] ??
                                        DISCOVERY_SEVERITY_DOTS.low
                                      }
                                    />
                                  </EuiFlexGroup>
                                </EuiFlexItem>
                              </EuiFlexGroup>
                              <EuiText size="s" textAlign="left">
                                <strong>{rec.title}</strong>
                              </EuiText>
                              <EuiText size="xs" color="subdued" textAlign="left">
                                {truncateDescription(rec.description, DESCRIPTION_MAX_LENGTH)}
                              </EuiText>
                              <EuiFlexItem grow={false} css={css({ alignSelf: 'flex-start' })}>
                                <EuiText size="xs" color="subdued">
                                  {i18n.translate('xpack.streams.overview.fromDiscovery', {
                                    defaultMessage: 'From: {title}',
                                    values: {
                                      title: truncateDescription(rec.discoveryTitle, 40),
                                    },
                                  })}
                                </EuiText>
                              </EuiFlexItem>
                            </EuiFlexGroup>
                          </EuiCard>
                        </EuiFlexItem>
                      ))}
                    </EuiFlexGroup>
                  </EuiAccordion>
                </EuiPanel>
              </div>
            </EuiFlexItem>
          );
        })()}

      {/* Top Suggestions */}
      {topSuggestions.length > 0 && (
        <EuiFlexItem grow={false}>
          <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiTitle size="s">
                <h3>
                  <EuiIcon type="editorCodeBlock" />{' '}
                  {i18n.translate('xpack.streams.overview.topSuggestions', {
                    defaultMessage: 'Top Suggestions',
                  })}
                </h3>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiLink
                href={router.link('/_discovery/{tab}', { path: { tab: 'suggestions' } })}
              >
                {i18n.translate('xpack.streams.overview.viewAllSuggestions', {
                  defaultMessage: 'View all ({count})',
                  values: { count: suggestions.length },
                })}
              </EuiLink>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="s" />
          <EuiFlexGroup
            gutterSize="none"
            css={css`
              gap: 12px;
            `}
          >
            {topSuggestions.map((s) => (
              <EuiFlexItem key={s.uuid}>
                <EuiCard
                  layout="horizontal"
                  titleSize="xs"
                  title={
                    <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                      <EuiFlexItem grow={false}>
                        <EuiIcon type={typeIcons[s.type] ?? 'document'} />
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiBadge color={severityColors[s.priority] ?? 'hollow'}>
                          {s.priority}
                        </EuiBadge>
                      </EuiFlexItem>
                      <EuiFlexItem>{s.title}</EuiFlexItem>
                    </EuiFlexGroup>
                  }
                  description=""
                  paddingSize="m"
                  hasBorder
                >
                  {s.esql_query && (
                    <EuiCodeBlock
                      language="esql"
                      paddingSize="s"
                      fontSize="s"
                      overflowHeight={60}
                      isCopyable
                    >
                      {s.esql_query}
                    </EuiCodeBlock>
                  )}
                  <EuiSpacer size="xs" />
                  <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
                    <EuiFlexItem grow={false}>
                      <EuiBadge>{typeLabels[s.type] ?? s.type}</EuiBadge>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiBadge
                        color={
                          s.status === 'accepted'
                            ? 'success'
                            : s.status === 'dismissed'
                            ? 'danger'
                            : 'default'
                        }
                      >
                        {s.status}
                      </EuiBadge>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiCard>
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
        </EuiFlexItem>
      )}

      {/* Topology */}
      <EuiFlexItem grow={false}>
        <EuiAccordion
          id="topology-accordion"
          buttonContent={
            <EuiText size="xs">
              <strong>
                <EuiIcon type="visVega" css={css` margin-right: 4px; `} />
                {i18n.translate('xpack.streams.overview.topology', {
                  defaultMessage: 'Topology',
                })}
              </strong>
            </EuiText>
          }
          initialIsOpen={true}
          forceState={topologyAccordionOpen ? 'open' : 'closed'}
          onToggle={() => setTopologyAccordionOpen(!topologyAccordionOpen)}
          extraAction={
            <EuiLink href={router.link('/_discovery/{tab}', { path: { tab: 'topology' } })}>
              {i18n.translate('xpack.streams.overview.viewTopology', {
                defaultMessage: 'View full topology',
              })}
            </EuiLink>
          }
        >
          <EuiSpacer size="s" />
          {topologyLoading ? (
            <EuiFlexGroup justifyContent="center" alignItems="center" style={{ minHeight: 100 }}>
              <EuiFlexItem grow={false}>
                <EuiLoadingSpinner size="l" />
              </EuiFlexItem>
            </EuiFlexGroup>
          ) : topologyCode ? (
            <MermaidDiagram code={topologyCode} />
          ) : (
            <EuiPanel color="subdued" paddingSize="l">
              <EuiText size="s" color="subdued" textAlign="center">
                {i18n.translate('xpack.streams.overview.noTopology', {
                  defaultMessage:
                    'No topology diagram generated yet. Go to the Topology tab to generate one.',
                })}
              </EuiText>
            </EuiPanel>
          )}
        </EuiAccordion>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
