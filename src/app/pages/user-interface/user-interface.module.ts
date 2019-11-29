import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialAngularSelectModule } from 'material-angular-select';

import { ThemeModule } from '../../../theme/theme.module';
import { UserInterfaceRoutingModule } from './user-interface-routing.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    UserInterfaceRoutingModule,
    ThemeModule,
    MaterialAngularSelectModule,
  ],
})
export class UserInterfaceModule { }
