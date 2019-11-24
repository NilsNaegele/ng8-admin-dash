import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    // Navigate to the login page with extras
    this.router.navigate(['/pages/login']);
    return false;
  }

}
