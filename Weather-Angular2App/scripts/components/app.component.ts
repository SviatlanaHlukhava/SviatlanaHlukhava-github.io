import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Coordinate }  from './../Coordinate'
import { Map }  from './map.component'
import { WeatherTable }  from './weatherTable.component'
import { WeatherCityInfo }  from './weatherCityInfo.component'

@Component({
  selector: 'app',
  template: `<loader [isLoading]="isLoading" #loader></loader>
    <header [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()"></header>
    <weather-table [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()" (loadingNotify)="isLoadingChange($event)">
    </weather-table>
    <map [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()"></map>
    <weather-city-info></weather-city-info>
    <footer></footer>`
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