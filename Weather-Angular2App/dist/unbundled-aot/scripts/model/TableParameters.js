export var TableParameters = (function () {
    function TableParameters(selectedOptions, showCoordinate, precision) {
        this.selectedOptions = selectedOptions;
        this.showCoordinate = showCoordinate;
        this.precision = precision;
    }
    TableParameters.prototype.getSelectedOptions = function () {
        return this.selectedOptions;
    };
    TableParameters.prototype.setSelectedOptions = function (selectedOptions) {
        this.selectedOptions = selectedOptions;
    };
    TableParameters.prototype.getShowCoordinate = function () {
        return this.showCoordinate;
    };
    TableParameters.prototype.setShowCoordinate = function (showCoordinate) {
        this.showCoordinate = showCoordinate;
    };
    TableParameters.prototype.getPrecision = function () {
        return this.precision;
    };
    TableParameters.prototype.setPrecision = function (precision) {
        this.precision = precision;
    };
    return TableParameters;
}());
//# sourceMappingURL=TableParameters.js.map