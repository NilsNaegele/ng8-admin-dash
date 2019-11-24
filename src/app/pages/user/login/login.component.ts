import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../services/auth/authentication.service';

import { BlankLayoutCardComponent } from '../../../components/blank-layout-card/blank-layout-card.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../components/blank-layout-card/blank-layout-card.component.scss'],
})
export class LoginComponent extends BlankLayoutCardComponent implements OnInit  {
  loginForm: FormGroup;
  email;
  password;
  emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  error: string;

  constructor(private authService: AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {
    super();

    this.loginForm = this.fb.group({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
        Validators.maxLength(20),
      ]),
    });
    this.email = this.loginForm.get('email');
    this.password = this.loginForm.get('password');
  }

  public ngOnInit() {
    this.authService.logout();
    this.loginForm.valueChanges.subscribe(() => {
      this.error = null;
    });
  }

  public login() {
    this.error = null;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue())
        .subscribe(res => this.router.navigate(['/app/dashboard']),
                   error => this.error = error.message);
    }
  }

  public onInputChange(event) {
    event.target.required = true;
  }

}
