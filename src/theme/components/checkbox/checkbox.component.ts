import { Component, HostBinding, Input } from '@angular/core';

import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'label[baseCheckbox]',
  templateUrl: './checkbox.component.html',
  styleUrls: ['../toggle/toggle.component.scss'],
})
export class CheckboxComponent extends ToggleComponent {
  isInline = false;
  @Input() public set inline(value) {
    if (value || value === '') {
      this.isInline = true;
    }
  }
  @HostBinding('class') public get className() {
    return `mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkbox--colored-${this.color} ${this.isInline && 'checkbox--inline'}`;
  }
}
