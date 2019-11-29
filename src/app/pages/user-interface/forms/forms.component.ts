import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from '../../../../theme/components/upgradable/upgradable.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') public readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') public readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') public readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') public readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') public readonly mdlCellTop = true;

  public readonly countries = ['New York', 'Berlin', 'Paris', 'London'];
  public locationValue = 'Berlin';
}
