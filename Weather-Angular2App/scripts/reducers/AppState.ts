import { select } from '@ngrx/core';

import  * as WeatherReducer from './WeatherListReducer';
import { Coordinate } from './../model/Coordinate';

export interface AppState {
    coordinate: Coordinate,
    loading: boolean,
    weatherList: WeatherReducer.WeatherListState
};
