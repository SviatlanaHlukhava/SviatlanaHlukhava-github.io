import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, OnChanges } from '@angular/core';
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
export class CityWeatherSection implements OnChanges {
  weatherList: Weather[];
  @Input() latitude: number;
  @Input() longitude: number;
  @Output() loadingNotify = new EventEmitter();
  weatherPromise: Promise<Weather[]>;
  static openWearterMapRqsts = 0;
  city: string;
  cityWeatherPipe: CityWeatherPipe;
  oldLatitude: number;
  oldLongitude: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.cityWeatherPipe = new CityWeatherPipe();
    this.weatherList = [];
  }
  ngOnInit(): void {
    this.changeDetectorRef.detach();
    setInterval(() => {
      this.updateWeather();
    }, 500);
    setInterval(() => {
      this.detectChanges();
    }, 5000);
  }
  ngOnChanges(): void {
    if (this.latitude !== undefined && this.longitude !== undefined &&
    (this.oldLatitude === undefined || this.oldLatitude !== this.latitude) ||
    (this.oldLongitude === undefined || this.oldLongitude !== this.longitude)) {
      // TODO move to service
      let self = this;
      this.weatherPromise = new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        CityWeatherSection.openWearterMapRqsts++;
        let coord = new Coordinate (self.latitude, self.longitude);
        let url = 'http://api.openweathermap.org/data/2.5/find?lat=' +
            coord.getLatitude() + '&lon=' + coord.getLongitude() +
            '&cnt=50&appid=5e704282bf38a873419932de2553f5bb';
        xhr.open('GET', url, true);
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
                let weather = new Weather(data.list[i].name, data.list[i].weather[0].description, coordinate, mainParams, wind, clouds);
                list.push(weather);
              }
              resolve(list);
            }
            CityWeatherSection.openWearterMapRqsts--;
            if (CityWeatherSection.openWearterMapRqsts === 0) {
              self.loadingNotify.emit(false);
            }
          }
        }
      });
      this.weatherPromise.then((result) => {
        this.weatherList = result.slice(0);
        this.detectChanges();
      });
      this.oldLatitude = this.latitude;
      this.oldLongitude - this.longitude;
    }
  }
  add() {
    this.cityWeatherPipe.transform(this.city).then((result) => {
        const weatherList = this.weatherList;
        weatherList.push(new Weather(result.getCity(), result.getDescription(), result.getCoordinate(),
            result.getMainParams(), result.getWind(), result.getCloud()));
        this.weatherList = weatherList.slice(0);
        this.detectChanges();
    });
  }
  remove($event: number) {
      const weatherList = this.weatherList;
      weatherList.splice($event, 1);
      this.weatherList = weatherList.slice(0);
      this.detectChanges();
  }
  select($event: number) {
      const weatherList = this.weatherList;
      weatherList[$event].setSelected(!weatherList[$event].getSelected());
      if (weatherList[$event].getSelected()) {
        weatherList.forEach((value, i) => {
            if (value.getSelected() && i !== $event) {
                let weather = new Weather(value.getCity(), value.getDescription(), value.getCoordinate(),
                    value.getMainParams(), value.getWind(), value.getCloud());
                weather.setSelected(false);
                weatherList.splice(i, 1, weather);
            }
        });
      }
      this.weatherList = weatherList.slice(0);
      this.detectChanges();
  }
  detectChanges() {
      this.changeDetectorRef.reattach();
      this.changeDetectorRef.detectChanges();
      this.changeDetectorRef.detach();
  }
  updateWeather() {
    this.weatherList.forEach((value) => {
      // TODO move to service
      let promise = new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        let url = 'scripts/mocks/' + value.getCity() + '.mock.json';
        xhr.open('GET', url, true);
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
            weather = new Weather(value.getCity(), data.weather[0].description, coordinate, mainParams, wind, clouds);
            resolve(weather);
            }
        }
      });
      promise.then((result: Weather) => {
        let weatherList = this.weatherList;
        let index = weatherList.findIndex((weather) => weather.getCity() === value.getCity());
        if (index !== -1) {
          let newWeather = new Weather(result.getCity(), result.getDescription(), result.getCoordinate(),
            result.getMainParams(), result.getWind(), result.getCloud());
          newWeather.setSelected(weatherList[index].getSelected());
          weatherList.splice(index, 1, newWeather);
          this.weatherList = weatherList.slice(0);
        }
      });
    });
  }
}