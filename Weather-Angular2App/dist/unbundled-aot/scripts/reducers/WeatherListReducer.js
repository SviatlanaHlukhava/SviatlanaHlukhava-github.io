import { Weather } from './../model/Weather';
import { WeatherActions } from './../actions/WeatherActions';
var initialState = [];
export function WeatherListReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case WeatherActions.ADD_WEATHER: {
            return state.concat([action.payload]);
        }
        case WeatherActions.REMOVE_WEATHER: {
            state.splice(action.payload, 1);
            return state.slice(0);
        }
        case WeatherActions.SELECT_WEATHER: {
            state[action.payload].setSelected(!state[action.payload].getSelected());
            if (state[action.payload].getSelected()) {
                state.forEach(function (value, i) {
                    if (value.getSelected() && i !== action.payload) {
                        var weather = new Weather(value.getId(), value.getCity(), value.getDescription(), value.getCoordinate(), value.getMainParams(), value.getWind(), value.getCloud());
                        weather.setSelected(false);
                        state.splice(i, 1, weather);
                    }
                });
            }
            return state.slice(0);
        }
        case WeatherActions.UPDATE_WEATHER_SUCCESS: {
            var index = state.findIndex(function (weather) { return weather.getCity() === action.payload.getCity(); });
            if (index !== -1) {
                var newWeather = new Weather(action.payload.getId(), action.payload.getCity(), action.payload.getDescription(), action.payload.getCoordinate(), action.payload.getMainParams(), action.payload.getWind(), action.payload.getCloud());
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
//# sourceMappingURL=WeatherListReducer.js.map