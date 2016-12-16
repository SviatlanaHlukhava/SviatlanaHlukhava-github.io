import { Coordinate }  from './Coordinate'
import { MainWeather } from './MainWeather'
import { Wind } from './Wind'
import { Cloud }  from './Cloud'
export class Weather {
    private city: string;
    private selected: boolean;
    private coordinate: Coordinate;
    private mainParams: MainWeather;
    private wind: Wind;
    private cloud: Cloud;

    constructor(city: string, coordinate: Coordinate, mainParams: MainWeather, wind: Wind, cloud: Cloud) {
        this.city = city;
        this.coordinate = coordinate;
        this.mainParams = mainParams;
        this.wind = wind;
        this.cloud = cloud;
        this.selected = false;
    }
    getCity(): string {
        return this.city;
    }
    setCity(city: string): void {
        this.city = city;
    }
    getSelected(): boolean {
        return this.selected;
    }
    setSelected(selected: boolean): void {
        this.selected = selected;
    }
    getCoordinate(): Coordinate {
        return this.coordinate;
    }
    setCoordinate(coordinate: Coordinate): void {
        this.coordinate = coordinate;
    }
    getMainParams(): MainWeather {
        return this.mainParams;
    }
    setMainParams(mainParams: MainWeather): void {
        this.mainParams = mainParams;
    }
    getWind(): Wind {
        return this.wind;
    }
    setWind(wind: Wind): void {
        this.wind = wind;
    }
    getCloud(): Cloud {
        return this.cloud;
    }
    setCloud(cloud: Cloud): void {
        this.cloud = cloud;
    }
}