import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLayoutComponent } from '../../layouts/common-layout/common-layout.component';
import { LayoutsModule } from '../../layouts/layouts.module';

import { ComponentsComponent } from './../components/components.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { DodecahedronComponent } from './dodecahedron/dodecahedron.component';
import { FormsComponent } from './forms/forms.component';
import { IconsComponent } from './icons/icons.component';
import { IntervalTableComponent } from './interval-table/interval-table.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CommonLayoutComponent,
        children: [
          { path: 'knoepfe', component: ButtonsComponent, pathMatch: 'full' },
          { path: 'karten', component: CardsComponent, pathMatch: 'full' },
          { path: 'farben', component: ColorsComponent, pathMatch: 'full' },
          { path: 'formulare', component: FormsComponent, pathMatch: 'full' },
          { path: 'ikonen', component: IconsComponent, pathMatch: 'full' },
          { path: 'schriftzuege', component: TypographyComponent, pathMatch: 'full' },
          { path: 'tabellen', component: TablesComponent, pathMatch: 'full' },
          { path: 'intervall-tabelle', component: IntervalTableComponent, pathMatch: 'full' },
          { path: 'dodekaeder', component: DodecahedronComponent, pathMatch: 'full' },
          { path: 'komponente', component: ComponentsComponent, pathMatch: 'full' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class UserInterfaceRoutingModule { }
