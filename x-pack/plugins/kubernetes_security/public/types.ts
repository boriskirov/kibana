/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React from 'react';
import { CoreStart } from '@kbn/core/public';
import type { DataPublicPluginStart } from '@kbn/data-plugin/public';
import type { FieldSpec } from '@kbn/data-plugin/common';
import type { TimelinesUIStart } from '@kbn/timelines-plugin/public';
import type { SessionViewStart } from '@kbn/session-view-plugin/public';
import { BoolQuery } from '@kbn/es-query';
import { EuiIconProps } from '@elastic/eui';

export interface StartPlugins {
  data: DataPublicPluginStart;
  timelines: TimelinesUIStart;
  sessionView: SessionViewStart;
}

export type KubernetesSecurityServices = CoreStart & StartPlugins;

export interface IndexPattern {
  fields: FieldSpec[];
  title: string;
}

export interface GlobalFilter {
  filterQuery?: string;
  startDate: string;
  endDate: string;
}

export interface KubernetesSecurityDeps {
  filter: React.ReactNode;
  renderSessionsView: (sessionsFilterQuery: string | undefined) => JSX.Element;
  indexPattern?: IndexPattern;
  globalFilter: GlobalFilter;
}

export interface KubernetesSecurityStart {
  getKubernetesPage: (kubernetesSecurityDeps: KubernetesSecurityDeps) => JSX.Element;
}

export type QueryDslQueryContainerBool = {
  bool: BoolQuery;
};

export enum KubernetesCollection {
  cluster = 'cluster',
  namespace = 'namespace',
  node = 'node',
  pod = 'pod',
  containerImage = 'containerImage',
}

export interface TreeNavSelection {
  [KubernetesCollection.cluster]?: string;
  [KubernetesCollection.namespace]?: string;
  [KubernetesCollection.node]?: string;
  [KubernetesCollection.pod]?: string;
  [KubernetesCollection.containerImage]?: string;
}

export type DynamicTree = {
  key: string;
  type: KubernetesCollection;
  iconProps: EuiIconProps;
  name: string;
  namePlural: string;
};
