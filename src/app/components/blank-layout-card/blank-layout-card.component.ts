import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from './../../../theme/components/upgradable/upgradable.component';

@Component({
  selector: 'app-blank-layout-card-cmp',
  template: './blank-layout-card.component.html',
})
export class BlankLayoutCardComponent extends UpgradableComponent {
  @HostBinding('class.blank-layout-card') public readonly blankLayoutCard = true;

}
