import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  readonly currencies = ['EUR', 'USD', 'YEN', 'GBP', 'RUB'];
  currentCurrency = 'EUR';

  readonly languages = ['Deutsch', 'Englisch', 'Frnzösisch', 'Spanisch', 'Italienisch'];
  currentLanguage = 'Deutsch';

}
