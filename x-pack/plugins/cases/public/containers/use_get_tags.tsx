/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { useQuery } from 'react-query';
import { useToasts } from '../common/lib/kibana';
import { useCasesContext } from '../components/cases_context/use_cases_context';
import { ServerError } from '../types';
import { getTags } from './api';
import { CASE_TAGS_CACHE_KEY } from './constants';
import * as i18n from './translations';

export const useGetTags = (cacheKey?: string) => {
  const toasts = useToasts();
  const { owner } = useCasesContext();
  const key = [...(cacheKey ? [cacheKey] : []), CASE_TAGS_CACHE_KEY];
  return useQuery(
    key,
    () => {
      const abortCtrl = new AbortController();
      return getTags(abortCtrl.signal, owner);
    },
    {
      onError: (error: ServerError) => {
        if (error.name !== 'AbortError') {
          toasts.addError(
            error.body && error.body.message ? new Error(error.body.message) : error,
            { title: i18n.ERROR_TITLE }
          );
        }
      },
    }
  );
};
