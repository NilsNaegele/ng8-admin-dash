import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlankLayoutCardComponent } from '../components/blank-layout-card/blank-layout-card.component';
import { ThemeModule } from './../../theme/theme.module';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';

@NgModule({
  declarations: [BlankLayoutCardComponent, BlankLayoutComponent, CommonLayoutComponent],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
  ],
  exports: [
    CommonLayoutComponent,
    BlankLayoutComponent,
    BlankLayoutCardComponent,
  ],
})
export class LayoutsModule { }
