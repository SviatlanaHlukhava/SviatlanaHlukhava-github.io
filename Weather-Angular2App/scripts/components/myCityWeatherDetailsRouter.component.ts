import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import { AppState } from './../reducers/AppState';

@Component({
  selector: 'my-city-weather-details-router',
  template: '<my-city-weather-details [coordinate]="coordinate | async"></my-city-weather-details>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCityWeatherDetailsRouterComponent {
  coordinate: Observable<Object>;

  constructor(private store: Store<AppState>) {
    this.coordinate = this.store.select("coordinate");
  }
}