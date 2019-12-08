import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialAngularSelectModule } from 'material-angular-select';

import { ThemeModule } from '../../../theme/theme.module';

import { FormsComponent } from './forms.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    UserFormComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    MaterialAngularSelectModule,
  ],
})
export class UserFormsModule { }
