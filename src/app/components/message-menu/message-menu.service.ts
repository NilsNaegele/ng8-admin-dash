import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageMenuService {
  getMessages(): object[] {
    return [
      {
        name: 'Anja',
        type: 'Geburtstags Feier',
        time: 'jetzt',
        icon: 'A',
        color: 'primary',
      },
      {
        name: 'Viktor',
        type: 'Deployment',
        time: 'jetzt',
        icon: 'V',
        color: 'primary',
      },
      {
        name: 'Markus',
        type: 'Neues Design',
        time: '5 min',
        icon: 'M',
        color: 'baby-blue',
      },
      {
        name: 'Daniel',
        type: 'Empfehlung',
        time: '23 Stunden',
        icon: 'D',
        color: 'cerulean',
      },
      {
        name: 'David',
        type: 'Nachrichten',
        time: '30 Dez',
        icon: 'D',
        color: 'mint',
      },
    ];
  }
}
