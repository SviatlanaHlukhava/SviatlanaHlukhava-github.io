import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export var WeatherIconComponent = (function () {
    function WeatherIconComponent() {
    }
    WeatherIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-icon',
                    templateUrl: './../../pages/templates/weatherIcon.tmpl.html',
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    WeatherIconComponent.ctorParameters = [];
    WeatherIconComponent.propDecorators = {
        'description': [{ type: Input },],
    };
    return WeatherIconComponent;
}());
//# sourceMappingURL=weatherIcon.component.js.map