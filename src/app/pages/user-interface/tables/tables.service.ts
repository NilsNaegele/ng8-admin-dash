import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  private advanceTableData = [
    [
      '5',
      'Life of Pi',
      'Yann Martel',
      [
        'Fiktion',
      ],
      '2016',
      '2001',
      'Englisch',
      'Englisch',
      4,
    ],
    [
      '6',
      'The secret Garden',
      'Frances Hodgson Burnett',
      [
        'Kinder Buch',
      ],
      '2017',
      '1911',
      'Englisch',
      'Englisch',
      1,
    ],
    [
      '7',
      'Rebecca',
      'Daphne du Maurier',
      [
        'Gothische Fiktion',
      ],
      '2016',
      '1938',
      'Englisch',
      'Englisch',
      2,
    ],
    [
      '8',
      'Dracula',
      'Bram Stoker',
      [
        'Gothische Fiktion',
        'Horror fiction',
      ],
      '2015',
      '1897',
      'Englisch',
      'Englisch',
      0,
    ],
    [
      '9',
      'The Little Prince',
      'Antoine de Saint-Exupery',
      [
        'Fiktion',
      ],
      '2015',
      '1943',
      'Englisch',
      'Französisch',
      1,
    ],
    [
      '10',
      'Les Miserables',
      'Victor Hugo',
      [
        'Roman',
        'Fiktion',
      ],
      '2014',
      '1862',
      'Englisch',
      'Französisch',
      3,
    ],
    [
      '11',
      'Alice in Wonderland',
      'Lewis Carroll',
      [
        'Kinder Buch',
        'Fantasie',
      ],
      '2018',
      '1865',
      'Englisch',
      'Englisch',
      4,
    ],
    [
      '12',
      'Anne of Green Gables',
      'L.M. Montgomery',
      [
        'Roman',
      ],
      '2019',
      '1908',
      'Englisch',
      'Englisch',
      3,
    ],
    [
      '13',
      'The Hitchhiker\'s Guide to th...',
      'Douglas Adams',
      [
        'Abenteuer',
        'Fiktion',
      ],
      '2017',
      '1979',
      'Englisch',
      'Englisch',
      3,
    ],
    [
      '14',
      'Madame Bovary',
      'Gustave Flaubert',
      [
        'Roman',
      ],
      '2018',
      '1856',
      'Englisch',
      'Französisch',
      2,
    ],
    [
      '15',
      'David Copperfield',
      'Charles Dickens',
      [
        'Roman',
      ],
      '2019',
      '1850',
      'Englisch',
      'Englisch',
      4,
    ],
    [
      '16',
      'War and Peace',
      'Leo Tolstoy',
      [
        'Fiktion',
      ],
      '2015',
      '1869',
      'Englisch',
      'Russisch',
      3,
    ],
    [
      '17',
      'Gone with the Wind',
      'Margaret Mitchell',
      [
        'Fiktion',
      ],
      '2014',
      '1936',
      'Englisch',
      'Russisch',
      2,
    ],
    [
      '18',
      'The Count of Monte Cristo',
      'Alexandre Dumas',
      [
        'Roman',
        'Abenteuer',
      ],
      '2019',
      '1845',
      'Englisch',
      'Englisch',
      0,
    ],
    [
      '19',
      'Lolita',
      'Vladimir Nabokov',
      [
        'Roman',
      ],
      '2018',
      '1955',
      'Englisch',
      'Russisch',
      3,
    ],
    [
      '20',
      'The Hobbit',
      'J.R.R. Tolkien',
      [
        'Fantasie',
      ],
      '2017',
      '1937',
      'Englisch',
      'Englisch',
      1,
    ],
  ];

  public getHeaders() {
    return [
      '#',
      'Buch Titel',
      'Autor',
      'Zuerst Publiziert',
      'Status',
    ];
  }

  public getSimpleTable() {
    return [
      [
        '1',
        'To Kill a Mockingbird',
        'Harper Lee',
        '1960',
        'read',
      ],
      [
        '2',
        'Pride and Prejudice',
        'Jane Austen',
        '1813',
        'unread',
      ],
      [
        '3',
        'The Great Gatsby',
        'F. Scott Fitzgerald',
        '1925',
        'read',
      ],
      [
        '4',
        'Crime and Punishment',
        'Fyodor Dostoyevsky',
        '1866',
        'read',
      ],
    ];
  }

  public getBorderedTable() {
    return [
      [
        '23',
        'Gone with the Wind',
        'Margaret Mitchell',
        '1936',
        'unread',
      ],
      [
        '24',
        'The Count of Monte Cristo',
        'Alexandre Dumas',
        '1845',
        'unread',
      ],
      [
        '25',
        'Lolita',
        'Vladimir Nabokov',
        '1955',
        'read',
      ],
      [
        '26',
        'The Hobbit',
        'J.R.R. Tolkien',
        '1937',
        'unread',
      ],
    ];
  }

  public getStrippedTable() {
    return [
      [
        '54',
        'The Hitchhiker\'s Guide to th...',
        'Douglas Adams',
        '1979',
        'unavailable',
      ],
      [
        '55',
        'Madame Bovary',
        'Gustave Flaubert',
        '1856',
        'available',
      ],
      [
        '56',
        'David Copperfield',
        'Charles Dickens',
        '1850',
        'available',
      ],
      [
        '57',
        'War and Peace',
        'Leo Tolstoy',
        '1869',
        'available',
      ],
    ];
  }

  public getBorderlessTable() {
    return [
      [
        '31',
        'The Little Prince',
        'Antoine de Saint-Exupery',
        '1943',
        'available',
      ],
      [
        '32',
        'Les Miserables',
        'Victor Hugo',
        '1862',
        'unavailable',
      ],
      [
        '33',
        'Alice in Wonderland',
        'Lewis Carroll',
        '1865',
        'available',
      ],
      [
        '34',
        'Anne of Green Gables',
        'L.M. Montgomery',
        '1908',
        'available',
      ],
    ];
  }

  public getAdvancedHeaders() {
    return [
      {
        name: '#',
        sort: null,
      },
      {
        name: 'Buch Titel',
        sort: 0,
      },
      {
        name: 'Autor',
        sort: 0,
      },
      {
        name: 'Genre',
        sort: null,
      },
      {
        name: 'Jahr',
        sort: null,
      },
      {
        name: 'Publizierungsdatum',
        sort: 0,
      },
      {
        name: 'Sprache',
        sort: null,
      },
      {
        name: 'Originale Sprache',
        sort: 0,
      }, {
        name: 'Verfügbarkeit',
        sort: 0,
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
