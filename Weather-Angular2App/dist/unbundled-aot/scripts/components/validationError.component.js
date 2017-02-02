import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export var ValidationErrorComponent = (function () {
    function ValidationErrorComponent() {
    }
    ValidationErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'validation-error',
                    template: '<span class="error-message">{{message}}</span>',
                    styles: ['.error-message {color: red; font-style: italic }'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    ValidationErrorComponent.ctorParameters = [];
    ValidationErrorComponent.propDecorators = {
        'message': [{ type: Input },],
    };
    return ValidationErrorComponent;
}());
//# sourceMappingURL=validationError.component.js.map