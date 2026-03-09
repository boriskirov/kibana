/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import React from 'react';
import type { Datum, TooltipAction, TooltipValue, XYChartSeriesIdentifier } from '@elastic/charts';
import { getAccessorByDimension, getColumnByAccessor } from '@kbn/chart-expressions-common';
import type { FormatFactory } from '@kbn/visualization-ui-components';
import type { FieldFormat } from '@kbn/field-formats-plugin/common';
import { i18n } from '@kbn/i18n';
import type { MultiClickTriggerEvent } from '@kbn/charts-plugin/public';
import type { Datatable } from '@kbn/expressions-plugin/common';
import { BooleanRelation } from '@kbn/es-query';
import type { AlertRuleFromVisUIActionData } from '@kbn/alerts-ui-shared';
import { ESQL_TABLE_TYPE } from '@kbn/data-plugin/common';
import { isTimeChart } from '../../../common/helpers';
import type { CommonXYDataLayerConfig } from '../../../common';
import type { DatatablesWithFormatInfo, LayersFieldFormats } from '../../helpers';
import type { MultiFilterEvent } from '../../types';

type XYTooltipValue = TooltipValue<Record<string, string | number>, XYChartSeriesIdentifier>;

function nonNullable<T>(v: T): v is NonNullable<T> {
  return v != null;
}

export function createSplitPoint(
  accessor: string | number,
  value: string | number | undefined,
  rows: Datatable['rows'],
  table: Datatable
) {
  if (value === undefined) return;
  const splitPointRowIndex = rows.findIndex((row) => {
    if (Array.isArray(value)) {
      return value.includes(row[accessor]);
    }
    return row[accessor] === value;
  });
  if (splitPointRowIndex !== -1) {
    return {
      row: splitPointRowIndex,
      column: table.columns.findIndex((column) => column.id === accessor),
      value: table.rows[splitPointRowIndex][accessor],
      table,
    };
  }
}

export const getXSeriesPoint = (
  layer: CommonXYDataLayerConfig,
  value: any,
  fieldFormats: LayersFieldFormats,
  formattedDatatables: DatatablesWithFormatInfo,
  xAxisFormatter: FieldFormat,
  formatFactory: FormatFactory
) => {
  const { table } = layer;
  const xColumn = layer.xAccessor && getColumnByAccessor(layer.xAccessor, table.columns);
  const xAccessor = layer.xAccessor
    ? getAccessorByDimension(layer.xAccessor, table.columns)
    : undefined;

  const xFormat = xColumn ? fieldFormats[layer.layerId].xAccessors[xColumn.id] : undefined;
  const currentXFormatter =
    xAccessor && formattedDatatables[layer.layerId]?.formattedColumns[xAccessor] && xColumn
      ? formatFactory(xFormat)
      : xAxisFormatter;

  const rowIndex = table.rows.findIndex((row) => {
    if (xAccessor) {
      if (formattedDatatables[layer.layerId]?.formattedColumns[xAccessor]) {
        // stringify the value to compare with the chart value
        return currentXFormatter.convert(row[xAccessor]) === value;
      }
      return row[xAccessor] === value;
    }
  });

  return {
    row: rowIndex,
    column: table.columns.findIndex((col) => col.id === xAccessor),
    table,
    value: xAccessor ? table.rows[rowIndex][xAccessor] : value,
  };
};

function getXSeriesValue(dataLayers: CommonXYDataLayerConfig[], firstSeries: XYTooltipValue) {
  const layer = dataLayers.find((l) =>
    firstSeries.seriesIdentifier.seriesKeys.some((key: string | number) =>
      l.accessors.some(
        (accessor) => getAccessorByDimension(accessor, l.table.columns) === key.toString()
      )
    )
  );
  if (!layer) return;

  const { table } = layer;

  const xAccessor = layer.xAccessor
    ? getAccessorByDimension(layer.xAccessor, table.columns)
    : undefined;

  return xAccessor ? firstSeries.datum?.[xAccessor] : null;
}

