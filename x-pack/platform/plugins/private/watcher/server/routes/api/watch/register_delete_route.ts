/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { schema } from '@kbn/config-schema';
import { IScopedClusterClient } from '@kbn/core/server';
import { RouteDependencies } from '../../../types';

const paramsSchema = schema.object({
  watchId: schema.string(),
});

function deleteWatch(dataClient: IScopedClusterClient, watchId: string) {
  return dataClient.asCurrentUser.watcher.deleteWatch({
    id: watchId,
  });
}

export function registerDeleteRoute({
  router,
  license,
  lib: { handleEsError },
}: RouteDependencies) {
  router.delete(
    {
      path: '/api/watcher/watch/{watchId}',
      security: {
        authz: {
          enabled: false,
          reason: 'Relies on es client for authorization',
        },
      },
      validate: {
        params: paramsSchema,
      },
    },
    license.guardApiRoute(async (ctx, request, response) => {
      const { watchId } = request.params;

      try {
        const esClient = (await ctx.core).elasticsearch.client;
        return response.ok({
          body: await deleteWatch(esClient, watchId),
        });
      } catch (e) {
        if (e?.statusCode === 404 && e.meta?.body?.error) {
          e.meta.body.error.reason = `Watch with id = ${watchId} not found`;
        }
        return handleEsError({ error: e, response });
      }
    })
  );
}
