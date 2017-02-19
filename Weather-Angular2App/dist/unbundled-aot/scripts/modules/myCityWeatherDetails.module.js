import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { WeatherModule } from './weather.module';
import { MyCityWeatherDetailsComponent } from './../components/myCityWeatherDetails.component';
import { MyCityWeatherDetailsRouterComponent } from './../components/myCityWeatherDetailsRouter.component';
var myCityWeatherDetailsRoutes = [
    { path: 'myCityDetails', component: MyCityWeatherDetailsRouterComponent, outlet: 'myCityWeather' }
];
export var MyCityWeatherDetailsModule = (function () {
    function MyCityWeatherDetailsModule() {
    }
    MyCityWeatherDetailsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpModule, SharedModule, RouterModule.forChild(myCityWeatherDetailsRoutes), WeatherModule, WeatherModule.forRoot()],
                    declarations: [MyCityWeatherDetailsComponent, MyCityWeatherDetailsRouterComponent],
                    exports: [MyCityWeatherDetailsRouterComponent]
                },] },
    ];
    /** @nocollapse */
    MyCityWeatherDetailsModule.ctorParameters = [];
    return MyCityWeatherDetailsModule;
}());
//# sourceMappingURL=myCityWeatherDetails.module.js.map