/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { Logger } from '@kbn/logging';
import { SavedObjectsErrorHelpers } from '../saved_objects';
import { SavedObjectsClientContract } from '../saved_objects/types';
import { createOrUpgradeSavedConfig } from './create_or_upgrade_saved_config';
import { UiSettingsParams } from './types';
import { CannotOverrideError } from './ui_settings_errors';
import { Cache } from './cache';
import { BaseUiSettingsClient } from './base_ui_settings_client';

export interface UiSettingsServiceOptions {
  type: string;
  id: string;
  buildNum: number;
  savedObjectsClient: SavedObjectsClientContract;
  overrides?: Record<string, any>;
  defaults?: Record<string, UiSettingsParams>;
  log: Logger;
}

interface ReadOptions {
  autoCreateOrUpgradeIfMissing?: boolean;
}

interface UserProvidedValue<T = unknown> {
  userValue?: T;
  isOverridden?: boolean;
}

type UserProvided<T = unknown> = Record<string, UserProvidedValue<T>>;

export class UiSettingsClient extends BaseUiSettingsClient {
  private readonly type: UiSettingsServiceOptions['type'];
  private readonly id: UiSettingsServiceOptions['id'];
  private readonly buildNum: UiSettingsServiceOptions['buildNum'];
  private readonly savedObjectsClient: UiSettingsServiceOptions['savedObjectsClient'];
  private readonly cache: Cache;

  constructor(options: UiSettingsServiceOptions) {
    const { type, id, buildNum, savedObjectsClient, log, defaults = {}, overrides = {} } = options;
    super({ overrides, defaults, log });

    this.type = type;
    this.id = id;
    this.buildNum = buildNum;
    this.savedObjectsClient = savedObjectsClient;
    this.cache = new Cache();
  }

  async getUserProvided<T = unknown>(): Promise<UserProvided<T>> {
    const cachedValue = this.cache.get();
    if (cachedValue) {
      return cachedValue;
    }

    const userProvided: UserProvided<T> = this.onReadHook(await this.read());

    // write all overridden keys, dropping the userValue is override is null and
    // adding keys for overrides that are not in saved object
    for (const [key, value] of Object.entries(this.overrides)) {
      userProvided[key] =
        value === null ? { isOverridden: true } : { isOverridden: true, userValue: value };
    }

    this.cache.set(userProvided);

    return userProvided;
  }

  async setMany(changes: Record<string, any>) {
    this.cache.del();
    this.onWriteHook(changes);
    await this.write({ changes });
  }

  async set(key: string, value: any) {
    await this.setMany({ [key]: value });
  }

  async remove(key: string) {
    await this.set(key, null);
  }

  async removeMany(keys: string[]) {
    const changes: Record<string, null> = {};
    keys.forEach((key) => {
      changes[key] = null;
    });
    await this.setMany(changes);
  }

  private assertUpdateAllowed(key: string) {
    if (this.isOverridden(key)) {
      throw new CannotOverrideError(`Unable to update "${key}" because it is overridden`);
    }
  }

  private onWriteHook(changes: Record<string, unknown>) {
    for (const key of Object.keys(changes)) {
      this.assertUpdateAllowed(key);
    }

    for (const [key, value] of Object.entries(changes)) {
      this.validateKey(key, value);
    }
  }

  private onReadHook<T = unknown>(values: Record<string, unknown>) {
    // write the userValue for each key stored in the saved object that is not overridden
    // validate value read from saved objects as it can be changed via SO API
    const filteredValues: UserProvided<T> = {};
    for (const [key, userValue] of Object.entries(values)) {
      if (userValue === null || this.isOverridden(key)) continue;
      try {
        this.validateKey(key, userValue);
        filteredValues[key] = {
          userValue: userValue as T,
        };
      } catch (error) {
        this.log.warn(`Ignore invalid UiSettings value. ${error}.`);
      }
    }

    return filteredValues;
  }

  private async write({
    changes,
    autoCreateOrUpgradeIfMissing = true,
  }: {
    changes: Record<string, any>;
    autoCreateOrUpgradeIfMissing?: boolean;
  }) {
    try {
      await this.savedObjectsClient.update(this.type, this.id, changes);
    } catch (error) {
      if (!SavedObjectsErrorHelpers.isNotFoundError(error) || !autoCreateOrUpgradeIfMissing) {
        throw error;
      }

      await createOrUpgradeSavedConfig({
        savedObjectsClient: this.savedObjectsClient,
        version: this.id,
        buildNum: this.buildNum,
        log: this.log,
        handleWriteErrors: false,
      });

      await this.write({
        changes,
        autoCreateOrUpgradeIfMissing: false,
      });
    }
  }

  private async read({ autoCreateOrUpgradeIfMissing = true }: ReadOptions = {}): Promise<
    Record<string, any>
  > {
    try {
      const resp = await this.savedObjectsClient.get<Record<string, any>>(this.type, this.id);
      return resp.attributes;
    } catch (error) {
      if (SavedObjectsErrorHelpers.isNotFoundError(error) && autoCreateOrUpgradeIfMissing) {
        const failedUpgradeAttributes = await createOrUpgradeSavedConfig({
          savedObjectsClient: this.savedObjectsClient,
          version: this.id,
          buildNum: this.buildNum,
          log: this.log,
          handleWriteErrors: true,
        });

        if (!failedUpgradeAttributes) {
          return await this.read({ autoCreateOrUpgradeIfMissing: false });
        }

        return failedUpgradeAttributes;
      }

      if (this.isIgnorableError(error)) {
        return {};
      }

      throw error;
    }
  }

  private isIgnorableError(error: Error) {
    const { isForbiddenError, isEsUnavailableError } = SavedObjectsErrorHelpers;
    return isForbiddenError(error) || isEsUnavailableError(error);
  }
}
