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
        var weather = new Weather(data.id, data.name, data.weather[0].description, coordinate, mainParams, wind, clouds);
        return weather;
    };
    WeatherDTOtoWeatherConverter.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WeatherDTOtoWeatherConverter.ctorParameters = [];
    return WeatherDTOtoWeatherConverter;
}());
//# sourceMappingURL=WeatherDTOtoWeatherConverter.js.map