import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'weather-icon',
  templateUrl: 'pages/templates/weatherIcon.tmpl.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherIcon {
  @Input() description: string;
}