import { Component } from '@angular/core';

import { SidebarComponent as BaseSidebarComponent } from '../../../theme/components/sidebar/sidebar.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: '../../../theme/components/sidebar/sidebar.component.html',
  styleUrls: ['../../../theme/components/sidebar/sidebar.component.scss'],
})
export class SidebarComponent extends BaseSidebarComponent {
  public title = 'gblitz';
  public menu = [
    { name: 'Klassischer Dashboard', link: '/app/dashboard', icon: 'dashboard' },
    { name: 'Massgeschneidert', link: '/app/dashboard-custom', icon: 'dashboard' },
    {
      name: 'UI',
      children: [
        ...[
          'Knöpfe',
          'Karten',
          'Farben',
          'Formulare',
          'Ikonen',
          'Schriftzüge',
          'Tabellen',
        ].map(ui => ({
          name: ui[0].toUpperCase() + ui.slice(1),
          link: `/ui/${ui}`,
        })),
      ],
      icon: 'view_comfy',
    },
    { name: 'Komponente', link: '/ui/components', icon: 'developer_board' },
    { name: 'Konto', link: '/app/forms', icon: 'person' },
    {
      name: 'Karten', icon: 'map', children: [
      { name: 'Eingfache Karte', link: '/maps/simple' },
      { name: 'Fortgeschrittene Karte', link: '/maps/advanced' },
      ],
    },
    { name: 'Graphen', link: '/app/charts', icon: 'multiline_chart' },
    {
      name: 'Seiten', children: [
      { name: 'Anmeldung', link: '/user/login' },
      { name: 'Registrierung', link: '/user/sign-up' },
      { name: 'Passwort vergessen', link: '/user/forgot-password' },
      { name: '404', link: '/user/404' },
      ],
      icon: 'pages',
    },
  ];

}