import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  getCountriesPopulation(): Observable<any[]> {
    return of([
      {
        position: { lat: 52.52437, lng: 13.41053 },
        population: '83,019,200',
        area: '357,386',
        name: 'Deutschland',
      },
      {
        position: { lat: 39.381266, lng: -97.922211 },
        population: '327,500,300',
        area: '9,834',
        name: 'USA',
      },
      {
        position: { lat: -25.734968, lng: 134.489563 },
        population: '24,600,000',
        area: '7,692',
        name: 'Australien',
      },
    ]);
  }

  getCitiesPopulation(): Observable<any[]> {
    return of([
      {
        position: { lat: 52.520008, lng: 13.404954 },
        population: '3,600,119',
        area: '892',
        name: 'Berlin',
      },
      {
        position: { lat: 38.89511, lng: -77.03637 },
        population: '5,600,357',
        area: '177',
        name: 'Washington DC',
      },
      {
        position: { lat: 13.758945, lng: 100.532646 },
        population: '1 981 690',
        area: '513 120',
        name: 'Bangkok',
      },
      {
        position: { lat: 7.969651, lng: 98.344746 },
        population: '75 573',
        area: '12',
        name: 'Phuket City',
      },
      {
        position: { lat: 10.485846, lng: -66.907196 },
        population: '3 051 000',
        area: '440',
        name: 'Karakas',
      },
      {
        position: { lat: 7.766810, lng: -72.224782 },
        population: '185 917',
        area: '484',
        name: 'San Kristobal',
      },
    ]);
  }
}
