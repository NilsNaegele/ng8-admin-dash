import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
})
export class CommonLayoutComponent implements OnInit {
  user;

  constructor(private authService: AuthenticationService,
              private router: Router) {}

  public ngOnInit() {
    this.authService.userData.subscribe(user => this.user = user ? user : {
      username: 'Nils',
      email: 'nils@flash.com',
    });
  }

  public logout() {
    this.authService.logout()
      .subscribe(res => this.router.navigate(['/user/login']));
  }

}
