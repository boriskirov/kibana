/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { validateNonExact } from '@kbn/securitysolution-io-ts-utils';
import { QUERY_RULE_TYPE_ID } from '@kbn/securitysolution-rules';
import { SERVER_APP_ID } from '../../../../../common/constants';

import type { QueryRuleParams } from '../../schemas/rule_schemas';
import { queryRuleParams } from '../../schemas/rule_schemas';
import { queryExecutor } from '../../signals/executors/query';
import type { CreateRuleOptions, SecurityAlertType } from '../types';
import { validateImmutable, validateIndexPatterns } from '../utils';
export const createQueryAlertType = (
  createOptions: CreateRuleOptions
): SecurityAlertType<QueryRuleParams, {}, {}, 'default'> => {
  const { eventsTelemetry, experimentalFeatures, version } = createOptions;
  return {
    id: QUERY_RULE_TYPE_ID,
    name: 'Custom Query Rule',
    validate: {
      params: {
        validate: (object: unknown) => {
          const [validated, errors] = validateNonExact(object, queryRuleParams);
          if (errors != null) {
            throw new Error(errors);
          }
          if (validated == null) {
            throw new Error('Validation of rule params failed');
          }
          return validated;
        },
        /**
         * validate rule params when rule is bulk edited (update and created in future as well)
         * returned params can be modified (useful in case of version increment)
         * @param mutatedRuleParams
         * @returns mutatedRuleParams
         */
        validateMutatedParams: (mutatedRuleParams) => {
          validateImmutable(mutatedRuleParams.immutable);
          validateIndexPatterns(mutatedRuleParams.index);

          return mutatedRuleParams;
        },
      },
    },
    actionGroups: [
      {
        id: 'default',
        name: 'Default',
      },
    ],
    defaultActionGroupId: 'default',
    actionVariables: {
      context: [{ name: 'server', description: 'the server' }],
    },
    minimumLicenseRequired: 'basic',
    isExportable: false,
    producer: SERVER_APP_ID,
    async executor(execOptions) {
      const {
        runOpts: {
          inputIndex,
          runtimeMappings,
          completeRule,
          tuple,
          exceptionItems,
          listClient,
          ruleExecutionLogger,
          searchAfterSize,
          bulkCreate,
          wrapHits,
          primaryTimestamp,
          secondaryTimestamp,
        },
        services,
        state,
      } = execOptions;

      const result = await queryExecutor({
        completeRule,
        tuple,
        exceptionItems,
        listClient,
        experimentalFeatures,
        ruleExecutionLogger,
        eventsTelemetry,
        services,
        version,
        searchAfterSize,
        bulkCreate,
        wrapHits,
        inputIndex,
        runtimeMappings,
        primaryTimestamp,
        secondaryTimestamp,
      });
      return { ...result, state };
    },
  };
};
