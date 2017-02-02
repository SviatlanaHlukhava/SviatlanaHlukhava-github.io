import { Component, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var MultiselectControlComponent = (function () {
    function MultiselectControlComponent() {
        this.propagateChange = function () { };
        this.unselectedOptions = [];
        this.selectedOptions = [];
    }
    MultiselectControlComponent.prototype.writeValue = function (value) {
        if (value) {
            this.selectedOptions = value;
        }
    };
    MultiselectControlComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    MultiselectControlComponent.prototype.registerOnTouched = function () { };
    MultiselectControlComponent.prototype.moveToSelected = function () {
        var _this = this;
        this.checkedUnselected.forEach(function (option) {
            var index = _this.unselectedOptions.indexOf(option);
            if (index !== -1) {
                _this.unselectedOptions.splice(index, 1);
                _this.selectedOptions.push(option);
            }
        });
    };
    MultiselectControlComponent.prototype.moveToUnselected = function () {
        var _this = this;
        this.checkedSelected.forEach(function (option) {
            var index = _this.selectedOptions.indexOf(option);
            if (index !== -1) {
                _this.selectedOptions.splice(index, 1);
                _this.unselectedOptions.push(option);
            }
        });
    };
    MultiselectControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'multiselect',
                    templateUrl: './../../pages/templates/multiselect.tmpl.html',
                    styleUrls: ['./../../css/multiselect.css'],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            // tslint:disable no-forward-ref
                            useExisting: forwardRef(function () { return MultiselectControlComponent; }),
                            // tslint:enable no-forward-ref
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MultiselectControlComponent.ctorParameters = [];
    MultiselectControlComponent.propDecorators = {
        'selectedOptions': [{ type: Input },],
        'unselectedOptions': [{ type: Input },],
    };
    return MultiselectControlComponent;
}());
//# sourceMappingURL=multiselect.component.js.map