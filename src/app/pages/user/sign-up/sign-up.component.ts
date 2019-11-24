import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { BlankLayoutCardComponent } from '../../../components/blank-layout-card/blank-layout-card.component';

import { AuthenticationService } from '../../../services/auth/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../../components/blank-layout-card/blank-layout-card.component.scss'],
})
export class SignUpComponent extends BlankLayoutCardComponent implements OnInit {

  signupForm: FormGroup;
  email;
  password;
  username;
  emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  error: string;

  constructor(private authService: AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {
    super();

    this.signupForm = this.fb.group({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
        Validators.maxLength(20),
      ]),
      username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    });
    this.email = this.signupForm.get('email');
    this.password = this.signupForm.get('password');
    this.username = this.signupForm.get('username');
  }

  public ngOnInit() {
    this.authService.logout();
    this.signupForm.valueChanges.subscribe(() => {
      this.error = null;
    });
  }

  public login() {
    this.error = null;
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.getRawValue())
        .subscribe(res => this.router.navigate(['/app/dashboard']),
                   error => this.error = error.message);
    }
  }

  public onInputChange(event) {
    event.target.required = true;
  }
}
