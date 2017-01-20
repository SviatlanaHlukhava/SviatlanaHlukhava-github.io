var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Weather } from './../model/Weather';
export var CityWeatherComponent = (function () {
    function CityWeatherComponent() {
        this.deleteNotify = new EventEmitter();
        this.selectNotify = new EventEmitter();
    }
    CityWeatherComponent.prototype.remove = function () {
        this.deleteNotify.emit(this.index);
    };
    CityWeatherComponent.prototype.select = function () {
        this.selectNotify.emit(this.index);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Weather)
    ], CityWeatherComponent.prototype, "weather", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], CityWeatherComponent.prototype, "index", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], CityWeatherComponent.prototype, "deleteNotify", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], CityWeatherComponent.prototype, "selectNotify", void 0);
    CityWeatherComponent = __decorate([
        Component({
            selector: '[city-weather]',
            templateUrl: './../../pages/templates/cityWeather.tmpl.html',
            styleUrls: ['./../../css/weatherTable.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], CityWeatherComponent);
    return CityWeatherComponent;
}());
