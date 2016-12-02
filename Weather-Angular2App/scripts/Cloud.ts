export class Cloud {
    private all: number;

    constructor(all: number) {
        this.all = all;
    }
    getAll(): number {
        return this.all;
    }
    setAll(all: number): void {
        this.all = all;
    }
}