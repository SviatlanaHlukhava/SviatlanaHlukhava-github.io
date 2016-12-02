import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  template: `<div class="header">
      <div class="logo"></div>
      <div class="position">Current position: latitude - {{latitude}}, longitude - {{longitude}}</div>
    </div>`,
  styleUrls: ['./../../css/header.css']
})
export class Header {
  @Input() latitude: number;
  @Input() longitude: number;
  constructor() {
  }
}