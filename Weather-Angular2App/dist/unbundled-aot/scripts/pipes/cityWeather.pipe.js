import { Pipe } from '@angular/core';
import { WeatherApiService } from './../services/WeatherAPI';
import { Observable } from 'rxjs';
export var CityWeatherPipe = (function () {
    function CityWeatherPipe(weatherApiService) {
        this.weatherApiService = weatherApiService;
        this.weatherInfoMap = new Map();
    }
    CityWeatherPipe.prototype.transform = function (value, time) {
        var _this = this;
        if (time === void 0) { time = undefined; }
        var self = this;
        var currentDate = new Date();
        this.currentWeather = undefined;
        var oldSearchWeather;
        self.weatherInfoMap.forEach(function (val, key) {
            if (((currentDate.valueOf() - key.valueOf()) / 1000 < time || time === undefined) && val.getCity() === value) {
                oldSearchWeather = val;
            }
        });
        if (oldSearchWeather) {
            return Observable.create(function (observer) {
                observer.next(oldSearchWeather);
            });
        }
        else {
            var $observable = this.weatherApiService.getWeatherCityInfo(value, false).share();
            $observable.subscribe(function (result) {
                _this.weatherInfoMap.set(currentDate, result);
            });
            return $observable;
        }
    };
    CityWeatherPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'sgCityWeather'
                },] },
    ];
    /** @nocollapse */
    CityWeatherPipe.ctorParameters = [
        { type: WeatherApiService, },
    ];
    return CityWeatherPipe;
}());
//# sourceMappingURL=cityWeather.pipe.js.map