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
    Profiler.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Profiler.ctorParameters = [
        { type: LoggerService, },
    ];
    return Profiler;
}());
//# sourceMappingURL=Profiler.js.map