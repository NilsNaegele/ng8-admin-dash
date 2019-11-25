import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card-dynamic',
  templateUrl: './weather-card-dynamic.component.html',
  styleUrls: ['./weather-card-dynamic.component.scss'],
})
export class WeatherCardDynamicComponent {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/group?id=2950159,3369157,2643743,6455259,2147714,1850147&units=metric&appid=110ff02ed24ccd819801248373c3b208';
  data: any = {};

  constructor(private http: HttpClient) {
    // console.log('data ...');
    this.getTest();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl);
  }

  getTest() {
    this.getData().subscribe((data) => {
      // console.log(data);
      this.data = data;
    });
  }

}
