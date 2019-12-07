import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProgressComponent } from './components/progress/progress.component';

import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { PageTopComponent } from './components/page-top/page-top.component';

import { CardModule } from './components/card/card.module';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { SwitchComponent } from './components/switch/switch.component';
import { UpgradableComponent } from './components/upgradable/upgradable.component';

const BASE_COMPONENTS = [
  PageTopComponent,
  UpgradableComponent,
  RadioButtonComponent,
  SwitchComponent,
  CheckboxComponent,
  PieChartComponent,
  LineChartComponent,
  ProgressComponent,
  PaginationComponent,
];

const BASE_DIRECTIVES = [];

const BASE_PIPES = [];

@NgModule({
  declarations: [
    ...BASE_COMPONENTS,
    ...BASE_DIRECTIVES,
    ...BASE_PIPES,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    CardModule,
  ],
  exports: [
    ...BASE_COMPONENTS,
    ...BASE_DIRECTIVES,
    ...BASE_PIPES,
    SidebarModule,
    CardModule,
  ],
})
export class ThemeModule { }
