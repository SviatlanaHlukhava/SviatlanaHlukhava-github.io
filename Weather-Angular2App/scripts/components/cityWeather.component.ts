import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Weather }  from './../Weather'
import { CityWeatherPipe } from './../pipes/cityWeather.pipe'
import { WindIcon }   from './../directives/WindIcon.directive';

@Component({
  selector: '[city-weather]',
  templateUrl: 'pages/templates/cityWeather.tmpl.html',
  styleUrls: ['css/weatherTable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeather {
  @Input() weather: Weather;
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