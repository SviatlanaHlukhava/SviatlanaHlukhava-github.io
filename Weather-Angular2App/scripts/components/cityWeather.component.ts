import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Weather }  from './../model/Weather'
import { TableParameters } from './../model/TableParameters'
import { CityWeatherPipe } from './../pipes/cityWeather.pipe'
import { WindIconDirective }   from './../directives/windIcon.directive';

@Component({
  selector: '[city-weather]',
  templateUrl: './../../pages/templates/cityWeather.tmpl.html',
  styleUrls: ['./../../css/weatherTable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherComponent {
  @Input() weather: Weather;
  @Input() tableParameters: TableParameters;
  @Input() index: number;
  @Output() deleteNotify = new EventEmitter();
  @Output() selectNotify = new EventEmitter();

  constructor() {
  }
  remove() {
      this.deleteNotify.emit(this.index);
  }
  select() {
      this.selectNotify.emit(this.index);
  }
}