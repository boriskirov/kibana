/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import React, { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import { EuiFlyoutBody, EuiFlexGroup, EuiFlexItem, EuiTitle, useEuiTheme } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { core } from '../../kibana_services';
import {
  InsightCard,
  InsightDetailFlyout,
  getDefaultDetailFromInsight,
} from './insight_components';
import { DEFAULT_INSIGHTS, INSIGHT_DETAIL_DATA, type InsightCardData } from './insights_data';

const AGENT_BUILDER_APP_ID = 'agent_builder';

export interface PanelInsightsFlyoutProps {
  onClose: () => void;
  panelTitle?: string;
}

export function PanelInsightsFlyout({ onClose, panelTitle }: PanelInsightsFlyoutProps) {
  const { euiTheme } = useEuiTheme();
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);
  const insights = DEFAULT_INSIGHTS;

  const openInsightDetails = useCallback((insight: InsightCardData) => {
    setSelectedInsightId(insight.id);
  }, []);

  const closeInsightDetails = useCallback(() => setSelectedInsightId(null), []);

  const selectedInsight = selectedInsightId
    ? insights.find((i) => i.id === selectedInsightId)
    : null;

  const handleStartChat = useCallback(() => {
    core.application.navigateToApp(AGENT_BUILDER_APP_ID, { path: '/conversations/new' });
  }, []);

  return (
    <EuiFlyoutBody>
      {panelTitle && (
        <div css={css({ marginBottom: 16 })}>
          <EuiTitle size="xs">
            <span
              css={css({
                fontWeight: 'normal',
                color: euiTheme.colors.subduedText,
              })}
            >
              {i18n.translate('presentationPanel.panelInsights.forPanel', {
                defaultMessage: 'Significant events for "{panelTitle}"',
                values: { panelTitle },
              })}
            </span>
          </EuiTitle>
        </div>
      )}
      <EuiFlexGroup direction="column" gutterSize="m">
        {insights.map((insight) => (
          <EuiFlexItem key={insight.id} grow={false}>
            <InsightCard
              insight={insight}
              onOpenDetails={openInsightDetails}
              onStartChat={handleStartChat}
            />
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>

      {selectedInsight && (
        <InsightDetailFlyout
          insight={selectedInsight}
          detail={
            INSIGHT_DETAIL_DATA[selectedInsight.id] ?? getDefaultDetailFromInsight(selectedInsight)
          }
          onClose={closeInsightDetails}
          isChildFlyout
        />
      )}
    </EuiFlyoutBody>
  );
}
