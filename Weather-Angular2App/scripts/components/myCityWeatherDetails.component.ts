import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather }  from './../model/Weather'
import { Coordinate } from './../model/Coordinate'
import { WeatherApiService } from './../services/WeatherAPI'

@Component({
  selector: 'my-city-weather-details',
  templateUrl: './../../pages/templates/weatherDetails.tmpl.html',
  styleUrls: ['./../../css/weatherDetails.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCityWeatherDetailsComponent implements OnChanges {
  weather: Weather;
  @Input() coordinate: Coordinate;
  constructor(private weatherApiService: WeatherApiService, private changeDetectorRef: ChangeDetectorRef) {
  }
  ngOnChanges(changes: SimpleChanges) {
      this.weatherApiService.getWeatherCityInfoByLocation(this.coordinate).subscribe((weather: Weather) => {
          this.weather = new Weather(weather.getId(), weather.getCity(), weather.getDescription(),
          weather.getCoordinate(), weather.getMainParams(), weather.getWind(), weather.getCloud());
          this.changeDetectorRef.markForCheck();
      });
  }
}