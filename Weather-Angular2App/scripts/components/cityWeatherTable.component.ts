import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Weather }  from './../model/Weather'
import { TableParameters } from './../model/TableParameters'
import { CityWeatherComponent } from './cityWeather.component'

@Component({
  selector: 'city-weather-table',
  templateUrl: './../../pages/templates/cityWeatherTable.tmpl.html',
  styleUrls: ['./../../css/weatherTable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherTableComponent {
  @Input() weatherList: Weather[];
  @Input() tableParameters: TableParameters;
  @Output() deleteNotify = new EventEmitter();
  @Output() selectNotify = new EventEmitter();

  constructor() {
  }
  remove($event: number) {
      this.deleteNotify.emit($event);
  }
  select($event: number) {
    console.log(this.tableParameters);
      this.selectNotify.emit($event);
  }
}