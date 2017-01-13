import { Pipe, PipeTransform} from '@angular/core';
import { Weather }  from './../model/Weather'
import { WeatherDTOtoWeatherConverter } from './../services/WeatherDTOtoWeatherConverter'

@Pipe({
  name: 'cityWeather'
})
export class CityWeatherPipe implements PipeTransform {
  weatherInfoMap: Map<Date, Weather>;
  constructor() {
      this.weatherInfoMap = new Map <Date, Weather> ();
  }
  transform (value: string, time: number = undefined): Promise<Weather> {
      let self = this;
      return new Promise(function(resolve, reject) {
          let currentDate = new Date();
          let oldSearchWeather: Weather;
          for (let [key, val] of self.weatherInfoMap) {
              if (((currentDate.valueOf() - key.valueOf()) / 1000 < time || time === undefined) && val.getCity() === value) {
                  oldSearchWeather = val;
              }
          }
          if (oldSearchWeather) {
              resolve(oldSearchWeather);
          } else {
            let xhr = new XMLHttpRequest();
            let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + value +
            '&appid=5e704282bf38a873419932de2553f5bb'
            xhr.open('GET', url, true);
            xhr.send();
            let weather: Weather;
            xhr.onload = function () {
                if (xhr.status === 200 && xhr.responseText) {
                    let response = xhr.responseText;
                    let data = response !== '' ? JSON.parse(xhr.responseText) : "";
                    let weather = WeatherDTOtoWeatherConverter.convert(data);
                    self.weatherInfoMap.set(currentDate, weather);
                    resolve(weather);
                } else {
                    reject(weather)
                }
            }
            xhr.onerror = function () {
                reject(weather);
            }
          }
      });
  }
}