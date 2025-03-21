/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import * as t from 'io-ts';

import {
  actions,
  from,
  risk_score,
  machine_learning_job_id,
  risk_score_mapping,
  threat_filters,
  threat_query,
  threat_mapping,
  threat_index,
  threat_indicator_path,
  concurrent_searches,
  items_per_search,
  threats,
  severity_mapping,
  severity,
  max_signals,
  throttle,
} from '@kbn/securitysolution-io-ts-alerting-types';
import { listArray } from '@kbn/securitysolution-io-ts-list-types';
import { version } from '@kbn/securitysolution-io-ts-types';

import { RuleExecutionSummary } from '../../rule_monitoring';
import {
  id,
  index,
  data_view_id,
  filters,
  timestamp_field,
  event_category_override,
  tiebreaker_field,
  building_block_type,
  note,
  license,
  timeline_id,
  timeline_title,
  meta,
  rule_name_override,
  timestamp_override,
  timestamp_override_fallback_disabled,
  author,
  description,
  false_positives,
  rule_id,
  immutable,
  output_index,
  query,
  to,
  references,
  saved_id,
  threshold,
  anomaly_threshold,
  name,
  tags,
  interval,
  enabled,
  outcome,
  alias_target_id,
  alias_purpose,
  updated_at,
  updated_by,
  created_at,
  created_by,
  namespace,
  RelatedIntegrationArray,
  RequiredFieldArray,
  SetupGuide,
  newTermsFields,
  historyWindowStart,
} from '../common';

export const createSchema = <
  Required extends t.Props,
  Optional extends t.Props,
  Defaultable extends t.Props
>(
  requiredFields: Required,
  optionalFields: Optional,
  defaultableFields: Defaultable
) => {
  return t.intersection([
    t.exact(t.type(requiredFields)),
    t.exact(t.partial(optionalFields)),
    t.exact(t.partial(defaultableFields)),
  ]);
};

const patchSchema = <
  Required extends t.Props,
  Optional extends t.Props,
  Defaultable extends t.Props
>(
  requiredFields: Required,
  optionalFields: Optional,
  defaultableFields: Defaultable
) => {
  return t.intersection([
    t.partial(requiredFields),
    t.partial(optionalFields),
    t.partial(defaultableFields),
  ]);
};

const responseSchema = <
  Required extends t.Props,
  Optional extends t.Props,
  Defaultable extends t.Props
>(
  requiredFields: Required,
  optionalFields: Optional,
  defaultableFields: Defaultable
) => {
  return t.intersection([
    t.exact(t.type(requiredFields)),
    t.exact(t.partial(optionalFields)),
    t.exact(t.type(defaultableFields)),
  ]);
};

export const buildAPISchemas = <R extends t.Props, O extends t.Props, D extends t.Props>(
  params: APIParams<R, O, D>
) => {
  return {
    create: createSchema(params.required, params.optional, params.defaultable),
    patch: patchSchema(params.required, params.optional, params.defaultable),
    response: responseSchema(params.required, params.optional, params.defaultable),
  };
};

interface APIParams<
  Required extends t.Props,
  Optional extends t.Props,
  Defaultable extends t.Props
> {
  required: Required;
  optional: Optional;
  defaultable: Defaultable;
}

const baseParams = {
  required: {
    name,
    description,
    risk_score,
    severity,
  },
  optional: {
    building_block_type,
    note,
    license,
    outcome,
    alias_target_id,
    alias_purpose,
    output_index,
    timeline_id,
    timeline_title,
    meta,
    rule_name_override,
    timestamp_override,
    timestamp_override_fallback_disabled,
    namespace,
  },
  defaultable: {
    tags,
    interval,
    enabled,
    throttle,
    actions,
    author,
    false_positives,
    from,
    // maxSignals not used in ML rules but probably should be used
    max_signals,
    risk_score_mapping,
    severity_mapping,
    threat: threats,
    to,
    references,
    version,
    exceptions_list: listArray,
  },
};
const {
  create: baseCreateParams,
  patch: basePatchParams,
  response: baseResponseParams,
} = buildAPISchemas(baseParams);
export { baseCreateParams };

// "shared" types are the same across all rule types, and built from "baseParams" above
// with some variations for each route. These intersect with type specific schemas below
// to create the full schema for each route.
export const sharedCreateSchema = t.intersection([
  baseCreateParams,
  t.exact(t.partial({ rule_id })),
]);
export type SharedCreateSchema = t.TypeOf<typeof sharedCreateSchema>;

