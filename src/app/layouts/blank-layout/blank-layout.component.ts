import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss'],
})
export class BlankLayoutComponent {
  @HostBinding('class.not-found') public get notFound() {
    return this.router.url === '/user/404';
  }

  constructor(private router: Router) { }

}
