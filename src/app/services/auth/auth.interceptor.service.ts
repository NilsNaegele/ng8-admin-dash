import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization token for full api requests
    if (request.url.includes('api') && this.auth.isLoggedIn) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.auth.authToken}` },
      });
    }
    return next.handle(request);
  }
}
