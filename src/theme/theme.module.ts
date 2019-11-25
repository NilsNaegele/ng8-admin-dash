import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { PageTopComponent } from './components/page-top/page-top.component';

import { CardModule } from './components/card/card.module';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { UpgradableComponent } from './components/upgradable/upgradable.component';

const BASE_COMPONENTS = [
  PageTopComponent,
  UpgradableComponent,
  CheckboxComponent,
  PieChartComponent,
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
