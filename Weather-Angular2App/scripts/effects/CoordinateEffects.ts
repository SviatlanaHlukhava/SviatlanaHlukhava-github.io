import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs'

import { AppState } from './../reducers/AppState';
import { CoordinateActions } from './../actions/CoordinateActions';
import { LoadingActions } from './../actions/LoadingActions';
import { LocationService } from './../services/Location';
import { LoggerService } from './../services/Logger';
import { Coordinate } from './../model/Coordinate';

@Injectable()
export class CoordinateEffects {
    constructor (
        private update$: Actions,
        private cooordinateActions: CoordinateActions,
        private loadingActions: LoadingActions,
        private locationService: LocationService,
        private loggerService: LoggerService
    ) {}

    @Effect() loadCoordinate$ = this.update$
        .ofType(CoordinateActions.LOAD_COORDINATE)
        .switchMap(() => this.locationService.getCurrentPosition())
        .map((pos: Position) =>  this.cooordinateActions.setCoordinate(new Coordinate (pos.coords.latitude, pos.coords.longitude)))
        .catch((error: PositionError) => {
            this.loggerService.errorLog(error.message);
            return Observable.of(this.loadingActions.setLoading(false))
        })
}
