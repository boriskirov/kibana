/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { MockRouter, mockDependencies } from '../../__mocks__';

import { RequestHandlerContext } from '@kbn/core/server';

jest.mock('../../lib/fetch_search_results', () => ({
  fetchSearchResults: jest.fn(),
}));
import { fetchSearchResults } from '../../lib/fetch_search_results';

import { registerSearchRoute } from './search';

describe('Elasticsearch Index Mapping', () => {
  let mockRouter: MockRouter;
  const mockClient = {};

  beforeEach(() => {
    const context = {
      core: Promise.resolve({ elasticsearch: { client: mockClient } }),
    } as jest.Mocked<RequestHandlerContext>;

    mockRouter = new MockRouter({
      context,
      method: 'get',
      path: '/internal/enterprise_search/indices/{index_name}/search/{query}',
    });

    registerSearchRoute({
      ...mockDependencies,
      router: mockRouter.router,
    });
  });

  describe('GET /internal/enterprise_search/indices/{index_name}/search/{query}', () => {
    it('fails validation without index_name', () => {
      const request = { params: { query: 'banana' } };
      mockRouter.shouldThrow(request);
    });

    it('fails validation without query', () => {
      const request = { params: { index_name: 'search-banana' } };
      mockRouter.shouldThrow(request);
    });

    it('returns search results for a query', async () => {
      const mockData = {
        _shards: { failed: 0, skipped: 0, successful: 2, total: 2 },
        hits: {
          hits: [
            {
              _id: '5a12292a0f5ae10021650d7e',
              _index: 'search-regular-index',
              _score: 4.437291,
              _source: { id: '5a12292a0f5ae10021650d7e', name: 'banana' },
            },
          ],

          max_score: null,
          total: { relation: 'eq', value: 1 },
        },
        timed_out: false,
        took: 4,
      };

      (fetchSearchResults as jest.Mock).mockImplementationOnce(() => {
        return Promise.resolve(mockData);
      });

      await mockRouter.callRoute({
        params: { index_name: 'search-index-name', query: 'banana' },
      });

      expect(fetchSearchResults).toHaveBeenCalledWith(mockClient, 'search-index-name', 'banana');

      expect(mockRouter.response.ok).toHaveBeenCalledWith({
        body: mockData,
        headers: { 'content-type': 'application/json' },
      });
    });
  });
});
