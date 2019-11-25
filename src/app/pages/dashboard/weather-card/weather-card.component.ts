import { Component, HostBinding, OnInit } from '@angular/core';
import { WeatherSearchService } from './../weather-card-dynamic/weather-search.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @HostBinding('class.weather') public readonly weather = true;

  data: any = {
    main: {
      temp: -1,
    },
    weather: [
      { description: 'Mist',
        icon: '50d',
      },
    ],
  };
  weatherIcon;

  constructor(private weatherSearchService: WeatherSearchService) {
  }

  ngOnInit() {
    this.weatherSearchService.searchEntries('Bremen').subscribe((response) => {
      // tslint:disable-next-line: no-console
      console.log(response);
      if (response) {
        this.data = response;
      }
    });
  }

}
