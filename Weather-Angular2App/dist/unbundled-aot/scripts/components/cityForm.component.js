import { Component, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
export var CityFormComponent = (function () {
    function CityFormComponent() {
        this.addNotify = new EventEmitter();
    }
    CityFormComponent.prototype.add = function () {
        this.addNotify.emit(this.city);
    };
    CityFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'city-form',
                    templateUrl: './../../pages/templates/cityForm.tmpl.html',
                    styleUrls: ['./../../css/weatherTable.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    CityFormComponent.ctorParameters = [];
    CityFormComponent.propDecorators = {
        'addNotify': [{ type: Output },],
    };
    return CityFormComponent;
}());
//# sourceMappingURL=cityForm.component.js.map