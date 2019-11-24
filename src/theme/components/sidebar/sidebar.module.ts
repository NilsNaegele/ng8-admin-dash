import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuLinkItemComponent } from './menu-link-item/menu-link-item.component';
import { SidebarComponent } from './sidebar.component';
import { SubmenuItemComponent } from './submenu-item/submenu-item.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MenuItemComponent,
    MenuLinkItemComponent,
    SubmenuItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    MenuItemComponent,
    MenuLinkItemComponent,
    SubmenuItemComponent,
  ],
})
export class SidebarModule { }
