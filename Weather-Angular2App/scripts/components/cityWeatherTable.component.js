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
export var CityWeatherTableComponent = (function () {
    function CityWeatherTableComponent() {
        this.deleteNotify = new EventEmitter();
        this.selectNotify = new EventEmitter();
    }
    CityWeatherTableComponent.prototype.remove = function ($event) {
        this.deleteNotify.emit($event);
    };
    CityWeatherTableComponent.prototype.select = function ($event) {
        this.selectNotify.emit($event);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], CityWeatherTableComponent.prototype, "weatherList", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], CityWeatherTableComponent.prototype, "deleteNotify", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], CityWeatherTableComponent.prototype, "selectNotify", void 0);
    CityWeatherTableComponent = __decorate([
        Component({
            selector: 'city-weather-table',
            templateUrl: './../../pages/templates/cityWeatherTable.tmpl.html',
            styleUrls: ['./../../css/weatherTable.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], CityWeatherTableComponent);
    return CityWeatherTableComponent;
}());