export const sharedUpdateSchema = t.intersection([
  baseCreateParams,
  t.exact(t.partial({ rule_id })),
  t.exact(t.partial({ id })),
]);
export type SharedUpdateSchema = t.TypeOf<typeof sharedUpdateSchema>;

export const sharedPatchSchema = t.intersection([
  basePatchParams,
  t.exact(t.partial({ rule_id, id })),
]);

// START type specific parameter definitions
// -----------------------------------------
const eqlRuleParams = {
  required: {
    type: t.literal('eql'),
    language: t.literal('eql'),
    query,
  },
  optional: {
    index,
    data_view_id,
    filters,
    timestamp_field,
    event_category_override,
    tiebreaker_field,
  },
  defaultable: {},
};
const {
  create: eqlCreateParams,
  patch: eqlPatchParams,
  response: eqlResponseParams,
} = buildAPISchemas(eqlRuleParams);
export { eqlCreateParams, eqlResponseParams };

const threatMatchRuleParams = {
  required: {
    type: t.literal('threat_match'),
    query,
    threat_query,
    threat_mapping,
    threat_index,
  },
  optional: {
    index,
    data_view_id,
    filters,
    saved_id,
    threat_filters,
    threat_indicator_path,
    threat_language: t.keyof({ kuery: null, lucene: null }),
    concurrent_searches,
    items_per_search,
  },
  defaultable: {
    language: t.keyof({ kuery: null, lucene: null }),
  },
};
const {
  create: threatMatchCreateParams,
  patch: threatMatchPatchParams,
  response: threatMatchResponseParams,
} = buildAPISchemas(threatMatchRuleParams);
export { threatMatchCreateParams };

const queryRuleParams = {
  required: {
    type: t.literal('query'),
  },
  optional: {
    index,
    data_view_id,
    filters,
    saved_id,
  },
  defaultable: {
    query,
    language: t.keyof({ kuery: null, lucene: null }),
  },
};
const {
  create: queryCreateParams,
  patch: queryPatchParams,
  response: queryResponseParams,
} = buildAPISchemas(queryRuleParams);

export { queryCreateParams };

const savedQueryRuleParams = {
  required: {
    type: t.literal('saved_query'),
    saved_id,
  },
  optional: {
    // Having language, query, and filters possibly defined adds more code confusion and probably user confusion
    // if the saved object gets deleted for some reason
    index,
    data_view_id,
    query,
    filters,
  },
  defaultable: {
    language: t.keyof({ kuery: null, lucene: null }),
  },
};
const {
  create: savedQueryCreateParams,
  patch: savedQueryPatchParams,
  response: savedQueryResponseParams,
} = buildAPISchemas(savedQueryRuleParams);

export { savedQueryCreateParams };

const thresholdRuleParams = {
  required: {
    type: t.literal('threshold'),
    query,
    threshold,
  },
  optional: {
    index,
    data_view_id,
    filters,
    saved_id,
  },
  defaultable: {
    language: t.keyof({ kuery: null, lucene: null }),
  },
};
const {
  create: thresholdCreateParams,
  patch: thresholdPatchParams,
  response: thresholdResponseParams,
} = buildAPISchemas(thresholdRuleParams);

export { thresholdCreateParams };

const machineLearningRuleParams = {
  required: {
    type: t.literal('machine_learning'),
    anomaly_threshold,
    machine_learning_job_id,
  },
  optional: {},
  defaultable: {},
};
const {
  create: machineLearningCreateParams,
  patch: machineLearningPatchParams,
  response: machineLearningResponseParams,
} = buildAPISchemas(machineLearningRuleParams);

export { machineLearningCreateParams };

const newTermsRuleParams = {
  required: {
    type: t.literal('new_terms'),
    query,
    new_terms_fields: newTermsFields,
    history_window_start: historyWindowStart,
  },
  optional: {
    index,
    data_view_id,
    filters,
  },
  defaultable: {
    language: t.keyof({ kuery: null, lucene: null }),
  },
};
const {
  create: newTermsCreateParams,
  patch: newTermsPatchParams,
  response: newTermsResponseParams,
} = buildAPISchemas(newTermsRuleParams);

export { newTermsCreateParams };
// ---------------------------------------
// END type specific parameter definitions

export const createTypeSpecific = t.union([
  eqlCreateParams,
  threatMatchCreateParams,
  queryCreateParams,
  savedQueryCreateParams,
  thresholdCreateParams,
  machineLearningCreateParams,
  newTermsCreateParams,
]);
export type CreateTypeSpecific = t.TypeOf<typeof createTypeSpecific>;

