import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import { Coordinate }  from './../model/Coordinate'
import { Weather }  from './../model/Weather'
import { CityWeatherPipe } from './../pipes/cityWeather.pipe'
import { WeatherApiService } from './../services/WeatherAPI'
import { LoggerService } from './../services/Logger'
import { Observable, Observer, Subscription } from 'rxjs'

@Component({
  selector: 'city-weather-section',
  templateUrl: './../../pages/templates/cityWeatherSection.tmpl.html',
  styleUrls: ['./../../css/weatherTable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherSectionComponent implements OnChanges, OnInit {
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

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private weatherApiService: WeatherApiService, private loggerService: LoggerService) {
    this.cityWeatherPipe = new CityWeatherPipe(weatherApiService);
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
  ngOnChanges(changes: SimpleChanges): void {
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
      this.weatherListSubscription = this.weatherApiService.getWeatherList(this.latitude, this.longitude).subscribe((result: Weather) => {
        this.addToWeatherList(result);
      }, (error: string) => {
        this.loggerService.errorLog(error);
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
    let subscription = this.weatherApiService.pollWeatherCityInfo(city).subscribe((result: Weather) => {
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