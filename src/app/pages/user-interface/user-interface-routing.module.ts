import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLayoutComponent } from '../../layouts/common-layout/common-layout.component';
import { LayoutsModule } from '../../layouts/layouts.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CommonLayoutComponent,
        children: [
          { path: 'knoepfe', component: ButtonsComponent, pathMatch: 'full' },
          { path: 'karten', component: CardsComponent, pathMatch: 'full' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class UserInterfaceRoutingModule { }
