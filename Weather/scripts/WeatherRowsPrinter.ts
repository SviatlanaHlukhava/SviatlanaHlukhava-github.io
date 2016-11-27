import { IWeatherRowsPrinter } from './IWeatherRowsPrinter'
import { Weather }  from './Weather'

export class WeatherRowsPrinter implements IWeatherRowsPrinter {

    printWeatherTable(list: Weather[]): void {
        let tableRow = '';
        for (let i = 0; i < list.length; i++) {
            tableRow += '<tr><td>' + list[i].getCity() +
                '</td><td>' + list[i].getCoordinate().getLatitude() +
                '</td><td>' + list[i].getCoordinate().getLongitude() +
                '</td><td>' + list[i].getMainParams().getTemperature() +
                '</td><td>' + list[i].getMainParams().getHumidity() +
                '</td><td>' + list[i].getMainParams().getPressure() +
                '</td><td>' + list[i].getWind().getDegree() +
                '</td><td>' + list[i].getWind().getSpeed() +
                '</td><td>' + list[i].getCloud().getAll() +
                '</td></tr>';
        }
        document.getElementsByClassName("weather-table-body")[0].innerHTML = tableRow;
    }
}