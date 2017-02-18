import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather }  from './../model/Weather'

@Component({
  selector: 'weather-details',
  templateUrl: './../../pages/templates/weatherDetails.tmpl.html',
  styleUrls: ['./../../css/weatherDetails.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDetailsComponent implements OnInit {
  weather: Weather;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.data.subscribe((data: { weather: Weather }) => {
        this.weather = data.weather;
    });
  }
}