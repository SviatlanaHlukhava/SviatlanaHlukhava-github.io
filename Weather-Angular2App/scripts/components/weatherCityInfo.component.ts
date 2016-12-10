import { Component } from '@angular/core';
import { Weather }  from './../Weather'
import { CityWeatherPipe } from './../pipes/cityWeather.pipe'
import { KelvinToCelsiusPipe } from './../pipes/kelvinToCelsius.pipe'

@Component({
  selector: 'weather-city-info',
  templateUrl: 'pages/templates/weatherCityInfo.tmpl.html',
  styleUrls: ['css/weatherCityInfo.css']
})
export class WeatherCityInfo {
  weatherInfo: Weather;
  cityWeatherPipe: CityWeatherPipe;
  isError: boolean;
  city: string;
  constructor() {
      this.city = "";
      this.cityWeatherPipe = new CityWeatherPipe();
      this.isError = false;
  }
  search (): void {
      let self = this;
      this.cityWeatherPipe.transform(this.city).then(function (result) {
          self.weatherInfo = result;
          self.isError = false;
      }, function () {
          self.weatherInfo = undefined;
          self.isError = true;
      });
  }
}