import { Component, HostBinding, Input } from '@angular/core';

import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'label[baseRadioButton]',
  templateUrl: './radio-button.component.html',
  styleUrls: ['../toggle/toggle.component.scss'],
})
export class RadioButtonComponent extends ToggleComponent {
  @Input() name;
  @Input() value;

  @HostBinding('class') public get className() {
    return `mdl-radio mdl-js-radio mdl-js-ripple-effect radio--colored-${this.color}`;
  }

}
