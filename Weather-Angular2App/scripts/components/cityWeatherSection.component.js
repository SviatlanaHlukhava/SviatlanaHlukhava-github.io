var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Weather } from './../model/Weather';
import { CityWeatherPipe } from './../pipes/cityWeather.pipe';
import { WeatherApiService } from './../services/WeatherAPI';
import { LoggerService } from './../services/Logger';
import { Observable } from 'rxjs';
export var CityWeatherSectionComponent = (function () {
    function CityWeatherSectionComponent(changeDetectorRef, weatherApiService, loggerService) {
        this.changeDetectorRef = changeDetectorRef;
        this.weatherApiService = weatherApiService;
        this.loggerService = loggerService;
        this.loadingNotify = new EventEmitter();
        this.cityWeatherPipe = new CityWeatherPipe(weatherApiService);
        this.$weatherObservableMap = new Map();
        this.weatherList = [];
    }
    CityWeatherSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeDetectorRef.detach();
        var $changesObserver = Observable.interval(5000);
        $changesObserver.subscribe(function () {
            _this.detectChanges();
        });
        var addButton = document.getElementsByClassName("add-button")[0];
        Observable.fromEvent(addButton, "click").subscribe(function () {
            _this.add();
        });
    };
    CityWeatherSectionComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.latitude !== undefined && this.longitude !== undefined &&
            (this.oldLatitude === undefined || this.oldLatitude !== this.latitude) ||
            (this.oldLongitude === undefined || this.oldLongitude !== this.longitude)) {
            var self_1 = this;
            this.weatherList.forEach(function (weather) {
                _this.$weatherObservableMap.get(weather.getCity()).unsubscribe();
            });
            this.weatherList = [];
            self_1.loadingNotify.emit(true);
            if (this.weatherListSubscription) {
                this.weatherListSubscription.unsubscribe();
            }
            this.weatherListSubscription = this.weatherApiService.getWeatherList(this.latitude, this.longitude).subscribe(function (result) {
                _this.addToWeatherList(result);
            }, function (error) {
                _this.loggerService.errorLog(error);
                self_1.loadingNotify.emit(false);
            }, function () {
                _this.detectChanges();
                self_1.loadingNotify.emit(false);
            });
            this.oldLatitude = this.latitude;
            this.oldLongitude - this.longitude;
        }
    };
    CityWeatherSectionComponent.prototype.add = function () {
        var _this = this;
        this.cityWeatherPipe.transform(this.city).subscribe(function (result) {
            _this.addToWeatherList(result);
            _this.detectChanges();
        });
    };
    CityWeatherSectionComponent.prototype.remove = function ($event) {
        var weatherList = this.weatherList;
        var city = weatherList[$event].getCity();
        weatherList.splice($event, 1);
        this.weatherList = weatherList.slice(0);
        this.detectChanges();
        this.weatherObservableUnsubscribe(city);
    };
    CityWeatherSectionComponent.prototype.select = function ($event) {
        var weatherList = this.weatherList;
        weatherList[$event].setSelected(!weatherList[$event].getSelected());
        if (weatherList[$event].getSelected()) {
            weatherList.forEach(function (value, i) {
                if (value.getSelected() && i !== $event) {
                    var weather = new Weather(value.getCity(), value.getDescription(), value.getCoordinate(), value.getMainParams(), value.getWind(), value.getCloud());
                    weather.setSelected(false);
                    weatherList.splice(i, 1, weather);
                }
            });
        }
        this.weatherList = weatherList.slice(0);
        this.detectChanges();
    };
    CityWeatherSectionComponent.prototype.detectChanges = function () {
        this.changeDetectorRef.reattach();
        this.changeDetectorRef.detectChanges();
        this.changeDetectorRef.detach();
    };
    CityWeatherSectionComponent.prototype.addToWeatherList = function (weather) {
        var weatherList = this.weatherList;
        weatherList.push(new Weather(weather.getCity(), weather.getDescription(), weather.getCoordinate(), weather.getMainParams(), weather.getWind(), weather.getCloud()));
        this.weatherList = weatherList.slice(0);
        this.weatherObservableSubscribe(weather.getCity());
    };
    CityWeatherSectionComponent.prototype.weatherObservableSubscribe = function (city) {
        var _this = this;
        var subscription = this.weatherApiService.pollWeatherCityInfo(city).subscribe(function (result) {
            var weatherList = _this.weatherList;
            var index = weatherList.findIndex(function (weather) { return weather.getCity() === result.getCity(); });
            if (index !== -1) {
                var newWeather = new Weather(result.getCity(), result.getDescription(), result.getCoordinate(), result.getMainParams(), result.getWind(), result.getCloud());
                newWeather.setSelected(weatherList[index].getSelected());
                weatherList.splice(index, 1, newWeather);
                _this.weatherList = weatherList.slice(0);
            }
        });
        this.$weatherObservableMap.set(city, subscription);
    };
    CityWeatherSectionComponent.prototype.weatherObservableUnsubscribe = function (city) {
        this.$weatherObservableMap.get(city).unsubscribe();
    };
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], CityWeatherSectionComponent.prototype, "latitude", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], CityWeatherSectionComponent.prototype, "longitude", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], CityWeatherSectionComponent.prototype, "loadingNotify", void 0);
    CityWeatherSectionComponent = __decorate([
        Component({
            selector: 'city-weather-section',
            templateUrl: './../../pages/templates/cityWeatherSection.tmpl.html',
            styleUrls: ['./../../css/weatherTable.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [ChangeDetectorRef, WeatherApiService, LoggerService])
    ], CityWeatherSectionComponent);
    return CityWeatherSectionComponent;
}());
