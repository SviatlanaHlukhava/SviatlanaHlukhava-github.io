import { Component, OnInit, Input, EventEmitter, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { Coordinate }  from './../model/Coordinate'
import { Profiler } from './../services/Profiler'
import { LoaderComponent }   from './loader.component';
import { LocationService } from './../services/Location'
import { LoggerService } from './../services/Logger'

@Component({
  selector: 'app',
  template: `<loader [isLoading]="isLoading"></loader>
    <header [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()"></header>
    <city-weather-section [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()" (loadingNotify)="isLoadingChange($event)"></city-weather-section>
    <map [latitude]="coordinate.getLatitude()" [longitude]="coordinate.getLongitude()"></map>
    <footer></footer>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  isLoading: boolean;
  coordinate: Coordinate;
  constructor(private zone: NgZone, private changeDetectorRef: ChangeDetectorRef, private profiler: Profiler,
    private locationService: LocationService, private loggerService: LoggerService) {
    this.coordinate = new Coordinate(0, 0);
    this.profiler.setZone(zone);
    this.profiler.profile();
  }
  ngOnInit(): void {
    this.isLoading = true;
    this.locationService.getCurrentPosition().subscribe((pos: Position) => {
       this.coordinate.setLatitude(pos.coords.latitude);
       this.coordinate.setLongitude(pos.coords.longitude);
       this.changeDetectorRef.markForCheck();
    }, (posError: PositionError) => {
       this.loggerService.errorLog(posError.message);
       this.isLoading = false;
    });
  }
  isLoadingChange($event: boolean) {
    this.isLoading = $event;
  }

}