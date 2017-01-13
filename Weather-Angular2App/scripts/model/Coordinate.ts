export class Coordinate {
    private latitude: number;
    private longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    getLatitude(): number {
        return this.latitude;
    }
    setLatitude(latitude: number): void {
        this.latitude = latitude;
    }
    getLongitude(): number {
        return this.longitude;
    }
    setLongitude(longitude: number): void {
        this.longitude = longitude;
    }
}