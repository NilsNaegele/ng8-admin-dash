import { Component, ElementRef } from '@angular/core';

import { LineChartComponent } from '../../../../theme/components/line-chart/line-chart.component';

import { LineChartOneService } from './line-chart-one.service';

@Component({
  selector: 'app-line-chart-one',
  templateUrl: './line-chart-one.component.html',
  styleUrls: ['./line-chart-one.component.scss'],
})
export class LineChartOneComponent extends LineChartComponent {
  constructor(
    el: ElementRef,
    private lineChartOneService: LineChartOneService,
  ) {
    super(el);

    this.xAxis = 'X';
    this.yAxis = 'Y';
    this.maxX = 10;

    this.afterConfigure();

    this.animatedData = [
      {
        values: [],
        key: 'Sin(x)',
        color: '#03a9f4',
        fillOpacity: 0.00001,
        area: true,
      },
      {
        values: [],
        key: 'Cos(x+10)+1/2',
        color: '#f44336',
        fillOpacity: 0.00001,
        area: true,
      },
      {
        values: [],
        key: 'Cos(x)+1',
        color: '#7726d3',
        fillOpacity: 0.00001,
        area: true,
      },
    ];
    this.rawData = [
      lineChartOneService.getSinGraph,
      lineChartOneService.getFirstComplexGraph,
      lineChartOneService.getSecondComplexGraph,
    ]
      .map(f => f.bind(lineChartOneService))
      .map(f => [...f(0, this.maxX + 1, this.xStep)]);
  }

}
