/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { History } from 'history';
import type { FC } from 'react';
import React, { memo, useEffect } from 'react';
import { Router, Switch } from 'react-router-dom';
import { Route } from '@kbn/kibana-react-plugin/public';
import { useDispatch } from 'react-redux';

import type { AppLeaveHandler, AppMountParameters } from '@kbn/core/public';
import { ManageRoutesSpy } from '../common/utils/route/manage_spy_routes';
import { RouteCapture } from '../common/components/endpoint/route_capture';
import type { AppAction } from '../common/store/actions';
import { NotFoundPage } from './404';
import { HomePage } from './home';

interface RouterProps {
  children: React.ReactNode;
  history: History;
  onAppLeave: (handler: AppLeaveHandler) => void;
  setHeaderActionMenu: AppMountParameters['setHeaderActionMenu'];
}

const PageRouterComponent: FC<RouterProps> = ({
  children,
  history,
  onAppLeave,
  setHeaderActionMenu,
}) => {
  const dispatch = useDispatch<(action: AppAction) => void>();
  useEffect(() => {
    return () => {
      // When app is dismounted via a non-router method (ex. using Kibana's `services.application.navigateToApp()`)
      // ensure that one last `userChangedUrl` store action is dispatched, which will help trigger state reset logic
      dispatch({
        type: 'userChangedUrl',
        payload: { pathname: '', search: '', hash: '' },
      });
    };
  }, [dispatch]);

  return (
    <ManageRoutesSpy>
      <Router history={history}>
        <RouteCapture>
          <Switch>
            <Route path="/">
              <HomePage onAppLeave={onAppLeave} setHeaderActionMenu={setHeaderActionMenu}>
                {children}
              </HomePage>
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </RouteCapture>
      </Router>
    </ManageRoutesSpy>
  );
};

export const PageRouter = memo(PageRouterComponent);
