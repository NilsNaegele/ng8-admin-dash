import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryStatisticsService {
  public getCountryStatistics() {
    return [
      {
        key: 'USA',
        y: 31,
      },
      {
        key: 'Deutschland',
        y: 26,
      },
      {
        key: 'Italien',
        y: 18,
      },
      {
        key: 'Frankreich',
        y: 15,
      },
      {
        key: 'Andere',
        y: 10,
      },
    ];
  }
}
