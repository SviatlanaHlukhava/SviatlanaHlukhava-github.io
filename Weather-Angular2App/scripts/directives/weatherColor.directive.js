var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, ElementRef } from '@angular/core';
import { Weather } from './../model/Weather';
import { TemperatureColor } from './../model/TemperatureColor';
export var WeatherColorDirective = (function () {
    function WeatherColorDirective(el) {
        this.el = el;
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
    WeatherColorDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var temperature = this.weather.getMainParams().getTemperature();
        this.colorsList.forEach(function (colorElem) {
            if ((temperature > colorElem.getMin() && temperature <= colorElem.getMax() && colorElem.getMin() && colorElem.getMax()) ||
                (temperature <= colorElem.getMax() && !colorElem.getMin()) || (temperature > colorElem.getMin() && !colorElem.getMax())) {
                _this.el.nativeElement.style.backgroundColor = colorElem.getColor();
            }
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Weather)
    ], WeatherColorDirective.prototype, "weather", void 0);
    WeatherColorDirective = __decorate([
        Directive({
            selector: '[weather-color]'
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], WeatherColorDirective);
    return WeatherColorDirective;
}());
