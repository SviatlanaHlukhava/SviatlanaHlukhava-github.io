import { Coordinate }  from './Coordinate'
import { MainWeather } from './MainWeather'
import { Weather }  from './Weather'
import { Wind } from './Wind'
import { Cloud }  from './Cloud'
import { WeatherRowsPrinter } from './WeatherRowsPrinter'
import { MapRender } from './MapRender'

export class WeatherCitiesLoader {
    loadCities(): void {
        navigator.geolocation.getCurrentPosition(this.getWeatherCitiesList);
    }

    getWeatherCitiesList(pos: Position): void {

        document.getElementsByClassName("latitude")[0].innerHTML = pos.coords.latitude.toString();
        document.getElementsByClassName("longitude")[0].innerHTML = pos.coords.longitude.toString();

        let mapRender = new MapRender();
        mapRender.showMap(pos);

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://api.openweathermap.org/data/2.5/find?lat=' +
            pos.coords.latitude + '&lon=' + pos.coords.longitude +
            '&cnt=50&appid=5e704282bf38a873419932de2553f5bb', true);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.responseText) {
                let response = xhr.responseText;
                let data = response !== '' ? JSON.parse(xhr.responseText) : { list: [] };
                let list: Weather[] = [];
                for (let i = 0; i < data.list.length; i++) {
                    let coordinate = new Coordinate(data.list[i].coord.lat, data.list[i].coord.lon);
                    let mainParams = new MainWeather(data.list[i].main.temp, data.list[i].main.humidity, data.list[i].main.pressure);
                    let wind = new Wind(data.list[i].wind.deg, data.list[i].wind.speed);
                    let clouds = new Cloud(data.list[i].clouds.all);
                    let weather = new Weather(data.list[i].name, coordinate, mainParams, wind, clouds);
                    list.push(weather);
                }
                let weatherRowsPrinter = new WeatherRowsPrinter();
                weatherRowsPrinter.printWeatherTable(list);
            }
        }

    }
}