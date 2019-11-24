import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-menu-link-item',
  templateUrl: './menu-link-item.component.html',
  styleUrls: ['../sidebar.component.scss'],
})
export class MenuLinkItemComponent {
  @Input() public data;

  constructor(public router: Router) { }

  navigate() {
    const layout = (document.querySelector('.mdl-layout') as any).MaterialLayout;
    if (layout.drawer_.getAttribute('aria-hidden') !== 'true') {
      layout.toggleDrawer();
    }
  }

}
