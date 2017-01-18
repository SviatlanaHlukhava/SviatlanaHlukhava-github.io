import { Injectable } from '@angular/core'
import { Coordinate }  from './../model/Coordinate'
import { MainWeather } from './../model/MainWeather'
import { Weather }  from './../model/Weather'
import { Wind } from './../model/Wind'
import { Cloud }  from './../model/Cloud'
import { WeatherDTO } from './../dto/WeatherDTO'

@Injectable()
export class WeatherDTOtoWeatherConverter {
    public convert (data: WeatherDTO) {
        let coordinate = new Coordinate(data.coord.lat, data.coord.lon);
        let mainParams = new MainWeather(data.main.temp, data.main.humidity, data.main.pressure);
        let wind = new Wind(data.wind.deg, data.wind.speed);
        let clouds = new Cloud(data.clouds.all);
        let weather = new Weather(data.name, data.weather[0].description, coordinate, mainParams, wind, clouds);
        return weather;
    }
}