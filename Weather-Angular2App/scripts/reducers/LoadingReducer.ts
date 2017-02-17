import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LoadingActions } from './../actions/LoadingActions';

const initialState: boolean = false;

export function LoadingReducer(state = initialState, action: Action): boolean {
    switch (action.type) {
        case LoadingActions.SET_LOADING: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}