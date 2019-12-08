import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';

import { LinePlusBarChartService } from './line-plus-bar-chart.service';

@Component({
  selector: 'app-line-plus-bar-chart',
  templateUrl: './line-plus-bar-chart.component.html',
  styleUrls: ['./line-plus-bar-chart.component.scss'],
})
export class LinePlusBarChartComponent implements OnInit {
  @HostBinding('class.line-plus-bar-chart__container') public readonly linePlusBarChartContainer = true;

  constructor(
    private linePlusBarBarChartService: LinePlusBarChartService,
    private el: ElementRef,
  ) { }

  ngOnInit() {
    const container = d3.select(this.el.nativeElement);

    if (container[0][0]) {
      const data = [
        this.linePlusBarBarChartService.getActivityGraph,
        this.linePlusBarBarChartService.getProfitGraph,
      ]
        .map(f => f.bind(this.linePlusBarBarChartService))
        .map(f => [...f()])
        .map((values, i) => ({
          ...[
            {
              key: 'Aktivität',
              bar: true,
              color: '#00bcd4',
            },
            {
              key: 'Profit',
              color: '#ffc107',
            },
          ][i],
          values,
        }));

      nv.addGraph(() => {
        const chart = nv.models.linePlusBarChart()
          .focusEnable(false)
          .margin({ top: 20, right: 50, bottom: 20, left: 50 })
          .clipRadius(10)
          .x(d => d[0])
          .y(d => d[1]);

        chart.legend
          .margin({ top: 2, bottom: 10 });

        chart.xAxis
          .showMaxMin(false)
          .ticks(4)
          .tickFormat(d => d3.time.format('%x')(new Date(d)));

        chart.y1Axis
          .showMaxMin(false)
          .tickFormat(d3.format('f'));

        chart.y2Axis
          .showMaxMin(false)
          .tickFormat(d => `\$${d3.format(',f')(d)}`);

        chart.tooltip
          .contentGenerator((d) => {
            if (d === null) {
              return '';
            }
            d3.selectAll('.nvtooltip').classed('mdl-tooltip', true);
            if (d.hasOwnProperty('point')) {
              return d3.time.format('%x')(new Date(d.value)) + '<br>Profit: €' + d.series[0].value;
            }
            return d3.time.format('%x')(new Date(d.value)) + '<br>Stunden: ' + d.series[0].value;
          });

        container.append('svg')
          .datum(data)
          .transition()
          .duration(0)
          .call(chart);

        nv.utils.windowResize(chart.update);

        chart.update();

        return chart;
      });
    }
  }

}
