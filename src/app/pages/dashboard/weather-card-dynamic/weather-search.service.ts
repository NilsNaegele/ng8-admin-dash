import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherSearchService {
  baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  queryUrl = '?q=';
  endUrl = '&units=metric&appid=f63da89e53880dcbe0f0afb8d0f12ca0';

  constructor(private http: HttpClient) {}

  search(terms: Observable<string>) {
    return terms.pipe(
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(term => this.searchEntries(term)),
    );
  }

  searchEntries(term): Observable<any> {
    return this.http.get(this.baseUrl + this.queryUrl + term + this.endUrl);
  }
}
