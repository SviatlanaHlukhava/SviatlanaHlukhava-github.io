import { KelvinToCelsiusPipe } from './../../scripts/pipes/kelvinToCelsius.pipe'

describe('KelvinToCelsiusPipe', () => {
    let pipe = new KelvinToCelsiusPipe();
    it('transforms transform temperature greater than 0', () => {
        expect(pipe.transform(280, 2)).toBe("+7.00");
    });
    it('transforms transform temperature less than 0', () => {
        expect(pipe.transform(260, 1)).toBe("-13.0");
    });
});