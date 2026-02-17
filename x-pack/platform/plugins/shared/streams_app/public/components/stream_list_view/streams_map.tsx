/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import Dagre from '@dagrejs/dagre';
import {
  EuiBadge,
  EuiButton,
  EuiButtonEmpty,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiI18nNumber,
  EuiIcon,
  EuiLink,
  EuiPopover,
  EuiText,
  useEuiTheme,
  useGeneratedHtmlId,
} from '@elastic/eui';
import { css } from '@emotion/react';
import type { DiscoverAppLocatorParams } from '@kbn/discover-plugin/common';
import { DISCOVER_APP_LOCATOR } from '@kbn/discover-plugin/common';
import { i18n } from '@kbn/i18n';
import type { ListStreamDetail } from '@kbn/streams-plugin/server/routes/internal/streams/crud/route';
import { Streams, isDslLifecycle, isIlmLifecycle, getDiscoverEsqlQuery } from '@kbn/streams-schema';
import React, { useCallback, useMemo, useState } from 'react';
import { useKibana } from '../../hooks/use_kibana';
import { getTimeSizeAndUnitLabel } from '../data_management/stream_detail_lifecycle/helpers/format_size_units';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  Handle,
  Position,
  BaseEdge,
  getSmoothStepPath,
  type Node,
  type Edge,
  type NodeProps,
  type EdgeProps,
  type FitViewOptions,
  type NodeMouseHandler,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useStreamsAppRouter } from '../../hooks/use_streams_app_router';
import { useTimeRange } from '../../hooks/use_time_range';
import { STREAMS_MAP_ARIA_LABEL, STREAMS_MAP_EMPTY_MESSAGE } from './translations';

const NODE_WIDTH = 280;
const NODE_HEIGHT = 100;
const RANK_SEPARATION = 100;
const NODE_SEPARATION = 50;
const GRAPH_MARGIN = 50;

type StreamType = 'wired' | 'classic' | 'root';

interface StreamNodeData {
  label: string;
  streamName: string;
  streamType: StreamType;
  stream: ListStreamDetail;
  quality?: QualityIndicator;
  description?: string;
  [key: string]: unknown;
}

type StreamNode = Node<StreamNodeData>;
type StreamEdge = Edge;

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
  duration: 200,
};

// Custom edge with dot at start and arrow at end
const StreamEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  markerEnd,
}: EdgeProps) => {
  const { euiTheme } = useEuiTheme();
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={style} markerEnd={markerEnd} />
      {/* Start dot */}
      <circle
        cx={sourceX}
        cy={sourceY}
        r={3}
        fill={euiTheme.colors.mediumShade}
        stroke={euiTheme.colors.backgroundBasePlain}
        strokeWidth={1}
      />
    </>
  );
};

