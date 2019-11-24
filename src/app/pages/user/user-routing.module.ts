import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlankLayoutComponent } from '../../layouts/blank-layout/blank-layout.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import { ErrorComponent } from './error/error.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      // { path: 'pages', redirectTo: 'pages/login', pathMatch: 'full' },
      {
        path: '',
        component: BlankLayoutComponent,
        children: [
          { path: '404', component: ErrorComponent, pathMatch: 'full' },
          { path: 'login', component: LoginComponent, pathMatch: 'full' },
          { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
          { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
          { path: '**', redirectTo: 'login' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class UserRoutingModule { }
