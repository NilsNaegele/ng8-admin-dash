import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['../sidebar.component.scss'],
})
export class MenuItemComponent {
  @Input() public data;

}
