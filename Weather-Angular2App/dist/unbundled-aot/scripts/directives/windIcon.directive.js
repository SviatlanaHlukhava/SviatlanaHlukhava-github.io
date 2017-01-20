import { Directive, Input, ElementRef } from '@angular/core';
export var WindIconDirective = (function () {
    function WindIconDirective(elementRef) {
        this.elementRef = elementRef;
    }
    WindIconDirective.prototype.ngOnChanges = function (changes) {
        if (this.degree) {
            this.elementRef.nativeElement.style.transform = 'rotate(' + this.degree + 'deg)';
        }
    };
    WindIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[wind-icon]'
                },] },
    ];
    /** @nocollapse */
    WindIconDirective.ctorParameters = [
        { type: ElementRef, },
    ];
    WindIconDirective.propDecorators = {
        'degree': [{ type: Input },],
    };
    return WindIconDirective;
}());
//# sourceMappingURL=windIcon.directive.js.map