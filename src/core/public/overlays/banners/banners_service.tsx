/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import type { I18nStart } from '@kbn/core-i18n-browser';
import type { IUiSettingsClient } from '@kbn/core-ui-settings-browser';
import { PriorityMap } from './priority_map';
import { BannersList } from './banners_list';
import { MountPoint } from '../../types';
import { UserBannerService } from './user_banner_service';

/** @public */
export interface OverlayBannersStart {
  /**
   * Add a new banner
   *
   * @param mount {@link MountPoint}
   * @param priority optional priority order to display this banner. Higher priority values are shown first.
   * @returns a unique identifier for the given banner to be used with {@link OverlayBannersStart.remove} and
   *          {@link OverlayBannersStart.replace}
   */
  add(mount: MountPoint, priority?: number): string;

  /**
   * Remove a banner
   *
   * @param id the unique identifier for the banner returned by {@link OverlayBannersStart.add}
   * @returns if the banner was found or not
   */
  remove(id: string): boolean;

  /**
   * Replace a banner in place
   *
   * @param id the unique identifier for the banner returned by {@link OverlayBannersStart.add}
   * @param mount {@link MountPoint}
   * @param priority optional priority order to display this banner. Higher priority values are shown first.
   * @returns a new identifier for the given banner to be used with {@link OverlayBannersStart.remove} and
   *          {@link OverlayBannersStart.replace}
   */
  replace(id: string | undefined, mount: MountPoint, priority?: number): string;

  /** @internal */
  get$(): Observable<OverlayBanner[]>;
  getComponent(): JSX.Element;
}

/** @internal */
export interface OverlayBanner {
  readonly id: string;
  readonly mount: MountPoint;
  readonly priority: number;
}

interface StartDeps {
  i18n: I18nStart;
  uiSettings: IUiSettingsClient;
}

/** @internal */
export class OverlayBannersService {
  private readonly userBanner = new UserBannerService();

  public start({ i18n, uiSettings }: StartDeps): OverlayBannersStart {
    let uniqueId = 0;
    const genId = () => `${uniqueId++}`;
    const banners$ = new BehaviorSubject(new PriorityMap<string, OverlayBanner>());

    const service: OverlayBannersStart = {
      add: (mount, priority = 0) => {
        const id = genId();
        const nextBanner: OverlayBanner = { id, mount, priority };
        banners$.next(banners$.value.add(id, nextBanner));
        return id;
      },

      remove: (id: string) => {
        if (!banners$.value.has(id)) {
          return false;
        }
        banners$.next(banners$.value.remove(id));
        return true;
      },

      replace(id: string | undefined, mount: MountPoint, priority = 0) {
        if (!id || !banners$.value.has(id)) {
          return this.add(mount, priority);
        }
        const nextId = genId();
        const nextBanner = { id: nextId, mount, priority };
        banners$.next(banners$.value.remove(id).add(nextId, nextBanner));
        return nextId;
      },

      get$() {
        return banners$.pipe(map((bannerMap) => [...bannerMap.values()]));
      },

      getComponent() {
        return <BannersList banners$={this.get$()} />;
      },
    };

    this.userBanner.start({ banners: service, i18n, uiSettings });

    return service;
  }

  public stop() {
    this.userBanner.stop();
  }
}
