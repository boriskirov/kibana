/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import React, { useState, useCallback } from 'react';
import {
  EuiAccordion,
  EuiBadge,
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiCard,
  EuiCodeBlock,
  EuiDescriptionList,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiIcon,
  EuiLink,
  EuiPanel,
  EuiPagination,
  EuiPopover,
  EuiSpacer,
  EuiText,
  EuiTitle,
  useEuiTheme,
} from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { css } from '@emotion/react';
import type { InsightCardData, InsightDetailData } from './insights_data';
import {
  severityConfig,
  SEVERITY_DOT_COLORS,
  truncateDescription,
  getDefaultDetailFromInsight,
} from './insights_data';

const DESCRIPTION_MAX_LENGTH = 120;
const CARD_MIN_HEIGHT = 220;

const LANE_EVENT_MARKERS: Array<Array<{ position: number; type: 'warning' | 'orange' | 'blue' }>> =
  [
    [
      { position: 8, type: 'warning' },
      { position: 12, type: 'warning' },
      { position: 15, type: 'warning' },
      { position: 18, type: 'warning' },
      { position: 22, type: 'warning' },
      { position: 25, type: 'warning' },
      { position: 28, type: 'warning' },
      { position: 32, type: 'warning' },
      { position: 35, type: 'warning' },
      { position: 48, type: 'orange' },
      { position: 55, type: 'orange' },
      { position: 62, type: 'orange' },
      { position: 68, type: 'orange' },
      { position: 75, type: 'orange' },
      { position: 78, type: 'orange' },
      { position: 82, type: 'blue' },
      { position: 85, type: 'blue' },
    ],
    [
      { position: 8, type: 'warning' },
      { position: 12, type: 'warning' },
      { position: 15, type: 'warning' },
      { position: 18, type: 'warning' },
      { position: 22, type: 'warning' },
      { position: 28, type: 'warning' },
      { position: 52, type: 'orange' },
      { position: 58, type: 'orange' },
      { position: 65, type: 'orange' },
      { position: 72, type: 'orange' },
      { position: 78, type: 'orange' },
      { position: 55, type: 'warning' },
      { position: 58, type: 'warning' },
      { position: 62, type: 'warning' },
      { position: 65, type: 'warning' },
      { position: 68, type: 'warning' },
      { position: 82, type: 'blue' },
      { position: 86, type: 'blue' },
    ],
    [
      { position: 8, type: 'warning' },
      { position: 12, type: 'warning' },
      { position: 15, type: 'warning' },
      { position: 18, type: 'warning' },
      { position: 22, type: 'warning' },
      { position: 25, type: 'warning' },
      { position: 28, type: 'warning' },
      { position: 42, type: 'orange' },
      { position: 48, type: 'orange' },
      { position: 52, type: 'orange' },
      { position: 55, type: 'orange' },
      { position: 58, type: 'orange' },
      { position: 62, type: 'orange' },
      { position: 65, type: 'orange' },
      { position: 68, type: 'orange' },
      { position: 72, type: 'orange' },
      { position: 75, type: 'orange' },
      { position: 78, type: 'orange' },
      { position: 82, type: 'blue' },
      { position: 85, type: 'blue' },
    ],
  ];

function parseTimeToMinutes(timeStr: string): number {
  const parts = timeStr.split(':').map(Number);
  if (parts.length >= 3) {
    return parts[0] * 60 + parts[1] + parts[2] / 60;
  }
  return 0;
}

function formatTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = Math.floor(minutes % 60);
  const s = Math.round((minutes % 1) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(
    2,
    '0'
  )}`;
}

function stackMarkersVertically<T extends { position: number }>(
  markers: T[],
  clusterThreshold = 8
): Array<T & { yOffset: number }> {
  const sorted = [...markers].sort((a, b) => a.position - b.position);
  const result: Array<T & { yOffset: number }> = [];
  let i = 0;
  while (i < sorted.length) {
    const cluster: T[] = [];
    const pivot = sorted[i].position;
    while (i < sorted.length && sorted[i].position - pivot <= clusterThreshold) {
      cluster.push(sorted[i]);
      i++;
    }
    cluster.forEach((m, idx) => {
      const yOffset = cluster.length === 1 ? 0 : idx - Math.floor(cluster.length / 2);
      result.push({ ...m, yOffset });
    });
  }
  return result;
}

const IncidentBadgeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.89031 3.10972C8.85549 3.07486 8.81413 3.0472 8.7686 3.02832C8.72308 3.00945 8.67428 2.99974 8.625 2.99974C8.57572 2.99974 8.52692 3.00945 8.4814 3.02832C8.43587 3.0472 8.39451 3.07486 8.35969 3.10972L6.96984 4.50003H5.03016L3.64031 3.10972C3.56995 3.03936 3.47451 2.99983 3.375 2.99983C3.27549 2.99983 3.18005 3.03936 3.10969 3.10972C3.03932 3.18009 2.99979 3.27552 2.99979 3.37503C2.99979 3.47455 3.03932 3.56998 3.10969 3.64035L4.5 5.03019V6.96988L3.10969 8.35972C3.03932 8.43009 2.99979 8.52552 2.99979 8.62503C2.99979 8.72455 3.03932 8.81998 3.10969 8.89035C3.18005 8.96071 3.27549 9.00024 3.375 9.00024C3.47451 9.00024 3.56995 8.96071 3.64031 8.89035L5.03016 7.50003H6.96984L8.35969 8.89035C8.39453 8.92519 8.43589 8.95283 8.48141 8.97168C8.52694 8.99054 8.57573 9.00024 8.625 9.00024C8.67427 9.00024 8.72306 8.99054 8.76859 8.97168C8.81411 8.95283 8.85547 8.92519 8.89031 8.89035C8.92515 8.85551 8.95279 8.81414 8.97165 8.76862C8.9905 8.7231 9.00021 8.67431 9.00021 8.62503C9.00021 8.57576 8.9905 8.52697 8.97165 8.48145C8.95279 8.43593 8.92515 8.39456 8.89031 8.35972L7.5 6.96988V5.03019L8.89031 3.64035C8.92518 3.60552 8.95284 3.56416 8.97171 3.51864C8.99058 3.47311 9.00029 3.42432 9.00029 3.37503C9.00029 3.32575 8.99058 3.27696 8.97171 3.23143C8.95284 3.18591 8.92518 3.14455 8.89031 3.10972ZM5.25 5.25003H6.75V6.75003H5.25V5.25003Z"
      fill="currentColor"
    />
  </svg>
);

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

function EventsTimelinePreview({
  lanes,
  startedAt,
  eventPopovers = [],
}: {
  lanes: Array<{ stream: string; eventCount: number }>;
  startedAt: string;
  eventPopovers?: Array<{
    relativeTime: string;
    title: string;
    summary: string;
    logSnippet: string;
  }>;
}) {
  const { euiTheme } = useEuiTheme();
  const [openPopoverKey, setOpenPopoverKey] = useState<string | null>(null);
  const baseMinutes = parseTimeToMinutes(startedAt);
  const timestamps = [
    formatTime(baseMinutes),
    formatTime(baseMinutes + 0.25),
    formatTime(baseMinutes + 0.5),
    formatTime(baseMinutes + 0.75),
    formatTime(baseMinutes + 1),
  ];
  const barHeights = [20, 45, 80, 65, 30];
  const barColorBase = '#E7664C';
  const barColorFill = '#C94F37';

  return (
    <div
      css={css`
        width: 100%;
        min-height: 120px;
      `}
    >
      <div
        css={css`
          position: relative;
          height: 48px;
          margin-bottom: ${euiTheme.size.m};
        `}
      >
        <div
          css={css`
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: ${barColorBase};
            opacity: 0.6;
          `}
        />
        <div
          css={css`
            position: absolute;
            bottom: 2px;
            left: 0;
            right: 0;
            display: flex;
            align-items: flex-end;
            gap: 2px;
            height: 46px;
          `}
        >
          {barHeights.map((h, i) => (
            <div
              key={i}
              css={css`
                flex: 1;
                height: ${h}%;
                min-height: 4px;
                background: ${barColorFill};
                border-radius: 2px;
              `}
            />
          ))}
        </div>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: ${euiTheme.size.m};
          font-size: ${euiTheme.font.scale.xs};
          color: ${euiTheme.colors.subduedText};
        `}
      >
        {timestamps.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      {lanes.map((lane, laneIdx) => {
        const rawMarkers =
          LANE_EVENT_MARKERS[laneIdx % LANE_EVENT_MARKERS.length] ?? LANE_EVENT_MARKERS[0];
        const markers = stackMarkersVertically(rawMarkers);
        const laneContentHeight = 48;
        const yStep = 12;

        return (
          <div
            key={laneIdx}
            css={css`
              display: flex;
              align-items: stretch;
              min-height: ${laneContentHeight + 16}px;
              padding: ${euiTheme.size.xs} ${euiTheme.size.s};
              margin-bottom: ${euiTheme.size.xs};
              border-radius: ${euiTheme.border.radius.small};
              background: #f6f7ff;
              font-size: ${euiTheme.font.scale.xs};
              color: ${euiTheme.colors.subduedText};
            `}
          >
            <span
              css={css`
                width: 80px;
                flex-shrink: 0;
                margin-right: ${euiTheme.size.s};
                display: flex;
                align-items: center;
              `}
            >
              {lane.stream}
            </span>
            <div
              css={css`
                flex: 1;
                position: relative;
                height: ${laneContentHeight}px;
                display: flex;
                align-items: center;
              `}
            >
              <div
                css={css`
                  position: absolute;
                  left: 0;
                  right: 0;
                  top: 50%;
                  height: 1px;
                  background: ${euiTheme.border.color};
                  transform: translateY(-50%);
                `}
              />
              {markers.map((m, mIdx) => {
                const popoverKey = `${laneIdx}-${mIdx}`;
                const isOpen = openPopoverKey === popoverKey;
                const popoverContent =
                  eventPopovers[(laneIdx * 3 + mIdx) % Math.max(1, eventPopovers.length)];

                const markerContent = (
                  <>
                    {m.type === 'warning' ? (
                      <EuiIcon type="warning" color="danger" size="s" />
                    ) : m.type === 'orange' ? (
                      <div
                        css={css`
                          width: 8px;
                          height: 8px;
                          border-radius: 50%;
                          background: #f5a623;
                        `}
                      />
                    ) : (
                      <div
                        css={css`
                          width: 8px;
                          height: 8px;
                          border-radius: 50%;
                          background: linear-gradient(135deg, #79b8ff 50%, #fdc937 50%);
                        `}
                      />
                    )}
                  </>
                );

                const positionedWrapper = (children: React.ReactNode) => (
                  <div
                    key={mIdx}
                    css={css`
                      position: absolute;
                      left: ${m.position}%;
                      top: 50%;
                      transform: translate(-50%, calc(-50% + ${m.yOffset * yStep}px));
                      z-index: 1;
                    `}
                  >
                    {children}
                  </div>
                );

                if (!popoverContent) {
                  return positionedWrapper(markerContent);
                }

                const markerButton = (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={(ev: React.MouseEvent) => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      setOpenPopoverKey(isOpen ? null : popoverKey);
                    }}
                    onKeyDown={(ev: React.KeyboardEvent) => {
                      if (ev.key === 'Enter' || ev.key === ' ') {
                        ev.preventDefault();
                        setOpenPopoverKey(isOpen ? null : popoverKey);
                      }
                    }}
                    css={css`
                      cursor: pointer;
                    `}
                  >
                    {markerContent}
                  </div>
                );

                return positionedWrapper(
                  <EuiPopover
                    key={mIdx}
                    button={markerButton}
                    isOpen={isOpen}
                    closePopover={() => setOpenPopoverKey(null)}
                    anchorPosition="upCenter"
                    panelPaddingSize="m"
                  >
                    <div
                      css={css`
                        min-width: 320px;
                        max-width: 400px;
                      `}
                    >
                      <EuiFlexGroup
                        gutterSize="xs"
                        alignItems="center"
                        css={css`
                          margin-bottom: ${euiTheme.size.xs};
                        `}
                      >
                        <EuiIcon type="warning" color="warning" size="s" />
                        <EuiText size="xs" color="subdued">
                          {popoverContent.relativeTime}
                        </EuiText>
                      </EuiFlexGroup>
                      <EuiText
                        size="s"
                        css={css`
                          font-weight: 600;
                          margin-bottom: ${euiTheme.size.s};
                        `}
                      >
                        {popoverContent.title}
                      </EuiText>
                      <EuiText
                        size="xs"
                        css={css`
                          margin-bottom: ${euiTheme.size.s};
                        `}
                      >
                        {popoverContent.summary}
                      </EuiText>
                      <div
                        css={css`
                          max-height: 120px;
                          overflow-y: auto;
                          margin-bottom: ${euiTheme.size.m};
                          padding: ${euiTheme.size.s};
                          background: ${euiTheme.colors.lightestShade};
                          border-radius: ${euiTheme.border.radius.small};
                          font-family: ${euiTheme.font.familyCode};
                          font-size: 11px;
                          white-space: pre-wrap;
                          word-break: break-all;
                        `}
                      >
                        {popoverContent.logSnippet.split('[ERROR]').map((part, i) =>
                          i === 0 ? (
                            part
                          ) : (
                            <span key={i}>
                              <span
                                css={css`
                                  color: ${euiTheme.colors.danger};
                                  font-weight: 600;
                                `}
                              >
                                [ERROR]
                              </span>
                              {part}
                            </span>
                          )
                        )}
                      </div>
                      <EuiButton size="s" fill>
                        {i18n.translate('presentationPanel.panelInsights.viewDetail', {
                          defaultMessage: 'View detail',
                        })}
                      </EuiButton>
                    </div>
                  </EuiPopover>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface InsightDetailFlyoutProps {
  insight: InsightCardData;
  detail: InsightDetailData;
  onClose: () => void;
  isChildFlyout?: boolean;
}

function InsightDetailFlyout({
  insight,
  detail,
  onClose,
  isChildFlyout = false,
}: InsightDetailFlyoutProps) {
  const { euiTheme } = useEuiTheme();
  const [currentEventPage, setCurrentEventPage] = useState(0);
  const [expandedRecId, setExpandedRecId] = useState<string | null>(
    detail.recommendations.items[0]?.id ?? null
  );
  const [expandedEsqlKey, setExpandedEsqlKey] = useState<string | null>(null);

  const eventPageCount = detail.topEvents.totalPages;
  const currentEvents = detail.topEvents.events.slice(
    currentEventPage * 1,
    (currentEventPage + 1) * 1
  );
  const maxCount = Math.max(...detail.topEvents.events.map((e) => e.count), 1);

  const severityBadgeColor =
    detail.generalInfo.severity.toLowerCase() === 'critical'
      ? 'danger'
      : detail.generalInfo.severity.toLowerCase() === 'high'
      ? 'warning'
      : detail.generalInfo.severity.toLowerCase() === 'medium'
      ? 'primary'
      : 'hollow';

  return (
    <EuiFlyout
      session={isChildFlyout ? 'inherit' : 'start'}
      type={isChildFlyout ? 'overlay' : 'push'}
      flyoutMenuProps={{
        title: insight.title,
      }}
      onClose={onClose}
      size={isChildFlyout ? 'm' : 's'}
      hasChildBackground={isChildFlyout}
      data-test-subj="panelInsightsDetailFlyout"
      aria-label={insight.title}
    >
      {!isChildFlyout && (
        <EuiFlyoutHeader hasBorder>
          <EuiTitle size="m">
            <h2>{insight.title}</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
      )}
      <EuiFlyoutBody>
        <EuiFlexGroup direction="column" gutterSize="m">
          <EuiFlexItem grow={false}>
            <EuiPanel hasBorder paddingSize="m" hasShadow={false}>
              <EuiText size="xs">
                <strong>
                  {i18n.translate('presentationPanel.panelInsights.generalInfo', {
                    defaultMessage: 'General information',
                  })}
                </strong>
              </EuiText>
              <EuiSpacer size="m" />
              <EuiDescriptionList
                type="column"
                compressed
                listItems={[
                  {
                    title: i18n.translate('presentationPanel.panelInsights.generalInfoTitle', {
                      defaultMessage: 'Title',
                    }),
                    description: detail.generalInfo.title,
                  },
                  {
                    title: i18n.translate('presentationPanel.panelInsights.severity', {
                      defaultMessage: 'Severity',
                    }),
                    description: (
                      <EuiBadge color={severityBadgeColor}>{detail.generalInfo.severity}</EuiBadge>
                    ),
                  },
                  {
                    title: i18n.translate('presentationPanel.panelInsights.relevance', {
                      defaultMessage: 'Relevance',
                    }),
                    description: (
                      <EuiBadge
                        css={css`
                          background: #f8d7da;
                          color: #721c24;
                        `}
                      >
                        {detail.generalInfo.relevance}
                      </EuiBadge>
                    ),
                  },
                  {
                    title: i18n.translate('presentationPanel.panelInsights.type', {
                      defaultMessage: 'Type',
                    }),
                    description: (
                      <EuiBadge
                        color="hollow"
                        iconType={detail.generalInfo.type === 'Incident' ? undefined : 'document'}
                      >
                        {detail.generalInfo.type === 'Incident' ? (
                          <span
                            css={css`
                              display: inline-flex;
                              align-items: center;
                              gap: 4px;
                            `}
                          >
                            <IncidentBadgeIcon />
                            {detail.generalInfo.type}
                          </span>
                        ) : (
                          detail.generalInfo.type
                        )}
                      </EuiBadge>
                    ),
                  },
                  {
                    title: i18n.translate('presentationPanel.panelInsights.stream', {
                      defaultMessage: 'Stream',
                    }),
                    description: (
                      <EuiBadge color="hollow" iconType="logstashInput">
                        {detail.generalInfo.stream}
                      </EuiBadge>
                    ),
                  },
                ]}
              />
            </EuiPanel>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <EuiPanel hasBorder paddingSize="m" hasShadow={false}>
              <EuiText size="xs">
                <strong>
                  {i18n.translate('presentationPanel.panelInsights.description', {
                    defaultMessage: 'Description',
                  })}
                </strong>
              </EuiText>
              <EuiSpacer size="m" />
              <EuiText size="s">
                <p>{detail.description.text}</p>
              </EuiText>
              <EuiSpacer size="s" />
              <EuiFlexGroup alignItems="center" gutterSize="xs" responsive={false}>
                <EuiText size="xs" color="subdued">
                  {detail.description.timestamp}
                </EuiText>
                {detail.description.referencesCount != null && (
                  <>
                    <EuiButtonIcon
                      iconType="copyClipboard"
                      size="xs"
                      aria-label={i18n.translate('presentationPanel.panelInsights.copy', {
                        defaultMessage: 'Copy',
                      })}
                    />
                    <EuiText size="xs" color="subdued">
                      {detail.description.referencesCount}
                    </EuiText>
                  </>
                )}
              </EuiFlexGroup>
            </EuiPanel>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <EuiPanel hasBorder paddingSize="m" hasShadow>
              <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" responsive={false}>
                <EuiText size="xs">
                  <strong>
                    {i18n.translate('presentationPanel.panelInsights.topEvents', {
                      defaultMessage: 'Top 5 events',
                    })}
                  </strong>
                </EuiText>
                <EuiPagination
                  pageCount={eventPageCount}
                  activePage={currentEventPage}
                  onPageClick={setCurrentEventPage}
                  compressed
                />
              </EuiFlexGroup>
              <EuiSpacer size="m" />
              <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                <EuiText size="xs" color="subdued">
                  {i18n.translate('presentationPanel.panelInsights.topEventContributing', {
                    defaultMessage: 'Top event contributing to this insight',
                  })}
                </EuiText>
                <EuiBadge color="hollow">
                  {currentEventPage + 1} of {detail.topEvents.totalEvents}
                </EuiBadge>
              </EuiFlexGroup>
              <EuiSpacer size="m" />
              {currentEvents.map((ev, idx) => (
                <div key={idx}>
                  <EuiFlexGroup alignItems="center" gutterSize="m" responsive={false}>
                    <EuiFlexItem grow={false}>
                      <div
                        css={css`
                          width: 4px;
                          height: 24px;
                          background: #f5a700;
                          border-radius: 2px;
                        `}
                      />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiText size="xs">{ev.count}</EuiText>
                    </EuiFlexItem>
                    <EuiFlexItem
                      grow={true}
                      css={css`
                        min-width: 60px;
                        height: 20px;
                        background: ${euiTheme.colors.lightestShade};
                        border-radius: 2px;
                        overflow: hidden;
                      `}
                    >
                      <div
                        css={css`
                          height: 100%;
                          width: ${Math.min(100, (ev.count / maxCount) * 100)}%;
                          min-width: ${ev.count > 0 ? 4 : 0}px;
                          background: #f5a700;
                          border-radius: 2px;
                        `}
                      />
                    </EuiFlexItem>
                  </EuiFlexGroup>
                  <EuiSpacer size="xs" />
                  <div
                    css={css`
                      padding: 8px 12px;
                      background: #fef9e7;
                      border-radius: ${euiTheme.border.radius.small};
                      font-family: ${euiTheme.font.familyCode};
                      font-size: 12px;
                      color: ${euiTheme.colors.text};
                    `}
                  >
                    {`message: "${ev.message}"`}
                  </div>
                </div>
              ))}
            </EuiPanel>
          </EuiFlexItem>

          <EuiFlexItem
            grow={false}
            css={css`
              margin-block-start: 0 !important;
            `}
          >
            <div
              css={css`
                border-radius: 6px;
                overflow: hidden;
                background-color: #ffffff;
                border: 1px solid transparent;
                background-image: linear-gradient(
                    90deg,
                    rgba(217, 232, 255, 0.3) 17%,
                    rgba(236, 226, 254, 0.3) 83%
                  ),
                  linear-gradient(90deg, rgba(217, 232, 255, 0.3) 17%, rgba(236, 226, 254, 0.3) 83%);
                background-origin: padding-box, border-box;
                background-clip: padding-box, border-box;
              `}
            >
              <EuiPanel
                hasBorder={false}
                hasShadow={false}
                css={css`
                  padding: 12px !important;
                  margin-block-start: 0 !important;
                  background: transparent !important;
                `}
              >
                <EuiAccordion
                  id="panelInsightsRecommendations"
                  buttonContent={
                    <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                      <EuiText size="xs">
                        <strong>
                          {i18n.translate('presentationPanel.panelInsights.recommendations', {
                            defaultMessage: 'Recommendations',
                          })}
                        </strong>
                      </EuiText>
                      <div
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        onKeyDown={(e: React.KeyboardEvent) => e.stopPropagation()}
                        role="presentation"
                      >
                        <EuiBadge color="danger">{detail.recommendations.items.length}</EuiBadge>
                      </div>
                    </EuiFlexGroup>
                  }
                  arrowDisplay="left"
                  paddingSize="none"
                  initialIsOpen
                  css={css`
                    .euiAccordion__childWrapper {
                      padding: 0;
                    }
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      gap: 12px;
                    `}
                  >
                    <EuiText size="xs" color="subdued">
                      {detail.recommendations.isOngoing
                        ? i18n.translate('presentationPanel.panelInsights.insightStartedOngoing', {
                            defaultMessage:
                              "The insight has started at {time}, and it's still ongoing.",
                            values: { time: detail.recommendations.startedAt },
                          })
                        : i18n.translate('presentationPanel.panelInsights.insightStartedResolved', {
                            defaultMessage: 'The insight started at {time} and has been resolved.',
                            values: { time: detail.recommendations.startedAt },
                          })}
                    </EuiText>
                    {detail.recommendations.items.map((rec) => {
                      const isExpanded = expandedRecId === rec.id;
                      const hasSubSteps = rec.links && rec.links.length > 0;
                      return (
                        <div key={rec.id}>
                          <div
                            role={hasSubSteps ? 'button' : undefined}
                            tabIndex={hasSubSteps ? 0 : undefined}
                            onKeyDown={
                              hasSubSteps
                                ? (ev) => {
                                    if (ev.key === 'Enter' || ev.key === ' ') {
                                      ev.preventDefault();
                                      setExpandedRecId(isExpanded ? null : rec.id);
                                    }
                                  }
                                : undefined
                            }
                            css={css`
                              cursor: ${hasSubSteps ? 'pointer' : 'default'};
                            `}
                            onClick={
                              hasSubSteps
                                ? () => setExpandedRecId(isExpanded ? null : rec.id)
                                : undefined
                            }
                          >
                            <EuiCard
                              title=""
                              description=""
                              display="plain"
                              hasBorder
                              paddingSize="none"
                              css={css`
                                background: #ffffff !important;
                                .euiCard__content {
                                  padding: 12px;
                                }
                                [class*='euiCard_children'],
                                [class*='euiCard__children'] {
                                  margin-block-start: 0 !important;
                                }
                              `}
                            >
                              <EuiFlexGroup
                                justifyContent="spaceBetween"
                                alignItems="center"
                                responsive={false}
                                gutterSize="m"
                              >
                                <EuiFlexItem grow={true}>
                                  <EuiText size="s" textAlign="left">
                                    {rec.text}
                                  </EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                  <EuiFlexGroup
                                    alignItems="center"
                                    gutterSize="xs"
                                    responsive={false}
                                  >
                                    <EuiText size="xs" color="subdued" textAlign="left">
                                      {rec.stepsCount}{' '}
                                      {i18n.translate('presentationPanel.panelInsights.steps', {
                                        defaultMessage: 'steps',
                                      })}
                                    </EuiText>
                                    {hasSubSteps && (
                                      <EuiIcon
                                        type={isExpanded ? 'arrowUp' : 'arrowRight'}
                                        size="s"
                                        color="subdued"
                                      />
                                    )}
                                  </EuiFlexGroup>
                                </EuiFlexItem>
                              </EuiFlexGroup>
                            </EuiCard>
                          </div>
                          {isExpanded && hasSubSteps && rec.links && (
                            <div
                              css={css`
                                margin-top: 0;
                                margin-left: ${euiTheme.size.xl};
                                padding-left: ${euiTheme.size.m};
                                border-left: 1px solid ${euiTheme.border.color};
                                display: flex;
                                flex-direction: column;
                                align-items: stretch;
                              `}
                            >
                              {rec.links.map((link, linkIdx) => {
                                const esqlKey = `${rec.id}-${linkIdx}`;
                                const isReviewEsql =
                                  link.label === 'Review ESQL' || link.label === 'Review ES|QL';
                                const isEsqlAccordionOpen = expandedEsqlKey === esqlKey;

                                return (
                                  <div
                                    key={linkIdx}
                                    css={css`
                                      position: relative;
                                      width: 100%;
                                      margin-block: 4px;
                                      &::before {
                                        content: '';
                                        position: absolute;
                                        left: -${euiTheme.size.m};
                                        top: 50%;
                                        width: ${euiTheme.size.m};
                                        height: 1px;
                                        background: ${euiTheme.border.color};
                                      }
                                    `}
                                  >
                                    <EuiCard
                                      title=""
                                      description=""
                                      display="plain"
                                      hasBorder
                                      paddingSize="none"
                                      css={css`
                                        background: #f6f9fc !important;
                                        border-color: #e3e8f2 !important;
                                        width: 100%;
                                        .euiCard__content {
                                          padding: 12px;
                                          text-align: left;
                                        }
                                        [class*='euiCard_children'],
                                        [class*='euiCard__children'] {
                                          margin-block-start: 0 !important;
                                        }
                                      `}
                                    >
                                      {isReviewEsql ? (
                                        <>
                                          <EuiButtonEmpty
                                            size="xs"
                                            iconType={link.iconType ?? 'arrowRight'}
                                            color="text"
                                            flush="left"
                                            onClick={() =>
                                              setExpandedEsqlKey(
                                                isEsqlAccordionOpen ? null : esqlKey
                                              )
                                            }
                                          >
                                            {link.label}
                                          </EuiButtonEmpty>
                                          {isEsqlAccordionOpen && (
                                            <div
                                              css={css`
                                                margin-top: ${euiTheme.size.s};
                                              `}
                                            >
                                              <EuiCodeBlock
                                                language="esql"
                                                isCopyable
                                                paddingSize="s"
                                                fontSize="s"
                                              >
                                                {`FROM logs.android*
| WHERE message CONTAINS "WindowManager" OR message CONTAINS "transaction timeout"
| STATS count = count() BY message
| SORT count DESC
| LIMIT 20`}
                                              </EuiCodeBlock>
                                            </div>
                                          )}
                                        </>
                                      ) : linkIdx === 0 ? (
                                        <EuiLink
                                          href="#"
                                          onClick={(e: React.MouseEvent) => e.preventDefault()}
                                          color="primary"
                                          css={css`
                                            font-size: ${euiTheme.font.scale.s};
                                            display: inline-flex;
                                            align-items: center;
                                            text-align: left;
                                          `}
                                        >
                                          {link.iconType && (
                                            <EuiIcon
                                              type={link.iconType}
                                              size="s"
                                              css={css`
                                                margin-right: ${euiTheme.size.xs};
                                              `}
                                            />
                                          )}
                                          {link.label}
                                        </EuiLink>
                                      ) : (
                                        <EuiButtonEmpty
                                          size="xs"
                                          iconType={link.iconType ?? 'arrowRight'}
                                          color="text"
                                          flush="left"
                                          onClick={(e: React.MouseEvent) => e.preventDefault()}
                                        >
                                          {link.label}
                                        </EuiButtonEmpty>
                                      )}
                                    </EuiCard>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </EuiAccordion>
              </EuiPanel>
            </div>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <EuiPanel hasBorder paddingSize="m" hasShadow={false}>
              <EuiAccordion
                id="panelInsightsEventsTimeline"
                buttonContent={
                  <EuiText size="xs">
                    <strong>
                      {i18n.translate('presentationPanel.panelInsights.eventsTimeline', {
                        defaultMessage: 'Events timeline',
                      })}
                    </strong>
                  </EuiText>
                }
                arrowDisplay="left"
                paddingSize="none"
                initialIsOpen={false}
                css={css`
                  .euiAccordion__childWrapper {
                    padding: 0;
                  }
                `}
              >
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                  `}
                >
                  <EuiText size="xs" color="subdued">
                    {detail.eventsTimeline.isOngoing
                      ? i18n.translate('presentationPanel.panelInsights.insightStartedOngoing', {
                          defaultMessage:
                            "The insight has started at {time}, and it's still ongoing.",
                          values: { time: detail.eventsTimeline.startedAt },
                        })
                      : i18n.translate('presentationPanel.panelInsights.insightStartedResolved', {
                          defaultMessage: 'The insight started at {time} and has been resolved.',
                          values: { time: detail.eventsTimeline.startedAt },
                        })}
                  </EuiText>
                  <EventsTimelinePreview
                    lanes={detail.eventsTimeline.lanes}
                    startedAt={detail.eventsTimeline.startedAt}
                    eventPopovers={detail.eventsTimeline.eventPopovers}
                  />
                </div>
              </EuiAccordion>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlyoutBody>
    </EuiFlyout>
  );
}

interface InsightCardProps {
  insight: InsightCardData;
  onOpenDetails?: (insight: InsightCardData) => void;
  onStartChat?: () => void;
}

export function InsightCard({ insight, onOpenDetails, onStartChat }: InsightCardProps) {
  const config = severityConfig[insight.severity] ?? severityConfig.low;
  const { euiTheme } = useEuiTheme();

  const handleStartChat = useCallback(() => {
    if (onStartChat) {
      onStartChat();
    }
  }, [onStartChat]);

  const handleActionClick = useCallback(
    (action: NonNullable<InsightCardData['actions']>[number]) => {
      if (action.actionId === 'startChat') {
        handleStartChat();
      } else if (action.actionId === 'openDetails' && onOpenDetails) {
        onOpenDetails(insight);
      } else {
        action.onClick?.();
      }
    },
    [handleStartChat, onOpenDetails, insight]
  );

  return (
    <EuiCard
      paddingSize="m"
      title=""
      description=""
      display="plain"
      hasBorder={false}
      css={css`
        padding: 12px;
        min-height: ${CARD_MIN_HEIGHT}px;
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
            <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
              {insight.status && (
                <EuiBadge color={insight.status === 'ongoing' ? 'accent' : 'success'}>
                  {insight.status === 'ongoing'
                    ? i18n.translate('presentationPanel.panelInsights.ongoing', {
                        defaultMessage: 'Ongoing',
                      })
                    : i18n.translate('presentationPanel.panelInsights.resolved', {
                        defaultMessage: 'Resolved',
                      })}
                </EuiBadge>
              )}
              <EuiBadge color={config.color}>
                {i18n.translate(`presentationPanel.panelInsights.severity.${insight.severity}`, {
                  defaultMessage: insight.severity,
                })}
              </EuiBadge>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
              <EuiText size="xs" color="subdued">
                {i18n.translate('presentationPanel.panelInsights.significantEvents', {
                  defaultMessage: 'Significant events {count}',
                  values: { count: insight.significantEventsCount },
                })}
              </EuiText>
              <SeverityDots colors={[1, 2, 3].map(() => SEVERITY_DOT_COLORS[config.dots])} />
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiText size="s" textAlign="left">
          <strong>{insight.title}</strong>
        </EuiText>

        <EuiText size="xs" color="subdued" textAlign="left">
          {truncateDescription(insight.description, DESCRIPTION_MAX_LENGTH)}
        </EuiText>

        <EuiFlexItem grow={false} css={css({ alignSelf: 'flex-start' })}>
          <EuiBadge color="hollow">{insight.streamTag}</EuiBadge>
        </EuiFlexItem>

        {insight.actions && insight.actions.length > 0 && (
          <>
            <EuiHorizontalRule margin="s" />
            <EuiFlexGroup gutterSize="m" alignItems="center" wrap responsive={false}>
              {insight.actions.map((action) => (
                <EuiFlexItem grow={false} key={action.label}>
                  <EuiButtonEmpty
                    size="xs"
                    flush="left"
                    color={
                      action.actionId === 'archive'
                        ? 'primary'
                        : action.type === 'secondary'
                        ? 'text'
                        : 'primary'
                    }
                    iconType={action.icon}
                    onClick={() => handleActionClick(action)}
                    data-test-subj={`panelInsightsAction-${action.label}`}
                  >
                    {action.label}
                  </EuiButtonEmpty>
                </EuiFlexItem>
              ))}
            </EuiFlexGroup>
          </>
        )}
      </EuiFlexGroup>
    </EuiCard>
  );
}

export { InsightDetailFlyout, getDefaultDetailFromInsight };
