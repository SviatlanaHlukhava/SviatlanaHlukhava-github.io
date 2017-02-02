import { Component, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TableParameters } from './../model/TableParameters';
import { PrecisionValidator } from './../validators/PrecisionValidator';
export var TableFormComponent = (function () {
    function TableFormComponent(fb) {
        this.submitParametersNotify = new EventEmitter();
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
        this.form.controls['selectedOptions'].setValue(this.options);
    }
    TableFormComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.submitParametersNotify.emit(new TableParameters(this.form.value.selectedOptions, this.form.value.showCoordinate, this.form.value.precision));
        }
    };
    TableFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'table-form',
                    templateUrl: './../../pages/templates/tableForm.tmpl.html',
                    styleUrls: ['./../../css/tableForm.css', './../../css/weatherTable.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    TableFormComponent.ctorParameters = [
        { type: FormBuilder, },
    ];
    TableFormComponent.propDecorators = {
        'submitParametersNotify': [{ type: Output },],
    };
    return TableFormComponent;
}());
//# sourceMappingURL=tableForm.component.js.map