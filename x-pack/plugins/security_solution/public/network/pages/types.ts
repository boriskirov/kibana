/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { RouteComponentProps } from 'react-router-dom';
import type { ActionCreator } from 'typescript-fsa';
import type { InputsModelId } from '../../common/store/inputs/constants';

export type SetAbsoluteRangeDatePicker = ActionCreator<{
  id: InputsModelId;
  from: string;
  to: string;
}>;

export type NetworkComponentProps = Partial<RouteComponentProps<{}>> & {
  hasMlUserPermissions: boolean;
  capabilitiesFetched: boolean;
};