const TOOLTIP_INSIGHTS_GRADIENT_ID = 'expressionXyTooltipInsightsGradient';

/** Gradient matches esql-menu-button / MagnifyGradientIcon: bluish-purple to pinkish-magenta */
const TooltipInsightsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ verticalAlign: 'middle', marginRight: 6 }}
    role="img"
    aria-hidden
  >
    <defs>
      <linearGradient id={TOOLTIP_INSIGHTS_GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="18.35%" stopColor="rgb(97, 162, 255)" />
        <stop offset="51.95%" stopColor="rgb(138, 130, 232)" />
        <stop offset="88.68%" stopColor="rgb(216, 70, 187)" />
        <stop offset="112.9%" stopColor="rgb(255, 39, 165)" />
      </linearGradient>
    </defs>
    <path
      d="M11.8538 4.14564C11.8073 4.09916 11.7522 4.06228 11.6915 4.03711C11.6308 4.01195 11.5657 3.999 11.5 3.999C11.4343 3.999 11.3692 4.01195 11.3085 4.03711C11.2478 4.06228 11.1927 4.09916 11.1462 4.14564L9.29313 5.99939H6.70688L4.85375 4.14564C4.75993 4.05182 4.63268 3.99912 4.5 3.99912C4.36732 3.99912 4.24007 4.05182 4.14625 4.14564C4.05243 4.23947 3.99972 4.36671 3.99972 4.49939C3.99972 4.63208 4.05243 4.75932 4.14625 4.85314L6 6.70627V9.29252L4.14625 11.1456C4.05243 11.2395 3.99972 11.3667 3.99972 11.4994C3.99972 11.6321 4.05243 11.7593 4.14625 11.8531C4.24007 11.947 4.36732 11.9997 4.5 11.9997C4.63268 11.9997 4.75993 11.947 4.85375 11.8531L6.70688 9.9994H9.29313L11.1462 11.8531C11.1927 11.8996 11.2479 11.9365 11.3086 11.9616C11.3692 11.9867 11.4343 11.9997 11.5 11.9997C11.5657 11.9997 11.6308 11.9867 11.6914 11.9616C11.7521 11.9365 11.8073 11.8996 11.8538 11.8531C11.9002 11.8067 11.9371 11.7515 11.9622 11.6908C11.9873 11.6301 12.0003 11.5651 12.0003 11.4994C12.0003 11.4337 11.9873 11.3686 11.9622 11.3079C11.9371 11.2473 11.9002 11.1921 11.8538 11.1456L10 9.29252V6.70627L11.8538 4.85314C11.9002 4.80671 11.9371 4.75156 11.9623 4.69086C11.9874 4.63017 12.0004 4.5651 12.0004 4.49939C12.0004 4.43369 11.9874 4.36862 11.9623 4.30792C11.9371 4.24723 11.9002 4.19208 11.8538 4.14564ZM7 6.9994H9V8.9994H7V6.9994ZM8.65688 3.83252C8.81185 3.39468 9.0752 3.00322 9.42236 2.69467C9.76951 2.38612 10.1892 2.17051 10.6422 2.06798C11.0952 1.96544 11.5668 1.97931 12.0129 2.10829C12.4591 2.23727 12.8654 2.47716 13.1938 2.80558C13.5222 3.13401 13.7621 3.54026 13.8911 3.98645C14.0201 4.43264 14.034 4.90423 13.9314 5.35723C13.8289 5.81023 13.6133 6.22988 13.3047 6.57704C12.9962 6.92419 12.6047 7.18754 12.1669 7.34252C12.1135 7.36276 12.0571 7.37354 12 7.3744C11.8821 7.37434 11.768 7.33263 11.6779 7.25664C11.5878 7.18064 11.5274 7.07525 11.5074 6.95906C11.4875 6.84288 11.5092 6.72337 11.5688 6.62165C11.6284 6.51994 11.722 6.44254 11.8331 6.40314C12.1117 6.3045 12.3608 6.1369 12.5571 5.91598C12.7535 5.69506 12.8906 5.42801 12.9559 5.13975C13.0211 4.85149 13.0123 4.5514 12.9302 4.26748C12.8481 3.98356 12.6954 3.72505 12.4865 3.51607C12.2775 3.30708 12.019 3.15443 11.735 3.07235C11.4511 2.99027 11.151 2.98143 10.8628 3.04666C10.5745 3.11189 10.3075 3.24907 10.0865 3.44539C9.86562 3.64172 9.69802 3.89079 9.59938 4.16939C9.57831 4.23236 9.54491 4.2905 9.50114 4.34042C9.45736 4.39034 9.40408 4.43104 9.3444 4.46014C9.28473 4.48925 9.21985 4.50618 9.15356 4.50994C9.08727 4.51371 9.0209 4.50423 8.95831 4.48207C8.89572 4.45991 8.83818 4.4255 8.78903 4.38086C8.73988 4.33622 8.70012 4.28223 8.67206 4.22206C8.644 4.16188 8.6282 4.09672 8.6256 4.03038C8.62299 3.96403 8.63362 3.89784 8.65688 3.83564V3.83252ZM14 11.2494C14.0003 11.8983 13.7711 12.5265 13.353 13.0227C12.9348 13.519 12.3547 13.8514 11.7151 13.9611C11.0755 14.0709 10.4177 13.9509 9.85806 13.6224C9.2984 13.294 8.87292 12.7782 8.65688 12.1663C8.61528 12.0419 8.62417 11.9063 8.68164 11.7884C8.73911 11.6706 8.84056 11.5801 8.96414 11.5363C9.08772 11.4925 9.22354 11.4991 9.34235 11.5545C9.46116 11.6099 9.55346 11.7097 9.59938 11.8325C9.69802 12.1111 9.86562 12.3602 10.0865 12.5565C10.3075 12.7528 10.5745 12.89 10.8628 12.9553C11.151 13.0205 11.4511 13.0116 11.735 12.9296C12.019 12.8475 12.2775 12.6948 12.4865 12.4858C12.6954 12.2769 12.8481 12.0184 12.9302 11.7344C13.0123 11.4505 13.0211 11.1504 12.9559 10.8622C12.8906 10.5739 12.7535 10.3069 12.5571 10.0859C12.3608 9.86502 12.1117 9.69742 11.8331 9.59877C11.7103 9.55286 11.6105 9.46056 11.5551 9.34175C11.4997 9.22293 11.4931 9.08711 11.5369 8.96353C11.5807 8.83996 11.6712 8.73851 11.789 8.68104C11.9069 8.62357 12.0426 8.61467 12.1669 8.65627C12.7027 8.84644 13.1666 9.19778 13.4948 9.66206C13.823 10.1263 13.9995 10.6808 14 11.2494ZM7.34313 12.1663C7.18815 12.6041 6.9248 12.9956 6.57764 13.3041C6.23049 13.6127 5.81084 13.8283 5.35784 13.9308C4.90484 14.0333 4.43325 14.0195 3.98706 13.8905C3.54087 13.7615 3.13461 13.5216 2.80619 13.1932C2.47777 12.8648 2.23788 12.4585 2.1089 12.0123C1.97992 11.5661 1.96605 11.0946 2.06858 10.6416C2.17112 10.1886 2.38672 9.76891 2.69528 9.42175C3.00383 9.0746 3.39529 8.81125 3.83313 8.65627C3.95745 8.61467 4.09313 8.62357 4.21096 8.68104C4.32879 8.73851 4.41933 8.83996 4.46309 8.96353C4.50686 9.08711 4.50033 9.22293 4.44493 9.34175C4.38952 9.46056 4.28967 9.55286 4.16688 9.59877C3.88828 9.69742 3.6392 9.86502 3.44287 10.0859C3.24655 10.3069 3.10937 10.5739 3.04414 10.8622C2.97891 11.1504 2.98775 11.4505 3.06983 11.7344C3.15191 12.0184 3.30456 12.2769 3.51355 12.4858C3.72253 12.6948 3.98104 12.8475 4.26496 12.9296C4.54889 13.0116 4.84897 13.0205 5.13723 12.9553C5.42549 12.89 5.69254 12.7528 5.91346 12.5565C6.13438 12.3602 6.30198 12.1111 6.40063 11.8325C6.44654 11.7097 6.53884 11.6099 6.65765 11.5545C6.77646 11.4991 6.91229 11.4925 7.03586 11.5363C7.15944 11.5801 7.26089 11.6706 7.31836 11.7884C7.37583 11.9063 7.38472 12.0419 7.34313 12.1663ZM2 4.74939C1.99968 4.10046 2.22886 3.47232 2.64701 2.97607C3.06515 2.47982 3.64532 2.14742 4.2849 2.03767C4.92448 1.92792 5.58228 2.04788 6.14194 2.37634C6.7016 2.70481 7.12708 3.22061 7.34313 3.83252C7.36638 3.89471 7.37701 3.96091 7.3744 4.02725C7.3718 4.0936 7.356 4.15876 7.32794 4.21893C7.29988 4.27911 7.26012 4.33309 7.21097 4.37773C7.16182 4.42237 7.10428 4.45678 7.04169 4.47894C6.9791 4.50111 6.91273 4.51058 6.84644 4.50682C6.78015 4.50305 6.71528 4.48612 6.6556 4.45702C6.59592 4.42791 6.54264 4.38721 6.49887 4.33729C6.45509 4.28737 6.42169 4.22923 6.40063 4.16627C6.30198 3.88767 6.13438 3.63859 5.91346 3.44227C5.69254 3.24594 5.42549 3.10877 5.13723 3.04353C4.84897 2.9783 4.54889 2.98714 4.26496 3.06922C3.98104 3.1513 3.72253 3.30396 3.51355 3.51294C3.30456 3.72193 3.15191 3.98043 3.06983 4.26436C2.98775 4.54828 2.97891 4.84837 3.04414 5.13663C3.10937 5.42489 3.24655 5.69193 3.44287 5.91285C3.6392 6.13377 3.88828 6.30137 4.16688 6.40002C4.28031 6.43774 4.37648 6.51485 4.43794 6.61737C4.49941 6.7199 4.52211 6.84106 4.50194 6.95888C4.48176 7.07671 4.42003 7.1834 4.32795 7.25963C4.23587 7.33586 4.11952 7.37657 4 7.3744C3.94313 7.37454 3.88667 7.36482 3.83313 7.34565C3.29679 7.1553 2.83259 6.80349 2.50433 6.33858C2.17608 5.87368 1.9999 5.31851 2 4.74939Z"
      fill={`url(#${TOOLTIP_INSIGHTS_GRADIENT_ID})`}
    />
  </svg>
);

