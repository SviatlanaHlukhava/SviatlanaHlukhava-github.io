var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Coordinate } from './../model/Coordinate';
import { MainWeather } from './../model/MainWeather';
import { Weather } from './../model/Weather';
import { Wind } from './../model/Wind';
import { Cloud } from './../model/Cloud';
export var WeatherDTOtoWeatherConverter = (function () {
    function WeatherDTOtoWeatherConverter() {
    }
    WeatherDTOtoWeatherConverter.prototype.convert = function (data) {
        var coordinate = new Coordinate(data.coord.lat, data.coord.lon);
        var mainParams = new MainWeather(data.main.temp, data.main.humidity, data.main.pressure);
        var wind = new Wind(data.wind.deg, data.wind.speed);
        var clouds = new Cloud(data.clouds.all);
        var weather = new Weather(data.name, data.weather[0].description, coordinate, mainParams, wind, clouds);
        return weather;
    };
    WeatherDTOtoWeatherConverter = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], WeatherDTOtoWeatherConverter);
    return WeatherDTOtoWeatherConverter;
}());
