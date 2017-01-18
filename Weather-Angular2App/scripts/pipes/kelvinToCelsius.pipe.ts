import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sgKelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {
  transform (value: number, digits: number = 0): string {
      let celsiusNumber = (value - 273);
      let celsiusString = celsiusNumber.toFixed(digits);
      celsiusString = (celsiusNumber < 0) ? celsiusString : ('+' + celsiusString);
      return celsiusString;
  }
}