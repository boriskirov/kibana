/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React, { createContext, useContext, type ReactChild } from 'react';
import { Subject } from 'rxjs';
import type { DataView } from '@kbn/data-views-plugin/common';
import { ENTITIES_LATEST_ALIAS } from '../../../common/entities';
import { useAdHocDataView } from '../../hooks/use_adhoc_data_view';

interface InventorySearchBarContextType {
  searchBarContentSubject$: Subject<{
    kuery?: string;
    entityTypes?: string[];
  }>;
  refreshSubject$: Subject<void>;
  dataView?: DataView;
}

const InventorySearchBarContext = createContext<InventorySearchBarContextType>({
  searchBarContentSubject$: new Subject(),
  refreshSubject$: new Subject(),
});

export function InventorySearchBarContextProvider({ children }: { children: ReactChild }) {
  const { dataView } = useAdHocDataView(ENTITIES_LATEST_ALIAS);
  return (
    <InventorySearchBarContext.Provider
      value={{
        searchBarContentSubject$: new Subject(),
        refreshSubject$: new Subject(),
        dataView,
      }}
    >
      {children}
    </InventorySearchBarContext.Provider>
  );
}

export function useInventorySearchBarContext() {
  const context = useContext(InventorySearchBarContext);
  if (!context) {
    throw new Error('Context was not found');
  }
  return context;
}
