import { Component, HostBinding } from '@angular/core';

import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'label[baseSwitch]',
  templateUrl: './switch.component.html',
  styleUrls: ['../toggle/toggle.component.scss'],
})
export class SwitchComponent extends ToggleComponent {
  @HostBinding('class') public get className() {
    return `mdl-switch mdl-js-switch mdl-js-ripple-effect
          switch--colored-${this.color}`;
  }

}
