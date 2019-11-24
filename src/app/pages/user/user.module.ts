import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../../theme/theme.module';

import { UserRoutingModule } from './user-routing.module';

import { ErrorComponent } from './error/error.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ErrorComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
})
export class UserModule { }
