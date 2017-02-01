import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
export var CityWeatherTableComponent = (function () {
    function CityWeatherTableComponent() {
        this.deleteNotify = new EventEmitter();
        this.selectNotify = new EventEmitter();
    }
    CityWeatherTableComponent.prototype.remove = function ($event) {
        this.deleteNotify.emit($event);
    };
    CityWeatherTableComponent.prototype.select = function ($event) {
        console.log(this.tableParameters);
        this.selectNotify.emit($event);
    };
    CityWeatherTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'city-weather-table',
                    templateUrl: './../../pages/templates/cityWeatherTable.tmpl.html',
                    styleUrls: ['./../../css/weatherTable.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    CityWeatherTableComponent.ctorParameters = [];
    CityWeatherTableComponent.propDecorators = {
        'weatherList': [{ type: Input },],
        'tableParameters': [{ type: Input },],
        'deleteNotify': [{ type: Output },],
        'selectNotify': [{ type: Output },],
    };
    return CityWeatherTableComponent;
}());
//# sourceMappingURL=cityWeatherTable.component.js.map