export class TableParameters {
    private selectedOptions: string[];
    private showCoordinate: boolean;
    private precision: number

    constructor(selectedOptions: string[], showCoordinate: boolean, precision: number) {
        this.selectedOptions = selectedOptions;
        this.showCoordinate = showCoordinate;
        this.precision = precision
    }
    getSelectedOptions(): string[] {
        return this.selectedOptions;
    }
    setSelectedOptions(selectedOptions: string[]): void {
        this.selectedOptions = selectedOptions;
    }
    getShowCoordinate(): boolean {
        return this.showCoordinate;
    }
    setShowCoordinate(showCoordinate: boolean): void {
        this.showCoordinate = showCoordinate;
    }
    getPrecision(): number {
        return this.precision;
    }
    setPrecision(precision: number): void {
        this.precision = precision;
    }
}