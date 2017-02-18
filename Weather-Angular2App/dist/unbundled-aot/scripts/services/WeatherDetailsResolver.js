import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherApiService } from './WeatherAPI';
export var WeatherDetailsResolver = (function () {
    function WeatherDetailsResolver(weatherApiService, router) {
        this.weatherApiService = weatherApiService;
        this.router = router;
    }
    WeatherDetailsResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return this.weatherApiService.getWeatherCityInfoById(id).map(function (weather) {
            return weather;
        }).catch(function () {
            _this.router.navigate(['/weather-list']);
            return Observable.of(null);
        });
    };
    WeatherDetailsResolver.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WeatherDetailsResolver.ctorParameters = [
        { type: WeatherApiService, },
        { type: Router, },
    ];
    return WeatherDetailsResolver;
}());
//# sourceMappingURL=WeatherDetailsResolver.js.map