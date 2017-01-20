import { Component, ChangeDetectionStrategy } from '@angular/core';
export var FooterComponent = (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'footer',
                    template: '<div class="footer">Copyright &copy; {{year}}. All rights reserved</div>',
                    styleUrls: ['./../../css/footer.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    FooterComponent.ctorParameters = [];
    return FooterComponent;
}());
//# sourceMappingURL=footer.component.js.map