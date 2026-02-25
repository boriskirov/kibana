/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  EuiBadge,
  EuiButtonIcon,
  EuiFilterButton,
  EuiFilterGroup,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiInMemoryTable,
  EuiLink,
  EuiText,
  type EuiBasicTableColumn,
} from '@elastic/eui';
import classNames from 'classnames';
import { StardustWrapper } from '@kbn/content-management-favorites-public';
import { i18n } from '@kbn/i18n';
import type { Feature } from '@kbn/streams-schema';
import type { EuiSearchBarProps, Query } from '@elastic/eui';
import { upperFirst } from 'lodash';
import React, { useState, useCallback, useMemo } from 'react';
import { useFetchFeatures } from '../../../../hooks/use_fetch_features';
import { LoadingPanel } from '../../../loading_panel';
import { DiscoveryFeatureDetailsFlyout } from './discovery_feature_details_flyout';
import { getConfidenceColor } from '../../../stream_detail_systems/stream_features/use_stream_features_table';

type StatusFilter = 'all' | 'starred' | 'active' | 'archived';

export function FeaturesTable() {
  const { data, isLoading: loading } = useFetchFeatures();
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [starredFeatureIds, setStarredFeatureIds] = useState<Set<string>>(new Set());
  const [justStarredId, setJustStarredId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [searchQuery, setSearchQuery] = useState<Query | undefined>();

  const handleSelectFeature = useCallback((feature: Feature | null) => {
    setSelectedFeature(feature);
  }, []);

  const handleCloseFlyout = useCallback(() => {
    setSelectedFeature(null);
  }, []);

  const toggleStar = useCallback((featureId: string) => {
    setStarredFeatureIds((prev) => {
      const next = new Set(prev);
      if (next.has(featureId)) {
        next.delete(featureId);
      } else {
        next.add(featureId);
        setJustStarredId(featureId);
        setTimeout(() => setJustStarredId(null), 650);
      }
      return next;
    });
  }, []);

  const handleQueryChange: EuiSearchBarProps['onChange'] = useCallback(
    ({ query }: { query?: Query | null }) => {
      if (query) setSearchQuery(query);
    },
    []
  );

  const sortedFeatures = useMemo(() => {
    const features = data?.features ?? [];
    return [...features].sort((a, b) => {
      const aStarred = starredFeatureIds.has(a.id);
      const bStarred = starredFeatureIds.has(b.id);
      if (aStarred && !bStarred) return -1;
      if (!aStarred && bStarred) return 1;
      return 0;
    });
  }, [data?.features, starredFeatureIds]);

  const { filteredFeatures, filterCounts } = useMemo(() => {
    const starred = sortedFeatures.filter((f) => starredFeatureIds.has(f.id));
    const active = sortedFeatures.filter((f) => f.status === 'active');
    const archived = sortedFeatures.filter(
      (f) => f.status === 'stale' || f.status === 'expired'
    );

    const counts = {
      starred: starred.length,
      active: active.length,
      archived: archived.length,
    };

    let filtered: Feature[];
    switch (statusFilter) {
      case 'starred':
        filtered = starred;
        break;
      case 'active':
        filtered = active;
        break;
      case 'archived':
        filtered = archived;
        break;
      default:
        filtered = sortedFeatures;
    }

    return { filteredFeatures: filtered, filterCounts: counts };
  }, [sortedFeatures, starredFeatureIds, statusFilter]);

  if (loading && !data) {
    return <LoadingPanel size="l" />;
  }

  const columns: Array<EuiBasicTableColumn<Feature>> = [
    {
      field: 'details',
      name: '',
      width: '40px',
      render: (_: unknown, feature: Feature) => (
        <EuiButtonIcon
          data-test-subj="featuresDiscoveryDetailsButton"
          iconType="expand"
          aria-label={i18n.translate(
            'xpack.streams.significantEventsDiscovery.featuresTable.detailsButtonAriaLabel',
            { defaultMessage: 'View details' }
          )}
          onClick={() => handleSelectFeature(feature)}
        />
      ),
    },
    {
      field: 'star',
      name: '',
      width: '40px',
      render: (_: unknown, feature: Feature) => {
        const isStarred = starredFeatureIds.has(feature.id);
        const showStardust = isStarred && justStarredId === feature.id;
        return (
          <StardustWrapper active={showStardust}>
            <EuiButtonIcon
              data-test-subj={isStarred ? 'unfavoriteButton' : 'favoriteButton'}
              iconType={isStarred ? 'starFilled' : 'starEmpty'}
              color={isStarred ? 'primary' : 'text'}
              className={classNames('cm-favorite-button', {
                'cm-favorite-button--active': isStarred,
              })}
              aria-label={
                isStarred
                  ? i18n.translate(
                      'xpack.streams.significantEventsDiscovery.featuresTable.unstarAriaLabel',
                      { defaultMessage: 'Remove from Starred' }
                    )
                  : i18n.translate(
                      'xpack.streams.significantEventsDiscovery.featuresTable.starAriaLabel',
                      { defaultMessage: 'Add to Starred' }
                    )
              }
              onClick={() => toggleStar(feature.id)}
            />
          </StardustWrapper>
        );
      },
    },
    {
      field: 'name',
      name: i18n.translate('xpack.streams.significantEventsDiscovery.featuresTable.featureColumn', {
        defaultMessage: 'Feature',
      }),
      truncateText: true,
      render: (_name: string, feature: Feature) => {
        const displayTitle = feature.title ?? feature.id;
        const secondaryText = feature.subtype ?? feature.type ?? '';
        return (
          <EuiLink
            onClick={() => handleSelectFeature(feature)}
            data-test-subj="featuresDiscoveryFeatureNameLink"
          >
            <EuiFlexGroup direction="column" gutterSize="none">
              <EuiFlexItem grow={false}>
                <EuiText size="s">{displayTitle}</EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText size="xs" color="subdued">
                  {secondaryText}
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiLink>
        );
      },
    },
    {
      field: 'type',
      name: i18n.translate('xpack.streams.significantEventsDiscovery.featuresTable.typeColumn', {
        defaultMessage: 'Type',
      }),
      width: '15%',
      render: (type: string) => <EuiBadge color="hollow">{upperFirst(type ?? '–')}</EuiBadge>,
    },
    {
      field: 'confidence',
      name: i18n.translate(
        'xpack.streams.significantEventsDiscovery.featuresTable.confidenceColumn',
        {
          defaultMessage: 'Confidence',
        }
      ),
      width: '12%',
      render: (confidence: number) => (
        <EuiHealth color={getConfidenceColor(confidence ?? 0)}>{confidence ?? '–'}</EuiHealth>
      ),
    },
    {
      field: 'stream_name',
      name: i18n.translate('xpack.streams.significantEventsDiscovery.featuresTable.streamColumn', {
        defaultMessage: 'Stream',
      }),
      width: '15%',
      render: (_streamName: string, feature: Feature) => (
        <EuiBadge color="hollow">{feature.stream_name || '--'}</EuiBadge>
      ),
    },
  ];

  return (
    <EuiFlexGroup direction="column" gutterSize="m">
      <EuiFlexItem grow={false}>
        <EuiText size="s">
          {i18n.translate('xpack.streams.significantEventsDiscovery.featuresTable.featuresCount', {
            defaultMessage: '{count} Features',
            values: { count: data?.features.length ?? 0 },
          })}
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiInMemoryTable
          tableCaption={i18n.translate(
            'xpack.streams.significantEventsDiscovery.featuresTable.tableCaption',
            { defaultMessage: 'Features table' }
          )}
          columns={columns}
          itemId="id"
          items={filteredFeatures}
          loading={loading}
          search={{
            query: searchQuery,
            onChange: handleQueryChange,
            box: {
              incremental: true,
              placeholder: i18n.translate(
                'xpack.streams.significantEventsDiscovery.featuresTable.searchPlaceholder',
                { defaultMessage: 'Search for features' }
              ),
            },
            filters: [],
            toolsRight: (
              <EuiFilterGroup aria-label={FILTER_GROUP_ARIA_LABEL}>
                <EuiFilterButton
                  withNext
                  grow={false}
                  isToggle
                  onClick={() => setStatusFilter('all')}
                  isSelected={statusFilter === 'all'}
                  hasActiveFilters={statusFilter === 'all'}
                  numFilters={sortedFeatures.length}
                  data-test-subj="featuresDiscoveryFilterAll"
                >
                  {FILTER_ALL_LABEL}
                </EuiFilterButton>
                <EuiFilterButton
                  withNext
                  grow={false}
                  isToggle
                  onClick={() => setStatusFilter('starred')}
                  isSelected={statusFilter === 'starred'}
                  hasActiveFilters={statusFilter === 'starred'}
                  numFilters={filterCounts.starred}
                  data-test-subj="featuresDiscoveryFilterStarred"
                >
                  {FILTER_STARRED_LABEL}
                </EuiFilterButton>
                <EuiFilterButton
                  withNext
                  grow={false}
                  isToggle
                  onClick={() => setStatusFilter('active')}
                  isSelected={statusFilter === 'active'}
                  hasActiveFilters={statusFilter === 'active'}
                  numFilters={filterCounts.active}
                  data-test-subj="featuresDiscoveryFilterActive"
                >
                  {FILTER_ACTIVE_LABEL}
                </EuiFilterButton>
                <EuiFilterButton
                  grow={false}
                  isToggle
                  onClick={() => setStatusFilter('archived')}
                  isSelected={statusFilter === 'archived'}
                  hasActiveFilters={statusFilter === 'archived'}
                  numFilters={filterCounts.archived}
                  data-test-subj="featuresDiscoveryFilterArchived"
                >
                  {FILTER_ARCHIVED_LABEL}
                </EuiFilterButton>
              </EuiFilterGroup>
            ),
          }}
          noItemsMessage={
            !loading
              ? i18n.translate(
                  'xpack.streams.significantEventsDiscovery.featuresTable.noItemsMessage',
                  {
                    defaultMessage: 'No features found',
                  }
                )
              : ''
          }
        />
      </EuiFlexItem>
      {selectedFeature && (
        <DiscoveryFeatureDetailsFlyout
          feature={selectedFeature}
          onClose={handleCloseFlyout}
          isStarred={starredFeatureIds.has(selectedFeature.id)}
          onStarToggle={() => toggleStar(selectedFeature.id)}
        />
      )}
    </EuiFlexGroup>
  );
}

const FILTER_GROUP_ARIA_LABEL = i18n.translate(
  'xpack.streams.significantEventsDiscovery.featuresTable.filterGroupAriaLabel',
  { defaultMessage: 'Filter features by status' }
);

const FILTER_ALL_LABEL = i18n.translate(
  'xpack.streams.significantEventsDiscovery.featuresTable.filterAllLabel',
  { defaultMessage: 'All' }
);

const FILTER_STARRED_LABEL = i18n.translate(
  'xpack.streams.significantEventsDiscovery.featuresTable.filterStarredLabel',
  { defaultMessage: 'Starred' }
);

const FILTER_ACTIVE_LABEL = i18n.translate(
  'xpack.streams.significantEventsDiscovery.featuresTable.filterActiveLabel',
  { defaultMessage: 'Active' }
);

const FILTER_ARCHIVED_LABEL = i18n.translate(
  'xpack.streams.significantEventsDiscovery.featuresTable.filterArchivedLabel',
  { defaultMessage: 'Archived' }
);
