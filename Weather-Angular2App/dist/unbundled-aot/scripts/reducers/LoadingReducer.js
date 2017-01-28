import { LoadingActions } from './../actions/LoadingActions';
var initialState = true;
export function LoadingReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case LoadingActions.SET_LOADING: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=LoadingReducer.js.map