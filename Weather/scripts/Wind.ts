export class Wind {
    private degree: number;
    private speed: number;
    constructor(degree: number, speed: number) {
        this.degree = degree;
        this.speed = speed;
    }
    getDegree(): number {
        return this.degree;
    }
    setDegree(degree: number): void {
        this.degree = degree;
    }
    getSpeed(): number {
        return this.speed;
    }
    setSpeed(speed: number): void {
        this.speed = speed;
    }
}