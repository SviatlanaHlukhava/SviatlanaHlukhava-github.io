import { NgModule }  from '@angular/core';
import { SharedModule } from './shared.module'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { WeatherModule }   from './weather.module';
import { MyCityWeatherDetailsComponent } from './../components/myCityWeatherDetails.component'
import { MyCityWeatherDetailsRouterComponent } from './../components/myCityWeatherDetailsRouter.component'

const myCityWeatherDetailsRoutes: Routes = [
  { path: 'myCityDetails', component: MyCityWeatherDetailsRouterComponent, outlet: 'myCityWeather' }
];

@NgModule({
    imports:      [HttpModule, SharedModule, RouterModule.forChild(myCityWeatherDetailsRoutes), WeatherModule, WeatherModule.forRoot()],
    declarations: [MyCityWeatherDetailsComponent, MyCityWeatherDetailsRouterComponent],
    exports: [MyCityWeatherDetailsRouterComponent]
})
export class MyCityWeatherDetailsModule {}