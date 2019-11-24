import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from '../../../theme/components/upgradable/upgradable.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../charts/charts.component.scss'],
})
export class DashboardComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.mdl-grid--no-spacing') public readonly mdlGridNoSpacing = true;
}
