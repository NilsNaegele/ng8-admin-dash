import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiscreteBarService {
  public getCumulativeReturn() {
    return [
      {
        label: 'Organisation',
        value: 22,
      },
      {
        label: 'Entwicklung',
        value: 31,
      },
      {
        label: 'Recherche',
        value: -5,
      },
      {
        label: 'Meetings',
        value: 16,
      },
      {
        label: 'Email',
        value: 19,
      },
      {
        label: 'Telefon',
        value: 26,
      },
      {
        label: 'Dokumentation',
        value: 9,
      },
    ];
  }
}
