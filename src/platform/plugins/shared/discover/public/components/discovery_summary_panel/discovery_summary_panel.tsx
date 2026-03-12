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
import { useDiscoverServices } from '../../hooks/use_discover_services';

const AGENT_BUILDER_APP_ID = 'agent_builder';
const DESCRIPTION_MAX_LENGTH = 120;
const CARD_MIN_HEIGHT = 220;

const IncidentBadgeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.89031 3.10972C8.85549 3.07486 8.81413 3.0472 8.7686 3.02832C8.72308 3.00945 8.67428 2.99974 8.625 2.99974C8.57572 2.99974 8.52692 3.00945 8.4814 3.02832C8.43587 3.0472 8.39451 3.07486 8.35969 3.10972L6.96984 4.50003H5.03016L3.64031 3.10972C3.56995 3.03936 3.47451 2.99983 3.375 2.99983C3.27549 2.99983 3.18005 3.03936 3.10969 3.10972C3.03932 3.18009 2.99979 3.27552 2.99979 3.37503C2.99979 3.47455 3.03932 3.56998 3.10969 3.64035L4.5 5.03019V6.96988L3.10969 8.35972C3.03932 8.43009 2.99979 8.52552 2.99979 8.62503C2.99979 8.72455 3.03932 8.81998 3.10969 8.89035C3.18005 8.96071 3.27549 9.00024 3.375 9.00024C3.47451 9.00024 3.56995 8.96071 3.64031 8.89035L5.03016 7.50003H6.96984L8.35969 8.89035C8.39453 8.92519 8.43589 8.95283 8.48141 8.97168C8.52694 8.99054 8.57573 9.00024 8.625 9.00024C8.67427 9.00024 8.72306 8.99054 8.76859 8.97168C8.81411 8.95283 8.85547 8.92519 8.89031 8.89035C8.92515 8.85551 8.95279 8.81414 8.97165 8.76862C8.9905 8.7231 9.00021 8.67431 9.00021 8.62503C9.00021 8.57576 8.9905 8.52697 8.97165 8.48145C8.95279 8.43593 8.92515 8.39456 8.89031 8.35972L7.5 6.96988V5.03019L8.89031 3.64035C8.92518 3.60552 8.95284 3.56416 8.97171 3.51864C8.99058 3.47311 9.00029 3.42432 9.00029 3.37503C9.00029 3.32575 8.99058 3.27696 8.97171 3.23143C8.95284 3.18591 8.92518 3.14455 8.89031 3.10972ZM5.25 5.25003H6.75V6.75003H5.25V5.25003ZM6.49266 2.87488C6.60889 2.5465 6.8064 2.25291 7.06677 2.02149C7.32714 1.79008 7.64187 1.62837 7.98162 1.55147C8.32137 1.47457 8.67506 1.48497 9.00971 1.58171C9.34435 1.67844 9.64904 1.85836 9.89536 2.10468C10.1417 2.35099 10.3216 2.65568 10.4183 2.99033C10.5151 3.32497 10.5255 3.67866 10.4486 4.01841C10.3717 4.35816 10.21 4.6729 9.97854 4.93327C9.74713 5.19363 9.45354 5.39114 9.12516 5.50738C9.08514 5.52255 9.04279 5.53064 9 5.53128C8.91158 5.53124 8.82603 5.49996 8.75843 5.44297C8.69084 5.38597 8.64556 5.30692 8.63059 5.21978C8.61561 5.13264 8.63191 5.04302 8.67661 4.96673C8.7213 4.89044 8.79151 4.8324 8.87484 4.80285C9.08379 4.72886 9.2706 4.60316 9.41785 4.43747C9.56509 4.27178 9.66797 4.0715 9.71689 3.8553C9.76582 3.63911 9.75919 3.41404 9.69763 3.2011C9.63607 2.98816 9.52158 2.79428 9.36484 2.63754C9.2081 2.4808 9.01422 2.36631 8.80128 2.30475C8.58834 2.24319 8.36327 2.23656 8.14708 2.28548C7.93088 2.33441 7.7306 2.43729 7.56491 2.58453C7.39922 2.73178 7.27352 2.91858 7.19953 3.12753C7.18373 3.17476 7.15868 3.21836 7.12585 3.2558C7.09302 3.29324 7.05306 3.32376 7.0083 3.34559C6.96354 3.36742 6.91489 3.38012 6.86517 3.38294C6.81545 3.38577 6.76567 3.37866 6.71873 3.36204C6.67179 3.34542 6.62863 3.31961 6.59177 3.28613C6.55491 3.25265 6.52509 3.21216 6.50404 3.16703C6.483 3.1219 6.47115 3.07303 6.4692 3.02327C6.46724 2.97351 6.47522 2.92386 6.49266 2.87722V2.87488ZM10.5 8.43753C10.5002 8.92423 10.3284 9.39534 10.0147 9.76753C9.70114 10.1397 9.26601 10.389 8.78632 10.4713C8.30664 10.5536 7.81329 10.4637 7.39355 10.2173C6.9738 9.97097 6.65469 9.58413 6.49266 9.12519C6.46146 9.03195 6.46813 8.93018 6.51123 8.84181C6.55433 8.75344 6.63042 8.68553 6.7231 8.65271C6.81579 8.61989 6.91765 8.62479 7.00676 8.66634C7.09587 8.70789 7.1651 8.78278 7.19953 8.87488C7.27352 9.08383 7.39922 9.27064 7.56491 9.41788C7.7306 9.56512 7.93088 9.668 8.14708 9.71693C8.36327 9.76585 8.58834 9.75922 8.80128 9.69766C9.01422 9.6361 9.2081 9.52161 9.36484 9.36487C9.52158 9.20814 9.63607 9.01425 9.69763 8.80131C9.75919 8.58837 9.76582 8.36331 9.71689 8.14711C9.66797 7.93092 9.56509 7.73063 9.41785 7.56494C9.2706 7.39925 9.08379 7.27355 8.87484 7.19957C8.78275 7.16513 8.70786 7.09591 8.66631 7.0068C8.62475 6.91769 8.61986 6.81582 8.65268 6.72314C8.6855 6.63046 8.75341 6.55437 8.84178 6.51127C8.93015 6.46816 9.03191 6.46149 9.12516 6.49269C9.52703 6.63532 9.87492 6.89882 10.1211 7.24703C10.3672 7.59524 10.4996 8.0111 10.5 8.43753ZM5.50734 9.12519C5.39111 9.45357 5.1936 9.74716 4.93323 9.97858C4.67287 10.21 4.35813 10.3717 4.01838 10.4486C3.67863 10.5255 3.32494 10.5151 2.99029 10.4184C2.65565 10.3216 2.35096 10.1417 2.10464 9.89539C1.85833 9.64908 1.67841 9.34439 1.58167 9.00974C1.48494 8.6751 1.47454 8.32141 1.55144 7.98166C1.62834 7.64191 1.79004 7.32717 2.02146 7.0668C2.25287 6.80644 2.54646 6.60892 2.87484 6.49269C2.96809 6.46149 3.06985 6.46816 3.15822 6.51127C3.24659 6.55437 3.3145 6.63046 3.34732 6.72314C3.38014 6.81582 3.37525 6.91769 3.33369 7.0068C3.29214 7.09591 3.21725 7.16513 3.12516 7.19957C2.91621 7.27355 2.7294 7.39925 2.58215 7.56494C2.43491 7.73063 2.33203 7.93092 2.28311 8.14711C2.23418 8.36331 2.24081 8.58837 2.30237 8.80131C2.36393 9.01425 2.47842 9.20814 2.63516 9.36487C2.7919 9.52161 2.98578 9.6361 3.19872 9.69766C3.41166 9.75922 3.63673 9.76585 3.85292 9.71693C4.06912 9.668 4.2694 9.56512 4.43509 9.41788C4.60078 9.27064 4.72648 9.08383 4.80047 8.87488C4.8349 8.78278 4.90413 8.70789 4.99324 8.66634C5.08235 8.62479 5.18421 8.61989 5.2769 8.65271C5.36958 8.68553 5.44567 8.75344 5.48877 8.84181C5.53187 8.93018 5.53854 9.03195 5.50734 9.12519ZM1.5 3.56253C1.49976 3.07584 1.67165 2.60473 1.98526 2.23254C2.29886 1.86035 2.73399 1.61105 3.21368 1.52874C3.69336 1.44643 4.18671 1.5364 4.60646 1.78275C5.0262 2.02909 5.34531 2.41594 5.50734 2.87488C5.52478 2.92152 5.53276 2.97117 5.5308 3.02093C5.52885 3.07069 5.517 3.11956 5.49596 3.16469C5.47491 3.20982 5.44509 3.25031 5.40823 3.28379C5.37137 3.31727 5.32821 3.34307 5.28127 3.3597C5.23433 3.37632 5.18455 3.38342 5.13483 3.3806C5.08511 3.37778 5.03646 3.36508 4.9917 3.34325C4.94694 3.32142 4.90698 3.2909 4.87415 3.25346C4.84132 3.21602 4.81627 3.17241 4.80047 3.12519C4.72648 2.91624 4.60078 2.72943 4.43509 2.58219C4.2694 2.43494 4.06912 2.33206 3.85292 2.28314C3.63673 2.23422 3.41166 2.24084 3.19872 2.3024C2.98578 2.36397 2.7919 2.47846 2.63516 2.63519C2.47842 2.79193 2.36393 2.98581 2.30237 3.19876C2.24081 3.4117 2.23418 3.63676 2.28311 3.85296C2.33203 4.06915 2.43491 4.26944 2.58215 4.43513C2.7294 4.60082 2.91621 4.72652 3.12516 4.8005C3.21023 4.82879 3.28236 4.88662 3.32846 4.96352C3.37456 5.04041 3.39159 5.13128 3.37645 5.21965C3.36132 5.30802 3.31502 5.38804 3.24596 5.44521C3.1769 5.50238 3.08964 5.53292 3 5.53128C2.95735 5.5314 2.915 5.5241 2.87484 5.50972C2.47259 5.36696 2.12444 5.1031 1.87825 4.75442C1.63206 4.40575 1.49992 3.98937 1.5 3.56253Z"
      fill="currentColor"
    />
  </svg>
);

