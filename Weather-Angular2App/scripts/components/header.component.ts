import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'pages/templates/header.tmpl.html',
  styleUrls: ['css/header.css']
})
export class Header {
  @Input() latitude: number;
  @Input() longitude: number;
  currentDate: Date;
  constructor() {
    this.currentDate = new Date();
  }
}