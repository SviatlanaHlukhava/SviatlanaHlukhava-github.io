import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import { AppState } from './../reducers/AppState';

@Component({
  selector: 'map-router',
  template: '<map [coordinate]="coordinate | async"></map>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapRouterComponent {
  coordinate: Observable<Object>;

  constructor(private store: Store<AppState>) {
    this.coordinate = this.store.select("coordinate");
  }
}