export interface InsightCardData {
  id: string;
  title: string;
  description: string;
  status?: 'ongoing' | 'resolved';
  severity: 'critical' | 'high' | 'medium' | 'low';
  significantEventsCount: number;
  streamTag: string;
  actions?: Array<{
    label: string;
    icon?: string;
    type?: 'primary' | 'secondary';
    actionId?: 'openDetails' | 'startChat' | 'archive';
    onClick?: () => void;
  }>;
}

/** Extended detail data for the child flyout - aligns with card data but adds richer content */
export interface InsightDetailData {
  generatedAt: string;
  type: 'incident' | 'anomaly' | 'pattern';
  generalInfo: {
    title: string;
    severity: string;
    relevance: number;
    type: string;
    stream: string;
  };
  description: {
    text: string;
    timestamp: string;
    referencesCount?: number;
  };
  topEvents: {
    totalPages: number;
    totalEvents: number;
    events: Array<{ count: number; message: string }>;
  };
  recommendations: {
    startedAt: string;
    isOngoing: boolean;
    items: Array<{
      id: string;
      text: string;
      stepsCount: number;
      links?: Array<{ label: string; iconType?: string }>;
    }>;
  };
  eventsTimeline: {
    startedAt: string;
    isOngoing: boolean;
    lanes: Array<{ stream: string; eventCount: number }>;
    eventPopovers?: Array<{
      relativeTime: string;
      title: string;
      summary: string;
      logSnippet: string;
      /** Severity badge (e.g. "High", "Medium") */
      severity?: string;
      /** Total count for metadata badge */
      totalCount?: number;
      /** Messages with count for top-events-like navigation; derived from logSnippet if absent */
      messages?: Array<{ count: number; message: string }>;
    }>;
  };
}

const severityConfig: Record<
  string,
  { color: 'danger' | 'warning' | 'primary' | 'hollow'; dots: 'danger' | 'warning' | 'primary' }
> = {
  critical: { color: 'danger', dots: 'danger' },
  high: { color: 'danger', dots: 'danger' },
  medium: { color: 'warning', dots: 'warning' },
  low: { color: 'hollow', dots: 'primary' },
};

// Severity dot colors matching design: red, orange, yellow-orange
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

