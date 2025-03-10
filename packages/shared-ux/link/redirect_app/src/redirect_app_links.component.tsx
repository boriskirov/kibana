/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useRef, MouseEventHandler, useCallback } from 'react';
import type { HTMLAttributes, DetailedHTMLProps, FC } from 'react';

import { navigateToUrlClickHandler } from './click_handler';
import { NavigateToUrl } from './types';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  navigateToUrl: NavigateToUrl;
  currentAppId?: string | undefined;
}

/**
 * Utility component that will intercept click events on children anchor (`<a>`) elements to call
 * `navigateToUrl` with the link's href. This will trigger SPA friendly navigation when the link points
 * to a valid Kibana app.
 *
 * @example
 * ```tsx
 * <RedirectAppLinks currentAppId="appId" navigateToUrl={(url) => { ... }}>
 *   <a href="/base-path/app/another-app/some-path">Go to another-app</a>
 * </RedirectAppLinks>
 * ```
 */
export const RedirectAppLinks: FC<Props> = ({ children, navigateToUrl, currentAppId }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) =>
      navigateToUrlClickHandler({
        event,
        currentAppId,
        navigateToUrl,
        container: containerRef.current,
      }),
    [currentAppId, navigateToUrl]
  );

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div ref={containerRef} onClick={handleClick}>
      {children}
    </div>
  );
};
