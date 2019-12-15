import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntervalService {
  private advanceTableData = [
    [
      'Organisation',
      '08:00',
      '09:33',
      '93',
      'ADB1XY',
      'Orga Intern',
    ],
    [
      'Recherche',
      '10:00',
      '12:00',
      '120',
      'YOLA155',
      'Neues Projekt X',
    ],
    [
      'Entwicklung',
      '09:00',
      '13:30',
      '270',
      'MG1GOYA',
      'Neue Features implementiert',
    ],
    [
      'Besprechung',
      '09:33',
      '10:00',
      '27',
      '377WBz',
      'Neues Design besprochen',
    ],
    [
      'Telefon',
      '12:00',
      '12:17',
      '17',
      'HoWA931',
      'UX optimieren',
    ],
  ];

  public getAdvancedHeaders() {
    return [

      {
        name: 'Name',
        sort: 0,
      },
      {
        name: 'Start',
        sort: 0,
      },
      {
        name: 'Ende',
        sort: 0,
      },
      {
        name: 'Länge',
        sort: 0,
      },
      {
        name: 'Aktenzeichen',
        sort: 0,
      },
      {
        name: 'Kommentar',
        sort: 0,
      },
      {
        name: 'Löschen',
        sort: null,
      },
      {
        name: 'Splitten',
        sort: null,
      },
    ];
  }

  public getAdvancedTableNumOfPage(countPerPage) {
    return Math.ceil(this.advanceTableData.length / countPerPage);
  }

  public getAdvancedTablePage(page, countPerPage) {
    return this.advanceTableData.slice((page - 1) * countPerPage, page * countPerPage);
  }

  public changeAdvanceSorting(order, index) {
    this.advanceTableData = this.sorting(this.advanceTableData, order, index);
  }

  private sorting(array, order, value) {
    const compareFunction = (a, b) => {
      if (a[value] > b[value]) {
        return 1 * order;
      }
      if (a[value] < b[value]) {
        return -1 * order;
      }
      return 0;
    };
    return array.sort(compareFunction);
  }
}
