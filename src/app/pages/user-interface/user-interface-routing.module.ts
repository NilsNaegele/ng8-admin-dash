import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonLayoutComponent } from '../../layouts/common-layout/common-layout.component';
import { LayoutsModule } from '../../layouts/layouts.module';

import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CommonLayoutComponent,
        children: [
          { path: 'knoepfe', component: ButtonsComponent, pathMatch: 'full' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class UserInterfaceRoutingModule { }
