export var PrecisionValidator = (function () {
    function PrecisionValidator() {
    }
    PrecisionValidator.validate = function (c) {
        var MIN_VALUE = 0, MAX_VALUE = 4;
        return (c.value === undefined || (c.value >= MIN_VALUE && c.value <= MAX_VALUE && Math.round(c.value) === c.value)) ? null : {
            validatePrecision: {
                valid: false
            }
        };
    };
    return PrecisionValidator;
}());
//# sourceMappingURL=PrecisionValidator.js.map