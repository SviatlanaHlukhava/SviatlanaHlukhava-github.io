import { Injectable } from '@angular/core';
export var WeatherActions = (function () {
    function WeatherActions() {
    }
    WeatherActions.prototype.loadWeatherList = function () {
        return {
            type: WeatherActions.LOAD_WEATHER_LIST
        };
    };
    WeatherActions.prototype.getWeather = function (city) {
        return {
            type: WeatherActions.GET_WEATHER,
            payload: city
        };
    };
    WeatherActions.prototype.addWeather = function (weather) {
        return {
            type: WeatherActions.ADD_WEATHER,
            payload: weather
        };
    };
    WeatherActions.prototype.removeWeather = function (id) {
        return {
            type: WeatherActions.REMOVE_WEATHER,
            payload: id
        };
    };
    WeatherActions.prototype.selectWeather = function (id) {
        return {
            type: WeatherActions.SELECT_WEATHER,
            payload: id
        };
    };
    WeatherActions.prototype.updateWeather = function (city) {
        return {
            type: WeatherActions.UPDATE_WEATHER,
            payload: city
        };
    };
    WeatherActions.prototype.clearWeatherList = function () {
        return {
            type: WeatherActions.CLEAR_WEATHER_LIST
        };
    };
    WeatherActions.prototype.updateWeatherSuccess = function (weather) {
        return {
            type: WeatherActions.UPDATE_WEATHER_SUCCESS,
            payload: weather
        };
    };
    WeatherActions.LOAD_WEATHER_LIST = '[Weather] Load Weather List';
    WeatherActions.GET_WEATHER = '[Weather] Get Weather';
    WeatherActions.ADD_WEATHER = '[Weather] Add Weather';
    WeatherActions.REMOVE_WEATHER = '[Weather] Remove Weather';
    WeatherActions.SELECT_WEATHER = '[Weather] Select Weather';
    WeatherActions.UPDATE_WEATHER = '[Weather] Update Weather';
    WeatherActions.CLEAR_WEATHER_LIST = '[Weather] Clear Weather List';
    WeatherActions.UPDATE_WEATHER_SUCCESS = '[Weather] Update Weather Success';
    WeatherActions.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WeatherActions.ctorParameters = [];
    return WeatherActions;
}());
//# sourceMappingURL=WeatherActions.js.map