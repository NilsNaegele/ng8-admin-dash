import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProgressComponent } from './components/progress/progress.component';

import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { PageTopComponent } from './components/page-top/page-top.component';

import { CardModule } from './components/card/card.module';
import { IconToggleComponent } from './components/icon-toggle/icon-toggle.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RightSidebarModule } from './components/right-sidebar/right-sidebar.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { SwitchComponent } from './components/switch/switch.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { UpgradableComponent } from './components/upgradable/upgradable.component';
import { TooltipModule } from './directives/tooltip.module';

const BASE_COMPONENTS = [
  PageTopComponent,
  UpgradableComponent,
  RadioButtonComponent,
  SwitchComponent,
  CheckboxComponent,
  PieChartComponent,
  LineChartComponent,
  ToggleComponent,
  ProgressComponent,
  IconToggleComponent,
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
    RightSidebarModule,
    CardModule,
  ],
  exports: [
    ...BASE_COMPONENTS,
    ...BASE_DIRECTIVES,
    ...BASE_PIPES,
    SidebarModule,
    CardModule,
    RightSidebarModule,
    TooltipModule,
  ],
})
export class ThemeModule { }
