import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CityWeatherSectionRouterComponent } from './../components/cityWeatherSectionRouter.component';
import { PageNotFoundComponent } from './../components/pageNotFound.component';
import { WeatherDetailsComponent } from './../components/weatherDetails.component';
import { WeatherDetailsResolver } from './../services/WeatherDetailsResolver';
import { PreloadSelectedModulesList } from './../services/preloadSelectedModulesList';
var appRoutes = [
    { path: 'weather-list', component: CityWeatherSectionRouterComponent },
    { path: 'myCityDetails', loadChildren: './myCityWeatherDetails.module#MyCityWeatherDetailsModule', data: {
            preload: true
        } },
    { path: 'weatherDetails', children: [
            {
                path: ':id',
                component: WeatherDetailsComponent,
                resolve: {
                    weather: WeatherDetailsResolver
                }
            }]
    },
    { path: 'map', loadChildren: './map.module#MapModule' },
    { path: '', redirectTo: '/weather-list', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
export var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadSelectedModulesList })],
                    declarations: [PageNotFoundComponent],
                    exports: [RouterModule],
                    providers: [PreloadSelectedModulesList]
                },] },
    ];
    /** @nocollapse */
    RoutingModule.ctorParameters = [];
    return RoutingModule;
}());
//# sourceMappingURL=routing.module.js.map