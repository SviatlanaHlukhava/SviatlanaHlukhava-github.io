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
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app',
                    template: "<loader [isLoading]=\"isLoading\"></loader>\n    <header [latitude]=\"coordinate.getLatitude()\" [longitude]=\"coordinate.getLongitude()\"></header>\n    <city-weather-section [latitude]=\"coordinate.getLatitude()\" [longitude]=\"coordinate.getLongitude()\" (loadingNotify)=\"isLoadingChange($event)\"></city-weather-section>\n    <map [latitude]=\"coordinate.getLatitude()\" [longitude]=\"coordinate.getLongitude()\"></map>\n    <footer></footer>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: NgZone, },
        { type: ChangeDetectorRef, },
        { type: Profiler, },
        { type: LocationService, },
        { type: LoggerService, },
    ];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map