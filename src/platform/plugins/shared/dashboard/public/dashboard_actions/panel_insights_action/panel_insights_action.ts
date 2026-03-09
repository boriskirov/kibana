/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { i18n } from '@kbn/i18n';
import { getTitle, apiHasParentApi, apiIsOfType } from '@kbn/presentation-publishing';
import type { Action } from '@kbn/ui-actions-plugin/public';
import { IncompatibleActionError } from '@kbn/ui-actions-plugin/public';
import { toMountPoint } from '@kbn/react-kibana-mount';
import type { EmbeddableApiContext } from '@kbn/presentation-publishing';
import { ACTION_PANEL_INSIGHTS } from '../constants';
import { coreServices } from '../../services/kibana_services';
import { DASHBOARD_API_TYPE } from '../../dashboard_api/types';
import { PanelInsightsFlyout } from './panel_insights_flyout';

export class PanelInsightsAction implements Action<EmbeddableApiContext> {
  public readonly type = ACTION_PANEL_INSIGHTS;
  public readonly id = ACTION_PANEL_INSIGHTS;
  /** Order 50 places the Insights button next to Edit (50) in the hover menu */
  public order = 50;

  public getDisplayName() {
    return i18n.translate('dashboard.panelInsights.actionDisplayName', {
      defaultMessage: 'Insights',
    });
  }

  public getIconType = () => 'sparkles';

  public async isCompatible({ embeddable }: EmbeddableApiContext) {
    if (!embeddable) return false;
    // Only show Insights in dashboard panels
    return apiHasParentApi(embeddable) && apiIsOfType(embeddable.parentApi, DASHBOARD_API_TYPE);
  }

  public async execute({ embeddable }: EmbeddableApiContext) {
    if (!embeddable) throw new IncompatibleActionError();

    const panelTitle = getTitle(embeddable) ?? undefined;

    const flyoutSession = coreServices.overlays.openFlyout(
      toMountPoint(
        <PanelInsightsFlyout
          panelTitle={panelTitle}
          onClose={() => flyoutSession.close()}
        />,
        coreServices
      ),
      {
        size: 's',
        type: 'push',
        'data-test-subj': 'panelInsightsFlyout',
      }
    );
  }
}
