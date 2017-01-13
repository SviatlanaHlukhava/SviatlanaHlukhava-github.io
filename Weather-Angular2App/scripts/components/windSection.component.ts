import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Wind }  from './../model/Wind'

@Component({
  selector: 'wind-section',
  templateUrl: 'pages/templates/windSection.tmpl.html',
  styleUrls: ['css/windSection.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindSection {
  @Input() wind: Wind;
}