// Sample data based on the Discovery summary screenshot
const DEFAULT_INSIGHTS: InsightCardData[] = [
  {
    id: '1',
    title: 'Fleet Server Dependency Chain - Single Point of Failure',
    description:
      'The Android logs indicate frequent warnings and errors related to the WindowManager, along with high host activity across multiple devices.',
    status: 'ongoing',
    severity: 'high',
    significantEventsCount: 44,
    streamTag: 'logs.apache',
    actions: [
      { label: 'Open details', icon: 'expand', type: 'primary', actionId: 'openDetails' },
      { label: 'Start a chat', icon: 'productAgent', type: 'primary', actionId: 'startChat' },
    ],
  },
  {
    id: '2',
    title: 'New version expect a Boolean field, which is not valid',
    description:
      'The Otel Collector is ingesting logs but not mapping resource attributes into searchable fields. resource.attributes.service.name is empty for all (n) documents.',
    status: 'resolved',
    severity: 'medium',
    significantEventsCount: 544,
    streamTag: 'logs.windows',
    actions: [
      { label: 'Open details', icon: 'expand', type: 'primary', actionId: 'openDetails' },
      { label: 'Archive', icon: 'archive', type: 'secondary', actionId: 'archive' },
    ],
  },
  {
    id: '3',
    title: 'Spike in error rate across log streams',
    description:
      'Multiple log streams show an increase in error-level events during the last 2 hours, correlating with a deployment.',
    status: 'ongoing',
    severity: 'medium',
    significantEventsCount: 128,
    streamTag: 'logs.system',
    actions: [
      { label: 'Open details', icon: 'expand', type: 'primary', actionId: 'openDetails' },
      { label: 'Start a chat', icon: 'productAgent', type: 'primary', actionId: 'startChat' },
    ],
  },
  {
    id: '4',
    title: 'Unusual memory usage pattern detected',
    description:
      'Memory-related log entries from multiple hosts indicate potential resource exhaustion patterns.',
    severity: 'low',
    significantEventsCount: 23,
    streamTag: 'logs.application',
    actions: [{ label: 'Open details', icon: 'expand', type: 'primary', actionId: 'openDetails' }],
  },
  {
    id: '5',
    title: 'Repeated authentication failures from unknown IP range',
    description:
      'Multiple failed login attempts detected from an unfamiliar IP subnet. The pattern suggests a possible brute-force or credential-stuffing attempt against the authentication service.',
    status: 'ongoing',
    severity: 'critical',
    significantEventsCount: 312,
    streamTag: 'logs.auth',
    actions: [
      { label: 'Open details', icon: 'expand', type: 'primary', actionId: 'openDetails' },
      { label: 'Start a chat', icon: 'productAgent', type: 'primary', actionId: 'startChat' },
    ],
  },
];

