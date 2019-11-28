import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { LayoutsModule } from './layouts/layouts.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'user', pathMatch: 'full' },
        { path: 'app', component: CommonLayoutComponent, children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
          // { path: 'dashboard-custom', component: Dashboard2Component, pathMatch: 'full' },
          // { path: 'forms', component: FormsComponent, pathMatch: 'full' },
          // { path: 'charts', component: ChartsComponent, pathMatch: 'full' },
          // { path: 'components', component: ComponentsComponent, pathMatch: 'full' },
          { path: '**', redirectTo: '/user/404' },
        ] }, // add 'canActivate: AuthGuard' for catching unauth users
        { path: 'user-interface', loadChildren: './pages/user-interface/user-interface.module#UserInterfaceModule' },
        // { path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule' },
       // { path: 'user', loadChildren: './pages/user/user.module#UserModule' },
        { path: 'user', loadChildren: './pages/user/user.module#UserModule' },
        { path: '**', redirectTo: '/user/404' },
      ],
      { useHash: true },
    ),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
