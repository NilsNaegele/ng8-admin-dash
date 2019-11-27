import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationMenuService {
  getNotifications(): object[] {
    return [
      {
        text: 'Du hast 3 neue Aufgaben.',
        time: 'jetzt',
        icon: 'plus_one',
        color: 'primary',
      }, {
        text: 'Server Fehler',
        time: '1 min',
        icon: 'error_outline',
        color: 'secondary',
      }, {
        text: 'Neues Release!',
        time: '2 Stunden',
        icon: 'new_releases',
        color: 'primary',
      }, {
        text: 'Du hast 4 neue Emails.',
        time: '6 Tage',
        icon: 'mail_outline',
        color: 'primary',
      },
    ];
  }
}