/** Detail data for child flyout - each key matches insight id */
const INSIGHT_DETAIL_DATA: Record<string, InsightDetailData> = {
  '1': {
    generatedAt: 'Generated today at 11:22 AM',
    type: 'incident',
    generalInfo: {
      title: 'Fleet Server Dependency Chain - Single Point of Failure',
      severity: 'High',
      relevance: 78,
      type: 'Incident',
      stream: 'logs.apache',
    },
    description: {
      text: 'The Android logs indicate frequent warnings and errors related to the WindowManager, along with high host activity across multiple devices. This suggests a potential single point of failure in the Fleet Server dependency chain, where WindowManager-related issues could propagate to dependent services and affect multiple hosts.',
      timestamp: 'Today at 11:22',
      referencesCount: 2,
    },
    topEvents: {
      totalPages: 5,
      totalEvents: 44,
      events: [
        { count: 18, message: 'WindowManager transaction timeout' },
        { count: 12, message: 'high host activity detected' },
        { count: 8, message: 'surfaceflinger buffer underrun' },
        { count: 4, message: 'Choreographer skipped frames' },
        { count: 2, message: 'input dispatch timeout' },
      ],
    },
    recommendations: {
      startedAt: '11:22:00',
      isOngoing: true,
      items: [
        {
          id: 'r1',
          text: 'Investigate the WindowManager logs for specific error codes and transaction timeouts to identify the root cause of the dependency chain.',
          stepsCount: 2,
          links: [
            { label: 'Android logs Discover view', iconType: 'search' },
            { label: 'Review ESQL', iconType: 'arrowRight' },
          ],
        },
        {
          id: 'r2',
          text: 'Check Fleet Server configuration and dependency health for potential single points of failure.',
          stepsCount: 3,
        },
        {
          id: 'r3',
          text: 'Consider scaling or load-balancing if high host activity is causing the WindowManager bottlenecks.',
          stepsCount: 2,
        },
      ],
    },
    eventsTimeline: {
      startedAt: '11:22:00',
      isOngoing: true,
      lanes: [
        { stream: 'logs.apache', eventCount: 12 },
        { stream: 'logs.apache', eventCount: 8 },
        { stream: 'logs.apache', eventCount: 15 },
      ],
      eventPopovers: [
        {
          relativeTime: '12min ago',
          title: 'WindowManager transaction timeout',
          summary:
            'Transaction timeout errors in WindowManager have surged, indicating potential single points of failure in the Fleet Server dependency chain.',
          severity: 'High',
          totalCount: 12,
          messages: [
            { count: 7, message: 'Transaction timeout (code=13)' },
            { count: 5, message: 'surfaceflinger buffer underrun' },
          ],
          logSnippet: `[ERROR] [2025-03-04 11:22:15,234] [android.ui] WindowManager: Transaction timeout (code=13)
  at android.view.WindowManagerGlobal.lockAndGetViewRoot
  at com.android.server.wm.WindowManagerService.executeAppTransition
  Cause: surfaceflinger buffer underrun; high host activity`,
        },
        {
          relativeTime: '8min ago',
          title: 'SurfaceFlinger buffer underrun',
          summary:
            'Buffer underrun in SurfaceFlinger suggests display pipeline bottlenecks affecting multiple Android hosts.',
          severity: 'Medium',
          totalCount: 8,
          messages: [{ count: 8, message: 'buffer underrun' }],
          logSnippet: `[ERROR] [2025-03-04 11:22:45,891] [android.gfx] SurfaceFlinger: buffer underrun
  at android.gui.SurfaceComposerClient
  Related: Choreographer skipped 12 frames; WindowManager timeout`,
        },
        {
          relativeTime: '5min ago',
          title: 'High host activity detected',
          summary:
            'Elevated host activity across the Fleet Server cluster may be contributing to WindowManager bottlenecks.',
          severity: 'Low',
          totalCount: 15,
          messages: [
            { count: 9, message: 'High host activity (78% threshold)' },
            { count: 6, message: 'WindowManager errors correlated' },
          ],
          logSnippet: `[WARN] [2025-03-04 11:23:02,112] [fleet] High host activity (78% threshold)
  Hosts: 12 active; WindowManager errors correlated with spike`,
        },
      ],
    },
  },
  '2': {
    generatedAt: 'Generated today at 9:15 AM',
    type: 'anomaly',
    generalInfo: {
      title: 'New version expect a Boolean field, which is not valid',
      severity: 'Medium',
      relevance: 62,
      type: 'Anomaly',
      stream: 'logs.windows',
    },
    description: {
      text: 'The Otel Collector is ingesting logs but not mapping resource attributes into searchable fields. resource.attributes.service.name is empty for all (n) documents. This indicates a schema mismatch or configuration issue in the OpenTelemetry pipeline.',
      timestamp: 'Today at 9:15',
      referencesCount: 1,
    },
    topEvents: {
      totalPages: 5,
      totalEvents: 544,
      events: [
        { count: 312, message: 'field service.name is empty' },
        { count: 198, message: 'resource attribute mapping failed' },
        { count: 87, message: 'invalid schema type' },
      ],
    },
    recommendations: {
      startedAt: '9:15:00',
      isOngoing: false,
      items: [
        {
          id: 'r1',
          text: 'Update the Otel Collector configuration to include resource attribute mappings.',
          stepsCount: 2,
          links: [{ label: 'View Otel config', iconType: 'documentEdit' }],
        },
      ],
    },
    eventsTimeline: {
      startedAt: '9:15:00',
      isOngoing: false,
      lanes: [
        { stream: 'logs.windows', eventCount: 8 },
        { stream: 'logs.windows', eventCount: 4 },
      ],
      eventPopovers: [
        {
          relativeTime: '2h ago',
          title: 'Field service.name is empty',
          summary:
            'Otel Collector is ingesting logs but not mapping resource.attributes.service.name into searchable fields.',
          severity: 'Medium',
          totalCount: 312,
          messages: [
            { count: 312, message: 'field service.name is empty' },
            { count: 198, message: 'resource attribute mapping failed' },
          ],
          logSnippet: `[ERROR] [2025-03-04 09:15:22,445] resource.attributes.service.name is empty
  Schema mismatch: expected string, got undefined
  at otel.collector.attribute_mapper`,
        },
      ],
    },
  },
  '3': {
    generatedAt: 'Generated today at 10:30 AM',
    type: 'incident',
    generalInfo: {
      title: 'Spike in error rate across log streams',
      severity: 'Medium',
      relevance: 68,
      type: 'Incident',
      stream: 'logs.system',
    },
    description: {
      text: 'Multiple log streams show an increase in error-level events during the last 2 hours, correlating with a deployment. The error rate has risen from baseline levels to approximately 3x normal across logs.system, logs.application, and logs.ecs.',
      timestamp: 'Today at 10:30',
      referencesCount: 3,
    },
    topEvents: {
      totalPages: 5,
      totalEvents: 128,
      events: [
        { count: 89, message: 'internal server error' },
        { count: 56, message: 'timeout waiting for connection' },
        { count: 34, message: 'database connection refused' },
      ],
    },
    recommendations: {
      startedAt: '10:30:00',
      isOngoing: true,
      items: [
        {
          id: 'r1',
          text: 'Review deployment logs and rollback if the error spike correlates with a recent release.',
          stepsCount: 2,
        },
        {
          id: 'r2',
          text: 'Check for cascading failures in dependent services.',
          stepsCount: 3,
        },
      ],
    },
    eventsTimeline: {
      startedAt: '10:30:00',
      isOngoing: true,
      lanes: [
        { stream: 'logs.system', eventCount: 10 },
        { stream: 'logs.application', eventCount: 6 },
        { stream: 'logs.ecs', eventCount: 9 },
      ],
      eventPopovers: [
        {
          relativeTime: '1h ago',
          title: 'Internal server error spike post-deployment',
          summary:
            'Error rate has risen to approximately 3x normal across logs.system, logs.application, and logs.ecs.',
          severity: 'Medium',
          totalCount: 128,
          messages: [
            { count: 89, message: 'internal server error' },
            { count: 56, message: 'timeout waiting for connection' },
            { count: 34, message: 'database connection refused' },
          ],
          logSnippet: `[ERROR] [2025-03-04 10:31:05,223] internal server error
  Deployment: v2.4.1 rolled out at 10:28
  at gateway.handler.request
  Cause: timeout waiting for connection`,
        },
      ],
    },
  },
  '4': {
    generatedAt: 'Generated yesterday at 4:20 PM',
    type: 'pattern',
    generalInfo: {
      title: 'Unusual memory usage pattern detected',
      severity: 'Low',
      relevance: 45,
      type: 'Pattern',
      stream: 'logs.application',
    },
    description: {
      text: 'Memory-related log entries from multiple hosts indicate potential resource exhaustion patterns. The pattern shows gradual memory growth followed by periodic drops, suggesting possible GC pressure or leak-like behavior.',
      timestamp: 'Yesterday at 4:20',
      referencesCount: 1,
    },
    topEvents: {
      totalPages: 3,
      totalEvents: 23,
      events: [
        { count: 15, message: 'high memory usage warning' },
        { count: 8, message: 'GC pause exceeded threshold' },
      ],
    },
    recommendations: {
      startedAt: '16:20:00',
      isOngoing: true,
      items: [
        {
          id: 'r1',
          text: 'Profile the application heap and identify potential memory leaks.',
          stepsCount: 2,
        },
      ],
    },
    eventsTimeline: {
      startedAt: '16:20:00',
      isOngoing: true,
      lanes: [{ stream: 'logs.application', eventCount: 5 }],
    },
  },
  '5': {
    generatedAt: 'Generated today at 11:45 AM',
    type: 'incident',
    generalInfo: {
      title: 'Repeated authentication failures from unknown IP range',
      severity: 'Critical',
      relevance: 92,
      type: 'Incident',
      stream: 'logs.auth',
    },
    description: {
      text: 'Multiple failed login attempts detected from an unfamiliar IP subnet. The pattern suggests a possible brute-force or credential-stuffing attempt against the authentication service. 312 failed attempts in the last hour from 192.168.45.x range.',
      timestamp: 'Today at 11:45',
      referencesCount: 4,
    },
    topEvents: {
      totalPages: 5,
      totalEvents: 312,
      events: [
        { count: 63, message: 'authentication failure' },
        { count: 58, message: 'invalid credentials' },
        { count: 44, message: 'account locked' },
        { count: 31, message: 'MFA required' },
        { count: 22, message: 'IP block recommended' },
      ],
    },
    recommendations: {
      startedAt: '11:45:00',
      isOngoing: true,
      items: [
        {
          id: 'r1',
          text: 'Block the suspicious IP range immediately and review authentication logs.',
          stepsCount: 2,
          links: [
            { label: 'Auth logs Discover view', iconType: 'search' },
            { label: 'Review ESQL', iconType: 'arrowRight' },
          ],
        },
        {
          id: 'r2',
          text: 'Enable rate limiting and consider temporary lockout policies.',
          stepsCount: 2,
        },
      ],
    },
    eventsTimeline: {
      startedAt: '11:45:00',
      isOngoing: true,
      lanes: [
        { stream: 'logs.ecs', eventCount: 18 },
        { stream: 'logs.ecs', eventCount: 12 },
        { stream: 'logs.ecs', eventCount: 9 },
      ],
      eventPopovers: [
        {
          relativeTime: '35min ago',
          title: 'SSH Authentication Failures',
          summary:
            'PaymentProcessingException errors for POST /api/ payments have surged from ~5 per day to over 50 per minute.',
          severity: 'High',
          totalCount: 44,
          messages: [
            { count: 83, message: 'authentication failure' },
            { count: 72, message: 'invalid credentials' },
            { count: 89, message: 'account locked' },
          ],
          logSnippet: `[ERROR] [2025-03-04 11:45:22,789] [http-nio-8080-exec-15]
  auth.service.GlobalExceptionHandler: Unhandled exception processing request [POST /api/auth/login]
  auth.exception.AuthenticationException: Invalid credentials (Attempt 312 from 192.168.45.23)
    at auth.service.validateCredentials`,
        },
        {
          relativeTime: '28min ago',
          title: 'Authentication failure from 192.168.45.x',
          summary:
            'Multiple failed login attempts detected from unfamiliar IP subnet—possible brute-force or credential-stuffing attempt.',
          severity: 'Medium',
          totalCount: 12,
          messages: [
            { count: 8, message: 'Invalid credentials' },
            { count: 4, message: 'Account locked' },
          ],
          logSnippet: `[ERROR] [2025-03-04 11:46:15,102] [auth] Authentication failure
  IP: 192.168.45.23; User: service_account; Attempt 12/20
  at auth.service.validateCredentials`,
        },
      ],
    },
  },
};

