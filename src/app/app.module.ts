import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './pages/dashboard/dashboard.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankLayoutCardComponent } from './components/blank-layout-card/blank-layout-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChartsModule } from './pages/charts/charts.module';
import { ComponentsModule } from './pages/components/components.module';
import { AuthInterceptor } from './services/auth/auth.interceptor.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { FakeBackendInterceptor } from './services/auth/fakebackend.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    DashboardModule,
    ChartsModule,
  ],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
