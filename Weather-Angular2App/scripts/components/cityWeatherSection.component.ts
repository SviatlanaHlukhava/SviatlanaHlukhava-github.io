import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Coordinate }  from './../model/Coordinate'
import { Weather }  from './../model/Weather'
import { WeatherDTO } from './../dto/WeatherDTO'
import { CityWeatherPipe } from './../pipes/cityWeather.pipe'
import { WeatherDTOtoWeatherConverter } from './../services/WeatherDTOtoWeatherConverter'
import { Observable, Observer, Subscription } from 'rxjs'

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
  $weatherObservableMap: Map <string, Subscription>;
  weatherListSubscription: Subscription;
  // weatherPromise: Promise<Weather[]>;
  city: string;
  cityWeatherPipe: CityWeatherPipe;
  oldLatitude: number;
  oldLongitude: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.cityWeatherPipe = new CityWeatherPipe();
    this.$weatherObservableMap = new Map <string, Subscription>();
    this.weatherList = [];
  }
  ngOnInit(): void {
    this.changeDetectorRef.detach();
    let $changesObserver = Observable.interval(5000);
    $changesObserver.subscribe(() => {
      this.detectChanges();
    });
    let addButton = document.getElementsByClassName("add-button")[0];
    Observable.fromEvent(addButton, "click").subscribe(() => {
      this.add();
    });
  }
  ngOnChanges(): void {
    if (this.latitude !== undefined && this.longitude !== undefined &&
    (this.oldLatitude === undefined || this.oldLatitude !== this.latitude) ||
    (this.oldLongitude === undefined || this.oldLongitude !== this.longitude)) {
      // TODO move to service
      let self = this;
      this.weatherList.forEach((weather: Weather) => {
        this.$weatherObservableMap.get(weather.getCity()).unsubscribe();
      })
      this.weatherList = [];
      self.loadingNotify.emit(true);
      if (this.weatherListSubscription) {
        this.weatherListSubscription.unsubscribe();
      }
      let $weatherObservable = Observable.create((observer: Observer<string>) => {
        let xhr = new XMLHttpRequest();
        let url = 'http://api.openweathermap.org/data/2.5/find?lat=' +
            this.latitude + '&lon=' + this.longitude +
            '&cnt=50&appid=5e704282bf38a873419932de2553f5bb';
        xhr.open('GET', url, true);
        xhr.send();

        xhr.onload = function () {
          if (xhr.status === 200 && xhr.responseText ) {
            let response = xhr.responseText;
              observer.next(response);
              observer.complete();
          } else {
            observer.error("Weather list is not loaded");
          }
        }
        xhr.onerror = function () {
            observer.error("Weather list is not loaded");
        }
      }).retry(2).flatMap((response: string) => {
        let data = response !== '' ? JSON.parse(response) : { list: [] };
        return Observable.from(data.list);
      }).map((data: WeatherDTO) => {
        return WeatherDTOtoWeatherConverter.convert(data);
      });
      this.weatherListSubscription = $weatherObservable.subscribe((result: Weather) => {
        this.addToWeatherList(result);
      }, () => {
        self.loadingNotify.emit(false);
      }, () => {
        this.detectChanges();
        self.loadingNotify.emit(false);
      });
      this.oldLatitude = this.latitude;
      this.oldLongitude - this.longitude;
    }
  }
  add() {
    this.cityWeatherPipe.transform(this.city).subscribe((result: Weather) => {
      this.addToWeatherList(result);
      this.detectChanges();
    });
  }
  remove($event: number) {
      const weatherList = this.weatherList;
      const city = weatherList[$event].getCity();
      weatherList.splice($event, 1);
      this.weatherList = weatherList.slice(0);
      this.detectChanges();
      this.weatherObservableUnsubscribe(city);
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
  private detectChanges() {
      this.changeDetectorRef.reattach();
      this.changeDetectorRef.detectChanges();
      this.changeDetectorRef.detach();
  }
  private addToWeatherList(weather: Weather) {
      const weatherList = this.weatherList;
      weatherList.push(new Weather(weather.getCity(), weather.getDescription(), weather.getCoordinate(),
          weather.getMainParams(), weather.getWind(), weather.getCloud()));
      this.weatherList = weatherList.slice(0);
      this.weatherObservableSubscribe(weather.getCity());
  }
  private weatherObservableSubscribe(city: string) {
    let $intervalObservable = Observable.interval(500).flatMap(() => {
      return Observable.create(function(observer: Observer<string>) {
        // TODO move to service
        let xhr = new XMLHttpRequest();
        let url = 'scripts/mocks/' + city + '.mock.json';
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onload = function () {
          if (xhr.status === 200 && xhr.responseText) {
            let response = xhr.responseText;
            observer.next(response);
            }
        }
      }).map((response: string) => {
        return JSON.parse(response);
      }).map((data: WeatherDTO) => {
        return WeatherDTOtoWeatherConverter.convert(data);
      });
    });
    let subscription = $intervalObservable.subscribe((result: Weather) => {
      let weatherList = this.weatherList;
      let index = weatherList.findIndex((weather) => weather.getCity() === result.getCity());
      if (index !== -1) {
        let newWeather = new Weather(result.getCity(), result.getDescription(), result.getCoordinate(),
          result.getMainParams(), result.getWind(), result.getCloud());
        newWeather.setSelected(weatherList[index].getSelected());
        weatherList.splice(index, 1, newWeather);
        this.weatherList = weatherList.slice(0);
      }
    })
    this.$weatherObservableMap.set(city, subscription);
  }
  private weatherObservableUnsubscribe(city: string) {
    this.$weatherObservableMap.get(city).unsubscribe();
  }
}