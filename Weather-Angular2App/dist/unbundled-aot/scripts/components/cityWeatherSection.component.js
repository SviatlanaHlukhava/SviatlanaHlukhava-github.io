import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityWeatherPipe } from './../pipes/cityWeather.pipe';
import { WeatherApiService } from './../services/WeatherAPI';
import { LoggerService } from './../services/Logger';
import { Observable } from 'rxjs';
import { WeatherActions } from './../actions/WeatherActions';
export var CityWeatherSectionComponent = (function () {
    function CityWeatherSectionComponent(changeDetectorRef, store, weatherActions, weatherApiService, loggerService) {
        this.changeDetectorRef = changeDetectorRef;
        this.store = store;
        this.weatherActions = weatherActions;
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
        this.weatherListObservable = this.store.select("weatherList");
        this.weatherListObservable.subscribe(function (weatherList) {
            _this.weatherList = weatherList;
        });
    };
    CityWeatherSectionComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.latitude !== undefined && this.longitude !== undefined &&
            (this.oldLatitude === undefined || this.oldLatitude !== this.latitude) ||
            (this.oldLongitude === undefined || this.oldLongitude !== this.longitude)) {
            this.weatherList.forEach(function (weather) {
                _this.$weatherObservableMap.get(weather.getCity()).unsubscribe();
            });
            this.store.dispatch(this.weatherActions.clearWeatherList());
            this.loadingNotify.emit(true);
            if (this.weatherListSubscription) {
                this.weatherListSubscription.unsubscribe();
            }
            this.weatherListSubscription = this.weatherApiService.getWeatherList(this.latitude, this.longitude).subscribe(function (result) {
                _this.addToWeatherList(result);
            }, function (error) {
                _this.loggerService.errorLog(error);
                _this.loadingNotify.emit(false);
            }, function () {
                _this.detectChanges();
                _this.loadingNotify.emit(false);
            });
            this.oldLatitude = this.latitude;
            this.oldLongitude - this.longitude;
        }
    };
    CityWeatherSectionComponent.prototype.add = function ($event) {
        var _this = this;
        this.cityWeatherPipe.transform($event).subscribe(function (result) {
            _this.addToWeatherList(result);
            _this.detectChanges();
        });
    };
    CityWeatherSectionComponent.prototype.remove = function ($event) {
        var city = this.weatherList[$event].getCity();
        this.store.dispatch(this.weatherActions.removeWeather($event));
        this.detectChanges();
        this.weatherObservableUnsubscribe(city);
    };
    CityWeatherSectionComponent.prototype.select = function ($event) {
        this.store.dispatch(this.weatherActions.selectWeather($event));
        this.detectChanges();
    };
    CityWeatherSectionComponent.prototype.detectChanges = function () {
        this.changeDetectorRef.reattach();
        this.changeDetectorRef.detectChanges();
        this.changeDetectorRef.detach();
    };
    CityWeatherSectionComponent.prototype.addToWeatherList = function (weather) {
        this.store.dispatch(this.weatherActions.addWeather(weather));
        this.weatherObservableSubscribe(weather.getCity());
    };
    CityWeatherSectionComponent.prototype.weatherObservableSubscribe = function (city) {
        var _this = this;
        var subscription = this.weatherApiService.pollWeatherCityInfo(city).subscribe(function (result) {
            _this.store.dispatch(_this.weatherActions.updateWeatherSuccess(result));
        });
        this.$weatherObservableMap.set(city, subscription);
    };
    CityWeatherSectionComponent.prototype.weatherObservableUnsubscribe = function (city) {
        this.$weatherObservableMap.get(city).unsubscribe();
    };
    CityWeatherSectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'city-weather-section',
                    templateUrl: './../../pages/templates/cityWeatherSection.tmpl.html',
                    styleUrls: ['./../../css/weatherTable.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    CityWeatherSectionComponent.ctorParameters = [
        { type: ChangeDetectorRef, },
        { type: Store, },
        { type: WeatherActions, },
        { type: WeatherApiService, },
        { type: LoggerService, },
    ];
    CityWeatherSectionComponent.propDecorators = {
        'latitude': [{ type: Input },],
        'longitude': [{ type: Input },],
        'loadingNotify': [{ type: Output },],
    };
    return CityWeatherSectionComponent;
}());
//# sourceMappingURL=cityWeatherSection.component.js.map