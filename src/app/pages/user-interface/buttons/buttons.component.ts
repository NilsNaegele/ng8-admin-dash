import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from '../../../../theme/components/upgradable/upgradable.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.ui-buttons') public readonly uiButtons = true;

  colors1 = [
    'light-blue',
    'teal',
    'orange',
    'red',
    'green',
    'purple',
  ];
  colors2 = [
    'light-blue',
    'teal',
    'orange',
    'red',
    'purple',
    'white',
  ];
  actions = [
    'archivier',
    'erstellen',
    'entwürfe',
    'weiterleit',
    'anfügen',
    'antwort',
  ];
  icons1 = [
    'assignment_returned',
    'create',
    'drafts',
    'forward',
    'attach_file',
    'reply',
  ];
  icons2 = [
    'assignment_returned',
    'create',
    'drafts',
    'forward',
    'reply',
    'send',
  ];
  socials = [
    'facebook',
    'twitter',
    'dribbble',
    'behance',
    'linkedin',
    'github',
  ];

  buttonsWithIcons = this.colors1.map((color, i) => ({ color, action: this.actions[i], icon: this.icons1[i] }));
  iconButtons = this.colors2.map((color, i) => ({ color, icon: this.icons2[i] }));

}
