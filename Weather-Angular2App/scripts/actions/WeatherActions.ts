import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Weather } from './../model/Weather';
import { Coordinate } from './../model/Coordinate'

@Injectable()
export class WeatherActions {
    static ADD_WEATHER = '[Weather] Add Weather';
    addWeather(weather: Weather): Action {
        return {
            type: WeatherActions.ADD_WEATHER,
            payload: weather
        };
    }

    static REMOVE_WEATHER = '[Weather] Remove Weather';
    removeWeather(id: number): Action {
        return {
            type: WeatherActions.REMOVE_WEATHER,
            payload: id
        };
    }

    static SELECT_WEATHER = '[Weather] Select Weather';
    selectWeather(id: number): Action {
        return {
            type: WeatherActions.SELECT_WEATHER,
            payload: id
        };
    }

    static CLEAR_WEATHER_LIST = '[Weather] Clear Weather List';
    clearWeatherList(): Action {
        return {
            type: WeatherActions.CLEAR_WEATHER_LIST
        };
    }

    static UPDATE_WEATHER_SUCCESS = '[Weather] Update Weather Success';
    updateWeatherSuccess(weather: Weather): Action {
        return {
            type: WeatherActions.UPDATE_WEATHER_SUCCESS,
            payload: weather
        };
    }
}