import { Component, ElementRef } from '@angular/core';

import { LineChartComponent } from '../../../../theme/components/line-chart/line-chart.component';

import { LineChartCardService } from './line-chart-card.service';

@Component({
  selector: 'app-line-chart-card',
  templateUrl: './line-chart-card.component.html',
  styleUrls: ['../../../../theme/components/line-chart/line-chart.component.scss'],
})
export class LineChartCardComponent extends LineChartComponent {
  constructor(
    el: ElementRef,
    private lineChartService: LineChartCardService,
  ) {
    super(el);

    this.xAxis = 'AKTIVITÄTEN';
    this.yAxis = 'STUNDEN';
    this.maxX = 14;

    this.afterConfigure();

    this.animatedData = [
      {
        values: [],
        key: 'Organisation',
        color: '#00bcd4',
      },
      {
        values: [],
        key: 'Entwicklung',
        fillOpacity: 0.00001,
        area: true,
        color: '#ffc107',
      },
      {
        values: [],
        key: 'Besprechungen',
        color: '#f44336',
      },
    ];
    this.rawData = [
      lineChartService.getAwesomeGraph,
      lineChartService.getGoodGraph,
      lineChartService.getFailGraph,
    ]
      .map(f => f.bind(lineChartService))
      .map(f => [...f(0, this.maxX + 1, this.xStep)]);
  }

}