// Convenience types for building specific types of rules
type CreateSchema<T> = SharedCreateSchema & T;
export type EqlCreateSchema = CreateSchema<t.TypeOf<typeof eqlCreateParams>>;
export type ThreatMatchCreateSchema = CreateSchema<t.TypeOf<typeof threatMatchCreateParams>>;
export type QueryCreateSchema = CreateSchema<t.TypeOf<typeof queryCreateParams>>;
export type SavedQueryCreateSchema = CreateSchema<t.TypeOf<typeof savedQueryCreateParams>>;
export type ThresholdCreateSchema = CreateSchema<t.TypeOf<typeof thresholdCreateParams>>;
export type MachineLearningCreateSchema = CreateSchema<
  t.TypeOf<typeof machineLearningCreateParams>
>;
export type NewTermsCreateSchema = CreateSchema<t.TypeOf<typeof newTermsCreateParams>>;

export const createRulesSchema = t.intersection([sharedCreateSchema, createTypeSpecific]);
export type CreateRulesSchema = t.TypeOf<typeof createRulesSchema>;
export const previewRulesSchema = t.intersection([
  sharedCreateSchema,
  createTypeSpecific,
  t.type({ invocationCount: t.number, timeframeEnd: t.string }),
]);
export type PreviewRulesSchema = t.TypeOf<typeof previewRulesSchema>;

type UpdateSchema<T> = SharedUpdateSchema & T;
export type QueryUpdateSchema = UpdateSchema<t.TypeOf<typeof queryCreateParams>>;
export type MachineLearningUpdateSchema = UpdateSchema<
  t.TypeOf<typeof machineLearningCreateParams>
>;
export type NewTermsUpdateSchema = UpdateSchema<t.TypeOf<typeof newTermsCreateParams>>;

export const patchTypeSpecific = t.union([
  eqlPatchParams,
  threatMatchPatchParams,
  queryPatchParams,
  savedQueryPatchParams,
  thresholdPatchParams,
  machineLearningPatchParams,
  newTermsPatchParams,
]);
export {
  eqlPatchParams,
  threatMatchPatchParams,
  queryPatchParams,
  savedQueryPatchParams,
  thresholdPatchParams,
  machineLearningPatchParams,
  newTermsPatchParams,
};

export type EqlPatchParams = t.TypeOf<typeof eqlPatchParams>;
export type ThreatMatchPatchParams = t.TypeOf<typeof threatMatchPatchParams>;
export type QueryPatchParams = t.TypeOf<typeof queryPatchParams>;
export type SavedQueryPatchParams = t.TypeOf<typeof savedQueryPatchParams>;
export type ThresholdPatchParams = t.TypeOf<typeof thresholdPatchParams>;
export type MachineLearningPatchParams = t.TypeOf<typeof machineLearningPatchParams>;
export type NewTermsPatchParams = t.TypeOf<typeof newTermsPatchParams>;

const responseTypeSpecific = t.union([
  eqlResponseParams,
  threatMatchResponseParams,
  queryResponseParams,
  savedQueryResponseParams,
  thresholdResponseParams,
  machineLearningResponseParams,
  newTermsResponseParams,
]);
export type ResponseTypeSpecific = t.TypeOf<typeof responseTypeSpecific>;

export const updateRulesSchema = t.intersection([createTypeSpecific, sharedUpdateSchema]);
export type UpdateRulesSchema = t.TypeOf<typeof updateRulesSchema>;

const responseRequiredFields = {
  id,
  rule_id,
  immutable,
  updated_at,
  updated_by,
  created_at,
  created_by,

  // NOTE: For now, Related Integrations, Required Fields and Setup Guide are supported for prebuilt
  // rules only. We don't want to allow users to edit these 3 fields via the API. If we added them
  // to baseParams.defaultable, they would become a part of the request schema as optional fields.
  // This is why we add them here, in order to add them only to the response schema.
  related_integrations: RelatedIntegrationArray,
  required_fields: RequiredFieldArray,
  setup: SetupGuide,
};

const responseOptionalFields = {
  execution_summary: RuleExecutionSummary,
};

export const fullResponseSchema = t.intersection([
  baseResponseParams,
  responseTypeSpecific,
  t.exact(t.type(responseRequiredFields)),
  t.exact(t.partial(responseOptionalFields)),
]);
export type FullResponseSchema = t.TypeOf<typeof fullResponseSchema>;

export interface RulePreviewLogs {
  errors: string[];
  warnings: string[];
  startedAt?: string;
  duration: number;
}

export interface PreviewResponse {
  previewId: string | undefined;
  logs: RulePreviewLogs[] | undefined;
  isAborted: boolean | undefined;
}
