import { Directive, Input, ElementRef, OnChanges } from '@angular/core';
import { Weather }  from './../model/Weather'
import { TemperatureColor }  from './../model/TemperatureColor'

@Directive({
  selector: '[weather-color]'
})
export class WeatherColorDirective implements OnChanges {
  @Input() weather: Weather;
  colorsList: TemperatureColor [];

  constructor(private el: ElementRef) {
    this.colorsList = [
      new TemperatureColor('#819FF7', undefined, 243),
      new TemperatureColor('#81DAF5', 243, 253),
      new TemperatureColor('#81F7F3', 253, 263),
      new TemperatureColor('#81F7BE', 263, 273),
      new TemperatureColor('#BCF5A9', 273, 283),
      new TemperatureColor('#F3F781', 283, 293),
      new TemperatureColor('#F7D358', 293, 303),
      new TemperatureColor('#F5A9A9', 303, undefined)
    ];
  }

  ngOnChanges(): void {
      const temperature = this.weather.getMainParams().getTemperature();
      this.colorsList.forEach((colorElem) => {
          if ((temperature > colorElem.getMin() && temperature <= colorElem.getMax() && colorElem.getMin() && colorElem.getMax()) ||
             (temperature <= colorElem.getMax() && !colorElem.getMin()) || (temperature > colorElem.getMin() && !colorElem.getMax())) {
                 this.el.nativeElement.style.backgroundColor = colorElem.getColor();
             }
      });
  }
}