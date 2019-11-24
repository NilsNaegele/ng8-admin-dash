import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  title = 'ng8-admin-dash';
  @Input() public menu;

}
