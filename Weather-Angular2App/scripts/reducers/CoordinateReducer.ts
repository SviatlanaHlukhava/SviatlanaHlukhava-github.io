import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Coordinate } from './../model/Coordinate';
import { CoordinateActions } from './../actions/CoordinateActions';

const initialState: Coordinate = new Coordinate (0, 0);

export function CoordinateReducer(state = initialState, action: Action): Coordinate {
    switch (action.type) {
        case CoordinateActions.SET_COORDINATE: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}