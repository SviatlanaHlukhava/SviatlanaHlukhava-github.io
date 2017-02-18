import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs'
import { Http, Response, RequestOptionsArgs, URLSearchParams, RequestMethod } from '@angular/http'
import { WeatherDTO } from './../dto/WeatherDTO'
import { WeatherDTOtoWeatherConverter } from './WeatherDTOtoWeatherConverter'
import { Weather }  from './../model/Weather'


@Injectable()
export class WeatherApiService {

    private appId: string;
    constructor(private weatherDTOtoWeatherConverter: WeatherDTOtoWeatherConverter,
        private http: Http) {
        this.appId = "5e704282bf38a873419932de2553f5bb";
    }

    public getWeatherList(latitude: number, longitude: number): Observable<Weather>  {
        const urlParams = new URLSearchParams();
        urlParams.append('lat', latitude.toString());
        urlParams.append('lon', longitude.toString());
        urlParams.append('cnt', '50');
        urlParams.append('appid', this.appId);
        return this.http.request('http://api.openweathermap.org/data/2.5/find', {
            method: RequestMethod.Get,
            search: urlParams
        }).switchMap((response: Response) => {
            return response.json().list;
        }).catch((error: Response, caught: Observable<{}>) => {
            return Observable.throw("Weather list is not loaded");
        }).retry(2).map((data: WeatherDTO) => {
            return this.weatherDTOtoWeatherConverter.convert(data);
        });
    }

    public getWeatherCityInfo(city: string, useMock: boolean): Observable<Weather> {
        let url: string;
        if (!useMock) {
            url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city +
            '&appid=' + this.appId;
        } else {
            url = 'scripts/mocks/' + city + '.mock.json';
        }
        return this.http.get(url).map((response: Response) => {
            return response.json();
        }).map((data: WeatherDTO) => {
            return this.weatherDTOtoWeatherConverter.convert(data);
        });
    }

    public getWeatherCityInfoById(id: number): Observable<Weather> {
        const url = 'http://api.openweathermap.org/data/2.5/weather?id=' + id + '&appid=' + this.appId;
        return this.http.get(url).map((response: Response) => {
            return response.json();
        }).map((data: WeatherDTO) => {
            return this.weatherDTOtoWeatherConverter.convert(data);
        }).catch((error: Response, caught: Observable<{}>) => {
            return Observable.throw("Weather Details is not loaded");
        });
    }

    public pollWeatherCityInfo(city: string): Observable<Weather> {
        return Observable.interval(500).switchMap(() => {
            return this.getWeatherCityInfo(city, true);
        });
    }
}