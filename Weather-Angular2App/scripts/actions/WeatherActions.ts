import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Weather } from './../model/Weather';

@Injectable()
export class WeatherActions {
    static LOAD_WEATHER_LIST = '[Weather] Load Weather List';
    loadWeatherList(): Action {
        return {
            type: WeatherActions.LOAD_WEATHER_LIST
        };
    }

    static GET_WEATHER = '[Weather] Get Weather';
    getWeather(city: string): Action {
        return {
            type: WeatherActions.GET_WEATHER,
            payload: city
        };
    }

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

    static UPDATE_WEATHER = '[Weather] Update Weather';
    updateWeather(city: string): Action {
        return {
            type: WeatherActions.UPDATE_WEATHER,
            payload: city
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