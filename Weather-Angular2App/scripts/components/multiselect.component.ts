import { Component, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'multiselect',
  templateUrl: './../../pages/templates/multiselect.tmpl.html',
  styleUrls: ['./../../css/multiselect.css'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        // tslint:disable no-forward-ref
        useExisting: forwardRef(() => MultiselectControlComponent),
        // tslint:enable no-forward-ref
        multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MultiselectControlComponent implements ControlValueAccessor {

  propagateChange: Function = () => {};

  @Input() selectedOptions: string[];
  @Input() unselectedOptions: string[];
  checkedSelected: string[];
  checkedUnselected: string[];

  constructor() {
      this.unselectedOptions = [];
      this.selectedOptions = [];
  }

  writeValue(value: string[]) {
    if (value) {
      this.selectedOptions = value;
    }
  }

  registerOnChange(fn: Function) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  moveToSelected() {
      this.checkedUnselected.forEach((option: string) => {
          let index = this.unselectedOptions.indexOf(option);
          if (index !== -1) {
              this.unselectedOptions.splice(index, 1);
              this.selectedOptions.push(option);
          }
      });
  }

  moveToUnselected () {
      this.checkedSelected.forEach((option: string) => {
          let index = this.selectedOptions.indexOf(option);
          if (index !== -1) {
              this.selectedOptions.splice(index, 1);
              this.unselectedOptions.push(option);
          }
      });
  }
}