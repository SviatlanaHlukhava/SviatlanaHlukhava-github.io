import { Component, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'city-form',
  templateUrl: './../../pages/templates/cityForm.tmpl.html',
  styleUrls: ['./../../css/weatherTable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityFormComponent {
  city: string;
  @Output() addNotify = new EventEmitter();

  constructor() {
  }
  add() {
      this.addNotify.emit(this.city);
  }
}