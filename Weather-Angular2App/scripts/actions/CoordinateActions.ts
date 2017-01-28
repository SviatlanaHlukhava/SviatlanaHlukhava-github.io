import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Coordinate }  from './../model/Coordinate'

@Injectable()
export class CoordinateActions {
    static SET_COORDINATE = '[Coordinate] Set Coordinate';
    setCoordinate(coordinate: Coordinate): Action {
        return {
            type: CoordinateActions.SET_COORDINATE,
            payload: coordinate
        };
    }
    static LOAD_COORDINATE = '[Coordinate] Load Coordinate';
    loadCoordinate(): Action {
        return {
            type: CoordinateActions.LOAD_COORDINATE
        };
    }
}