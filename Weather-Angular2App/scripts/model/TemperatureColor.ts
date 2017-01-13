export class TemperatureColor {
    private color: string;
    private min: number;
    private max: number;

    constructor(color: string, min: number, max: number) {
        this.color = color;
        this.min = min;
        this.max = max;
    }
    getColor(): string {
        return this.color;
    }
    setColor(color: string): void {
        this.color = color;
    }
    getMin(): number {
        return this.min;
    }
    setMin(min: number): void {
        this.min = min;
    }
    getMax(): number {
        return this.max;
    }
    setMax(max: number): void {
        this.max = max;
    }
}