import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-base-card app-base-card-menu',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card.component.scss'],
})
export class CardMenuComponent {
  @HostBinding('class.mdl-card__menu') public readonly mdlCardMenu = true;
}
