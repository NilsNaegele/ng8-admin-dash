import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from './../../../theme/theme.module';

import { ProgressBarsComponent } from './progress-bars/progress-bars.component';

@NgModule({
  declarations: [ProgressBarsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
  ],
})
export class ComponentsModule { }
