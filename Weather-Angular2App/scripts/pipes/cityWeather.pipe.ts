import { Pipe, PipeTransform } from '@angular/core';
import { Weather }  from './../model/Weather'
import { WeatherDTO } from './../dto/WeatherDTO'
import { WeatherApiService } from './../services/WeatherAPI'
import { Observable, Observer } from 'rxjs'

@Pipe({
  name: 'sgCityWeather'
})
export class CityWeatherPipe implements PipeTransform {
  weatherInfoMap: Map<Date, Weather>;
  currentWeather: Weather;
  constructor(private weatherApiService: WeatherApiService) {
      this.weatherInfoMap = new Map <Date, Weather> ();
  }
  transform (value: string, time: number = undefined): Observable<Weather> {
      let self = this;
      let currentDate = new Date();
      this.currentWeather = undefined;
      let oldSearchWeather: Weather;
      for (let [key, val] of self.weatherInfoMap) {
          if (((currentDate.valueOf() - key.valueOf()) / 1000 < time || time === undefined) && val.getCity() === value) {
              oldSearchWeather = val;
          }
      }
      if (oldSearchWeather) {
          return Observable.create((observer: Observer<Weather>) => {
              observer.next(oldSearchWeather);
          })
      } else {
          let $observable = this.weatherApiService.getWeatherCityInfo(value, false).share();
          $observable.subscribe((result: Weather) => {
              this.weatherInfoMap.set(currentDate, result);
          });
          return $observable;
      }
  }
}