/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { useRef } from 'react';
import useDebounce from 'react-use/lib/useDebounce';
import { monaco } from '@kbn/monaco';
import { getIndexPatternFromSQLQuery } from '@kbn/es-query';
import { i18n } from '@kbn/i18n';

export const useDebounceWithOptions = (
  fn: Function,
  { skipFirstRender }: { skipFirstRender: boolean } = { skipFirstRender: false },
  ms?: number | undefined,
  deps?: React.DependencyList | undefined
) => {
  const isFirstRender = useRef(true);
  const newDeps = [...(deps || []), isFirstRender];

  return useDebounce(
    () => {
      if (skipFirstRender && isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      return fn();
    },
    ms,
    newDeps
  );
};

export const parseErrors = (errors: Error[], code: string) => {
  return errors.map((error) => {
    if (error.message.includes('line')) {
      const text = error.message.split('line')[1];
      const [lineNumber, startPosition, errorMessage] = text.split(':');
      // initialize the length to 10 in case no error word found
      let errorLength = 10;
      const [_, wordWithError] = errorMessage.split('[');
      if (wordWithError) {
        errorLength = wordWithError.length - 1;
      }
      return {
        message: errorMessage,
        startColumn: Number(startPosition),
        startLineNumber: Number(lineNumber),
        endColumn: Number(startPosition) + errorLength,
        endLineNumber: Number(lineNumber),
        severity: monaco.MarkerSeverity.Error,
      };
    } else if (error.message.includes('No data view found')) {
      const dataviewString = getIndexPatternFromSQLQuery(code);
      const temp = code.split(dataviewString);
      const lastChar = temp[0]?.charAt(temp[0]?.length - 1);
      const additionnalLength = lastChar === '"' || "'" ? 2 : 0;
      // 5 is the length of FROM + space
      const errorLength = 5 + dataviewString.length + additionnalLength;
      // no dataview found error message
      const hasLines = /\r|\n/.exec(code);
      if (hasLines) {
        const linesText = code.split(/\r|\n/);
        let indexWithError = 1;
        let lineWithError = '';
        linesText.forEach((line, index) => {
          if (line.includes('FROM') || line.includes('from')) {
            indexWithError = index + 1;
            lineWithError = line;
          }
        });
        const lineWithErrorUpperCase = lineWithError.toUpperCase();
        return {
          message: error.message,
          startColumn: lineWithErrorUpperCase.indexOf('FROM') + 1,
          startLineNumber: indexWithError,
          endColumn: lineWithErrorUpperCase.indexOf('FROM') + 1 + errorLength,
          endLineNumber: indexWithError,
          severity: monaco.MarkerSeverity.Error,
        };
      } else {
        return {
          message: error.message,
          startColumn: code.toUpperCase().indexOf('FROM') + 1,
          startLineNumber: 1,
          endColumn: code.toUpperCase().indexOf('FROM') + 1 + errorLength,
          endLineNumber: 1,
          severity: monaco.MarkerSeverity.Error,
        };
      }
    } else {
      // unknown error message
      return {
        message: error.message,
        startColumn: 1,
        startLineNumber: 1,
        endColumn: 10,
        endLineNumber: 1,
        severity: monaco.MarkerSeverity.Error,
      };
    }
  });
};

export const getDocumentationSections = async (language: string) => {
  const groups: Array<{
    label: string;
    description?: string;
    items: Array<{ label: string; description?: JSX.Element }>;
  }> = [];
  if (language === 'sql') {
    const {
      comparisonOperators,
      logicalOperators,
      mathOperators,
      initialSection,
      aggregateFunctions,
    } = await import('./sql_documentation_sections');
    groups.push({
      label: i18n.translate('unifiedSearch.query.textBasedLanguagesEditor.howItWorks', {
        defaultMessage: 'How it works',
      }),
      items: [],
    });
    groups.push(comparisonOperators, logicalOperators, mathOperators, aggregateFunctions);
    return {
      groups,
      initialSection,
    };
  }
};
