import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../theme/theme.module';
import { UserInterfaceRoutingModule } from './user-interface-routing.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [ButtonsComponent, CardsComponent],
  imports: [
    CommonModule,
    UserInterfaceRoutingModule,
    ThemeModule,
  ],
})
export class UserInterfaceModule { }
