/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { Streams } from '@kbn/streams-schema';
import React from 'react';
import { useStreamDetail } from '../../hooks/use_stream_detail';
import { StreamDetailSignificantEventsView } from '../stream_detail_significant_events_view';

export function StreamDetailSignificantEventsPage() {
  const { definition } = useStreamDetail();

  if (!definition) {
    return null;
  }

  return <StreamDetailSignificantEventsView definition={definition} />;
}
