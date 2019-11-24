import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DodecahedronCardComponent } from './dodecahedron-card/dodecahedron-card.component';
import { LineChartCardComponent } from './line-chart-card/line-chart-card.component';
import { MounteverrestCardComponent } from './mounteverrest-card/mounteverrest-card.component';
import { PieChartCardComponent } from './pie-chart-card/pie-chart-card.component';
import { ProjectsTableCardComponent } from './projects-table-card/projects-table-card.component';
import { TodoListCardComponent } from './todo-list-card/todo-list-card.component';
import { TrendingCardComponent } from './trending-card/trending-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  declarations: [MounteverrestCardComponent, LineChartCardComponent, PieChartCardComponent, DodecahedronCardComponent, ProjectsTableCardComponent, TodoListCardComponent, TrendingCardComponent, WeatherCardComponent, DashboardComponent],
  imports: [
    CommonModule,
  ],
})
export class DashboardModule { }
