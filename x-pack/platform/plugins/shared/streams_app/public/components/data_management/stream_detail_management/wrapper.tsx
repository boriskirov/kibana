/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  EuiBadgeGroup,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
  EuiPopover,
  EuiTab,
  EuiTabs,
  EuiText,
  EuiTitle,
  EuiToolTip,
  EuiTourStep,
  useEuiTheme,
} from '@elastic/eui';
import { css } from '@emotion/react';
import { DatasetQualityIndicator } from '@kbn/dataset-quality-plugin/public';
import { i18n } from '@kbn/i18n';
import { Streams, isDescendantOf, getSegments } from '@kbn/streams-schema';
import type { ReactNode } from 'react';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import useAsync from 'react-use/lib/useAsync';
import { useKibana } from '../../../hooks/use_kibana';
import { useStreamsAppFetch } from '../../../hooks/use_streams_app_fetch';
import { useStreamDetail } from '../../../hooks/use_stream_detail';
import { useStreamsAppRouter } from '../../../hooks/use_streams_app_router';
import { useStreamDocCountsFetch } from '../../../hooks/use_streams_doc_counts_fetch';
import { useTimeRange } from '../../../hooks/use_time_range';
import { calculateDataQuality } from '../../../util/calculate_data_quality';
import { FeedbackButton } from '../../feedback_button';
import {
  ClassicStreamBadge,
  DiscoverBadgeButton,
  LifecycleBadge,
  WiredStreamBadge,
} from '../../stream_badges';
import { StreamsAppPageTemplate } from '../../streams_app_page_template';
import type { StreamListItem } from '../../streams_list';
import { StreamsSettingsFlyout } from '../../stream_list_view/streams_settings_flyout';
import { TAB_TO_TOUR_STEP_ID, useStreamsTour } from '../../streams_tour';

export type ManagementTabs = Record<
  string,
  {
    content: JSX.Element;
    label: ReactNode;
  }
>;

// Simplified tree structure for sidebar
interface TreeNode {
  name: string;
  isWired: boolean;
  children: TreeNode[];
}

function buildTree(items: StreamListItem[]): TreeNode[] {
  const trees: TreeNode[] = [];
  const sortedItems = items
    .slice()
    .sort((a, b) => getSegments(a.stream.name).length - getSegments(b.stream.name).length);

  sortedItems.forEach((item) => {
    let currentTree = trees;
    let existingNode: TreeNode | undefined;
    while ((existingNode = currentTree.find((node) => isDescendantOf(node.name, item.stream.name)))) {
      currentTree = existingNode.children;
    }
    if (!existingNode) {
      currentTree.push({
        name: item.stream.name,
        isWired: Streams.WiredStream.Definition.is(item.stream),
        children: [],
      });
    }
  });

  return trees;
}

