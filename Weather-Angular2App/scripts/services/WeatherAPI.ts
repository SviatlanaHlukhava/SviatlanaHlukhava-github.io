import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs'
import { WeatherDTO } from './../dto/WeatherDTO'
import { WeatherDTOtoWeatherConverter } from './WeatherDTOtoWeatherConverter'
import { Weather }  from './../model/Weather'


@Injectable()
export class WeatherApiService {

    constructor(private weatherDTOtoWeatherConverter: WeatherDTOtoWeatherConverter) {}

    public getWeatherList(latitude: number, longitude: number): Observable<Weather> {
        return Observable.create((observer: Observer<string>) => {
            let xhr = new XMLHttpRequest();
            let url = 'http://api.openweathermap.org/data/2.5/find?lat=' +
                latitude + '&lon=' + longitude +
                '&cnt=50&appid=5e704282bf38a873419932de2553f5bb';
            xhr.open('GET', url, true);
            xhr.send();

            xhr.onload = function () {
            if (xhr.status === 200 && xhr.responseText ) {
                let response = xhr.responseText;
                observer.next(response);
                observer.complete();
            } else {
                observer.error("Weather list is not loaded");
            }
            }
            xhr.onerror = function () {
                observer.error("Weather list is not loaded");
            }
        }).retry(2).flatMap((response: string) => {
            let data = response !== '' ? JSON.parse(response) : { list: [] };
            return Observable.from(data.list);
        }).map((data: WeatherDTO) => {
            return this.weatherDTOtoWeatherConverter.convert(data);
        });
    }

    public getWeatherCityInfo(city: string, useMock: boolean): Observable<Weather> {
        return Observable.create((observer: Observer <string>) => {
            let xhr = new XMLHttpRequest();
            let url: string;
            if (!useMock) {
                url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city +
                    '&appid=5e704282bf38a873419932de2553f5bb';
            } else {
                url = 'scripts/mocks/' + city + '.mock.json';
            }
            xhr.open('GET', url, true);
            xhr.send();
            xhr.onload = function () {
                if (xhr.status === 200 && xhr.responseText) {
                    observer.next(xhr.responseText);
                }
            }
          }).map((data: string) => {
               return JSON.parse(data);
          }).map((data: WeatherDTO) => {
               return this.weatherDTOtoWeatherConverter.convert(data);
          });
    }

    public pollWeatherCityInfo(city: string): Observable<Weather> {
        return Observable.interval(500).flatMap(() => {
            return this.getWeatherCityInfo(city, true);
        });
    }
}