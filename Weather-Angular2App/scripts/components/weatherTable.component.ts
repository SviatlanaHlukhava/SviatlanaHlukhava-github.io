import { Component, Input, OnChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Coordinate }  from './../Coordinate'
import { MainWeather } from './../MainWeather'
import { Weather }  from './../Weather'
import { Wind } from './../Wind'
import { Cloud }  from './../Cloud'
import { KelvinToCelsiusPipe } from './../pipes/kelvinToCelsius.pipe'

@Component({
  selector: 'weather-table',
  templateUrl: 'pages/templates/weatherTable.tmpl.html',
  styleUrls: ['css/weatherTable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherTable implements OnChanges {
  @Input() latitude: number;
  @Input() longitude: number;
  @Output() loadingNotify = new EventEmitter();
  weatherPromise: Promise<Weather[]>;
  static openWearterMapRqsts = 0;

  ngOnChanges(): void {
    if (this.latitude !== undefined && this.longitude !== undefined) {
      // TODO move to service
      let self = this;
      this.weatherPromise = new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        self.loadingNotify.emit(true);
        WeatherTable.openWearterMapRqsts++;
        let coord = new Coordinate (self.latitude, self.longitude);
        xhr.open('GET', 'http://api.openweathermap.org/data/2.5/find?lat=' +
            coord.getLatitude() + '&lon=' + coord.getLongitude() +
            '&cnt=50&appid=5e704282bf38a873419932de2553f5bb', true);
        xhr.send();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200 && xhr.responseText && self.latitude === coord.getLatitude() && self.longitude === coord.getLongitude()) {
              let response = xhr.responseText;
              let data = response !== '' ? JSON.parse(xhr.responseText) : { list: [] };
              let list: Weather[] = [];
              for (let i = 0; i < data.list.length; i++) {
                let coordinate = new Coordinate(data.list[i].coord.lat, data.list[i].coord.lon);
                let mainParams = new MainWeather(data.list[i].main.temp, data.list[i].main.humidity, data.list[i].main.pressure);
                let wind = new Wind(data.list[i].wind.deg, data.list[i].wind.speed);
                let clouds = new Cloud(data.list[i].clouds.all);
                let weather = new Weather(data.list[i].name, coordinate, mainParams, wind, clouds);
                list.push(weather);
              }
              resolve(list);
            }
            WeatherTable.openWearterMapRqsts--;
            if (WeatherTable.openWearterMapRqsts === 0) {
              self.loadingNotify.emit(false);
            }
          }
        }
      });
    }
  }
}