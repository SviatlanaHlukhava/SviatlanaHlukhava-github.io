import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { LoaderComponent } from './../components/loader.component';
export var LoaderModule = (function () {
    function LoaderModule() {
    }
    LoaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [SharedModule],
                    declarations: [LoaderComponent],
                    exports: [LoaderComponent]
                },] },
    ];
    /** @nocollapse */
    LoaderModule.ctorParameters = [];
    return LoaderModule;
}());
//# sourceMappingURL=loader.module.js.map