const StreamNodeComponent = ({
  data,
  selected,
}: NodeProps<StreamNode> & { selected?: boolean }) => {
  const { euiTheme } = useEuiTheme();
  const router = useStreamsAppRouter();

  const getStreamIcon = (streamType: StreamType) => {
    switch (streamType) {
      case 'wired':
        return 'streamsWired';
      case 'classic':
        return 'streamsClassic';
      case 'root':
        return 'streamsWired';
      default:
        return 'document';
    }
  };

  const isPoorQuality = data.quality === 'poor';
  const isDegradedQuality = data.quality === 'degraded';
  const hasIssue = isPoorQuality || isDegradedQuality;

  // Colors based on quality state
  const stateColors = hasIssue
    ? {
        headerBg: `${euiTheme.colors.danger}10`,
        border: euiTheme.colors.danger,
        iconBg: `${euiTheme.colors.danger}20`,
        statusIcon: 'warning',
        statusColor: 'danger' as const,
      }
    : {
        headerBg: `${euiTheme.colors.success}15`,
        border: euiTheme.colors.success,
        iconBg: `${euiTheme.colors.success}20`,
        statusIcon: 'checkInCircleFilled',
        statusColor: 'success' as const,
      };

  return (
    <div
      css={css`
        width: ${NODE_WIDTH}px;
        background: ${euiTheme.colors.backgroundBasePlain};
        border: 1.5px solid ${selected ? euiTheme.colors.primary : stateColors.border};
        border-radius: ${euiTheme.border.radius.medium};
        cursor: pointer;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        overflow: hidden;

        &:hover {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
      `}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ visibility: 'hidden' }}
        isConnectable={false}
      />

      {/* Header section */}
      <div
        css={css`
          padding: ${euiTheme.size.s} ${euiTheme.size.m};
          background: ${stateColors.headerBg};
          border-bottom: 1px solid ${euiTheme.colors.lightShade};
        `}
      >
        <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false} justifyContent="spaceBetween">
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
              <EuiFlexItem grow={false}>
                <div
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px;
                    height: 28px;
                    border-radius: ${euiTheme.border.radius.small};
                    background: ${stateColors.iconBg};
                  `}
                >
                  <EuiIcon
                    type={getStreamIcon(data.streamType)}
                    color={stateColors.statusColor}
                    css={css`
                      width: 14px;
                      height: 14px;
                    `}
                  />
                </div>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <span
                  css={css`
                    font-size: 14px;
                    font-weight: ${euiTheme.font.weight.semiBold};
                    color: ${euiTheme.colors.text};
                    white-space: nowrap;
                  `}
                >
                  {data.label}
                </span>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
              <EuiFlexItem grow={false}>
                <EuiIcon type={stateColors.statusIcon} color={stateColors.statusColor} size="m" />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>

      {/* Body section with description */}
      <div
        css={css`
          padding: ${euiTheme.size.s} ${euiTheme.size.m};
          min-height: 40px;
        `}
      >
        {data.description ? (
          <EuiText
            size="xs"
            color="subdued"
            css={css`
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            `}
          >
            {data.description}
          </EuiText>
        ) : (
          <EuiLink
            href={router.link('/{key}/management/{tab}', {
              path: { key: data.streamName, tab: 'overview' },
            })}
            css={css`
              font-size: 12px;
            `}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {i18n.translate('xpack.streams.streamsMap.node.addDescription', {
              defaultMessage: '+ Add description',
            })}
          </EuiLink>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{ visibility: 'hidden' }}
        isConnectable={false}
      />
    </div>
  );
};

const nodeTypes = {
  streamNode: StreamNodeComponent,
};

const edgeTypes = {
  streamEdge: StreamEdge,
};

const applyDagreLayout = (nodes: StreamNode[], edges: StreamEdge[]): StreamNode[] => {
  if (nodes.length === 0) {
    return nodes;
  }

  const g = new Dagre.graphlib.Graph({ directed: true, compound: false })
    .setGraph({
      rankdir: 'LR',
      ranksep: RANK_SEPARATION,
      nodesep: NODE_SEPARATION,
      marginx: GRAPH_MARGIN,
      marginy: GRAPH_MARGIN,
    })
    .setDefaultEdgeLabel(() => ({}));

  nodes.forEach((node) => {
    g.setNode(node.id, {
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    });
  });

  edges.forEach((edge) => {
    if (g.hasNode(edge.source) && g.hasNode(edge.target)) {
      g.setEdge(edge.source, edge.target);
    }
  });

  Dagre.layout(g);

  return nodes.map((node) => {
    const dagreNode = g.node(node.id);

    if (!dagreNode) {
      return node;
    }

    return {
      ...node,
      position: {
        x: Math.round(dagreNode.x - NODE_WIDTH / 2),
        y: Math.round(dagreNode.y - NODE_HEIGHT / 2),
      },
    };
  });
};

const getStreamType = (stream: ListStreamDetail): StreamType => {
  const segments = stream.stream.name.split('.');
  if (segments.length === 1) {
    return 'root';
  }
  if (Streams.ClassicStream.Definition.is(stream.stream)) {
    return 'classic';
  }
  return 'wired';
};

const transformStreamsToGraph = (
  streams: ListStreamDetail[],
  arrowColor: string,
  qualityByStream: Record<string, QualityIndicator>
): { nodes: StreamNode[]; edges: StreamEdge[] } => {
  const nodes: StreamNode[] = [];
  const edges: StreamEdge[] = [];
  const streamNames = new Set(streams.map((s) => s.stream.name));

  streams.forEach((stream) => {
    const name = stream.stream.name;
    const streamType = getStreamType(stream);

    // Get description from stream if available
    const description =
      'description' in stream.stream ? (stream.stream as { description?: string }).description : undefined;

    nodes.push({
      id: name,
      type: 'streamNode',
      position: { x: 0, y: 0 },
      data: {
        label: name,
        streamName: name,
        streamType,
        stream,
        quality: qualityByStream[name],
        description,
      },
    });

    // Find parent by removing the last segment
    const segments = name.split('.');
    if (segments.length > 1) {
      const parentName = segments.slice(0, -1).join('.');
      if (streamNames.has(parentName)) {
        edges.push({
          id: `${parentName}-${name}`,
          source: parentName,
          target: name,
          type: 'streamEdge',
          markerEnd: {
            type: MarkerType.Arrow,
            width: 12,
            height: 12,
            color: arrowColor,
            strokeWidth: 1.5,
          },
          style: {
            stroke: arrowColor,
            strokeWidth: 1,
          },
        });
      }
    }
  });

  return { nodes, edges };
};

// Popover row component for consistent styling
const PopoverRow = ({
  label,
  children,
  noBorder,
}: {
  label: string;
  children: React.ReactNode;
  noBorder?: boolean;
}) => {
  const { euiTheme } = useEuiTheme();
  return (
    <div
      css={css`
        padding: ${euiTheme.size.s} 0;
        ${!noBorder ? `border-bottom: 1px solid ${euiTheme.colors.lightShade};` : ''}
      `}
    >
      <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" gutterSize="m">
        <EuiFlexItem grow={false}>
          <EuiText
            size="s"
            css={css`
              font-weight: ${euiTheme.font.weight.semiBold};
            `}
          >
            {label}
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>{children}</EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

// Stream popover component
interface StreamPopoverProps {
  stream: ListStreamDetail;
  isOpen: boolean;
  onClose: () => void;
  anchorPosition: { x: number; y: number };
  docCount?: number;
  quality?: QualityIndicator;
}

const StreamPopover = ({
  stream,
  isOpen,
  onClose,
  anchorPosition,
  docCount,
  quality,
}: StreamPopoverProps) => {
  const { euiTheme } = useEuiTheme();
  const router = useStreamsAppRouter();
  const { rangeFrom, rangeTo } = useTimeRange();
  const popoverId = useGeneratedHtmlId({ prefix: 'streamPopover' });
  const {
    dependencies: {
      start: { share },
    },
  } = useKibana();
  const useUrl = share.url.locators.useUrl;

  const streamType = getStreamType(stream);
  const hasDataStream = !!stream.data_stream;

  // Get description from stream
  const description =
    'description' in stream.stream
      ? (stream.stream as { description?: string }).description
      : undefined;

  // Get Discover link
  const esqlQuery = getDiscoverEsqlQuery({
    definition: stream.stream,
    indexMode: undefined,
    includeMetadata: Streams.WiredStream.Definition.is(stream.stream),
  });

  const discoverLink = useUrl<DiscoverAppLocatorParams>(
    () => ({
      id: DISCOVER_APP_LOCATOR,
      params: {
        query: { esql: esqlQuery || '' },
      },
    }),
    [esqlQuery]
  );

  // Get lifecycle type badge
  const getLifecycleBadge = () => {
    const lifecycle = stream.effective_lifecycle;
    if (!lifecycle) {
      return (
        <EuiText size="s" color="subdued">
          -
        </EuiText>
      );
    }

    if (isIlmLifecycle(lifecycle)) {
      return <EuiBadge color="hollow">ILM</EuiBadge>;
    }

    if (isDslLifecycle(lifecycle)) {
      return <EuiBadge color="hollow">Managed</EuiBadge>;
    }

    return (
      <EuiText size="s" color="subdued">
        -
      </EuiText>
    );
  };

  // Get retention value
  const getRetentionValue = () => {
    const lifecycle = stream.effective_lifecycle;
    if (!lifecycle) {
      return '-';
    }

    if (isIlmLifecycle(lifecycle)) {
      return lifecycle.ilm.policy;
    }

    if (isDslLifecycle(lifecycle)) {
      return (
        getTimeSizeAndUnitLabel(lifecycle.dsl.data_retention) ||
        i18n.translate('xpack.streams.streamsMap.popover.retentionIndefinite', {
          defaultMessage: 'Indefinite',
        })
      );
    }

    return '-';
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: anchorPosition.x,
        top: anchorPosition.y,
        zIndex: euiTheme.levels.popover,
      }}
    >
      <EuiPopover
        id={popoverId}
        isOpen={isOpen}
        closePopover={onClose}
        anchorPosition="upCenter"
        button={<div style={{ width: 1, height: 1 }} />}
        panelPaddingSize="none"
      >
        <div
          css={css`
            width: 360px;
            padding: ${euiTheme.size.m};
          `}
        >
          {/* Summary section */}
          <div
            css={css`
              padding-bottom: ${euiTheme.size.m};
              border-bottom: 1px solid ${euiTheme.colors.lightShade};
            `}
          >
            <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
              <EuiFlexItem grow={false}>
                <EuiText
                  size="s"
                  css={css`
                    font-weight: ${euiTheme.font.weight.bold};
                  `}
                >
                  {i18n.translate('xpack.streams.streamsMap.popover.summaryTitle', {
                    defaultMessage: 'Summary',
                  })}
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="hollow">
                  {streamType === 'classic'
                    ? i18n.translate('xpack.streams.streamsMap.popover.classicBadge', {
                        defaultMessage: 'Classic',
                      })
                    : i18n.translate('xpack.streams.streamsMap.popover.wiredBadge', {
                        defaultMessage: 'Wired',
                      })}
                </EuiBadge>
              </EuiFlexItem>
            </EuiFlexGroup>
            {description ? (
              <EuiText
                size="s"
                color="subdued"
                css={css`
                  margin-top: ${euiTheme.size.s};
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  line-height: 1.5;
                `}
              >
                {description}
              </EuiText>
            ) : (
              <EuiText size="s" color="subdued" css={css`margin-top: ${euiTheme.size.s};`}>
                {i18n.translate('xpack.streams.streamsMap.popover.noDescription', {
                  defaultMessage: 'No description available.',
                })}
              </EuiText>
            )}
          </div>

          {/* Document count */}
          <PopoverRow
            label={i18n.translate('xpack.streams.streamsMap.popover.documentCountLabel', {
              defaultMessage: 'Document count',
            })}
          >
            {hasDataStream && docCount !== undefined ? (
              <EuiText size="s">
                <EuiI18nNumber value={docCount} />
              </EuiText>
            ) : (
              <EuiText size="s" color="subdued">
                -
              </EuiText>
            )}
          </PopoverRow>

          {/* Lifecycle */}
          <PopoverRow
            label={i18n.translate('xpack.streams.streamsMap.popover.lifecycleLabel', {
              defaultMessage: 'Lifecycle',
            })}
          >
            {getLifecycleBadge()}
          </PopoverRow>

          {/* Data retention */}
          <PopoverRow
            label={i18n.translate('xpack.streams.streamsMap.popover.dataRetentionLabel', {
              defaultMessage: 'Data retention',
            })}
          >
            <EuiText size="s">{getRetentionValue()}</EuiText>
          </PopoverRow>

          {/* Data quality */}
          <PopoverRow
            label={i18n.translate('xpack.streams.streamsMap.popover.dataQualityLabel', {
              defaultMessage: 'Data quality',
            })}
            noBorder
          >
            {hasDataStream && quality ? (
              <EuiBadge
                color={
                  quality === 'poor' ? 'danger' : quality === 'degraded' ? 'warning' : 'success'
                }
              >
                {quality === 'poor'
                  ? i18n.translate('xpack.streams.streamsMap.popover.dataQualityPoor', {
                      defaultMessage: 'Poor',
                    })
                  : quality === 'degraded'
                    ? i18n.translate('xpack.streams.streamsMap.popover.dataQualityDegraded', {
                        defaultMessage: 'Degraded',
                      })
                    : i18n.translate('xpack.streams.streamsMap.popover.dataQualityGood', {
                        defaultMessage: 'Good',
                      })}
              </EuiBadge>
            ) : (
              <EuiText size="s" color="subdued">
                -
              </EuiText>
            )}
          </PopoverRow>

          {/* Buttons */}
          <div
            css={css`
              padding-top: ${euiTheme.size.m};
              border-top: 1px solid ${euiTheme.colors.lightShade};
            `}
          >
            <EuiFlexGroup gutterSize="s" responsive={false}>
              <EuiFlexItem>
                <EuiButton
                  fullWidth
                  size="s"
                  href={router.link('/{key}', {
                    path: { key: stream.stream.name },
                    query: { rangeFrom, rangeTo },
                  })}
                >
                  {i18n.translate('xpack.streams.streamsMap.popover.openStreamButton', {
                    defaultMessage: 'Open stream',
                  })}
                </EuiButton>
              </EuiFlexItem>
              {hasDataStream && discoverLink && esqlQuery && (
                <EuiFlexItem>
                  <EuiButtonEmpty fullWidth size="s" href={discoverLink} iconType="discoverApp">
                    {i18n.translate('xpack.streams.streamsMap.popover.openInDiscoverButton', {
                      defaultMessage: 'Open in Discover',
                    })}
                  </EuiButtonEmpty>
                </EuiFlexItem>
              )}
            </EuiFlexGroup>
          </div>
        </div>
      </EuiPopover>
    </div>
  );
};

type QualityIndicator = 'good' | 'degraded' | 'poor';

interface StreamsMapInnerProps {
  streams: ListStreamDetail[];
  docsByStream: Record<string, number>;
  qualityByStream: Record<string, QualityIndicator>;
}

const StreamsMapInner = ({ streams, docsByStream, qualityByStream }: StreamsMapInnerProps) => {
  const { euiTheme } = useEuiTheme();
  const [selectedNode, setSelectedNode] = useState<StreamNode | null>(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const { nodes, edges } = transformStreamsToGraph(
      streams,
      euiTheme.colors.mediumShade,
      qualityByStream
    );
    const layoutedNodes = applyDagreLayout(nodes, edges);
    return { nodes: layoutedNodes, edges };
  }, [streams, euiTheme.colors.mediumShade, qualityByStream]);

  const [nodes, setNodes, onNodesChange] = useNodesState<StreamNode>(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState<StreamEdge>(initialEdges);

  const handleNodeClick: NodeMouseHandler<StreamNode> = useCallback(
    (event, node) => {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      setPopoverPosition({
        x: rect.left + rect.width / 2,
        y: rect.top,
      });

      if (selectedNode?.id === node.id) {
        setSelectedNode(null);
        setNodes((nds) => nds.map((n) => ({ ...n, selected: false })));
      } else {
        setSelectedNode(node);
        setNodes((nds) =>
          nds.map((n) => ({
            ...n,
            selected: n.id === node.id,
          }))
        );
      }
    },
    [selectedNode, setNodes]
  );

  const handlePaneClick = useCallback(() => {
    setSelectedNode(null);
    setNodes((nds) => nds.map((n) => ({ ...n, selected: false })));
  }, [setNodes]);

  const handlePopoverClose = useCallback(() => {
    setSelectedNode(null);
    setNodes((nds) => nds.map((n) => ({ ...n, selected: false })));
  }, [setNodes]);

  const containerStyle = useMemo(
    () =>
      css`
        height: 100%;
        width: 100%;
        min-height: 500px;
        overflow: hidden;
        background: linear-gradient(
            90deg,
            ${euiTheme.colors.backgroundBasePlain}
              calc(${euiTheme.size.l} - calc(${euiTheme.size.xs} / 2)),
            transparent 1%
          )
          center,
          linear-gradient(
            ${euiTheme.colors.backgroundBasePlain}
              calc(${euiTheme.size.l} - calc(${euiTheme.size.xs} / 2)),
            transparent 1%
          )
          center,
          ${euiTheme.colors.lightShade};
        background-size: ${euiTheme.size.l} ${euiTheme.size.l};
        border-radius: ${euiTheme.border.radius.medium};
        border: ${euiTheme.border.width.thin} solid ${euiTheme.colors.lightShade};
      `,
    [euiTheme]
  );

  const controlsStyles = useMemo(
    () => css`
      background-color: ${euiTheme.colors.backgroundBasePlain};
      border-radius: ${euiTheme.border.radius.medium};
      border: ${euiTheme.border.width.thin} solid ${euiTheme.colors.lightShade};
      box-shadow: 0 ${euiTheme.size.xs} ${euiTheme.size.s} ${euiTheme.colors.shadow};
      z-index: ${euiTheme.levels.content};
      position: relative;
      margin: ${euiTheme.size.s};

      button {
        background-color: ${euiTheme.colors.backgroundBasePlain};
        border-bottom: ${euiTheme.border.width.thin} solid ${euiTheme.colors.lightShade};
        fill: ${euiTheme.colors.text};

        &:hover {
          background-color: ${euiTheme.colors.backgroundBaseSubdued};
        }

        &:focus-visible {
          outline: ${euiTheme.border.width.thick} solid ${euiTheme.colors.primary};
          outline-offset: -2px;
          z-index: ${euiTheme.levels.content};
          position: relative;
        }

        &:last-child {
          border-bottom: none;
        }

        svg {
          fill: currentColor;
        }
      }
    `,
    [euiTheme]
  );

  if (nodes.length === 0) {
    return (
      <EuiEmptyPrompt
        iconType="visMapRegion"
        title={<h3>{STREAMS_MAP_EMPTY_MESSAGE}</h3>}
        titleSize="s"
      />
    );
  }

  return (
    <>
      <div
        css={containerStyle}
        data-test-subj="streamsMap"
        role="group"
        tabIndex={0}
        aria-label={STREAMS_MAP_ARIA_LABEL}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={handleNodeClick}
          onPaneClick={handlePaneClick}
          fitView
          fitViewOptions={fitViewOptions}
          minZoom={0.2}
          maxZoom={2}
          proOptions={{ hideAttribution: true }}
          nodesDraggable={true}
          nodesConnectable={false}
          nodesFocusable={true}
          edgesFocusable={false}
        >
          <Background gap={24} size={1} color={euiTheme.colors.lightShade} />
          <Controls showInteractive={false} position="top-left" css={controlsStyles} />
        </ReactFlow>
      </div>
      {selectedNode && (
        <StreamPopover
          stream={selectedNode.data.stream}
          isOpen={true}
          onClose={handlePopoverClose}
          anchorPosition={popoverPosition}
          docCount={docsByStream[selectedNode.data.streamName]}
          quality={qualityByStream[selectedNode.data.streamName]}
        />
      )}
    </>
  );
};

interface StreamsMapProps {
  streams?: ListStreamDetail[];
  loading?: boolean;
  docsByStream?: Record<string, number>;
  qualityByStream?: Record<string, QualityIndicator>;
}

export const StreamsMap = ({
  streams = [],
  loading,
  docsByStream = {},
  qualityByStream = {},
}: StreamsMapProps) => {
  if (loading) {
    return null;
  }

  return (
    <ReactFlowProvider>
      <StreamsMapInner
        streams={streams}
        docsByStream={docsByStream}
        qualityByStream={qualityByStream}
      />
    </ReactFlowProvider>
  );
};
