import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'loader',
                    templateUrl: './../../pages/templates/loader.tmpl.html',
                    styleUrls: ['./../../css/loader.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    LoaderComponent.ctorParameters = [];
    LoaderComponent.propDecorators = {
        'isLoading': [{ type: Input },],
    };
    return LoaderComponent;
}());
//# sourceMappingURL=loader.component.js.map