function truncateDescription(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
}

function getDefaultDetailFromInsight(insight: InsightCardData): InsightDetailData {
  return {
    generatedAt: i18n.translate('discover.discoverySummary.generatedToday', {
      defaultMessage: 'Generated today',
    }),
    type: 'incident',
    generalInfo: {
      title: insight.title,
      severity: insight.severity.charAt(0).toUpperCase() + insight.severity.slice(1),
      relevance: 50,
      type: 'Incident',
      stream: insight.streamTag,
    },
    description: {
      text: insight.description,
      timestamp: i18n.translate('discover.discoverySummary.today', {
        defaultMessage: 'Today',
      }),
    },
    topEvents: {
      totalPages: 1,
      totalEvents: insight.significantEventsCount,
      events: [{ count: insight.significantEventsCount, message: insight.title }],
    },
    recommendations: {
      startedAt: '--:--:--',
      isOngoing: insight.status === 'ongoing',
      items: [
        {
          id: 'r1',
          text: insight.description,
          stepsCount: 1,
        },
      ],
    },
    eventsTimeline: {
      startedAt: '--:--:--',
      isOngoing: insight.status === 'ongoing',
      lanes: [{ stream: insight.streamTag, eventCount: insight.significantEventsCount }],
      eventPopovers: [
        {
          relativeTime: i18n.translate('discover.discoverySummary.recently', {
            defaultMessage: 'Recently',
          }),
          title: insight.title,
          summary: insight.description,
          severity: insight.severity.charAt(0).toUpperCase() + insight.severity.slice(1),
          totalCount: insight.significantEventsCount,
          messages: [{ count: insight.significantEventsCount, message: insight.title }],
          logSnippet: `[INFO] Event from ${insight.streamTag}\n  Count: ${insight.significantEventsCount}`,
        },
      ],
    },
  };
}

