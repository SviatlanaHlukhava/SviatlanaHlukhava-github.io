import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs'
import { WeatherApiService } from './WeatherAPI'
import { Weather } from './../model/Weather'

@Injectable()
export class WeatherDetailsResolver implements Resolve<Weather> {
  constructor(private weatherApiService: WeatherApiService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = route.params['id'];
    return this.weatherApiService.getWeatherCityInfoById(id).map((weather: Weather) => {
        return weather;
    }).catch(() => {
        this.router.navigate(['/weather-list']);
        return Observable.of(null);
    });
  }
}