import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CityWeatherSectionRouterComponent } from './../components/cityWeatherSectionRouter.component';
import { PageNotFoundComponent } from './../components/pageNotFound.component';
var appRoutes = [
    { path: 'weather-list', component: CityWeatherSectionRouterComponent },
    { path: 'map', loadChildren: './map.module#MapModule' },
    { path: '', redirectTo: '/weather-list', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
export var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
                    declarations: [PageNotFoundComponent],
                    exports: [RouterModule]
                },] },
    ];
    /** @nocollapse */
    RoutingModule.ctorParameters = [];
    return RoutingModule;
}());
//# sourceMappingURL=routing.module.js.map