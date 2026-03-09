/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { EuiFlyoutBody, EuiFlyoutHeader, EuiTitle, EuiText } from '@elastic/eui';
import { i18n } from '@kbn/i18n';

export interface PanelInsightsFlyoutProps {
  onClose: () => void;
  panelTitle?: string;
}

export function PanelInsightsFlyout({ onClose, panelTitle }: PanelInsightsFlyoutProps) {
  return (
    <>
      <EuiFlyoutHeader hasBorder>
        <EuiTitle size="s">
          <h2>
            {i18n.translate('dashboard.panelInsights.flyoutTitle', {
              defaultMessage: 'Insights',
            })}
          </h2>
        </EuiTitle>
      </EuiFlyoutHeader>
      <EuiFlyoutBody>
        <EuiText>
          <p>
            {panelTitle
              ? i18n.translate('dashboard.panelInsights.flyoutDescriptionWithPanel', {
                  defaultMessage: 'Insights for panel "{panelTitle}" will appear here.',
                  values: { panelTitle },
                })
              : i18n.translate('dashboard.panelInsights.flyoutDescription', {
                  defaultMessage: 'Panel insights will appear here.',
                })}
          </p>
        </EuiText>
      </EuiFlyoutBody>
    </>
  );
}
