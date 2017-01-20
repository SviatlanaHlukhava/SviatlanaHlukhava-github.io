var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    CityWeatherPipe = __decorate([
        Pipe({
            name: 'sgCityWeather'
        }), 
        __metadata('design:paramtypes', [WeatherApiService])
    ], CityWeatherPipe);
    return CityWeatherPipe;
}());