interface InsightDetailFlyoutProps {
  insight: InsightCardData;
  detail: InsightDetailData;
  onClose: () => void;
  /** When true, renders as child flyout (inside "All insights"); when false, standalone flyout */
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
  const currentEventIndex = currentEventPage;
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
      data-test-subj="discoverySummaryInsightDetailFlyout"
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
          {/* General information */}
          <EuiFlexItem grow={false}>
            <EuiPanel hasBorder paddingSize="m" hasShadow={false}>
              <EuiText size="xs">
                <strong>
                  {i18n.translate('discover.discoverySummary.generalInfo', {
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
                    title: i18n.translate('discover.discoverySummary.generalInfoTitle', {
                      defaultMessage: 'Title',
                    }),
                    description: detail.generalInfo.title,
                  },
                  {
                    title: i18n.translate('discover.discoverySummary.severity', {
                      defaultMessage: 'Severity',
                    }),
                    description: (
                      <EuiBadge color={severityBadgeColor}>{detail.generalInfo.severity}</EuiBadge>
                    ),
                  },
                  {
                    title: i18n.translate('discover.discoverySummary.relevance', {
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
                    title: i18n.translate('discover.discoverySummary.type', {
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
                    title: i18n.translate('discover.discoverySummary.stream', {
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

          {/* Description */}
          <EuiFlexItem grow={false}>
            <EuiPanel hasBorder paddingSize="m" hasShadow={false}>
              <EuiText size="xs">
                <strong>
                  {i18n.translate('discover.discoverySummary.description', {
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
                      aria-label={i18n.translate('discover.discoverySummary.copy', {
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

          {/* Top 5 events */}
          <EuiFlexItem grow={false}>
            <EuiPanel hasBorder paddingSize="m" hasShadow>
              <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" responsive={false}>
                <EuiText size="xs">
                  <strong>
                    {i18n.translate('discover.discoverySummary.topEvents', {
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
                  {i18n.translate('discover.discoverySummary.topEventContributing', {
                    defaultMessage: 'Top event contributing to this insight',
                  })}
                </EuiText>
                <EuiBadge color="hollow">
                  {currentEventIndex + 1} of {detail.topEvents.totalEvents}
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

          {/* Recommendations */}
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
                  id="discoverySummaryRecommendations"
                  buttonContent={
                    <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
                      <EuiText size="xs">
                        <strong>
                          {i18n.translate('discover.discoverySummary.recommendations', {
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
                        ? i18n.translate('discover.discoverySummary.insightStartedOngoing', {
                            defaultMessage:
                              "The insight has started at {time}, and it's still ongoing.",
                            values: { time: detail.recommendations.startedAt },
                          })
                        : i18n.translate('discover.discoverySummary.insightStartedResolved', {
                            defaultMessage: 'The insight started at {time} and has been resolved.',
                            values: { time: detail.recommendations.startedAt },
                          })}
                    </EuiText>
                    {detail.recommendations.items.map((rec) => {
                      const isExpanded = expandedRecId === rec.id;
                      const hasSubSteps = rec.links && rec.links.length > 0;
                      return (
                        <div key={rec.id}>
                          {/* Main step card - plain white */}
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
                                      {i18n.translate('discover.discoverySummary.steps', {
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
                          {/* Sub-step cards - darker background, vertical line with horizontal branches */}
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

          {/* Events timeline */}
          <EuiFlexItem grow={false}>
            <EuiPanel hasBorder paddingSize="m" hasShadow={false}>
              <EuiAccordion
                id="discoverySummaryEventsTimeline"
                buttonContent={
                  <EuiText size="xs">
                    <strong>
                      {i18n.translate('discover.discoverySummary.eventsTimeline', {
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
                      ? i18n.translate('discover.discoverySummary.insightStartedOngoing', {
                          defaultMessage:
                            "The insight has started at {time}, and it's still ongoing.",
                          values: { time: detail.eventsTimeline.startedAt },
                        })
                      : i18n.translate('discover.discoverySummary.insightStartedResolved', {
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

/** Event marker positions (0-100) and types per lane - matches screenshot layout */
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

/** Group markers by position proximity and assign Y offsets for vertical stacking */
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

interface EventPopoverItem {
  relativeTime: string;
  title: string;
  summary: string;
  logSnippet: string;
  severity?: string;
  totalCount?: number;
  messages?: Array<{ count: number; message: string }>;
}

/** Derive messages from logSnippet when not provided */
function getMessagesForPopover(
  popover: EventPopoverItem
): Array<{ count: number; message: string }> {
  if (popover.messages && popover.messages.length > 0) return popover.messages;
  const firstLine = popover.logSnippet.split('\n')[0]?.trim() ?? 'Event';
  const extracted = firstLine.replace(/^\[(ERROR|WARN|INFO)\]\s*/, '').slice(0, 60);
  return [{ count: popover.totalCount ?? 1, message: extracted || 'See log snippet' }];
}

function EventsTimelinePreview({
  lanes,
  startedAt,
  eventPopovers = [],
}: {
  lanes: Array<{ stream: string; eventCount: number }>;
  startedAt: string;
  eventPopovers?: EventPopoverItem[];
}) {
  const { euiTheme } = useEuiTheme();
  const [openPopoverKey, setOpenPopoverKey] = useState<string | null>(null);
  const [currentMessageIndexByKey, setCurrentMessageIndexByKey] = useState<Record<string, number>>(
    {}
  );
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
      {/* Histogram overview - baseline + vertical bars */}
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
      {/* Time axis */}
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
      {/* Timeline lanes with markers */}
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
                      if (!isOpen) {
                        setCurrentMessageIndexByKey((prev) => ({ ...prev, [popoverKey]: 0 }));
                      }
                      setOpenPopoverKey(isOpen ? null : popoverKey);
                    }}
                    onKeyDown={(ev: React.KeyboardEvent) => {
                      if (ev.key === 'Enter' || ev.key === ' ') {
                        ev.preventDefault();
                        if (!isOpen) {
                          setCurrentMessageIndexByKey((prev) => ({ ...prev, [popoverKey]: 0 }));
                        }
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

                const messages = getMessagesForPopover(popoverContent);
                const totalMessages = messages.reduce((s, msg) => s + msg.count, 0);
                const msgIdx = Math.min(
                  currentMessageIndexByKey[popoverKey] ?? 0,
                  messages.length - 1
                );
                const currentMsg = messages[msgIdx];
                const maxCount = Math.max(...messages.map((msg) => msg.count), 1);

                return positionedWrapper(
                  <EuiPopover
                    button={markerButton}
                    isOpen={isOpen}
                    closePopover={() => setOpenPopoverKey(null)}
                    anchorPosition="upCenter"
                    panelPaddingSize="m"
                  >
                    <div
                      css={css`
                        min-width: 340px;
                        max-width: 420px;
                      `}
                    >
                      {/* Metadata row at top */}
                      <EuiFlexGroup
                        gutterSize="s"
                        alignItems="center"
                        responsive={false}
                        wrap
                        css={css`
                          margin-bottom: ${euiTheme.size.s};
                        `}
                      >
                        <EuiFlexItem grow={false}>
                          <EuiFlexGroup gutterSize="xs" alignItems="center" responsive={false}>
                            <EuiIcon type="warning" color="warning" size="s" />
                            <EuiText size="xs" color="subdued">
                              {popoverContent.relativeTime}
                            </EuiText>
                          </EuiFlexGroup>
                        </EuiFlexItem>
                        {popoverContent.severity && (
                          <EuiFlexItem grow={false}>
                            <EuiBadge
                              color="danger"
                              css={css`
                                font-weight: 500;
                              `}
                            >
                              {popoverContent.severity}
                            </EuiBadge>
                          </EuiFlexItem>
                        )}
                        {(popoverContent.totalCount != null || totalMessages > 0) && (
                          <EuiFlexItem grow={false}>
                            <EuiBadge color="hollow">
                              {i18n.translate('discover.discoverySummary.countBadge', {
                                defaultMessage: 'Count {count}',
                                values: { count: popoverContent.totalCount ?? totalMessages },
                              })}
                            </EuiBadge>
                          </EuiFlexItem>
                        )}
                      </EuiFlexGroup>

                      {/* Title - always show */}
                      <EuiText
                        size="m"
                        css={css`
                          font-weight: 600;
                          margin-bottom: ${euiTheme.size.s};
                          display: block;
                        `}
                      >
                        {popoverContent.title}
                      </EuiText>

                      {/* Description - 2 rows max */}
                      <EuiText
                        size="xs"
                        css={css`
                          margin-bottom: ${euiTheme.size.m};
                          display: -webkit-box;
                          -webkit-line-clamp: 2;
                          -webkit-box-orient: vertical;
                          overflow: hidden;
                        `}
                      >
                        {popoverContent.summary}
                      </EuiText>

                      {/* Messages section - top5-like with prev/next */}
                      <EuiFlexGroup
                        alignItems="center"
                        gutterSize="s"
                        responsive={false}
                        css={css`
                          flex-wrap: nowrap;
                        `}
                      >
                        <EuiFlexItem
                          grow={true}
                          css={css`
                            min-width: 0;
                            flex-shrink: 1;
                          `}
                        >
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
                              <EuiText size="xs">{currentMsg.count}</EuiText>
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
                                  width: ${Math.min(100, (currentMsg.count / maxCount) * 100)}%;
                                  min-width: ${currentMsg.count > 0 ? 4 : 0}px;
                                  background: #f5a700;
                                  border-radius: 2px;
                                `}
                              />
                            </EuiFlexItem>
                          </EuiFlexGroup>
                          <EuiText
                            size="xs"
                            color="subdued"
                            css={css`
                              margin-top: ${euiTheme.size.xs};
                            `}
                          >
                            {i18n.translate('discover.discoverySummary.messageOutOf', {
                              defaultMessage: '({current} out of {total})',
                              values: {
                                current: currentMsg.count,
                                total: totalMessages,
                              },
                            })}
                          </EuiText>
                          <div
                            css={css`
                              margin-top: ${euiTheme.size.s};
                              padding: 8px 12px;
                              background: #fef9e7;
                              border-radius: ${euiTheme.border.radius.small};
                              font-family: ${euiTheme.font.familyCode};
                              font-size: 12px;
                              color: ${euiTheme.colors.text};
                            `}
                          >
                            {`message: "${currentMsg.message}"`}
                          </div>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false} css={css`flex-shrink: 0;`}>
                          <EuiFlexGroup direction="row" gutterSize="none" responsive={false}>
                            <EuiButtonIcon
                              iconType="arrowStart"
                              aria-label={i18n.translate('discover.discoverySummary.firstMessage', {
                                defaultMessage: 'First message',
                              })}
                              onClick={() =>
                                setCurrentMessageIndexByKey((prev) => ({
                                  ...prev,
                                  [popoverKey]: 0,
                                }))
                              }
                              disabled={msgIdx <= 0}
                            />
                            <EuiButtonIcon
                              iconType="arrowLeft"
                              aria-label={i18n.translate('discover.discoverySummary.prevMessage', {
                                defaultMessage: 'Previous message',
                              })}
                              onClick={() =>
                                setCurrentMessageIndexByKey((prev) => ({
                                  ...prev,
                                  [popoverKey]: Math.max(0, msgIdx - 1),
                                }))
                              }
                              disabled={msgIdx <= 0}
                            />
                            <EuiButtonIcon
                              iconType="arrowRight"
                              aria-label={i18n.translate('discover.discoverySummary.nextMessage', {
                                defaultMessage: 'Next message',
                              })}
                              onClick={() =>
                                setCurrentMessageIndexByKey((prev) => ({
                                  ...prev,
                                  [popoverKey]: Math.min(messages.length - 1, msgIdx + 1),
                                }))
                              }
                              disabled={msgIdx >= messages.length - 1}
                            />
                            <EuiButtonIcon
                              iconType="arrowEnd"
                              aria-label={i18n.translate('discover.discoverySummary.lastMessage', {
                                defaultMessage: 'Last message',
                              })}
                              onClick={() =>
                                setCurrentMessageIndexByKey((prev) => ({
                                  ...prev,
                                  [popoverKey]: messages.length - 1,
                                }))
                              }
                              disabled={msgIdx >= messages.length - 1}
                            />
                          </EuiFlexGroup>
                        </EuiFlexItem>
                      </EuiFlexGroup>
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

const AGENT_BUILDER_SIDEBAR_APP_ID = 'agentBuilder';

interface InsightCardProps {
  insight: InsightCardData;
  onOpenDetails?: (insight: InsightCardData) => void;
}

function InsightCard({ insight, onOpenDetails }: InsightCardProps) {
  const config = severityConfig[insight.severity] ?? severityConfig.low;
  const { euiTheme } = useEuiTheme();
  const { application, agentBuilder, chrome } = useDiscoverServices();

  const handleStartChat = useCallback(() => {
    // Prefer agentBuilder plugin (same as AI Agent nav button)
    if (agentBuilder?.toggleConversationFlyout) {
      agentBuilder.toggleConversationFlyout();
      return;
    }
    // Fallback: open via chrome sidebar API (works when agent_builder registered sidebar but contract not passed)
    if (chrome?.sidebar?.hasApp?.(AGENT_BUILDER_SIDEBAR_APP_ID)) {
      chrome.sidebar.getApp(AGENT_BUILDER_SIDEBAR_APP_ID).open();
      return;
    }
    // Last resort: navigate to agent builder app
    application.navigateToApp(AGENT_BUILDER_APP_ID, { path: '/conversations/new' });
  }, [application, agentBuilder, chrome]);

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
        background: #ffffff !important;
        border: 1px solid ${euiTheme.border.color};
        border-radius: 4px;
        .euiCard__content {
          padding-top: 0;
        }
      `}
    >
      <EuiFlexGroup direction="column" gutterSize="s">
        {/* Top row: Ongoing, High, Sig events, Severity - same line, space-between */}
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
                    ? i18n.translate('discover.discoverySummary.ongoing', {
                        defaultMessage: 'Ongoing',
                      })
                    : i18n.translate('discover.discoverySummary.resolved', {
                        defaultMessage: 'Resolved',
                      })}
                </EuiBadge>
              )}
              <EuiBadge color={config.color}>
                {i18n.translate(`discover.discoverySummary.severity.${insight.severity}`, {
                  defaultMessage: insight.severity,
                })}
              </EuiBadge>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>

        {/* Title and description - left aligned */}
        <EuiText size="s" textAlign="left">
          <strong>{insight.title}</strong>
        </EuiText>

        <EuiText size="xs" color="subdued" textAlign="left">
          {truncateDescription(insight.description, DESCRIPTION_MAX_LENGTH)}
        </EuiText>

        {/* Actions - new row with separator above */}
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
                    data-test-subj={`discoverySummaryAction-${action.label}`}
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

export interface DiscoverySummaryPanelProps {
  insights?: InsightCardData[];
  initialIsOpen?: boolean;
}

export function DiscoverySummaryPanel({
  insights = DEFAULT_INSIGHTS,
  initialIsOpen = false,
}: DiscoverySummaryPanelProps) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(initialIsOpen);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);
  const visibleCount = 3;
  const visibleInsights = insights.slice(0, visibleCount);
  const hiddenCount = insights.length - visibleCount;

  const openFlyout = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlyoutOpen(true);
  }, []);

  const closeFlyout = useCallback(() => {
    setSelectedInsightId(null);
    setIsFlyoutOpen(false);
  }, []);

  const openInsightDetails = useCallback((insight: InsightCardData) => {
    setSelectedInsightId(insight.id);
  }, []);

  const closeInsightDetails = useCallback(() => setSelectedInsightId(null), []);

  const selectedInsight = selectedInsightId
    ? insights.find((i) => i.id === selectedInsightId)
    : null;

  const { euiTheme } = useEuiTheme();

  // Accordion panel only: gradient from Figma - #D9E8FF @17% and #ECE2FE @83%, both 30% opacity
  const panelStyles = {
    // Border: same as background gradient for cohesive look
    gradientBorder:
      'linear-gradient(90deg, rgba(217, 232, 255, 0.3) 17%, rgba(236, 226, 254, 0.3) 83%)',
    // Background: linear gradient #D9E8FF @17% → #ECE2FE @83%, both 30% opacity (Figma)
    gradientBackground:
      'linear-gradient(90deg, rgba(217, 232, 255, 0.3) 17%, rgba(236, 226, 254, 0.3) 83%)',
    separatorColor: euiTheme.border.color,
    insightsBadgeBg: '#FFDAD6',
  };

  // Left: accordion title only (chevron provided by EuiAccordion)
  const buttonContent = (
    <EuiText size="xs">
      <strong>
        {i18n.translate('discover.discoverySummary.title', {
          defaultMessage: 'Significant events',
        })}
      </strong>
    </EuiText>
  );

  // Right: Insights + badge | Severity + dots | View all (with vertical separators)
  const extraActionContent = (
    <div onClick={(e) => e.stopPropagation()} role="presentation">
      <EuiFlexGroup alignItems="center" gutterSize="none" responsive={false}>
        {/* Insights label + count badge */}
        <EuiFlexItem grow={false}>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiText size="xs" color="subdued">
              {i18n.translate('discover.discoverySummary.insights', {
                defaultMessage: 'Significant events',
              })}
            </EuiText>
            <EuiBadge
              color="hollow"
              css={css`
                background-color: ${panelStyles.insightsBadgeBg};
                color: ${euiTheme.colors.text};
              `}
            >
              {insights.length}
            </EuiBadge>
          </EuiFlexGroup>
        </EuiFlexItem>
        {/* Separator */}
        <EuiFlexItem
          grow={false}
          css={css`
            width: 1px;
            height: 16px;
            margin: 0 ${euiTheme.size.m};
            background-color: ${panelStyles.separatorColor};
          `}
        />
        {/* Severity label + colored dots (red, orange, yellow) */}
        <EuiFlexItem grow={false}>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiText size="xs" color="subdued">
              {i18n.translate('discover.discoverySummary.severity', {
                defaultMessage: 'Severity',
              })}
            </EuiText>
            <SeverityDots colors={SEVERITY_DOTS_ACCORDION} />
          </EuiFlexGroup>
        </EuiFlexItem>
        {/* Separator */}
        <EuiFlexItem
          grow={false}
          css={css`
            width: 1px;
            height: 16px;
            margin: 0 ${euiTheme.size.m};
            background-color: ${panelStyles.separatorColor};
          `}
        />
        {/* View all link */}
        <EuiFlexItem grow={false}>
          <EuiLink
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              setIsAccordionOpen(true);
            }}
            data-test-subj="discoverySummaryViewAll"
          >
            {i18n.translate('discover.discoverySummary.viewAll', {
              defaultMessage: 'View all',
            })}
          </EuiLink>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );

  return (
    <div
      data-test-subj="discoverySummaryPanel"
      css={css`
        margin: 8px;
        border-radius: 6px;
        overflow: hidden;
        /* Figma gradient: #D9E8FF @17% and #ECE2FE @83%, both 30% opacity */
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
          id="discovery-summary-accordion"
          buttonContent={buttonContent}
          initialIsOpen={initialIsOpen}
          forceState={isAccordionOpen ? 'open' : 'closed'}
          onToggle={() => setIsAccordionOpen(!isAccordionOpen)}
          extraAction={extraActionContent}
        >
          <EuiSpacer size="s" />
          <EuiFlexGroup gutterSize="m" wrap>
            {visibleInsights.map((insight) => (
              <EuiFlexItem key={insight.id} css={css({ minWidth: 280, flex: '1 1 280px' })}>
                <InsightCard insight={insight} onOpenDetails={openInsightDetails} />
              </EuiFlexItem>
            ))}
            {hiddenCount > 0 && (
              <EuiFlexItem key="more" grow={false}>
                <EuiCard
                  paddingSize="m"
                  title=""
                  description=""
                  display="plain"
                  hasBorder={false}
                  onClick={openFlyout}
                  css={css`
                    padding: 8px 12px;
                    width: fit-content;
                    background: #ffffff !important;
                    border: 1px solid ${euiTheme.border.color};
                    border-radius: 4px;
                    cursor: pointer;
                    .euiCard__content {
                      padding: 0;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      text-align: center;
                    }
                  `}
                >
                  <EuiLink
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      openFlyout(e);
                    }}
                    data-test-subj="discoverySummaryMoreLink"
                    color="primary"
                  >
                    {i18n.translate('discover.discoverySummary.moreLink', {
                      defaultMessage: '+ {count} more',
                      values: { count: hiddenCount },
                    })}
                  </EuiLink>
                </EuiCard>
              </EuiFlexItem>
            )}
          </EuiFlexGroup>
        </EuiAccordion>

        {isFlyoutOpen && (
          <EuiFlyout
            session="start"
            flyoutMenuProps={{
              title: i18n.translate('discover.discoverySummary.flyoutTitle', {
                defaultMessage: 'All significant events',
              }),
            }}
            onClose={closeFlyout}
            size="s"
            data-test-subj="discoverySummaryFlyout"
            aria-labelledby="discoverySummaryFlyoutTitle"
          >
            <EuiFlyoutHeader hasBorder>
              <EuiTitle size="m">
                <h2 id="discoverySummaryFlyoutTitle">
                  {i18n.translate('discover.discoverySummary.flyoutTitle', {
                    defaultMessage: 'All significant events',
                  })}
                </h2>
              </EuiTitle>
            </EuiFlyoutHeader>
            <EuiFlyoutBody>
              <EuiFlexGroup direction="column" gutterSize="m">
                {insights.map((insight) => (
                  <EuiFlexItem key={insight.id} grow={false}>
                    <InsightCard insight={insight} onOpenDetails={openInsightDetails} />
                  </EuiFlexItem>
                ))}
              </EuiFlexGroup>

              {/* Child flyout: insight details - only when opened from within "All insights" */}
              {selectedInsight && (
                <InsightDetailFlyout
                  insight={selectedInsight}
                  detail={
                    INSIGHT_DETAIL_DATA[selectedInsight.id] ??
                    getDefaultDetailFromInsight(selectedInsight)
                  }
                  onClose={closeInsightDetails}
                  isChildFlyout
                />
              )}
            </EuiFlyoutBody>
          </EuiFlyout>
        )}

        {/* Standalone flyout: insight details - when opened from Discovery summary cards */}
        {selectedInsight && !isFlyoutOpen && (
          <InsightDetailFlyout
            insight={selectedInsight}
            detail={
              INSIGHT_DETAIL_DATA[selectedInsight.id] ??
              getDefaultDetailFromInsight(selectedInsight)
            }
            onClose={closeInsightDetails}
            isChildFlyout={false}
          />
        )}
      </EuiPanel>
    </div>
  );
}
