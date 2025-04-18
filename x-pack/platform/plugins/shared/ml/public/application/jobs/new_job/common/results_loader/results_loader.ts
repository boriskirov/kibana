/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { BehaviorSubject, lastValueFrom } from 'rxjs';

import type { ML_ANOMALY_SEVERITY } from '@kbn/ml-anomaly-utils';
import { getSeverityType, ES_AGGREGATION } from '@kbn/ml-anomaly-utils';
import type { TimeBuckets } from '@kbn/ml-time-buckets';
import { parseInterval } from '@kbn/ml-parse-interval';

import { JOB_TYPE } from '../../../../../../common/constants/new_job';

import type { ModelPlotOutputResults } from '../../../../services/results_service';
import {
  mlResultsServiceProvider,
  type MlResultsService,
} from '../../../../services/results_service';

import type { JobCreatorType } from '../job_creator';
import { isMultiMetricJobCreator } from '../job_creator';
import type { ChartLoader } from '../chart_loader';

import { getScoresByRecord } from './searches';

export interface Results {
  progress: number;
  model: Record<number, ModelItem[]>;
  anomalies: Record<number, Anomaly[]>;
}

export interface ModelItem {
  time: number;
  actual: number;
  modelUpper: number;
  modelLower: number;
}

export interface Anomaly {
  time: number;
  value: number;
  severity: ML_ANOMALY_SEVERITY;
}

const emptyModelItem = {
  time: 0,
  actual: 0,
  modelUpper: 0,
  modelLower: 0,
};

interface SplitFieldWithValue {
  name: string;
  value: string;
}

const LAST_UPDATE_DELAY_MS = 500;

export type ResultsSubscriber = (results: Results) => void;

export class ResultsLoader {
  private _results$: BehaviorSubject<Results>;
  private _resultsSearchRunning = false;
  private _jobCreator: JobCreatorType;
  private _chartInterval: TimeBuckets;
  private _lastModelTimeStamp: number = 0;
  private _lastResultsTimeout: any = null;
  private _chartLoader: ChartLoader;
  private _mlResultsService: MlResultsService;

  private _results: Results = {
    progress: 0,
    model: [],
    anomalies: [],
  };

  private _detectorSplitFieldFilters: SplitFieldWithValue | null = null;
  private _splitFieldFiltersLoaded: boolean = false;

  constructor(jobCreator: JobCreatorType, chartInterval: TimeBuckets, chartLoader: ChartLoader) {
    this._jobCreator = jobCreator;
    this._chartInterval = chartInterval;
    this._results$ = new BehaviorSubject(this._results);
    this._chartLoader = chartLoader;
    this._mlResultsService = mlResultsServiceProvider(jobCreator.mlApi);

    jobCreator.subscribeToProgress(this.progressSubscriber);
  }

  progressSubscriber = async (progress: number) => {
    if (
      this._resultsSearchRunning === false &&
      (progress - this._results.progress > 5 || progress === 100)
    ) {
      if (this._splitFieldFiltersLoaded === false) {
        this._splitFieldFiltersLoaded = true;
        // load detector field filters if this is the first run.
        await this._populateDetectorSplitFieldFilters();
      }

      this._updateData(progress, false);

      if (progress === 100) {
        // after the job has finished, do one final update
        // a while after the last 100% has been received.
        // note, there may be multiple 100% progresses sent as they will only stop once the
        // datafeed has stopped.
        clearTimeout(this._lastResultsTimeout);
        this._lastResultsTimeout = setTimeout(() => {
          this._updateData(progress, true);
        }, LAST_UPDATE_DELAY_MS);
      }
    }
  };

  private async _updateData(progress: number, fullRefresh: boolean) {
    this._resultsSearchRunning = true;

    if (fullRefresh === true) {
      this._clearResults();
    }
    this._results.progress = progress;

    const getAnomalyData =
      this._jobCreator.type === JOB_TYPE.SINGLE_METRIC
        ? () => this._loadJobAnomalyData(0)
        : () => this._loadDetectorsAnomalyData();

    // TODO - load more that one model
    const [model, anomalies] = await Promise.all([this._loadModelData(0), getAnomalyData()]);
    this._results.model = model;
    this._results.anomalies = anomalies;

    this._resultsSearchRunning = false;
    this._results$.next(this._results);
  }

  public get results$() {
    return this._results$;
  }

  public subscribeToResults(func: ResultsSubscriber) {
    return this._results$.subscribe(func);
  }

  public get progress() {
    return this._results.progress;
  }

  private _clearResults() {
    this._results.model = {};
    this._results.anomalies = {};
    this._results.progress = 0;
    this._lastModelTimeStamp = 0;
  }

