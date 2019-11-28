import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-projects-table-card',
  templateUrl: './projects-table-card.component.html',
  styleUrls: ['./projects-table-card.component.scss'],
})
export class ProjectsTableCardComponent {
  @HostBinding('class.projects-table') public readonly projectsTable = true;

  tableHeader: string[] = [
    'Projekt',
    'Chef',
    'Kunden Kontakt',
    'Terminierung',
    'Fortschritt',
  ];
  data: object[] = [
    {
      project: 'GBlitz',
      responsible: [
        {
          color: 'color--light-blue',
          name: 'Nils',
        },
        {
          color: 'background-color--primary',
          name: 'Andreas',
        },
        {
          color: 'color--orange',
          name: 'Tina',
        },
      ],
      email: 'Odin@germania.de',
      deadline: 'Dez 15',
      progress: 64,
      isSelected: false,
    },
    {
      project: 'Web ERP System',
      responsible: [
        {
          color: 'color--orange',
          name: 'Dennis',
        },
      ],
      email: 'Lukas@finanzen.net',
      deadline: 'Feb 1',
      progress: 14,
      isSelected: true,
    },
    {
      project: 'Neu Jahr Feier',
      responsible: [
        {
          color: 'background-color--primary',
          name: 'Johanna',
        },
        {
          color: 'color--orange',
          name: 'Dorothee',
        },
      ],
      email: 'hallo@time.de',
      deadline: 'Dec 25',
      progress: 100,
      isSelected: false,
    },
    {
      project: 'Sei fröhlich, keine Sorgen!',
      responsible: [
        {
          color: 'background-color--secondary',
          name: 'Alle',
        },
      ],
      email: 'kontakt@glueck.de',
      deadline: 'Heute',
      progress: 42,
      isSelected: false,
    },
  ];

}
