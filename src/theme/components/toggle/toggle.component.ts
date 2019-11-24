import { Component, HostBinding, Input } from '@angular/core';

// @Component({ })
export abstract class ToggleComponent {
  static idCounter = 0;

  isChecked = false;

  @HostBinding('for') @Input() public innerID = `base-toggle-${ToggleComponent.idCounter += 1}`;

  @Input() public color;

  @Input() set checked(value) {
    if (value || value === '') {
      this.isChecked = true;
    }
  }
}
