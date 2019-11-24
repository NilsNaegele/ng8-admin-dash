import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankLayoutCardComponent } from './components/blank-layout-card/blank-layout-card.component';
import { AuthInterceptor } from './services/auth/auth.interceptor.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { FakeBackendInterceptor } from './services/auth/fakebackend.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    // BlankLayoutCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
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
