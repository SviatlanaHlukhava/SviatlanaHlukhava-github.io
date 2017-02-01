import { FormControl, Validator } from '@angular/forms';

export class PrecisionValidator {
    public static validate(c: FormControl) {
        let MIN_VALUE = 0, MAX_VALUE = 4;

        return (c.value === undefined || (c.value >= MIN_VALUE && c.value <= MAX_VALUE)) ? null : {
            validatePrecision: {
                valid: false
            }
        };
    }
}