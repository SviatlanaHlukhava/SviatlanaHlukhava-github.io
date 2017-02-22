import { Action } from '@ngrx/store';
import { WeatherListReducer } from './../../scripts/reducers/WeatherListReducer'
import { WeatherActions } from './../../scripts/actions/WeatherActions';
import { Weather } from './../../scripts/model/Weather'

describe('WeatherListReducer', () => {

    let weatherActions = new WeatherActions()
    let weatherList: Weather[];
    let weather1: Weather, weather2: Weather;
    beforeEach(() => {
        weather1 = new Weather(1, "city1", "test", null, null, null, null);
        weather2 = new Weather(2, "city2", "test", null, null, null, null);
        weatherList = [];
        weatherList.push(weather1);
        weatherList.push(weather2);
    });

    it('should add weather', () => {
        let weather3 = new Weather(3, "city3", "test", null, null, null, null);
        let newWeatherList = WeatherListReducer(weatherList, weatherActions.addWeather(weather3));
        expect(newWeatherList.length).toBe(3);
        expect(newWeatherList[2]).toEqual(weather3);

    });
    it('should remove weather', () => {
        let newWeatherList = WeatherListReducer(weatherList, weatherActions.removeWeather(0));
        expect(newWeatherList.length).toBe(1);
        expect(newWeatherList[0]).toEqual(weather2);
    });
    it('should clear weather list', () => {
        let newWeatherList = WeatherListReducer(weatherList, weatherActions.clearWeatherList());
        expect(newWeatherList.length).toBe(0);
    });
    it('should select unselected element', () => {
        let newWeatherList = WeatherListReducer(weatherList, weatherActions.selectWeather(1));
        expect(newWeatherList[1].getSelected()).toBeTruthy();
    });
    it('should unselect selected element', () => {
        weather1.setSelected(true);
        let newWeatherList = WeatherListReducer(weatherList, weatherActions.selectWeather(1));
        expect(newWeatherList[0].getSelected()).toBeFalsy();
        expect(newWeatherList[1].getSelected()).toBeTruthy();
    });
    it('should update existing weather', () => {
        let weather1Update = new Weather(1, "city1", "testNew", null, null, null, null);
        let newWeatherList = WeatherListReducer(weatherList, weatherActions.updateWeatherSuccess(weather1Update));
        expect(newWeatherList[0].getDescription()).toBe("testNew");
    });
    it('should not update unexisting weather', () => {
        let weather3Update = new Weather(3, "city1", "testNew", null, null, null, null);
        let newWeatherList = WeatherListReducer(weatherList, weatherActions.updateWeatherSuccess(weather3Update));
        expect(newWeatherList).toEqual(weatherList);
    });
});