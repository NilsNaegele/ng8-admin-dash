import { Component, ElementRef, OnInit } from '@angular/core';

import { LineChartComponent } from '../../../../theme/components/line-chart/line-chart.component';

import { LineChartTwoService } from './line-chart-two.service';

@Component({
  selector: 'app-line-chart-two',
  templateUrl: './line-chart-two.component.html',
  styleUrls: ['../../../../theme/components/line-chart/line-chart.component.scss'],
})
export class LineChartTwoComponent extends LineChartComponent {
  constructor(
    el: ElementRef,
    private lineChartTwoService: LineChartTwoService,
  ) {
    super(el);

    this.xAxis = 'X';
    this.yAxis = 'Y';
    this.maxX = 14;

    this.afterConfigure();

    this.animatedData = [
      {
        values: [],
        key: 'Blauer Graph',
        color: '#00bcd4',
        fillOpacity: 0.00001,
        area: true,
      },
      {
        values: [],
        key: 'Orangener Graph',
        color: '#ffc107',
        fillOpacity: 0.00001,
        area: true,
      },
      {
        values: [],
        key: 'Grüner Graph',
        color: '#00d45a',
        fillOpacity: 0.00001,
      },
    ];
    this.rawData = [
      lineChartTwoService.getTealGraph,
      lineChartTwoService.getOrangeGraph,
      lineChartTwoService.getGreenGraph,
    ]
      .map(f => f.bind(lineChartTwoService))
      .map(f => [...f(0, this.maxX + 1, this.xStep)]);
  }

}
