/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { Component } from 'react';
import _ from 'lodash';
import { EuiFlexGroup, EuiFlexItem, EuiText, EuiToolTip } from '@elastic/eui';
import { RangeFieldMeta } from '../../../../../../../common/descriptor_types';
import { DynamicSizeProperty } from '../../../properties/dynamic_size_property';
import { getMaxLabel, getMinLabel } from './get_ordinal_label';
import { type Marker, MarkerList } from './marker_list';
import { MapMarker } from './map_marker';

const FONT_SIZE = 10;
const HALF_FONT_SIZE = FONT_SIZE / 2;

const EMPTY_VALUE = '';

interface Props {
  style: DynamicSizeProperty;
}

interface State {
  label: string;
  maxLabelWidth: number;
  fieldMeta: RangeFieldMeta | null;
}

export class MarkerSizeLegend extends Component<Props, State> {
  private _isMounted: boolean = false;

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const nextFieldMeta = nextProps.style.getRangeFieldMeta();
    return !_.isEqual(nextFieldMeta, prevState.fieldMeta)
      ? {
          maxLabelWidth: 0,
          fieldMeta: nextFieldMeta,
        }
      : null;
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      label: EMPTY_VALUE,
      maxLabelWidth: 0,
      fieldMeta: this.props.style.getRangeFieldMeta(),
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this._loadLabel();
  }

  componentDidUpdate() {
    this._loadLabel();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async _loadLabel() {
    const field = this.props.style.getField();
    if (!field) {
      return;
    }
    const label = await field.getLabel();
    if (this._isMounted && this.state.label !== label) {
      this.setState({ label });
    }
  }

  _formatValue(value: string | number) {
    return value === EMPTY_VALUE ? value : this.props.style.formatField(value);
  }

  _onRightAlignedWidthChange = (width: number) => {
    if (width > this.state.maxLabelWidth) {
      this.setState({ maxLabelWidth: width });
    }
  };

  _renderMarkers() {
    const fieldMeta = this.state.fieldMeta;
    const options = this.props.style.getOptions();
    if (!fieldMeta || !options) {
      return null;
    }
    const invert = options.invert === undefined ? false : options.invert;

    const circleStyle = {
      fillOpacity: 0,
      strokeWidth: 1,
    };

    const svgHeight = options.maxSize * 2 + HALF_FONT_SIZE + circleStyle.strokeWidth * 2;
    const circleCenterX = options.maxSize + circleStyle.strokeWidth;
    const circleBottomY = svgHeight - circleStyle.strokeWidth;

    const makeMarker = (radius: number, formattedValue: string | number): Marker => {
      const circleCenterY = circleBottomY - radius;
      const circleTopY = circleCenterY - radius;
      const textOffset = this.state.maxLabelWidth + HALF_FONT_SIZE;
      const rawTextY = circleTopY + HALF_FONT_SIZE;
      const textY = rawTextY > svgHeight ? svgHeight : rawTextY;

      return {
        svg: (
          <MapMarker
            circleCenterX={circleCenterX}
            circleCenterY={circleCenterY}
            circleTopY={circleTopY}
            circleStyle={circleStyle}
            radius={radius}
            textOffset={textOffset}
            textY={textY}
            formattedValue={formattedValue}
            onWidthChange={this._onRightAlignedWidthChange}
          />
        ),
        textY,
      };
    };

    function getMarkerRadius(percentage: number) {
      const delta = options.maxSize - options.minSize;
      return percentage * delta + options.minSize;
    }

    function getValue(percentage: number) {
      // Markers interpolated by area instead of radius to be more consistent with how the human eye+brain perceive shapes
      // and their visual relevance
      // This function mirrors output of maplibre expression created from DynamicSizeProperty.getMbSizeExpression
      const scaledWidth = Math.pow(percentage * Math.sqrt(fieldMeta!.delta), 2);
      const value = invert ? fieldMeta!.max - scaledWidth : scaledWidth + fieldMeta!.min;
      return fieldMeta!.delta > 3 ? Math.round(value) : value;
    }

    const maxLabel = getMaxLabel(
      this.props.style.isFieldMetaEnabled(),
      Boolean(fieldMeta.isMaxOutsideStdRange),
      this._formatValue(fieldMeta.max)
    );

    const minLabel = getMinLabel(
      this.props.style.isFieldMetaEnabled(),
      Boolean(fieldMeta.isMinOutsideStdRange),
      this._formatValue(fieldMeta.min)
    );

    const markerList = new MarkerList(
      FONT_SIZE,
      makeMarker(options.maxSize, invert ? minLabel : maxLabel)
    );

    if (fieldMeta.delta > 0) {
      markerList.push(makeMarker(options.minSize, invert ? maxLabel : minLabel));
      markerList.push(makeMarker(getMarkerRadius(0.25), this._formatValue(getValue(0.25))));
      markerList.push(makeMarker(getMarkerRadius(0.5), this._formatValue(getValue(0.5))));
      markerList.push(makeMarker(getMarkerRadius(0.75), this._formatValue(getValue(0.75))));
    }

    return (
      <svg height={svgHeight} xmlns="http://www.w3.org/2000/svg">
        {markerList.getMarkers()}
      </svg>
    );
  }

  render() {
    return (
      <div>
        <EuiFlexGroup gutterSize="xs" justifyContent="spaceBetween">
          <EuiFlexItem grow={false}>
            <EuiToolTip
              position="top"
              title={this.props.style.getDisplayStyleName()}
              content={this.state.label}
            >
              <EuiText className="eui-textTruncate" size="xs" style={{ maxWidth: '180px' }}>
                <small>
                  <strong>{this.state.label}</strong>
                </small>
              </EuiText>
            </EuiToolTip>
          </EuiFlexItem>
        </EuiFlexGroup>
        {this._renderMarkers()}
      </div>
    );
  }
}
