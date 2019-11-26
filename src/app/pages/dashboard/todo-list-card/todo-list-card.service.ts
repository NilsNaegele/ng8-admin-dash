import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  getItems(): object[] {
    return [
      {
        title: 'Fehler beheben',
        id: 1651644545,
        completed: false,
      },
      {
        title: 'Neue Funktionalität bauen 100%',
        id: 1651646545,
        completed: false,
      },
      {
        title: 'Neues Design konzipieren',
        id: 5451646545,
        completed: true,
      },
      {
        title: 'TDD Buch lesen',
        id: 5428646545,
        completed: false,
      },
    ];
  }
}
