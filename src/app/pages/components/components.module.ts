import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from './../../../theme/theme.module';

import { BadgesComponent } from './badges/badges.component';
import { ChipsComponent } from './chips/chips.component';
import { ComponentsComponent } from './components.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TogglesComponent } from './toggles/toggles.component';
import { TooltipsComponent } from './tooltips/tooltips.component';

@NgModule({
  declarations: [
    ProgressBarsComponent,
    ComponentsComponent,
    BadgesComponent,
    ChipsComponent,
    SlidersComponent,
    TogglesComponent,
    TooltipsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
  ],
  exports: [
    ComponentsComponent,
  ],
})
export class ComponentsModule { }
