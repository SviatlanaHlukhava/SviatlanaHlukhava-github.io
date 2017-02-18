import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Weather } from './../model/Weather';
import { WeatherApiService } from './../services/WeatherAPI';
export var MyCityWeatherDetailsComponent = (function () {
    function MyCityWeatherDetailsComponent(weatherApiService, changeDetectorRef) {
        this.weatherApiService = weatherApiService;
        this.changeDetectorRef = changeDetectorRef;
    }
    MyCityWeatherDetailsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.weatherApiService.getWeatherCityInfoByLocation(this.coordinate).subscribe(function (weather) {
            _this.weather = new Weather(weather.getId(), weather.getCity(), weather.getDescription(), weather.getCoordinate(), weather.getMainParams(), weather.getWind(), weather.getCloud());
            _this.changeDetectorRef.markForCheck();
        });
    };
    MyCityWeatherDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-city-weather-details',
                    templateUrl: './../../pages/templates/weatherDetails.tmpl.html',
                    styleUrls: ['./../../css/weatherDetails.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MyCityWeatherDetailsComponent.ctorParameters = [
        { type: WeatherApiService, },
        { type: ChangeDetectorRef, },
    ];
    MyCityWeatherDetailsComponent.propDecorators = {
        'coordinate': [{ type: Input },],
    };
    return MyCityWeatherDetailsComponent;
}());
//# sourceMappingURL=myCityWeatherDetails.component.js.map