function SidebarTreeNode({
  node,
  collapsed,
  setCollapsed,
  level,
  currentStreamId,
  rangeFrom,
  rangeTo,
}: {
  node: TreeNode;
  collapsed: Record<string, boolean>;
  setCollapsed: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  level: number;
  currentStreamId: string;
  rangeFrom?: string;
  rangeTo?: string;
}) {
  const router = useStreamsAppRouter();
  const { euiTheme } = useEuiTheme();
  const hasChildren = node.children.length > 0;
  const isCollapsed = collapsed[node.name];
  const isSelected = node.name === currentStreamId;
  const [isSuggestionsPopoverOpen, setIsSuggestionsPopoverOpen] = useState(false);

  const handleStreamClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/{key}', { path: { key: node.name }, query: { rangeFrom, rangeTo } });
  };

  // Hardcoded: show suggestions indicator for 'logs' stream as demo
  const hasSuggestions = node.name === 'logs';

  return (
    <>
      <div
        css={css`
          display: flex;
          align-items: center;
          height: 24px;
          padding-left: ${level * 16 + 4}px;
          padding-right: 4px;
          cursor: pointer;
          background: ${isSelected ? euiTheme.colors.lightestShade : 'transparent'};
          border-radius: ${euiTheme.border.radius.small};
          &:hover {
            background: ${euiTheme.colors.lightestShade};
          }
        `}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={() => setCollapsed((prev) => ({ ...prev, [node.name]: !prev[node.name] }))}
            css={css`
              background: none;
              border: none;
              padding: 0;
              margin-right: 4px;
              display: flex;
              align-items: center;
              cursor: pointer;
            `}
          >
            <EuiIcon type={isCollapsed ? 'arrowRight' : 'arrowDown'} size="s" color="subdued" />
          </button>
        ) : (
          <span css={css`width: 16px; margin-right: 4px;`} />
        )}
        <EuiIcon
          type={node.isWired ? 'streamsWired' : 'streamsClassic'}
          size="s"
          css={css`margin-right: 6px; flex-shrink: 0;`}
        />
        <EuiLink
          href={router.link('/{key}', { path: { key: node.name } })}
          onClick={handleStreamClick}
          color={isSelected ? 'primary' : 'text'}
          css={css`
            font-size: 13px;
            font-weight: 400;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex: 1;
            min-width: 0;
            &:hover {
              text-decoration: none;
            }
          `}
        >
          {node.name}
        </EuiLink>
        {hasSuggestions && (
          <EuiPopover
            button={
              <button
                type="button"
                onClick={() => setIsSuggestionsPopoverOpen(!isSuggestionsPopoverOpen)}
                aria-label={i18n.translate('xpack.streams.wrapper.aiSuggestionsAriaLabel', {
                  defaultMessage: 'View AI suggestions',
                })}
                css={css`
                  background: transparent;
                  border: none;
                  border-radius: ${euiTheme.border.radius.small};
                  padding: 2px;
                  margin-left: 4px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  transition: background ${euiTheme.animation.fast};
                  &:hover {
                    background: ${euiTheme.colors.lightShade};
                  }
                  &:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px ${euiTheme.colors.primary};
                  }
                `}
              >
                <EuiIcon type="dot" size="s" color="accent" />
              </button>
            }
            isOpen={isSuggestionsPopoverOpen}
            closePopover={() => setIsSuggestionsPopoverOpen(false)}
            anchorPosition="rightCenter"
            panelPaddingSize="s"
          >
            <EuiText size="s">
              <small css={css`margin: 0 0 ${euiTheme.size.xs};`}>
                {i18n.translate('xpack.streams.wrapper.aiSuggestionPopover', {
                  defaultMessage: 'You have 1 AI Suggestion for this stream.',
                })}
              </small>
              <EuiLink
                css={css`margin-top: ${euiTheme.size.xs};`}
                href={router.link('/{key}', { path: { key: node.name } })}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  setIsSuggestionsPopoverOpen(false);
                  router.push('/{key}', { path: { key: node.name }, query: { rangeFrom, rangeTo } });
                }}
              >
                {i18n.translate('xpack.streams.wrapper.viewSuggestionsLink', {
                  defaultMessage: 'Go to Stream',
                })}
              </EuiLink>
            </EuiText>
          </EuiPopover>
        )}
      </div>
      {hasChildren && !isCollapsed && (
        <>
          {node.children.map((child) => (
            <SidebarTreeNode
              key={child.name}
              node={child}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              level={level + 1}
              currentStreamId={currentStreamId}
              rangeFrom={rangeFrom}
              rangeTo={rangeTo}
            />
          ))}
        </>
      )}
    </>
  );
}

function SidebarTreeView({
  streams,
  currentStreamId,
  rangeFrom,
  rangeTo,
}: {
  streams: StreamListItem[];
  currentStreamId: string;
  rangeFrom?: string;
  rangeTo?: string;
}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const treeData = useMemo(() => buildTree(streams), [streams]);

  return (
    <div>
      {treeData.map((node) => (
        <SidebarTreeNode
          key={node.name}
          node={node}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          level={0}
          currentStreamId={currentStreamId}
          rangeFrom={rangeFrom}
          rangeTo={rangeTo}
        />
      ))}
    </div>
  );
}

