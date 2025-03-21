/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { DebugState } from '@elastic/charts';

import expect from '@kbn/expect';
import { FtrService } from '../../ftr_provider_context';
import { WebElementWrapper } from '../lib/web_element_wrapper';

declare global {
  interface Window {
    /**
     * Flag used to enable debugState on elastic charts
     */
    _echDebugStateFlag?: boolean;
  }
}

export class ElasticChartService extends FtrService {
  private readonly testSubjects = this.ctx.getService('testSubjects');
  private readonly find = this.ctx.getService('find');
  private readonly retry = this.ctx.getService('retry');
  private readonly log = this.ctx.getService('log');
  private readonly browser = this.ctx.getService('browser');

  public async getCanvas(dataTestSubj?: string) {
    if (dataTestSubj) {
      const chart = await this.getChart(dataTestSubj);
      return await chart.findByClassName('echCanvasRenderer');
    }
    return await this.find.byCssSelector('.echChart canvas:last-of-type');
  }

  public async canvasExists() {
    return await this.find.existsByCssSelector('.echChart canvas:last-of-type');
  }

  public async waitForRenderComplete(dataTestSubj?: string) {
    const chart = await this.getChart(dataTestSubj);
    const rendered = await chart.findAllByCssSelector(
      '.echChartStatus[data-ech-render-complete=true]'
    );
    expect(rendered.length).to.equal(1);
  }

  public async getVisualizationRenderingCount(dataTestSubj?: string) {
    const chart = await this.getChart(dataTestSubj);
    const visContainer = await chart.findByCssSelector('.echChartStatus');
    const renderingCount = await visContainer.getAttribute('data-ech-render-count');
    return Number(renderingCount);
  }

  public async waitForRenderingCount(minimumCount: number, dataTestSubj?: string) {
    await this.retry.waitFor(`rendering count to be equal to [${minimumCount}]`, async () => {
      const currentRenderingCount = await this.getVisualizationRenderingCount(dataTestSubj);
      this.log.debug(`-- currentRenderingCount=${currentRenderingCount}`);
      return currentRenderingCount >= minimumCount;
    });
  }

  public async hasChart(dataTestSubj?: string, timeout?: number): Promise<boolean> {
    if (dataTestSubj) {
      return await this.testSubjects.exists(dataTestSubj, { timeout });
    } else {
      const charts = await this.getAllCharts(timeout);

      return charts.length > 0;
    }
  }

  private async getChart(
    dataTestSubj?: string,
    timeout?: number,
    match: number = 0
  ): Promise<WebElementWrapper> {
    if (dataTestSubj) {
      if (!(await this.testSubjects.exists(dataTestSubj, { timeout }))) {
        throw Error(`Failed to find an elastic-chart with testSubject '${dataTestSubj}'`);
      }

      return (await this.testSubjects.findAll(dataTestSubj))[match];
    } else {
      const charts = await this.getAllCharts(timeout);
      if (charts.length === 0) {
        throw Error(`Failed to find any elastic-charts on the page`);
      } else {
        return charts[match];
      }
    }
  }

  public async getAllChartsDebugDataByTestSubj(dataTestSubj: string): Promise<WebElementWrapper[]> {
    const charts = await this.testSubjects.findAll(dataTestSubj);
    return charts;
  }

  private async getAllCharts(timeout?: number) {
    return await this.find.allByCssSelector('.echChart', timeout);
  }

  /**
   * used to get chart data from `@elastic/charts`
   * requires `window._echDebugStateFlag` to be true
   */
  public async getChartDebugData(
    dataTestSubj?: string,
    match: number = 0
  ): Promise<DebugState | null> {
    const chart = await this.getChart(dataTestSubj, undefined, match);

    try {
      const visContainer = await chart.findByCssSelector('.echChartStatus');
      const debugDataString: string | undefined = await visContainer.getAttribute(
        'data-ech-debug-state'
      );
      return debugDataString ? JSON.parse(debugDataString) : null;
    } catch (error) {
      throw Error('Elastic charts debugState not found');
    }
  }

  /**
   * Used to set a flag on the window to trigger debug state on elastic charts
   * @param value
   */
  public async setNewChartUiDebugFlag(value = true) {
    await this.browser.execute<[boolean], void>((v) => {
      window._echDebugStateFlag = v;
    }, value);
  }
}
