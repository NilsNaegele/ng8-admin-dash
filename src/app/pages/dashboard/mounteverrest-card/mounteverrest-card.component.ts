import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-mounteverrest-card',
  templateUrl: './mounteverrest-card.component.html',
  styleUrls: ['./mounteverrest-card.component.scss'],
})
export class MounteverrestCardComponent {
  @HostBinding('class.mounteverest') public readonly cotoneaster = true;

}
