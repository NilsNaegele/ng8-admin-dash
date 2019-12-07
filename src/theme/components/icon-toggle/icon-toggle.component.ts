import { Component, HostBinding } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'label[baseIconToggle]',
  templateUrl: './icon-toggle.component.html',
  styleUrls: ['../toggle/toggle.component.scss'],
})
export class IconToggleComponent extends ToggleComponent {
  @HostBinding('class') public get className() {
    return `mdl-icon-toggle mdl-js-icon-toggle
            mdl-js-ripple-effect icon-toggle--colored-${this.color}`;
  }
}
