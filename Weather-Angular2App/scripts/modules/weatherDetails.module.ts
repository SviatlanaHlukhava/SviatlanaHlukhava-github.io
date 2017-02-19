import { NgModule }  from '@angular/core';
import { SharedModule } from './shared.module'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { WeatherModule }   from './weather.module';
import { WeatherDetailsComponent } from './../components/weatherDetails.component'
import { WeatherDetailsResolver } from './../services/WeatherDetailsResolver'

@NgModule({
    imports:      [HttpModule, SharedModule, RouterModule, WeatherModule, WeatherModule.forRoot()],
    declarations: [WeatherDetailsComponent],
    exports: [WeatherDetailsComponent],
    providers: [WeatherDetailsResolver]
})
export class WeatherDetailsModule {}