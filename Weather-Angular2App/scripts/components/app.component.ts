import { Component, OnInit, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Coordinate }  from './../Coordinate'

@Component({
  selector: 'app',
  template: `<loader [isLoading]="isLoading"></loader>
    <header [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()"></header>
    <weather-table [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()" (loadingNotify)="isLoadingChange($event)">
    </weather-table>
    <city-weather-section></city-weather-section>
    <map [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()"></map>
    <footer></footer>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit {
  isLoading: boolean;
  coordinate: Coordinate;
  constructor() {
    this.coordinate = new Coordinate(0, 0);
  }
  ngOnInit(): void {
    let self = this;
    self.isLoading = true;
    navigator.geolocation.getCurrentPosition(setPosition, onError);
    function setPosition(pos: Position): void {
       self.coordinate.setLatitude(pos.coords.latitude);
       self.coordinate.setLongitude(pos.coords.longitude);
    }
    function onError(): void {
      self.isLoading = false;
    }
  }
  isLoadingChange($event: boolean) {
    this.isLoading = $event;
  }
}