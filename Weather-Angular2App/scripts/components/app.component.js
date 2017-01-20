var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { Coordinate } from './../model/Coordinate';
import { Profiler } from './../services/Profiler';
import { LocationService } from './../services/Location';
import { LoggerService } from './../services/Logger';
export var AppComponent = (function () {
    function AppComponent(zone, changeDetectorRef, profiler, locationService, loggerService) {
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.profiler = profiler;
        this.locationService = locationService;
        this.loggerService = loggerService;
        this.coordinate = new Coordinate(0, 0);
        this.profiler.setZone(zone);
        this.profiler.profile();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.isLoading = true;
        this.locationService.getCurrentPosition().subscribe(function (pos) {
            self.coordinate.setLatitude(pos.coords.latitude);
            self.coordinate.setLongitude(pos.coords.longitude);
            self.changeDetectorRef.markForCheck();
        }, function (posError) {
            _this.loggerService.errorLog(posError.message);
            self.isLoading = false;
        });
    };
    AppComponent.prototype.isLoadingChange = function ($event) {
        this.isLoading = $event;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            template: "<loader [isLoading]=\"isLoading\"></loader>\n    <header [latitude]=\"coordinate.getLatitude()\" [longitude]=\"coordinate.getLongitude()\"></header>\n    <city-weather-section [latitude]=\"coordinate.getLatitude()\" [longitude]=\"coordinate.getLongitude()\" (loadingNotify)=\"isLoadingChange($event)\"></city-weather-section>\n    <map [latitude]=\"coordinate.getLatitude()\" [longitude]=\"coordinate.getLongitude()\"></map>\n    <footer></footer>",
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [NgZone, ChangeDetectorRef, Profiler, LocationService, LoggerService])
    ], AppComponent);
    return AppComponent;
}());
