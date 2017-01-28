import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class LoadingActions {
    static SET_LOADING = '[Boolean] Set Loading';
    setLoading(loading: boolean): Action {
        return {
            type: LoadingActions.SET_LOADING,
            payload: loading
        };
    }
}