import { Component, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TableParameters } from './../model/TableParameters'
import { PrecisionValidator } from './../validators/PrecisionValidator'

@Component({
  selector: 'table-form',
  templateUrl: './../../pages/templates/tableForm.tmpl.html',
  styleUrls: ['./../../css/tableForm.css', './../../css/weatherTable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableFormComponent {
  form: FormGroup;
  options: string[];
  @Output() submitParametersNotify = new EventEmitter();

  constructor(fb: FormBuilder) {
      this.options = [
          "Overall conditions",
          "Temperature",
          "Humidity",
          "Pressure",
          "Wind",
          "Clouds"
      ];
      this.form = fb.group({
          "selectedOptions": [this.options],
          "showCoordinate": true,
          "precision": [3, [Validators.required, PrecisionValidator.validate]]
      });
  }
  onSubmit () {
      if (this.form.valid) {
        this.submitParametersNotify.emit(new TableParameters(this.form.value.selectedOptions, this.form.value.showCoordinate, this.form.value.precision));
      }
  }

}