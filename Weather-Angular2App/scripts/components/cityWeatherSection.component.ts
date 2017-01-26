import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Coordinate }  from './../model/Coordinate'
import { Weather }  from './../model/Weather'
import { CityWeatherPipe } from './../pipes/cityWeather.pipe'
import { WeatherApiService } from './../services/WeatherAPI'
import { LoggerService } from './../services/Logger'
import { Observable, Observer, Subscription } from 'rxjs'

import { AppState } from './../reducers/AppState';
import { WeatherActions } from './../actions/WeatherActions';

@Component({
  selector: 'city-weather-section',
  templateUrl: './../../pages/templates/cityWeatherSection.tmpl.html',
  styleUrls: ['./../../css/weatherTable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherSectionComponent implements OnChanges, OnInit {
  weatherList: Weather[];
  weatherListObservable: Observable<Object>;
  @Input() latitude: number;
  @Input() longitude: number;
  @Output() loadingNotify = new EventEmitter();
  $weatherObservableMap: Map <string, Subscription>;
  weatherListSubscription: Subscription;
  cityWeatherPipe: CityWeatherPipe;
  oldLatitude: number;
  oldLongitude: number;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private store: Store<AppState>, private weatherActions: WeatherActions,
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
    this.weatherListObservable = this.store.select("weatherList");
    this.weatherListObservable.subscribe((weatherList: Weather[]) => {
        this.weatherList = weatherList;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.latitude !== undefined && this.longitude !== undefined &&
    (this.oldLatitude === undefined || this.oldLatitude !== this.latitude) ||
    (this.oldLongitude === undefined || this.oldLongitude !== this.longitude)) {
      this.weatherList.forEach((weather: Weather) => {
        this.$weatherObservableMap.get(weather.getCity()).unsubscribe();
      })
      this.store.dispatch(this.weatherActions.clearWeatherList());
      this.loadingNotify.emit(true);
      if (this.weatherListSubscription) {
        this.weatherListSubscription.unsubscribe();
      }
      this.weatherListSubscription = this.weatherApiService.getWeatherList(this.latitude, this.longitude).subscribe((result: Weather) => {
        this.addToWeatherList(result);
      }, (error: string) => {
        this.loggerService.errorLog(error);
        this.loadingNotify.emit(false);
      }, () => {
        this.detectChanges();
        this.loadingNotify.emit(false);
      });
      this.oldLatitude = this.latitude;
      this.oldLongitude - this.longitude;
    }
  }
  add($event: string) {
    this.cityWeatherPipe.transform($event).subscribe((result: Weather) => {
      this.addToWeatherList(result);
      this.detectChanges();
    });
  }
  remove($event: number) {
      const city = this.weatherList[$event].getCity();
      this.store.dispatch(this.weatherActions.removeWeather($event));
      this.detectChanges();
      this.weatherObservableUnsubscribe(city);
  }
  select($event: number) {
      this.store.dispatch(this.weatherActions.selectWeather($event));
      this.detectChanges();
  }
  private detectChanges() {
      this.changeDetectorRef.reattach();
      this.changeDetectorRef.detectChanges();
      this.changeDetectorRef.detach();
  }
  private addToWeatherList(weather: Weather) {
      this.store.dispatch(this.weatherActions.addWeather(weather));
      this.weatherObservableSubscribe(weather.getCity());
  }
  private weatherObservableSubscribe(city: string) {
    let subscription = this.weatherApiService.pollWeatherCityInfo(city).subscribe((result: Weather) => {
      this.store.dispatch(this.weatherActions.updateWeatherSuccess(result));
    })
    this.$weatherObservableMap.set(city, subscription);
  }
  private weatherObservableUnsubscribe(city: string) {
    this.$weatherObservableMap.get(city).unsubscribe();
  }
}