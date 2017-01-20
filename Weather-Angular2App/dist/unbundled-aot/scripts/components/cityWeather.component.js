import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
export var CityWeatherComponent = (function () {
    function CityWeatherComponent() {
        this.deleteNotify = new EventEmitter();
        this.selectNotify = new EventEmitter();
    }
    CityWeatherComponent.prototype.remove = function () {
        this.deleteNotify.emit(this.index);
    };
    CityWeatherComponent.prototype.select = function () {
        this.selectNotify.emit(this.index);
    };
    CityWeatherComponent.decorators = [
        { type: Component, args: [{
                    selector: '[city-weather]',
                    templateUrl: './../../pages/templates/cityWeather.tmpl.html',
                    styleUrls: ['./../../css/weatherTable.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    CityWeatherComponent.ctorParameters = [];
    CityWeatherComponent.propDecorators = {
        'weather': [{ type: Input },],
        'index': [{ type: Input },],
        'deleteNotify': [{ type: Output },],
        'selectNotify': [{ type: Output },],
    };
    return CityWeatherComponent;
}());
//# sourceMappingURL=cityWeather.component.js.map