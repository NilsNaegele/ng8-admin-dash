import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from './../../../theme/theme.module';

import { BrowserStatisticsComponent } from './browser-statistics/browser-statistics.component';
import { ChartsComponent } from './charts.component';

@NgModule({
  declarations: [ChartsComponent, BrowserStatisticsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
  ],
})
export class ChartsModule { }
