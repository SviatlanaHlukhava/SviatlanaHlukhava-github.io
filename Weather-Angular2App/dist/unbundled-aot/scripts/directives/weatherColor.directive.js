import { Directive, Input, ElementRef } from '@angular/core';
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
    WeatherColorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[weather-color]'
                },] },
    ];
    /** @nocollapse */
    WeatherColorDirective.ctorParameters = [
        { type: ElementRef, },
    ];
    WeatherColorDirective.propDecorators = {
        'weather': [{ type: Input },],
    };
    return WeatherColorDirective;
}());
//# sourceMappingURL=weatherColor.directive.js.map