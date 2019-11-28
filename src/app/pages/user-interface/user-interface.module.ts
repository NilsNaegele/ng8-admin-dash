import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../theme/theme.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { UserInterfaceRoutingModule } from './user-interface-routing.module';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    UserInterfaceRoutingModule,
    ThemeModule,
  ],
})
export class UserInterfaceModule { }
