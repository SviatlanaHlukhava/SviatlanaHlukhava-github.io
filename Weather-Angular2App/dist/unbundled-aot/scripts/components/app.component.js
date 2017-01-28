import { Component, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Profiler } from './../services/Profiler';
import { LocationService } from './../services/Location';
import { LoggerService } from './../services/Logger';
import { CoordinateActions } from './../actions/CoordinateActions';
import { LoadingActions } from './../actions/LoadingActions';
export var AppComponent = (function () {
    function AppComponent(zone, changeDetectorRef, profiler, store, coordinateActions, LoadingActions, locationService, loggerService) {
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.profiler = profiler;
        this.store = store;
        this.coordinateActions = coordinateActions;
        this.LoadingActions = LoadingActions;
        this.locationService = locationService;
        this.loggerService = loggerService;
        this.coordinate = this.store.select("coordinate");
        this.profiler.setZone(zone);
        this.profiler.profile();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isLoading = this.store.select("loading");
        this.store.dispatch(this.coordinateActions.loadCoordinate());
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app',
                    template: "<loader [isLoading]=\"isLoading | async\"></loader>\n    <header [coordinate]=\"coordinate | async\"></header>\n    <city-weather-section [coordinate]=\"coordinate | async\"></city-weather-section>\n    <map [coordinate]=\"coordinate | async\"></map>\n    <footer></footer>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: NgZone, },
        { type: ChangeDetectorRef, },
        { type: Profiler, },
        { type: Store, },
        { type: CoordinateActions, },
        { type: LoadingActions, },
        { type: LocationService, },
        { type: LoggerService, },
    ];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map