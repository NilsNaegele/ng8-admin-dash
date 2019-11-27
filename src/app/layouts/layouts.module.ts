import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotificationMenuComponent } from '../../app/components/notification-menu/notification-menu.component';
import { BlankLayoutCardComponent } from '../components/blank-layout-card/blank-layout-card.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ThemeModule } from './../../theme/theme.module';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';

@NgModule({
  declarations: [
    BlankLayoutCardComponent,
    BlankLayoutComponent,
    CommonLayoutComponent,
    SidebarComponent,
    NotificationMenuComponent,
  ],
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
