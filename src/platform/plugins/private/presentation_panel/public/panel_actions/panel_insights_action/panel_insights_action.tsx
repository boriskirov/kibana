/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import React from 'react';
import { EuiBadge, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { apiHasType, getTitle } from '@kbn/presentation-publishing';
import type { Action } from '@kbn/ui-actions-plugin/public';
import { IncompatibleActionError } from '@kbn/ui-actions-plugin/public';
import type { EmbeddableApiContext } from '@kbn/presentation-publishing';
import { core } from '../../kibana_services';
import { PanelInsightsFlyout } from './panel_insights_flyout';
import { InsightsIcon } from './insights_icon';
import { ACTION_PANEL_INSIGHTS, INSIGHTS_SUPPORTED_EMBEDDABLE_TYPES } from './constants';
import { DEFAULT_INSIGHTS } from './insights_data';

const INSIGHTS_COUNT = DEFAULT_INSIGHTS.length;

export class PanelInsightsAction implements Action<EmbeddableApiContext> {
  public readonly type = ACTION_PANEL_INSIGHTS;
  public readonly id = ACTION_PANEL_INSIGHTS;
  public order = 50;

  public getDisplayName() {
    return i18n.translate('presentationPanel.panelInsights.actionDisplayName', {
      defaultMessage: 'Significant events',
    });
  }

  public getIconType = () => undefined;

  public MenuItem = ({ context }: { context: EmbeddableApiContext }) => (
    <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
      <EuiFlexItem grow={false}>
        <InsightsIcon />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>{this.getDisplayName()}</EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiBadge color="accent">{INSIGHTS_COUNT}</EuiBadge>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  public async isCompatible({ embeddable }: EmbeddableApiContext) {
    if (!embeddable) return false;
    if (!apiHasType(embeddable)) return false;
    const type = (embeddable as { type: string }).type;
    return INSIGHTS_SUPPORTED_EMBEDDABLE_TYPES.includes(type as 'lens' | 'visualization');
  }

  public async execute({ embeddable }: EmbeddableApiContext) {
    if (!embeddable) throw new IncompatibleActionError();

    const panelTitle = getTitle(embeddable) ?? undefined;
    let flyoutRef: { close: () => void } | null = null;

    flyoutRef = core.overlays.openSystemFlyout(
      <PanelInsightsFlyout panelTitle={panelTitle} onClose={() => flyoutRef?.close()} />,
      {
        title: i18n.translate('presentationPanel.panelInsights.allDiscoveriesTitle', {
          defaultMessage: 'All significant events',
        }),
        size: 's',
        type: 'push',
        'data-test-subj': 'panelInsightsFlyout',
        onClose: () => {
          flyoutRef?.close();
        },
      }
    );
  }
}
