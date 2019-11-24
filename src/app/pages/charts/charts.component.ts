import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from '../../../theme/components/upgradable/upgradable.component';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.charts') public readonly charts = true;
}
