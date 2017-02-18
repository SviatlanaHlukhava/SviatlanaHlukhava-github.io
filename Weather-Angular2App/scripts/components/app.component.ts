import { Component, OnInit, Input, EventEmitter, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import { Coordinate }  from './../model/Coordinate'
import { Profiler } from './../services/Profiler'
import { LoaderComponent }   from './loader.component';
import { LocationService } from './../services/Location'
import { LoggerService } from './../services/Logger'
import { AppState } from './../reducers/AppState';

import { CoordinateActions } from './../actions/CoordinateActions'
import { LoadingActions } from './../actions/LoadingActions'

@Component({
  selector: 'app',
  template: `<loader [isLoading]="isLoading | async"></loader>
    <header [coordinate]="coordinate | async"></header>
    <router-outlet></router-outlet>
    <router-outlet name="myCityWeather"></router-outlet>
    <footer></footer>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  isLoading: Observable<Object>;
  coordinate: Observable<Object>;
  constructor(private zone: NgZone, private changeDetectorRef: ChangeDetectorRef, private profiler: Profiler,
    private store: Store<AppState>, private coordinateActions: CoordinateActions,
    private LoadingActions: LoadingActions,
    private locationService: LocationService, private loggerService: LoggerService) {
    this.coordinate = this.store.select("coordinate");
    this.profiler.setZone(zone);
    this.profiler.profile();
  }
  ngOnInit(): void {
    this.isLoading = this.store.select("loading");
    this.store.dispatch(this.coordinateActions.loadCoordinate());
  }

}