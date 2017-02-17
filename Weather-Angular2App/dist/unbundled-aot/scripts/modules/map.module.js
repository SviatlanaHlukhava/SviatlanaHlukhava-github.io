import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';
import { MapComponent } from './../components/map.component';
import { MapRouterComponent } from './../components/mapRouter.component';
var mapRoutes = [
    { path: 'map', component: MapRouterComponent }
];
export var MapModule = (function () {
    function MapModule() {
    }
    MapModule.decorators = [
        { type: NgModule, args: [{
                    imports: [SharedModule, RouterModule.forChild(mapRoutes)],
                    declarations: [MapComponent, MapRouterComponent],
                    exports: [MapRouterComponent]
                },] },
    ];
    /** @nocollapse */
    MapModule.ctorParameters = [];
    return MapModule;
}());
//# sourceMappingURL=map.module.js.map