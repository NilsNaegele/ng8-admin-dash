import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PieChartService {
  public getDaySchedule() {
    return [
      {
        key: 'Entwicklung',
        hours: 6,
      },
      {
        key: 'Recherche',
        hours: 6,
      },
      {
        key: 'Schlafen',
        hours: 8,
      },
      {
        key: 'Meditieren',
        hours: 1,
      },
      {
        key: 'Sport',
        hours: 3,
      },
    ];
  }
}