export function Wrapper({
  tabs,
  streamId,
  tab,
}: {
  tabs: ManagementTabs;
  streamId: string;
  tab: string;
}) {
  const router = useStreamsAppRouter();
  const { definition } = useStreamDetail();
  const {
    services,
    dependencies: {
      start: {
        streams: { streamsRepositoryClient },
      },
    },
  } = useKibana();
  const { getStepPropsByStepId } = useStreamsTour();
  const { rangeFrom, rangeTo } = useTimeRange();

  const [isTreePopoverOpen, setIsTreePopoverOpen] = useState(true);
  const [isSettingsFlyoutOpen, setIsSettingsFlyoutOpen] = useState(false);

  const streamsListFetch = useStreamsAppFetch(
    async ({ signal }) =>
      streamsRepositoryClient.fetch('GET /internal/streams', {
        signal,
      }),
    // Include definition to refresh when stream children change (e.g., new partitions created)
    [streamsRepositoryClient, definition]
  );

  const streamsList = React.useMemo(() => {
    return (
      streamsListFetch.value?.streams?.map((item) => ({
        stream: item.stream,
        data_stream: item.data_stream,
      })) ?? []
    );
  }, [streamsListFetch.value?.streams]);

  const lastTrackedRef = useRef<string | null>(null);

  useEffect(() => {
    // only track for ingest streams (wired and classic) which have privileges
    if (!definition || !Streams.ingest.all.GetResponse.is(definition)) {
      return;
    }

    // avoid duplicate tracking for the same stream and tab
    const trackingKey = `${definition.stream.name}-${tab}`;
    if (lastTrackedRef.current === trackingKey) {
      return;
    }

    lastTrackedRef.current = trackingKey;

    const streamType = Streams.WiredStream.GetResponse.is(definition) ? 'wired' : 'classic';

    services.telemetryClient.trackTabVisited({
      stream_name: definition.stream.name,
      stream_type: streamType,
      tab_name: tab,
      privileges: definition.privileges,
    });
  }, [definition, tab, services.telemetryClient]);

  const tabMap = Object.fromEntries(
    Object.entries(tabs).map(([tabName, currentTab]) => {
      return [
        tabName,
        {
          href: router.link('/{key}/management/{tab}', {
            path: { key: streamId, tab: tabName },
            query: { rangeFrom, rangeTo },
          }),
          label: currentTab.label,
          content: currentTab.content,
        },
      ];
    })
  );

  const { getStreamDocCounts } = useStreamDocCountsFetch({
    groupTotalCountByTimestamp: false,
    canReadFailureStore: Streams.ingest.all.GetResponse.is(definition)
      ? definition.privileges.read_failure_store
      : true,
    numDataPoints: 25,
  });
  const docCountsFetch = getStreamDocCounts(streamId);

  const countResult = useAsync(() => docCountsFetch.docCount, [docCountsFetch]);
  const failedDocsResult = useAsync(() => docCountsFetch.failedDocCount, [docCountsFetch]);
  const degradedDocsResult = useAsync(() => docCountsFetch.degradedDocCount, [docCountsFetch]);

  const docCount = countResult?.value?.find((stat) => stat.stream === streamId)?.count ?? 0;
  const degradedDocCount =
    degradedDocsResult?.value?.find((stat) => stat.stream === streamId)?.count ?? 0;
  const failedDocCount =
    failedDocsResult?.value?.find((stat) => stat.stream === streamId)?.count ?? 0;

  const quality = calculateDataQuality({
    totalDocs: docCount,
    degradedDocs: degradedDocCount,
    failedDocs: failedDocCount,
  });
  const isQualityLoading =
    countResult?.loading || failedDocsResult?.loading || degradedDocsResult.loading;

  const tabItems = Object.entries(tabMap)
    .filter(([tabKey]) => tabKey !== 'advanced')
    .map(([tabKey, { label, href }]) => {
      const tourStepId = TAB_TO_TOUR_STEP_ID[tabKey];
      const stepProps = tourStepId ? getStepPropsByStepId(tourStepId) : undefined;

      const wrappedLabel = stepProps ? (
        <EuiTourStep
          step={stepProps.step}
          stepsTotal={stepProps.stepsTotal}
          title={stepProps.title}
          subtitle={stepProps.subtitle}
          content={stepProps.content}
          anchorPosition={stepProps.anchorPosition}
          offset={stepProps.offset}
          maxWidth={stepProps.maxWidth}
          isStepOpen={stepProps.isStepOpen}
          footerAction={stepProps.footerAction}
          onFinish={stepProps.onFinish}
        >
          <span>{label}</span>
        </EuiTourStep>
      ) : (
        label
      );

      return {
        id: tabKey,
        label: wrappedLabel,
        href,
        isSelected: tab === tabKey,
      };
    });

  const advancedTabHref = tabMap.advanced?.href;

  const { euiTheme } = useEuiTheme();

  const treeViewButton = (
    <EuiToolTip
      content={
        isTreePopoverOpen
          ? i18n.translate('xpack.streams.wrapper.hideTreeViewTooltip', {
              defaultMessage: 'Hide tree view',
            })
          : i18n.translate('xpack.streams.wrapper.showTreeViewTooltip', {
              defaultMessage: 'Show tree view',
            })
      }
    >
      <EuiButtonIcon
        iconType={isTreePopoverOpen ? 'transitionLeftOut' : 'transitionLeftIn'}
        size="s"
        aria-label={
          isTreePopoverOpen
            ? i18n.translate('xpack.streams.wrapper.hideSidebarAriaLabel', {
                defaultMessage: 'Hide sidebar',
              })
            : i18n.translate('xpack.streams.wrapper.showSidebarAriaLabel', {
                defaultMessage: 'Show sidebar',
              })
        }
        aria-expanded={isTreePopoverOpen}
        aria-controls="streams-tree-sidebar"
        onClick={() => setIsTreePopoverOpen(!isTreePopoverOpen)}
        data-test-subj={isTreePopoverOpen ? 'streamsHideSidebarButton' : 'streamsShowSidebarButton'}
      />
    </EuiToolTip>
  );

  const badges = (
    <EuiBadgeGroup gutterSize="s">
      {Streams.ClassicStream.GetResponse.is(definition) && <ClassicStreamBadge />}
      {Streams.WiredStream.GetResponse.is(definition) && <WiredStreamBadge />}
      {Streams.ingest.all.GetResponse.is(definition) && (
        <LifecycleBadge
          lifecycle={definition.effective_lifecycle}
          dataTestSubj={`lifecycleBadge-${streamId}`}
        />
      )}
      <DatasetQualityIndicator
        quality={quality}
        isLoading={isQualityLoading}
        verbose={true}
        showTooltip={true}
      />
    </EuiBadgeGroup>
  );

  return (
    <EuiFlexGroup gutterSize="none" responsive={false} css={css`height: 100%;`}>
      {/* Sidebar - spans full height, fixed position */}
      {isTreePopoverOpen && (
        <EuiFlexItem
          id="streams-tree-sidebar"
          grow={false}
          css={css`
            width: 320px;
            border-right: ${euiTheme.border.thin};
            display: flex;
            flex-direction: column;
            background: ${euiTheme.colors.backgroundBasePlain};
            overflow: hidden;
          `}
        >
          {/* Sidebar header - 48px */}
          <div
            css={css`
              height: 48px;
              min-height: 48px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 ${euiTheme.size.base};
              border-bottom: ${euiTheme.border.thin};
            `}
          >
            <EuiTitle size="xxxs">
              <h3>
                {i18n.translate('xpack.streams.wrapper.streamsTreeViewTitle', {
                  defaultMessage: 'Streams Tree view',
                })}
              </h3>
            </EuiTitle>
            <EuiFlexGroup gutterSize="xs" responsive={false} justifyContent="flexEnd">
              <EuiFlexItem grow={false}>
                <EuiToolTip
                  content={i18n.translate('xpack.streams.wrapper.goToStreamsListingTooltip', {
                    defaultMessage: 'Go to Streams Listing',
                  })}
                >
                  <EuiButtonIcon
                    iconType="streamsWired"
                    size="xs"
                    aria-label={i18n.translate('xpack.streams.wrapper.createStreamAriaLabel', {
                      defaultMessage: 'Create new stream',
                    })}
                    href={router.link('/')}
                    data-test-subj="streamsCreateNewStreamButton"
                  />
                </EuiToolTip>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiToolTip
                  content={i18n.translate('xpack.streams.wrapper.openStreamsSettingsTooltip', {
                    defaultMessage: 'Open Streams Settings',
                  })}
                >
                  <EuiButtonIcon
                    iconType="controls"
                    size="xs"
                    aria-label={i18n.translate('xpack.streams.wrapper.streamsSettingsAriaLabel', {
                      defaultMessage: 'Streams settings',
                    })}
                    onClick={() => setIsSettingsFlyoutOpen(true)}
                    data-test-subj="streamsSettingsButton"
                  />
                </EuiToolTip>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
          {/* Sidebar content */}
          <div
            css={css`
              flex: 1;
              overflow: auto;
              padding: ${euiTheme.size.m} ${euiTheme.size.m};
            `}
          >
            <SidebarTreeView
              streams={streamsList}
              currentStreamId={streamId}
              rangeFrom={rangeFrom}
              rangeTo={rangeTo}
            />
          </div>
          {/* Sidebar footer - 48px */}
          <div
            css={css`
              height: 48px;
              min-height: 48px;
              display: flex;
              align-items: center;
              padding: 0 ${euiTheme.size.base};
              border-top: ${euiTheme.border.thin};
            `}
          >
            <EuiLink
              href={advancedTabHref}
              css={css`
                font-size: 13px;
                display: flex;
                align-items: center;
                gap: ${euiTheme.size.xs};
              `}
            >
              <EuiIcon type="gear" size="s" />
              {i18n.translate('xpack.streams.wrapper.streamSettingsLink', {
                defaultMessage: 'Advanced settings',
              })}
            </EuiLink>
          </div>
        </EuiFlexItem>
      )}
      {/* Main content area */}
      <EuiFlexItem css={css`min-width: 0; display: flex; flex-direction: column; height: 100%; overflow: hidden;`}>
        {/* Top header - 48px */}
        <div
          css={css`
            height: 48px;
            min-height: 48px;
            background: ${euiTheme.colors.backgroundBasePlain};
            padding: 0 ${euiTheme.size.l};
            border-bottom: ${euiTheme.border.thin};
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false} wrap={false}>
            {treeViewButton}
            <EuiTitle size="xxs">
              <h1>{streamId}</h1>
            </EuiTitle>
            {badges}
          </EuiFlexGroup>
          <EuiFlexGroup justifyContent="flexEnd" gutterSize="s" responsive={false} wrap={false} alignItems="center">
            <EuiFlexItem grow={false}>
              {Streams.ingest.all.GetResponse.is(definition) && (
                <DiscoverBadgeButton
                  definition={definition}
                  isWiredStream={Streams.WiredStream.GetResponse.is(definition)}
                  spellOut
                />
              )}
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <FeedbackButton />
            </EuiFlexItem>
            <EuiFlexItem
              grow={false}
              css={css`
                height: 16px;
                width: 1px;
                background: ${euiTheme.colors.lightShade};
                margin: 0 ${euiTheme.size.xs};
              `}
            />
            {advancedTabHref && (
              <EuiFlexItem grow={false}>
                <EuiButtonIcon
                  iconType="gear"
                  size="s"
                  href={advancedTabHref}
                  aria-label={i18n.translate('xpack.streams.wrapper.advancedSettingsAriaLabel', {
                    defaultMessage: 'Advanced settings',
                  })}
                  data-test-subj="streamsAdvancedSettingsButton"
                />
              </EuiFlexItem>
            )}
          </EuiFlexGroup>
        </div>
        {/* Tabs row - 34px */}
        <div
          css={css`
            height: 34px;
            min-height: 34px;
            display: flex;
            align-items: flex-start;
            background: ${euiTheme.colors.backgroundBasePlain};
            padding: 0 ${euiTheme.size.l};
            border-bottom: ${euiTheme.border.thin};
          `}
        >
          <EuiTabs size="s" bottomBorder={false}>
            {tabItems.map(({ id, label, href, isSelected }) => (
              <EuiTab key={id} href={href} isSelected={isSelected}>
                {label}
              </EuiTab>
            ))}
          </EuiTabs>
        </div>
        {/* Content area */}
        <StreamsAppPageTemplate.Body
          noPadding={tab === 'partitioning' || tab === 'processing'}
          css={css`flex: 1; min-height: 0; overflow: auto;`}
        >
          {tabs[tab]?.content}
        </StreamsAppPageTemplate.Body>
      </EuiFlexItem>
      {isSettingsFlyoutOpen && (
        <StreamsSettingsFlyout
          onClose={() => setIsSettingsFlyoutOpen(false)}
          refreshStreams={streamsListFetch.refresh}
        />
      )}
    </EuiFlexGroup>
  );
}
