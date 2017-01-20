import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDTOtoWeatherConverter } from './WeatherDTOtoWeatherConverter';
export var WeatherApiService = (function () {
    function WeatherApiService(weatherDTOtoWeatherConverter) {
        this.weatherDTOtoWeatherConverter = weatherDTOtoWeatherConverter;
    }
    WeatherApiService.prototype.getWeatherList = function (latitude, longitude) {
        var _this = this;
        return Observable.create(function (observer) {
            var xhr = new XMLHttpRequest();
            var url = 'http://api.openweathermap.org/data/2.5/find?lat=' +
                latitude + '&lon=' + longitude +
                '&cnt=50&appid=5e704282bf38a873419932de2553f5bb';
            xhr.open('GET', url, true);
            xhr.send();
            xhr.onload = function () {
                if (xhr.status === 200 && xhr.responseText) {
                    var response = xhr.responseText;
                    observer.next(response);
                    observer.complete();
                }
                else {
                    observer.error("Weather list is not loaded");
                }
            };
            xhr.onerror = function () {
                observer.error("Weather list is not loaded");
            };
        }).retry(2).flatMap(function (response) {
            var data = response !== '' ? JSON.parse(response) : { list: [] };
            return Observable.from(data.list);
        }).map(function (data) {
            return _this.weatherDTOtoWeatherConverter.convert(data);
        });
    };
    WeatherApiService.prototype.getWeatherCityInfo = function (city, useMock) {
        var _this = this;
        return Observable.create(function (observer) {
            var xhr = new XMLHttpRequest();
            var url;
            if (!useMock) {
                url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city +
                    '&appid=5e704282bf38a873419932de2553f5bb';
            }
            else {
                url = 'scripts/mocks/' + city + '.mock.json';
            }
            xhr.open('GET', url, true);
            xhr.send();
            xhr.onload = function () {
                if (xhr.status === 200 && xhr.responseText) {
                    observer.next(xhr.responseText);
                }
            };
        }).map(function (data) {
            return JSON.parse(data);
        }).map(function (data) {
            return _this.weatherDTOtoWeatherConverter.convert(data);
        });
    };
    WeatherApiService.prototype.pollWeatherCityInfo = function (city) {
        var _this = this;
        return Observable.interval(500).flatMap(function () {
            return _this.getWeatherCityInfo(city, true);
        });
    };
    WeatherApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WeatherApiService.ctorParameters = [
        { type: WeatherDTOtoWeatherConverter, },
    ];
    return WeatherApiService;
}());
//# sourceMappingURL=WeatherAPI.js.map