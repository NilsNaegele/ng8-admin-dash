import { Component, HostBinding } from '@angular/core';
import { NotificationMenuService } from './notification-menu.service';

@Component({
  selector: 'app-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.scss'],
})
export class NotificationMenuComponent {
  @HostBinding('class.notification-menu') public readonly notificationMenu = true;

  notifications: object[];

  constructor(notificationMenuService: NotificationMenuService) {
    this.notifications = notificationMenuService.getNotifications();
  }

}
