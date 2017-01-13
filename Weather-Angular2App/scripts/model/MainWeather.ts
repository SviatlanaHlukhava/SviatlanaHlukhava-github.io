export class MainWeather {
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
    }
    getTemperature(): number {
        return this.temperature;
    }
    setTemperature(temperature: number): void {
        this.temperature = temperature;
    }
    getHumidity(): number {
        return this.humidity;
    }
    setHumidity(humidity: number): void {
        this.humidity = humidity;
    }
    getPressure(): number {
        return this.pressure;
    }
    setPressure(pressure: number): void {
        this.pressure = pressure;
    }
}