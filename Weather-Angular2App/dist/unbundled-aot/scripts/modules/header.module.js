import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../components/header.component';
export var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [SharedModule, RouterModule],
                    declarations: [HeaderComponent],
                    exports: [HeaderComponent]
                },] },
    ];
    /** @nocollapse */
    HeaderModule.ctorParameters = [];
    return HeaderModule;
}());
//# sourceMappingURL=header.module.js.map