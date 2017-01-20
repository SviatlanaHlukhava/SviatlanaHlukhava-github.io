export var TemperatureColor = (function () {
    function TemperatureColor(color, min, max) {
        this.color = color;
        this.min = min;
        this.max = max;
    }
    TemperatureColor.prototype.getColor = function () {
        return this.color;
    };
    TemperatureColor.prototype.setColor = function (color) {
        this.color = color;
    };
    TemperatureColor.prototype.getMin = function () {
        return this.min;
    };
    TemperatureColor.prototype.setMin = function (min) {
        this.min = min;
    };
    TemperatureColor.prototype.getMax = function () {
        return this.max;
    };
    TemperatureColor.prototype.setMax = function (max) {
        this.max = max;
    };
    return TemperatureColor;
}());
