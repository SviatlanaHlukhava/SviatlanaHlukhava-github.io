import { Injectable } from '@angular/core';
export var LoadingActions = (function () {
    function LoadingActions() {
    }
    LoadingActions.prototype.setLoading = function (loading) {
        return {
            type: LoadingActions.SET_LOADING,
            payload: loading
        };
    };
    LoadingActions.SET_LOADING = '[Boolean] Set Loading';
    LoadingActions.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoadingActions.ctorParameters = [];
    return LoadingActions;
}());
//# sourceMappingURL=LoadingActions.js.map