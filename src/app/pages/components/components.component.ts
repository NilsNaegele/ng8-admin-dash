import { Component, HostBinding } from '@angular/core';
import { UpgradableComponent } from '../../../theme/components/upgradable/upgradable.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.ui-components') public readonly uiComponents = true;

  data = [
    {
      name: 'Markus Phillip',
      description: 'Ein hervorragender Einzelkämpfer',
      image: 'markus-phillip.png',
    },
    {
      name: 'Maria Zeld',
      description: 'Eine super Schwimmerin',
      image: 'maria-zeld.png',
    },
    {
      name: 'Andreas Tollsig',
      description: 'Ein elite Ingenieur',
      image: 'tollsig.png',
    },
  ];

}
