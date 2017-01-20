export var Wind = (function () {
    function Wind(degree, speed) {
        this.degree = degree;
        this.speed = speed;
    }
    Wind.prototype.getDegree = function () {
        return this.degree;
    };
    Wind.prototype.setDegree = function (degree) {
        this.degree = degree;
    };
    Wind.prototype.getSpeed = function () {
        return this.speed;
    };
    Wind.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Wind;
}());
//# sourceMappingURL=Wind.js.map