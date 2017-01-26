import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import * as WeatherReducer from './WeatherListReducer';

export interface AppState {
    weatherList: WeatherReducer.WeatherListState
};
