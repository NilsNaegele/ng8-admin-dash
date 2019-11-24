import { Component, HostBinding, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-base-card',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @HostBinding('class.mdl-card') public readonly mdlCard = true;
  @HostBinding('class.mdl-shadow--2dp') public readonly mdlShadow2DP = true;

  constructor(
    public viewContainerRef: ViewContainerRef,
  ) { }
}
