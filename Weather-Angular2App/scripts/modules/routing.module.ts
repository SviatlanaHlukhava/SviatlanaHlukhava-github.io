import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherSectionRouterComponent }   from './../components/cityWeatherSectionRouter.component';
import { PageNotFoundComponent } from './../components/pageNotFound.component';
import { WeatherDetailsComponent } from './../components/weatherDetails.component'
import { WeatherDetailsResolver } from './../services/WeatherDetailsResolver'
import { MyCityWeatherDetailsRouterComponent } from './../components/myCityWeatherDetailsRouter.component'

const appRoutes: Routes = [
  { path: 'weather-list', component: CityWeatherSectionRouterComponent },
  { path: 'myCityDetails', component: MyCityWeatherDetailsRouterComponent, outlet: 'myCityWeather' },
  { path: 'weatherDetails', children: [
    {
       path: ':id',
       component: WeatherDetailsComponent,
       resolve: {
         weather: WeatherDetailsResolver
       }
    }]
  },
  { path: 'map',  loadChildren: './map.module#MapModule' },
  { path: '', redirectTo: '/weather-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [PageNotFoundComponent],
    exports: [RouterModule]
})
export class RoutingModule {}