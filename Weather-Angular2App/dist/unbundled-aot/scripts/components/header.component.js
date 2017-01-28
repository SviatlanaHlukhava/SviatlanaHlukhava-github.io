import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export var HeaderComponent = (function () {
    function HeaderComponent() {
        this.currentDate = new Date();
    }
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header',
                    templateUrl: './../../pages/templates/header.tmpl.html',
                    styleUrls: ['./../../css/header.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [];
    HeaderComponent.propDecorators = {
        'coordinate': [{ type: Input },],
    };
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map