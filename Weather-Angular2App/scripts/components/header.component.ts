import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'pages/templates/header.tmpl.html',
  styleUrls: ['css/header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() latitude: number;
  @Input() longitude: number;
  currentDate: Date;
  constructor() {
    this.currentDate = new Date();
  }
}