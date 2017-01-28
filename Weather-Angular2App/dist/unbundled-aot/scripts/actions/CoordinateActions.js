import { Injectable } from '@angular/core';
export var CoordinateActions = (function () {
    function CoordinateActions() {
    }
    CoordinateActions.prototype.setCoordinate = function (coordinate) {
        return {
            type: CoordinateActions.SET_COORDINATE,
            payload: coordinate
        };
    };
    CoordinateActions.prototype.loadCoordinate = function () {
        return {
            type: CoordinateActions.LOAD_COORDINATE
        };
    };
    CoordinateActions.SET_COORDINATE = '[Coordinate] Set Coordinate';
    CoordinateActions.LOAD_COORDINATE = '[Coordinate] Load Coordinate';
    CoordinateActions.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CoordinateActions.ctorParameters = [];
    return CoordinateActions;
}());
//# sourceMappingURL=CoordinateActions.js.map