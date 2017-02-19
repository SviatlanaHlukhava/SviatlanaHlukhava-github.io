import { NgModule }       from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { CityWeatherSectionRouterComponent }   from './../components/cityWeatherSectionRouter.component';
import { PageNotFoundComponent } from './../components/pageNotFound.component';
import { WeatherDetailsComponent } from './../components/weatherDetails.component'
import { WeatherDetailsResolver } from './../services/WeatherDetailsResolver'
import { MyCityWeatherDetailsRouterComponent } from './../components/myCityWeatherDetailsRouter.component'
import { PreloadSelectedModulesList } from './../services/preloadSelectedModulesList'

const appRoutes: Routes = [
  { path: 'weather-list', component: CityWeatherSectionRouterComponent },
  { path: 'myCityDetails', loadChildren: './myCityWeatherDetails.module#MyCityWeatherDetailsModule', data: {
    preload: true
  }},
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
    imports: [RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadSelectedModulesList} )],
    declarations: [PageNotFoundComponent],
    exports: [RouterModule],
    providers: [PreloadSelectedModulesList]
})
export class RoutingModule {}