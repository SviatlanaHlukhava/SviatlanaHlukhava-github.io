import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import { AppState } from './../reducers/AppState';

@Component({
  selector: 'city-weather-section-router',
  template: '<city-weather-section [coordinate]="coordinate | async"></city-weather-section>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherSectionRouterComponent {
  coordinate: Observable<Object>;

  constructor(private store: Store<AppState>) {
    this.coordinate = this.store.select("coordinate");
  }
}