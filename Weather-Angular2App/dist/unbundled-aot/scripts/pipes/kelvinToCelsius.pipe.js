import { Pipe } from '@angular/core';
export var KelvinToCelsiusPipe = (function () {
    function KelvinToCelsiusPipe() {
    }
    KelvinToCelsiusPipe.prototype.transform = function (value, digits) {
        if (digits === void 0) { digits = 0; }
        var celsiusNumber = (value - 273);
        var celsiusString = celsiusNumber.toFixed(digits);
        celsiusString = (celsiusNumber < 0) ? celsiusString : ('+' + celsiusString);
        return celsiusString;
    };
    KelvinToCelsiusPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'sgKelvinToCelsius'
                },] },
    ];
    /** @nocollapse */
    KelvinToCelsiusPipe.ctorParameters = [];
    return KelvinToCelsiusPipe;
}());
//# sourceMappingURL=kelvinToCelsius.pipe.js.map