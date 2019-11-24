import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-submenu-item',
  templateUrl: './submenu-item.component.html',
  styleUrls: ['../sidebar.component.scss'],
})
export class SubmenuItemComponent implements OnInit {
  @HostBinding('class.sub-navigation') public readonly subNavigation = true;
  @HostBinding('class.sub-navigation--show') public get subNavigationShow() {
    return this.shown;
  }

  @Input() public data;

  public shown = false;

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    this.shown = this.hasCurrent(this.data.children);
  }

  public hasCurrent(list) {
    return list.some(item => (item.link && item.link === this.router.url) || (item.children && this.hasCurrent(item.children)));
  }

}
