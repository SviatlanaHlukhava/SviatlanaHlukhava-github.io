import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export var WindSectionComponent = (function () {
    function WindSectionComponent() {
    }
    WindSectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wind-section',
                    templateUrl: './../../pages/templates/windSection.tmpl.html',
                    styleUrls: ['./../../css/windSection.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    WindSectionComponent.ctorParameters = [];
    WindSectionComponent.propDecorators = {
        'wind': [{ type: Input },],
    };
    return WindSectionComponent;
}());
//# sourceMappingURL=windSection.component.js.map