export var Weather = (function () {
    function Weather(id, city, description, coordinate, mainParams, wind, cloud) {
        this.id = id;
        this.city = city;
        this.description = description;
        this.coordinate = coordinate;
        this.mainParams = mainParams;
        this.wind = wind;
        this.cloud = cloud;
        this.selected = false;
    }
    Weather.prototype.getId = function () {
        return this.id;
    };
    Weather.prototype.setId = function (id) {
        this.id = id;
    };
    Weather.prototype.getCity = function () {
        return this.city;
    };
    Weather.prototype.setCity = function (city) {
        this.city = city;
    };
    Weather.prototype.getDescription = function () {
        return this.description;
    };
    Weather.prototype.setDescription = function (desc) {
        this.description = desc;
    };
    Weather.prototype.getSelected = function () {
        return this.selected;
    };
    Weather.prototype.setSelected = function (selected) {
        this.selected = selected;
    };
    Weather.prototype.getCoordinate = function () {
        return this.coordinate;
    };
    Weather.prototype.setCoordinate = function (coordinate) {
        this.coordinate = coordinate;
    };
    Weather.prototype.getMainParams = function () {
        return this.mainParams;
    };
    Weather.prototype.setMainParams = function (mainParams) {
        this.mainParams = mainParams;
    };
    Weather.prototype.getWind = function () {
        return this.wind;
    };
    Weather.prototype.setWind = function (wind) {
        this.wind = wind;
    };
    Weather.prototype.getCloud = function () {
        return this.cloud;
    };
    Weather.prototype.setCloud = function (cloud) {
        this.cloud = cloud;
    };
    return Weather;
}());
//# sourceMappingURL=Weather.js.map