import { Pipe, PipeTransform} from '@angular/core';
import { Coordinate }  from './../Coordinate'
import { MainWeather } from './../MainWeather'
import { Weather }  from './../Weather'
import { Wind } from './../Wind'
import { Cloud }  from './../Cloud'

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
            xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + value +
            '&appid=5e704282bf38a873419932de2553f5bb', true);
            xhr.send();
            let weather: Weather;
            xhr.onload = function () {
                if (xhr.status === 200 && xhr.responseText) {
                    let response = xhr.responseText;
                    let data = response !== '' ? JSON.parse(xhr.responseText) : "";
                    let coordinate = new Coordinate(data.coord.lat, data.coord.lon);
                    let mainParams = new MainWeather(data.main.temp, data.main.humidity, data.main.pressure);
                    let wind = new Wind(data.wind.deg, data.wind.speed);
                    let clouds = new Cloud(data.clouds.all);
                    weather = new Weather(value, coordinate, mainParams, wind, clouds);
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