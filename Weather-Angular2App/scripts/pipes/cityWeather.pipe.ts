import { Pipe, PipeTransform} from '@angular/core';
import { Weather }  from './../model/Weather'
import { WeatherDTO } from './../dto/WeatherDTO'
import { WeatherDTOtoWeatherConverter } from './../services/WeatherDTOtoWeatherConverter'
import { Observable, Observer } from 'rxjs'

@Pipe({
  name: 'cityWeather'
})
export class CityWeatherPipe implements PipeTransform {
  weatherInfoMap: Map<Date, Weather>;
  currentWeather: Weather;
  constructor() {
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
          let $observable = Observable.create((observer: Observer <string>) => {
           let xhr = new XMLHttpRequest();
            let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + value +
            '&appid=5e704282bf38a873419932de2553f5bb'
            xhr.open('GET', url, true);
            xhr.send();
            xhr.onload = function () {
                if (xhr.status === 200 && xhr.responseText) {
                    observer.next(xhr.responseText);
                } else {
                    observer.error("Weather is not found");
                }
            }
            xhr.onerror = function () {
                observer.error("Weather is not found");
            }
          }).map((data: string) => {
               return JSON.parse(data);
          }).map((data: WeatherDTO) => {
               return WeatherDTOtoWeatherConverter.convert(data);
          });
          $observable.subscribe((result: Weather) => {
              this.weatherInfoMap.set(currentDate, result);
          });
          return $observable;
      }
  }
}