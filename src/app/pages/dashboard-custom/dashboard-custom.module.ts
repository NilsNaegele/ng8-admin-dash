import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialAngularSelectModule } from 'material-angular-select';
import { ThemeModule } from '../../../theme/theme.module';
import { ChartsModule } from '../charts/charts.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MapsModule } from '../maps/maps.module';

import { DashboardCustomComponent } from './dashboard-custom.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [DashboardCustomComponent, FiltersComponent],
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    DashboardModule,
    MapsModule,
    ChartsModule,
    MaterialAngularSelectModule,
  ],
})
export class DashboardCustomModule { }
