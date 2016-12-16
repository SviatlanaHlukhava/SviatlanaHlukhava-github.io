import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Coordinate }  from './../Coordinate'
import { MainWeather } from './../MainWeather'
import { Weather }  from './../Weather'
import { Wind } from './../Wind'
import { Cloud }  from './../Cloud'
import { CityWeatherPipe } from './../pipes/cityWeather.pipe'

@Component({
  selector: 'city-weather-section',
  templateUrl: 'pages/templates/cityWeatherSection.tmpl.html',
  styleUrls: ['css/weatherTable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherSection {
  weatherList: Weather[];

  city: string;
  cityWeatherPipe: CityWeatherPipe;
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.cityWeatherPipe = new CityWeatherPipe();
    this.weatherList = [];
  }
  add() {
    this.cityWeatherPipe.transform(this.city).then((result) => {
        const weatherList = this.weatherList;
        weatherList.push(new Weather(result.getCity(), result.getCoordinate(), result.getMainParams(), result.getWind(), result.getCloud()));
        this.weatherList = weatherList.slice(0);
        this.changeDetectorRef.markForCheck();
    });
  }
  remove($event: number) {
      const weatherList = this.weatherList;
      weatherList.splice($event, 1);
      this.weatherList = weatherList.slice(0);
  }
  select($event: number) {
      const weatherList = this.weatherList;
      weatherList[$event].setSelected(!weatherList[$event].getSelected());
      if (weatherList[$event].getSelected()) {
        weatherList.forEach((value, i) => {
            if (value.getSelected() && i !== $event) {
                let weather = new Weather(value.getCity(), value.getCoordinate(), value.getMainParams(), value.getWind(), value.getCloud());
                weather.setSelected(false);
                weatherList.splice(i, 1, weather);
            }
        });
      }
      this.weatherList = weatherList.slice(0);
  }
}