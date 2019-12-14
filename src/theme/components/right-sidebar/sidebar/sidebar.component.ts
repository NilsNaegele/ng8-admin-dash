import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-right-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class RightSidebarComponent {
  @Input() public title;
  @Output() public toggleSidebar = new EventEmitter();

  @HostBinding('class.is-closed') public isClosed = false;

  public closeSidebar() {
    this.isClosed = true;
  }

  public openSidebar() {
    this.isClosed = false;
  }

}
