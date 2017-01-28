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
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CoordinateActions } from './../actions/CoordinateActions';
import { LoadingActions } from './../actions/LoadingActions';
import { LocationService } from './../services/Location';
import { LoggerService } from './../services/Logger';
import { Coordinate } from './../model/Coordinate';
export var CoordinateEffects = (function () {
    function CoordinateEffects(update$, cooordinateActions, loadingActions, locationService, loggerService) {
        var _this = this;
        this.update$ = update$;
        this.cooordinateActions = cooordinateActions;
        this.loadingActions = loadingActions;
        this.locationService = locationService;
        this.loggerService = loggerService;
        this.loadCoordinate$ = this.update$
            .ofType(CoordinateActions.LOAD_COORDINATE)
            .switchMap(function () { return _this.locationService.getCurrentPosition(); })
            .map(function (pos) { return _this.cooordinateActions.setCoordinate(new Coordinate(pos.coords.latitude, pos.coords.longitude)); })
            .catch(function (error) {
            _this.loggerService.errorLog(error.message);
            return Observable.of(_this.loadingActions.setLoading(false));
        });
    }
    CoordinateEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CoordinateEffects.ctorParameters = [
        { type: Actions, },
        { type: CoordinateActions, },
        { type: LoadingActions, },
        { type: LocationService, },
        { type: LoggerService, },
    ];
    __decorate([
        Effect(), 
        __metadata('design:type', Object)
    ], CoordinateEffects.prototype, "loadCoordinate$", void 0);
    return CoordinateEffects;
}());
//# sourceMappingURL=CoordinateEffects.js.map