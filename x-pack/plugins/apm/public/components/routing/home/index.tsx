/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { i18n } from '@kbn/i18n';
import { toBooleanRt, toNumberRt } from '@kbn/io-ts-utils';
import { Outlet, Route } from '@kbn/typed-react-router-config';
import * as t from 'io-ts';
import React, { ComponentProps } from 'react';
import { offsetRt } from '../../../../common/comparison_rt';
import { ENVIRONMENT_ALL } from '../../../../common/environment_filter_values';
import { environmentRt } from '../../../../common/environment_rt';
import { TraceSearchType } from '../../../../common/trace_explorer';
import { TimeRangeMetadataContextProvider } from '../../../context/time_range_metadata/time_range_metadata_context';
import { Breadcrumb } from '../../app/breadcrumb';
import { ServiceInventory } from '../../app/service_inventory';
import { ServiceMapHome } from '../../app/service_map';
import { TopTracesOverview } from '../../app/top_traces_overview';
import { TraceExplorer } from '../../app/trace_explorer';
import { TraceOverview } from '../../app/trace_overview';
import { TransactionTab } from '../../app/transaction_details/waterfall_with_summary/transaction_tabs';
import { RedirectTo } from '../redirect_to';
import { ServiceGroupsRedirect } from '../service_groups_redirect';
import { ApmMainTemplate } from '../templates/apm_main_template';
import { ServiceGroupTemplate } from '../templates/service_group_template';
import { dependencies } from './dependencies';
import { legacyBackends } from './legacy_backends';

export function page<
  TPath extends string,
  TChildren extends Record<string, Route> | undefined = undefined,
  TParams extends t.Type<any> | undefined = undefined
>({
  path,
  element,
  children,
  title,
  showServiceGroupSaveButton = false,
  params,
}: {
  path: TPath;
  element: React.ReactElement<any, any>;
  children?: TChildren;
  title: string;
  showServiceGroupSaveButton?: boolean;
  params?: TParams;
}): Record<
  TPath,
  {
    element: React.ReactElement<any, any>;
  } & (TChildren extends Record<string, Route> ? { children: TChildren } : {}) &
    (TParams extends t.Type<any> ? { params: TParams } : {})
> {
  return {
    [path]: {
      element: (
        <Breadcrumb title={title} href={path}>
          <ApmMainTemplate
            pageTitle={title}
            showServiceGroupSaveButton={showServiceGroupSaveButton}
          >
            {element}
          </ApmMainTemplate>
        </Breadcrumb>
      ),
      children,
      params,
    },
  } as any;
}

function serviceGroupPage<TPath extends string>({
  path,
  element,
  title,
  serviceGroupContextTab,
}: {
  path: TPath;
  element: React.ReactElement<any, any>;
  title: string;
  serviceGroupContextTab: ComponentProps<
    typeof ServiceGroupTemplate
  >['serviceGroupContextTab'];
}): Record<
  TPath,
  {
    element: React.ReactElement<any, any>;
    params: t.TypeC<{ query: t.TypeC<{ serviceGroup: t.StringC }> }>;
    defaults: { query: { serviceGroup: string } };
  }
> {
  return {
    [path]: {
      element: (
        <Breadcrumb title={title} href={path}>
          <ServiceGroupTemplate
            pageTitle={title}
            serviceGroupContextTab={serviceGroupContextTab}
          >
            {element}
          </ServiceGroupTemplate>
        </Breadcrumb>
      ),
      params: t.type({
        query: t.type({ serviceGroup: t.string }),
      }),
      defaults: { query: { serviceGroup: '' } },
    },
  } as Record<
    TPath,
    {
      element: React.ReactElement<any, any>;
      params: t.TypeC<{ query: t.TypeC<{ serviceGroup: t.StringC }> }>;
      defaults: { query: { serviceGroup: string } };
    }
  >;
}

export const ServiceInventoryTitle = i18n.translate(
  'xpack.apm.views.serviceInventory.title',
  {
    defaultMessage: 'Services',
  }
);
export const ServiceMapTitle = i18n.translate(
  'xpack.apm.views.serviceMap.title',
  {
    defaultMessage: 'Service Map',
  }
);

export const DependenciesOperationsTitle = i18n.translate(
  'xpack.apm.views.dependenciesOperations.title',
  {
    defaultMessage: 'Operations',
  }
);

export const home = {
  '/': {
    element: (
      <TimeRangeMetadataContextProvider>
        <Outlet />
      </TimeRangeMetadataContextProvider>
    ),
    params: t.type({
      query: t.intersection([
        environmentRt,
        t.type({
          rangeFrom: t.string,
          rangeTo: t.string,
          kuery: t.string,
          comparisonEnabled: toBooleanRt,
        }),
        t.partial({
          refreshPaused: t.union([t.literal('true'), t.literal('false')]),
          refreshInterval: t.string,
          page: toNumberRt,
          pageSize: toNumberRt,
          sortField: t.string,
          sortDirection: t.union([t.literal('asc'), t.literal('desc')]),
        }),
        offsetRt,
      ]),
    }),
    defaults: {
      query: {
        environment: ENVIRONMENT_ALL.value,
        kuery: '',
      },
    },
    children: {
      ...serviceGroupPage({
        path: '/services',
        title: ServiceInventoryTitle,
        element: <ServiceInventory />,
        serviceGroupContextTab: 'service-inventory',
      }),
      ...serviceGroupPage({
        path: '/service-map',
        title: ServiceMapTitle,
        element: <ServiceMapHome />,
        serviceGroupContextTab: 'service-map',
      }),
      ...page({
        path: '/traces',
        title: i18n.translate('xpack.apm.views.traceOverview.title', {
          defaultMessage: 'Traces',
        }),
        element: (
          <TraceOverview>
            <Outlet />
          </TraceOverview>
        ),
        children: {
          '/traces/explorer': {
            element: <TraceExplorer />,
            params: t.type({
              query: t.type({
                query: t.string,
                type: t.union([
                  t.literal(TraceSearchType.kql),
                  t.literal(TraceSearchType.eql),
                ]),
                waterfallItemId: t.string,
                traceId: t.string,
                transactionId: t.string,
                detailTab: t.union([
                  t.literal(TransactionTab.timeline),
                  t.literal(TransactionTab.metadata),
                  t.literal(TransactionTab.logs),
                ]),
              }),
            }),
            defaults: {
              query: {
                query: '',
                type: TraceSearchType.kql,
                waterfallItemId: '',
                traceId: '',
                transactionId: '',
                detailTab: TransactionTab.timeline,
              },
            },
          },
          '/traces': {
            element: <TopTracesOverview />,
          },
        },
      }),
      ...dependencies,
      ...legacyBackends,
      '/': {
        element: (
          <ServiceGroupsRedirect>
            <RedirectTo pathname="/service-groups" />
          </ServiceGroupsRedirect>
        ),
      },
    },
  },
};
