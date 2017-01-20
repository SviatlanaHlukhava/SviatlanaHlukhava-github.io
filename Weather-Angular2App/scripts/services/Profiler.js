var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { LoggerService } from './../services/Logger';
export var Profiler = (function () {
    function Profiler(loggerService) {
        this.loggerService = loggerService;
    }
    Profiler.prototype.setZone = function (zone) {
        this.zone = zone;
    };
    Profiler.prototype.profile = function () {
        var _this = this;
        this.zone.onUnstable.subscribe(function () {
            _this.loggerService.log("become unstable");
            _this.time = new Date();
        });
        this.zone.onStable.subscribe(function () {
            if (_this.time) {
                var time = new Date();
                var diff = time.getTime() - _this.time.getTime();
                _this.loggerService.log("become stable, " + Math.floor(diff * 100) / 100 + ' ms');
            }
        });
    };
    Profiler = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [LoggerService])
    ], Profiler);
    return Profiler;
}());
