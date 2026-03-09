/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

export const ACTION_PANEL_INSIGHTS = 'ACTION_PANEL_INSIGHTS';

/** Embeddable types that support Insights in the panel menu */
export const INSIGHTS_SUPPORTED_EMBEDDABLE_TYPES = ['lens', 'visualization'] as const;
