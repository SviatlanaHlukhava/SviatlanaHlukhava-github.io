import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, URLSearchParams, RequestMethod } from '@angular/http';
import { WeatherDTOtoWeatherConverter } from './WeatherDTOtoWeatherConverter';
export var WeatherApiService = (function () {
    function WeatherApiService(weatherDTOtoWeatherConverter, http) {
        this.weatherDTOtoWeatherConverter = weatherDTOtoWeatherConverter;
        this.http = http;
        this.appId = "5e704282bf38a873419932de2553f5bb";
    }
    WeatherApiService.prototype.getWeatherList = function (latitude, longitude) {
        var _this = this;
        var urlParams = new URLSearchParams();
        urlParams.append('lat', latitude.toString());
        urlParams.append('lon', longitude.toString());
        urlParams.append('cnt', '50');
        urlParams.append('appid', this.appId);
        return this.http.request('http://api.openweathermap.org/data/2.5/find', {
            method: RequestMethod.Get,
            search: urlParams
        }).switchMap(function (response) {
            return response.json().list;
        }).catch(function (error, caught) {
            return Observable.throw("Weather list is not loaded");
        }).retry(2).map(function (data) {
            return _this.weatherDTOtoWeatherConverter.convert(data);
        });
    };
    WeatherApiService.prototype.getWeatherCityInfo = function (city, useMock) {
        var _this = this;
        var url;
        if (!useMock) {
            url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city +
                '&appid=' + this.appId;
        }
        else {
            url = 'scripts/mocks/' + city + '.mock.json';
        }
        return this.http.get(url).map(function (response) {
            return response.json();
        }).map(function (data) {
            return _this.weatherDTOtoWeatherConverter.convert(data);
        });
    };
    WeatherApiService.prototype.getWeatherCityInfoById = function (id) {
        var _this = this;
        var url = 'http://api.openweathermap.org/data/2.5/weather?id=' + id + '&appid=' + this.appId;
        return this.http.get(url).map(function (response) {
            return response.json();
        }).map(function (data) {
            return _this.weatherDTOtoWeatherConverter.convert(data);
        }).catch(function (error, caught) {
            return Observable.throw("Weather Details is not loaded");
        });
    };
    WeatherApiService.prototype.pollWeatherCityInfo = function (city) {
        var _this = this;
        return Observable.interval(500).switchMap(function () {
            return _this.getWeatherCityInfo(city, true);
        });
    };
    WeatherApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WeatherApiService.ctorParameters = [
        { type: WeatherDTOtoWeatherConverter, },
        { type: Http, },
    ];
    return WeatherApiService;
}());
//# sourceMappingURL=WeatherAPI.js.map