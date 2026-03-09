/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import moment from 'moment';
import type { DataPublicPluginStart } from '@kbn/data-plugin/public';
import type { FieldFormatsStart } from '@kbn/field-formats-plugin/public';
import type { ChartsPluginStart } from '@kbn/charts-plugin/public';
import type { CoreSetup, CoreStart, IUiSettingsClient } from '@kbn/core/public';
import type { EventAnnotationPluginStart } from '@kbn/event-annotation-plugin/public';
import type { UsageCollectionStart } from '@kbn/usage-collection-plugin/public';
import type { ExpressionXyPluginSetup, ExpressionXyPluginStart, InjectedAnnotations, SetupDeps } from './types';
import {
  xyVisFunction,
  layeredXyVisFunction,
  extendedDataLayerFunction,
  dataDecorationConfigFunction,
  xAxisConfigFunction,
  yAxisConfigFunction,
  legendConfigFunction,
  axisExtentConfigFunction,
  referenceLineFunction,
  referenceLineLayerFunction,
  annotationLayerFunction,
  extendedAnnotationLayerFunction,
  referenceLineDecorationConfigFunction,
} from '../common/expression_functions';
import type { GetStartDeps } from './expression_renderers';
import { getXyChartRenderer } from './expression_renderers';
import { eventAnnotationsResult } from '../common/expression_functions/event_annotations_result';

export interface XYPluginStartDependencies {
  data: DataPublicPluginStart;
  fieldFormats: FieldFormatsStart;
  charts: ChartsPluginStart;
  eventAnnotation: EventAnnotationPluginStart;
  usageCollection?: UsageCollectionStart;
}

export function getTimeZone(uiSettings: IUiSettingsClient) {
  const configuredTimeZone = uiSettings.get('dateFormat:tz');
  if (configuredTimeZone === 'Browser') {
    return moment.tz.guess();
  }

  return configuredTimeZone;
}

/** Optional handler registered by e.g. presentation_panel to add an "Insight" action to chart tooltips */
interface ChartTooltipInsightsHandler {
  onOpen: () => void;
  getCount?: () => number;
}

let chartTooltipInsightsHandler: ChartTooltipInsightsHandler | null = null;

export const registerChartTooltipInsightsHandler = (
  onOpen: () => void,
  options?: { getCount?: () => number }
) => {
  chartTooltipInsightsHandler = { onOpen, getCount: options?.getCount };
};

/** Optional handler to inject additional annotations (e.g. insights) into XY charts in dashboards */
let chartAnnotationOverridesHandler: (() => InjectedAnnotations) | null = null;

export const registerChartAnnotationOverrides = (getInjected: () => InjectedAnnotations) => {
  chartAnnotationOverridesHandler = getInjected;
};

export class ExpressionXyPlugin {
  public setup(
    core: CoreSetup<XYPluginStartDependencies>,
    { expressions, charts: _charts }: SetupDeps
  ): ExpressionXyPluginSetup {
    expressions.registerFunction(yAxisConfigFunction);
    expressions.registerFunction(dataDecorationConfigFunction);
    expressions.registerFunction(referenceLineDecorationConfigFunction);
    expressions.registerFunction(legendConfigFunction);
    expressions.registerFunction(extendedDataLayerFunction);
    expressions.registerFunction(axisExtentConfigFunction);
    expressions.registerFunction(xAxisConfigFunction);
    expressions.registerFunction(annotationLayerFunction);
    expressions.registerFunction(extendedAnnotationLayerFunction);
    expressions.registerFunction(eventAnnotationsResult);
    expressions.registerFunction(referenceLineFunction);
    expressions.registerFunction(referenceLineLayerFunction);
    expressions.registerFunction(xyVisFunction);
    expressions.registerFunction(layeredXyVisFunction);

    const getStartDeps = async () => {
      const [coreStart, deps] = await core.getStartServices();
      const {
        data,
        usageCollection,
        fieldFormats,
        eventAnnotation,
        charts: { activeCursor, theme, palettes },
      } = deps;

      const paletteService = await palettes.getPalettes();

      const { theme: kibanaTheme } = coreStart;
      const eventAnnotationService = await eventAnnotation.getService();

      return {
        data,
        formatFactory: fieldFormats.deserialize,
        kibanaTheme,
        theme,
        usageCollection,
        activeCursor,
        paletteService,
        eventAnnotationService,
        timeZone: getTimeZone(core.uiSettings),
        timeFormat: core.uiSettings.get('dateFormat'),
        startServices: coreStart,
        onOpenInsights: chartTooltipInsightsHandler?.onOpen,
        getInsightCount: chartTooltipInsightsHandler?.getCount,
        getInjectedAnnotations: chartAnnotationOverridesHandler ?? undefined,
      } satisfies GetStartDeps;
    };

    expressions.registerRenderer(getXyChartRenderer({ getStartDeps }));

    return {
      registerChartTooltipInsightsHandler,
      registerChartAnnotationOverrides,
    };
  }

  public start(_core: CoreStart): ExpressionXyPluginStart {}

  public stop() {}
}