export const getTooltipActions = (
  dataLayers: CommonXYDataLayerConfig[],
  onClickMultiValue: (data: MultiFilterEvent['data']) => void,
  onCreateAlertRule: (data: AlertRuleFromVisUIActionData) => void,
  fieldFormats: LayersFieldFormats,
  formattedDatatables: DatatablesWithFormatInfo,
  xAxisFormatter: FieldFormat,
  formatFactory: FormatFactory,
  isEsqlMode?: boolean,
  canCreateAlerts?: boolean,
  isEnabled?: boolean,
  onOpenInsights?: () => void,
  getInsightCount?: () => number
) => {
  if (!isEnabled) return;
  const hasSplitAccessors = dataLayers.some((l) => l.splitAccessors?.length);
  const hasXAxis = dataLayers.every((l) => l.xAccessor);
  const isTimeViz = isTimeChart(dataLayers);

  const xSeriesActions: Array<TooltipAction<Datum, XYChartSeriesIdentifier>> =
    !isEsqlMode && hasXAxis
      ? [
          {
            disabled: () => !hasXAxis,
            label: (_, [firstSeries]: XYTooltipValue[]) => {
              if (isTimeViz) {
                return i18n.translate('expressionXY.tooltipActions.filterByTime', {
                  defaultMessage: 'Filter by time',
                });
              }

              const value = getXSeriesValue(dataLayers, firstSeries);

              return i18n.translate('expressionXY.tooltipActions.filterForXSeries', {
                defaultMessage: 'Filter for {value}',
                values: {
                  value: xAxisFormatter.convert(value) || value,
                },
              });
            },

            onSelect: (_: XYTooltipValue[], [firstSeries]: XYTooltipValue[]) => {
              const layer = dataLayers.find((l) =>
                firstSeries.seriesIdentifier.seriesKeys.some((key: string | number) =>
                  l.accessors.some(
                    (accessor) =>
                      getAccessorByDimension(accessor, l.table.columns) === key.toString()
                  )
                )
              );
              if (!layer) return;

              const value = getXSeriesValue(dataLayers, firstSeries);

              const xSeriesPoint = getXSeriesPoint(
                layer,
                value,
                fieldFormats,
                formattedDatatables,
                xAxisFormatter,
                formatFactory
              );

              const context: MultiFilterEvent['data'] = {
                data: [
                  {
                    table: xSeriesPoint.table,
                    cells: [
                      {
                        row: xSeriesPoint.row,
                        column: xSeriesPoint.column,
                      },
                    ],
                  },
                ],
              };
              onClickMultiValue(context);
            },
          },
        ]
      : [];

  const alertRulesTooltipActions: Array<TooltipAction<Datum, XYChartSeriesIdentifier>> =
    isEsqlMode && canCreateAlerts
      ? [
          {
            disabled: () => !isEsqlMode,
            label: () =>
              i18n.translate('expressionXY.tooltipActions.addAlertRule', {
                defaultMessage: 'Create alert rule',
              }),

            onSelect: (selectedValues: XYTooltipValue[], series: XYTooltipValue[]) => {
              const [firstSeries] = series;
              const layer = dataLayers.find((l) =>
                firstSeries.seriesIdentifier.seriesKeys.some((key: string | number) =>
                  l.accessors.some(
                    (accessor) =>
                      getAccessorByDimension(accessor, l.table.columns) === key.toString()
                  )
                )
              );
              if (!layer) return;

              const { xAccessor } = firstSeries.seriesIdentifier;

              const xSeriesValue = getXSeriesValue(dataLayers, firstSeries);

              const xSeriesPoint = getXSeriesPoint(
                layer,
                xSeriesValue,
                fieldFormats,
                formattedDatatables,
                xAxisFormatter,
                formatFactory
              );

              const { table } = xSeriesPoint;
              const xColumn = getColumnByAccessor(xAccessor.toString(), table.columns);

              // Get the field name and value for the Y axis
              const selectedYValues = selectedValues.length ? selectedValues : [firstSeries];
              const thresholdValues = selectedYValues
                .map((value) => {
                  const { yAccessor, splitAccessors } = value.seriesIdentifier;
                  const yColumn = getColumnByAccessor(yAccessor.toString(), table.columns);
                  if (!yColumn || !yColumn.meta.sourceParams) return null;
                  const { sourceField } = yColumn.meta.sourceParams;
                  const yValue = value.value as number;
                  // If there is no sourceField, wrap the Y axis label in {curly braces} to let the user set the field name manually
                  const esqlFieldName = String(sourceField ?? `{${yColumn?.name ?? 'Y'}}`);
                  const values: Record<string, string | number> = {
                    [esqlFieldName]: yValue,
                  };
                  if (splitAccessors.size > 0) {
                    for (const [accessor, splitValue] of splitAccessors) {
                      const splitColumn = getColumnByAccessor(accessor.toString(), table.columns);
                      const { sourceField: splitSourceField } =
                        splitColumn?.meta?.sourceParams ?? {};
                      if (!splitSourceField) continue;
                      values[String(splitSourceField)] = splitValue;
                    }
                  }
                  return { values, yField: esqlFieldName };
                })
                .filter(Boolean) as AlertRuleFromVisUIActionData['thresholdValues'];

              // Get the time field name from the X axis for time vizzes, default to timestamp for non-time vizzes
              const { sourceField: xSourceField } = xColumn?.meta?.sourceParams ?? {};

              // For non-time vizzes, report the X axis
              const xValues =
                isTimeViz || !hasXAxis
                  ? {}
                  : {
                      // If there is no sourceField, wrap the X axis label in [brackets] to let the user set the field name manually
                      [String(xSourceField ?? `[${xColumn?.name ?? 'X'}]`)]:
                        // Use xSeriesPoint.value instead of xSeriesValue; this is always the raw ES value, xSeriesValue sometimes returns
                        // the display value
                        xSeriesPoint.value,
                    };

              const query =
                table.meta?.type === ESQL_TABLE_TYPE ? (table.meta.query as string) : null;

              const context = {
                thresholdValues,
                xValues,
                query,
              };
              onCreateAlertRule(context);
            },
          },
        ]
      : [];

  const breakdownTooltipActions: Array<TooltipAction<Datum, XYChartSeriesIdentifier>> =
    !isEsqlMode && hasSplitAccessors
      ? [
          {
            disabled: (selected) => selected.length < 1,
            label: (selected) =>
              selected.length === 0
                ? i18n.translate('expressionXY.tooltipActions.emptyFilterSelection', {
                    defaultMessage: 'Select at least one series to filter',
                  })
                : i18n.translate('expressionXY.tooltipActions.filterValues', {
                    defaultMessage: 'Filter {seriesNumber} selected series',
                    values: { seriesNumber: selected.length },
                  }),
            onSelect: (tooltipSelectedValues: XYTooltipValue[]) => {
              const layerIndexes: number[] = [];
              tooltipSelectedValues.forEach((v) => {
                const index = dataLayers.findIndex((l) =>
                  v.seriesIdentifier.seriesKeys.some((key: string | number) =>
                    l.accessors.some(
                      (accessor) =>
                        getAccessorByDimension(accessor, l.table.columns) === key.toString()
                    )
                  )
                );
                if (!layerIndexes.includes(index) && index !== -1) {
                  layerIndexes.push(index);
                }
              });

              const filterPoints: MultiClickTriggerEvent['data']['data'] = [];

              if (!layerIndexes.length) return;
              layerIndexes.forEach((layerIndex) => {
                const layer = dataLayers[layerIndex];
                const { table } = layer;

                if (layer.splitAccessors?.length !== 1) return;

                const splitAccessor = getAccessorByDimension(
                  layer.splitAccessors[0],
                  table.columns
                );
                const splitPoints = tooltipSelectedValues
                  .map((v) =>
                    createSplitPoint(
                      splitAccessor,
                      v.datum?.[splitAccessor],
                      formattedDatatables[layer.layerId].table.rows,
                      table
                    )
                  )
                  .filter(nonNullable);
                if (splitPoints.length) {
                  filterPoints.push({
                    cells: splitPoints.map(({ row, column }) => ({ row, column })),
                    relation: BooleanRelation.OR,
                    table,
                  });
                }
              });
              if (filterPoints?.length) {
                onClickMultiValue({
                  data: filterPoints,
                });
              }
            },
          },
        ]
      : [];

  const insightCount = getInsightCount?.() ?? 0;
  const insightsTooltipAction: Array<TooltipAction<Datum, XYChartSeriesIdentifier>> =
    onOpenInsights
      ? [
          {
            label: () => (
              <>
                <TooltipInsightsIcon />
                {i18n.translate('expressionXY.tooltipActions.insight', {
                  defaultMessage: 'Insight',
                })}
                {insightCount > 0 && (
                  <span style={{ marginLeft: 4, fontWeight: 600 }}>{insightCount}</span>
                )}
              </>
            ),
            onSelect: () => onOpenInsights(),
          },
        ]
      : [];

  const actions = [
    ...xSeriesActions,
    ...breakdownTooltipActions,
    ...alertRulesTooltipActions,
    ...insightsTooltipAction,
  ];
  if (!actions.length) return;
  return actions;
};
