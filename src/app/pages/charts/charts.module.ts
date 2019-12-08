import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from './../../../theme/theme.module';

import { BrowserStatisticsComponent } from './browser-statistics/browser-statistics.component';
import { ChartsComponent } from './charts.component';
import { CountryStatisticsComponent } from './country-statistics/country-statistics.component';
import { DiscreteBarComponent } from './discrete-bar/discrete-bar.component';
import { LineChartOneComponent } from './line-chart-one/line-chart-one.component';
import { LineChartTwoComponent } from './line-chart-two/line-chart-two.component';
import { LinePlusBarChartComponent } from './line-plus-bar-chart/line-plus-bar-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';

@NgModule({
  declarations: [
    ChartsComponent,
    BrowserStatisticsComponent,
    CountryStatisticsComponent,
    DiscreteBarComponent,
    LineChartOneComponent,
    LineChartTwoComponent,
    LinePlusBarChartComponent,
    StackedBarChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
  ],
})
export class ChartsModule { }
