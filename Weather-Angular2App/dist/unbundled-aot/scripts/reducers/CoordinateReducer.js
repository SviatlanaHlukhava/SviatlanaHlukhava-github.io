import { Coordinate } from './../model/Coordinate';
import { CoordinateActions } from './../actions/CoordinateActions';
var initialState = new Coordinate(0, 0);
export function CoordinateReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CoordinateActions.SET_COORDINATE: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=CoordinateReducer.js.map