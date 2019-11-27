import { Component, HostBinding } from '@angular/core';

import { MessageMenuService } from './message-menu.service';

@Component({
  selector: 'app-message-menu',
  templateUrl: './message-menu.component.html',
  styleUrls: ['./message-menu.component.scss'],
})
export class MessageMenuComponent {
  @HostBinding('class.message-menu') public readonly messageMenu = true;

  messages: object[];

  constructor(messageMenuService: MessageMenuService) {
    this.messages = messageMenuService.getMessages();
  }

}
