/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import React from 'react';
import moment from 'moment';
import { i18n } from '@kbn/i18n';
import { AvailableAnnotationIcons } from '@kbn/event-annotation-common';
import type { ContentManagementPublicStart } from '@kbn/content-management-plugin/public';
import type { CoreSetup, CoreStart, Plugin } from '@kbn/core/public';
import type { Start as InspectorStart } from '@kbn/inspector-plugin/public';
import type { SavedObjectsManagementPluginStart } from '@kbn/saved-objects-management-plugin/public';
import type { SavedObjectTaggingOssPluginStart } from '@kbn/saved-objects-tagging-oss-plugin/public';
import type { UiActionsStart } from '@kbn/ui-actions-plugin/public';
import type { UsageCollectionStart } from '@kbn/usage-collection-plugin/public';
import { core, setKibanaServices } from './kibana_services';
import { DEFAULT_INSIGHTS } from './panel_actions/panel_insights_action/insights_data';
import { PanelInsightsFlyout } from './panel_actions/panel_insights_action/panel_insights_flyout';
import { registerActions } from './panel_actions/register_actions';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PresentationPanelSetup {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PresentationPanelStart {}

export interface PresentationPanelSetupDependencies {
  expressionXY?: {
    registerChartTooltipInsightsHandler: (
      onOpen: () => void,
      options?: { getCount?: () => number }
    ) => void;
    registerChartAnnotationOverrides: (
      getInjected: () => import('@kbn/expression-xy-plugin/public').InjectedAnnotations
    ) => void;
  };
}

export interface PresentationPanelStartDependencies {
  uiActions: UiActionsStart;
  inspector: InspectorStart;
  usageCollection: UsageCollectionStart;
  contentManagement: ContentManagementPublicStart;
  savedObjectsManagement: SavedObjectsManagementPluginStart;
  savedObjectsTaggingOss?: SavedObjectTaggingOssPluginStart;
}

export class PresentationPanelPlugin
  implements
    Plugin<
      PresentationPanelSetup,
      PresentationPanelStart,
      PresentationPanelSetupDependencies,
      PresentationPanelStartDependencies
    >
{
  public setup(
    _coreSetup: CoreSetup<PresentationPanelStartDependencies, PresentationPanelStart>,
    setupPlugins: PresentationPanelSetupDependencies
  ): PresentationPanelSetup {
    setupPlugins.expressionXY?.registerChartAnnotationOverrides(() => {
      const now = moment();
      const rows = [
        {
          id: 'insight-annot-1',
          time: now.clone().subtract(2, 'hours').toISOString(),
          timebucket: now.clone().subtract(2, 'hours').toISOString(),
          type: 'point',
          label: 'One insight',
          icon: AvailableAnnotationIcons.ALERT,
          color: '#BD271E',
        },
        {
          id: 'insight-annot-2',
          time: now.clone().subtract(4, 'hours').toISOString(),
          timebucket: now.clone().subtract(4, 'hours').toISOString(),
          type: 'point',
          label: 'One insight',
          icon: AvailableAnnotationIcons.ALERT,
          color: '#BD271E',
        },
        {
          id: 'insight-annot-3',
          time: now.clone().subtract(6, 'hours').toISOString(),
          timebucket: now.clone().subtract(6, 'hours').toISOString(),
          type: 'point',
          label: 'One insight',
          icon: AvailableAnnotationIcons.ALERT,
          color: '#BD271E',
        },
      ];
      const configs = rows.map((row) => ({
        id: row.id,
        type: 'manual_point_event_annotation' as const,
        time: row.time,
        label: row.label,
        icon: AvailableAnnotationIcons.ALERT,
        color: row.color,
      }));
      return { rows, configs };
    });
    setupPlugins.expressionXY?.registerChartTooltipInsightsHandler(
      () => {
        let flyoutRef: { close: () => void } | null = null;
        flyoutRef = core.overlays.openSystemFlyout(
          React.createElement(PanelInsightsFlyout, {
            panelTitle: undefined,
            onClose: () => flyoutRef?.close(),
          }),
          {
            title: i18n.translate('presentationPanel.panelInsights.allDiscoveriesTitle', {
              defaultMessage: 'All discoveries',
            }),
            size: 's',
            type: 'push',
            'data-test-subj': 'panelInsightsFlyout',
            onClose: () => flyoutRef?.close(),
          }
        );
      },
      { getCount: () => DEFAULT_INSIGHTS.length }
    );
    return {};
  }

  public start(
    coreStart: CoreStart,
    startPlugins: PresentationPanelStartDependencies
  ): PresentationPanelStart {
    setKibanaServices(coreStart, startPlugins);
    registerActions();
    return {};
  }

  public stop() {}
}
