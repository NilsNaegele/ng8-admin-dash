import { Component, HostBinding, Input } from '@angular/core';
import { UpgradableComponent } from './../upgradable/upgradable.component';

@Component({
  selector: 'app-base-right-sidebar-layout',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarLayoutComponent extends UpgradableComponent {
  @Input() title;

  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.mdl-grid--no-spacing') public readonly mdlGridNoSpacing = true;

}
