import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserStatisticsService {
  getBrowserStatistics() {
    return [
      {
        key: 'Chrome',
        y: 42,
      },
      {
        key: 'Opera',
        y: 13,
      },
      {
        key: 'Safari',
        y: 14,
      },
      {
        key: 'Firefox',
        y: 17,
      },
      {
        key: 'IE & Edge',
        y: 16,
      },
    ];
  }
}
