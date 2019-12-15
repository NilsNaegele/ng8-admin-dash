import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialAngularSelectModule } from 'material-angular-select';
import { ThemeModule } from '../../../theme/theme.module';
import { RightSidebarModule } from './../../../theme/components/right-sidebar/right-sidebar.module';
import { ComponentsModule } from './../components/components.module';
import { UserInterfaceRoutingModule } from './user-interface-routing.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { FormsComponent } from './forms/forms.component';
import { IconsComponent } from './icons/icons.component';
import { IntervalTableComponent } from './interval-table/interval-table.component';
import { FiltersComponent } from './right-sidebar/filters/filters.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    FormsComponent,
    IconsComponent,
    TypographyComponent,
    TablesComponent,
    RightSidebarComponent,
    FiltersComponent,
    IntervalTableComponent,
  ],
  imports: [
    CommonModule,
    UserInterfaceRoutingModule,
    ThemeModule,
    MaterialAngularSelectModule,
    RightSidebarModule,
    ComponentsModule,
  ],
})
export class UserInterfaceModule { }
