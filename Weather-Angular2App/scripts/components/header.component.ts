import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Coordinate }  from './../model/Coordinate'

@Component({
  selector: 'header',
  templateUrl: './../../pages/templates/header.tmpl.html',
  styleUrls: ['./../../css/header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() coordinate: Coordinate;
  currentDate: Date;
  constructor() {
    this.currentDate = new Date();
  }
}