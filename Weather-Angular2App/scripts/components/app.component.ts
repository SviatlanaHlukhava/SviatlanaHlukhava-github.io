import { Component, OnInit, Input, EventEmitter, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { Coordinate }  from './../Coordinate'
import { Profiler } from './../services/Profiler'
import { Loader }   from './loader.component';

@Component({
  selector: 'app',
  template: `<loader [isLoading]="isLoading"></loader>
    <header [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()"></header>
    <city-weather-section [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()" (loadingNotify)="isLoadingChange($event)"></city-weather-section>
    <map [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()"></map>
    <footer></footer>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit {
  isLoading: boolean;
  coordinate: Coordinate;
  profiler: Profiler;
  constructor(private zone: NgZone, private changeDetectorRef: ChangeDetectorRef) {
    this.coordinate = new Coordinate(0, 0);
    this.profiler = new Profiler(this.zone);
    this.profiler.profile();
  }
  ngOnInit(): void {
    let self = this;
    self.isLoading = true;
    navigator.geolocation.getCurrentPosition(setPosition, onError);
    function setPosition(pos: Position): void {
       self.coordinate.setLatitude(pos.coords.latitude);
       self.coordinate.setLongitude(pos.coords.longitude);
       self.changeDetectorRef.markForCheck();
    }
    function onError(): void {
      self.isLoading = false;
    }
  }
  isLoadingChange($event: boolean) {
    this.isLoading = $event;
  }

}