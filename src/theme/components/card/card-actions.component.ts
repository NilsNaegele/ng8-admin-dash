import { Component, HostBinding, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-base-card app-base-card-actions',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss'],
})
export class CardActionsComponent {
  @HostBinding('class.mdl-card__actions') public readonly mdlCardActions = true;

  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }

}
