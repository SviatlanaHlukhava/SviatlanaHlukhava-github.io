export var MainWeather = (function () {
    function MainWeather(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
    }
    MainWeather.prototype.getTemperature = function () {
        return this.temperature;
    };
    MainWeather.prototype.setTemperature = function (temperature) {
        this.temperature = temperature;
    };
    MainWeather.prototype.getHumidity = function () {
        return this.humidity;
    };
    MainWeather.prototype.setHumidity = function (humidity) {
        this.humidity = humidity;
    };
    MainWeather.prototype.getPressure = function () {
        return this.pressure;
    };
    MainWeather.prototype.setPressure = function (pressure) {
        this.pressure = pressure;
    };
    return MainWeather;
}());
