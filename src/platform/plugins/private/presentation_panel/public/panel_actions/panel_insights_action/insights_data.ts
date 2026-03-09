/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { i18n } from '@kbn/i18n';

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
    }>;
  };
}

export const severityConfig: Record<
  string,
  { color: 'danger' | 'warning' | 'primary' | 'hollow'; dots: 'danger' | 'warning' | 'primary' }
> = {
  critical: { color: 'danger', dots: 'danger' },
  high: { color: 'danger', dots: 'danger' },
  medium: { color: 'warning', dots: 'warning' },
  low: { color: 'hollow', dots: 'primary' },
};

export const SEVERITY_DOT_COLORS = {
  danger: '#B7293D',
  warning: '#F47B20',
  primary: '#FDC937',
} as const;

export const SEVERITY_DOTS_ACCORDION: readonly string[] = [
  SEVERITY_DOT_COLORS.danger,
  SEVERITY_DOT_COLORS.warning,
  SEVERITY_DOT_COLORS.primary,
];

export const DEFAULT_INSIGHTS: InsightCardData[] = [
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

export const INSIGHT_DETAIL_DATA: Record<string, InsightDetailData> = {
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
          logSnippet: `[ERROR] [2025-03-04 11:22:45,891] [android.gfx] SurfaceFlinger: buffer underrun
  at android.gui.SurfaceComposerClient
  Related: Choreographer skipped 12 frames; WindowManager timeout`,
        },
        {
          relativeTime: '5min ago',
          title: 'High host activity detected',
          summary:
            'Elevated host activity across the Fleet Server cluster may be contributing to WindowManager bottlenecks.',
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
          title: 'Authentication failures surged: 192.168.45.x causing widespread login exceptions',
          summary:
            'Authentication failure errors have surged from ~5 per day to over 50 per minute from the 192.168.45.x subnet.',
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
          logSnippet: `[ERROR] [2025-03-04 11:46:15,102] [auth] Authentication failure
  IP: 192.168.45.23; User: service_account; Attempt 12/20
  at auth.service.validateCredentials`,
        },
      ],
    },
  },
};

export function truncateDescription(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
}

export function getDefaultDetailFromInsight(insight: InsightCardData): InsightDetailData {
  return {
    generatedAt: i18n.translate('presentationPanel.panelInsights.generatedToday', {
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
      timestamp: i18n.translate('presentationPanel.panelInsights.today', {
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
          relativeTime: i18n.translate('presentationPanel.panelInsights.recently', {
            defaultMessage: 'Recently',
          }),
          title: insight.title,
          summary: insight.description,
          logSnippet: `[INFO] Event from ${insight.streamTag}\n  Count: ${insight.significantEventsCount}`,
        },
      ],
    },
  };
}