  private async _loadModelData(dtrIndex: number): Promise<Record<number, ModelItem[]>> {
    if (this._jobCreator.modelPlot === false) {
      return [];
    }

    const agg = this._jobCreator.getAggregation(dtrIndex);
    if (agg === null) {
      return { [dtrIndex]: [emptyModelItem] };
    }
    const resp = await lastValueFrom(
      this._mlResultsService.getModelPlotOutput(
        this._jobCreator.jobId,
        dtrIndex,
        [],
        this._lastModelTimeStamp,
        this._jobCreator.end,
        this._chartInterval.getInterval().asMilliseconds(),
        agg.mlModelPlotAgg
      )
    );

    return this._createModel(resp, dtrIndex);
  }

  private _createModel(
    { results }: ModelPlotOutputResults,
    dtrIndex: number
  ): Record<number, ModelItem[]> {
    if (this._results.model[dtrIndex] === undefined) {
      this._results.model[dtrIndex] = [];
    }

    const dslName = this._jobCreator.aggregations[dtrIndex].dslName;
    const isCountAgg = dslName === ES_AGGREGATION.COUNT || dslName === ES_AGGREGATION.CARDINALITY;
    // if aggregation is count or distinct count, scale the model plot to match the real data.
    const modelScale = isCountAgg ? this._calculateModelScale() : 1;

    // create ModelItem list from search results
    const model: ModelItem[] = Object.entries(results).map(
      ([time, { actual, modelLower, modelUpper }]) => ({
        time: +time,
        actual,
        modelUpper: (modelUpper === null ? 0 : modelUpper) * modelScale,
        modelLower: (modelLower === null ? 0 : modelLower) * modelScale,
      })
    );

    if (model.length > 10) {
      // discard the last 5 buckets in the previously loaded model to avoid partial results
      // set the _lastModelTimeStamp to be 5 buckets behind so we load the correct
      // section of results next time.
      this._lastModelTimeStamp = model[model.length - 5].time;
      this._results.model[dtrIndex] = this._results.model[dtrIndex].slice(0, -5);
    }

    // return a new array from the old and new model
    return { [dtrIndex]: this._results.model[dtrIndex].concat(model) };
  }

  private async _loadJobAnomalyData(dtrIndex: number): Promise<Record<number, Anomaly[]>> {
    const resp = await this._mlResultsService.getScoresByBucket(
      [this._jobCreator.jobId],
      this._jobCreator.start,
      this._jobCreator.end,
      this._chartInterval.getInterval().asMilliseconds(),
      1
    );

    const results = resp.results[this._jobCreator.jobId];
    if (results === undefined) {
      return [];
    }

    const anomalies: Record<number, Anomaly[]> = {};
    anomalies[0] = Object.entries(results).map(
      ([time, value]) =>
        ({ time: +time, value, severity: getSeverityType(value as number) } as Anomaly)
    );
    return anomalies;
  }

  private async _loadDetectorsAnomalyData(): Promise<Record<number, Anomaly[]>> {
    const resp = await getScoresByRecord(
      this._jobCreator.mlApi,
      this._jobCreator.jobId,
      this._jobCreator.start,
      this._jobCreator.end,
      this._chartInterval.getInterval().asMilliseconds(),
      this._detectorSplitFieldFilters
    );

    const anomalies: Record<number, Anomaly[]> = {};
    Object.entries(resp.results).forEach(([dtrIdx, results]) => {
      anomalies[+dtrIdx] = results.map(
        (r) => ({ ...r, severity: getSeverityType(r.value as number) } as Anomaly)
      );
    });
    return anomalies;
  }

  private async _populateDetectorSplitFieldFilters() {
    // only apply a split filter for multi-metric jobs
    // for population jobs, the swimlane will not be 100% accurate as it's not
    // filtering for the front card. this is a trade off to save loading
    // lots of data.
    if (isMultiMetricJobCreator(this._jobCreator)) {
      if (this._jobCreator.splitField !== null) {
        const fieldValues = await this._chartLoader.loadFieldExampleValues(
          this._jobCreator.splitField,
          this._jobCreator.runtimeMappings,
          this._jobCreator.datafeedConfig.indices_options
        );
        if (fieldValues.length > 0) {
          this._detectorSplitFieldFilters = {
            name: this._jobCreator.splitField.name,
            value: fieldValues[0],
          };
        }
        return;
      }
    }
    this._detectorSplitFieldFilters = null;
  }

  // calculate a scale for the model upper and lower by the ratio of chart interval to bucketspan.
  // this will force the model bounds to be drawn in the correct location
  private _calculateModelScale(): number {
    const duration = parseInterval(this._jobCreator.bucketSpan);
    const bucketSpanMs = duration !== null ? duration.asMilliseconds() : 0;
    const chartIntervalMs = this._chartInterval.getInterval().asMilliseconds();
    return chartIntervalMs / bucketSpanMs;
  }
}
