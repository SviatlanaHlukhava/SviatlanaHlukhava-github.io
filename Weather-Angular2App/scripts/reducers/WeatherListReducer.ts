import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Weather } from './../model/Weather';
import { WeatherActions } from './../actions/WeatherActions';

export type WeatherListState = Weather[];

const initialState: WeatherListState = [];

export function WeatherListReducer(state = initialState, action: Action): WeatherListState {
    switch (action.type) {
        case WeatherActions.ADD_WEATHER: {
            return [...state, action.payload];
        }
        case WeatherActions.REMOVE_WEATHER: {
            state.splice(action.payload, 1);
            return state.slice(0);
        }
        case WeatherActions.SELECT_WEATHER: {
            state[action.payload].setSelected(!state[action.payload].getSelected());
            if (state[action.payload].getSelected()) {
                state.forEach((value, i) => {
                    if (value.getSelected() && i !== action.payload) {
                        let weather = new Weather(value.getCity(), value.getDescription(), value.getCoordinate(),
                            value.getMainParams(), value.getWind(), value.getCloud());
                        weather.setSelected(false);
                        state.splice(i, 1, weather);
                     }
                });
            }
            return state.slice(0);
        }
        case WeatherActions.UPDATE_WEATHER_SUCCESS: {
            let index = state.findIndex((weather) => weather.getCity() === action.payload.getCity());
            if (index !== -1) {
                let newWeather = new Weather(action.payload.getCity(), action.payload.getDescription(), action.payload.getCoordinate(),
                action.payload.getMainParams(), action.payload.getWind(), action.payload.getCloud());
                action.payload.setSelected(state[index].getSelected());
                state.splice(index, 1, action.payload);
            }
            return state.slice(0);
        }
        case WeatherActions.CLEAR_WEATHER_LIST: {
            return [];
        }
        default: {
            return state;
        }
    }
}