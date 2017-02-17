import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherSectionRouterComponent }   from './../components/cityWeatherSectionRouter.component';
import { PageNotFoundComponent } from './../components/pageNotFound.component';

const appRoutes: Routes = [
  { path: 'weather-list', component: CityWeatherSectionRouterComponent },
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