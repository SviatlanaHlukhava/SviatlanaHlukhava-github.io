var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import { CityWeatherTableComponent } from './../components/cityWeatherTable.component';
import { CityWeatherSectionComponent } from './../components/cityWeatherSection.component';
import { CityWeatherComponent } from './../components/cityWeather.component';
import { KelvinToCelsiusPipe } from './../pipes/kelvinToCelsius.pipe';
import { CityWeatherPipe } from './../pipes/cityWeather.pipe';
import { WeatherColorDirective } from './../directives/weatherColor.directive';
import { WindIconDirective } from './../directives/windIcon.directive';
import { WindSectionComponent } from './../components/windSection.component';
import { WeatherIconComponent } from './../components/weatherIcon.component';
import { WeatherDTOtoWeatherConverter } from './../services/WeatherDTOtoWeatherConverter';
import { WeatherApiService } from './../services/WeatherAPI';
export var WeatherModule = (function () {
    function WeatherModule() {
    }
    WeatherModule = __decorate([
        NgModule({
            imports: [FormsModule, SharedModule],
            declarations: [CityWeatherSectionComponent, CityWeatherTableComponent, CityWeatherComponent,
                KelvinToCelsiusPipe, CityWeatherPipe, WeatherColorDirective, WindIconDirective, WindSectionComponent, WeatherIconComponent],
            exports: [CityWeatherSectionComponent],
            providers: [WeatherDTOtoWeatherConverter, WeatherApiService]
        }), 
        __metadata('design:paramtypes', [])
    ], WeatherModule);
    return WeatherModule;
}());
