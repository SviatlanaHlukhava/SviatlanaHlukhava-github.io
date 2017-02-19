import { NgModule }  from '@angular/core';
import { SharedModule } from './shared.module'
import { KelvinToCelsiusPipe } from './../pipes/kelvinToCelsius.pipe'
import { WindIconDirective } from './../directives/windIcon.directive'
import { WeatherIconComponent }   from './../components/weatherIcon.component';
import { WindSectionComponent }   from './../components/windSection.component';
import { WeatherDTOtoWeatherConverter } from './../services/WeatherDTOtoWeatherConverter'
import { WeatherApiService } from './../services/WeatherAPI'

@NgModule({
    imports: [SharedModule],
    declarations: [KelvinToCelsiusPipe, WindIconDirective, WeatherIconComponent, WindSectionComponent],
    exports: [KelvinToCelsiusPipe, WindIconDirective, WeatherIconComponent, WindSectionComponent]
})
export class WeatherModule {
  static forRoot() {
    return {
      ngModule: WeatherModule,
      providers: [ WeatherDTOtoWeatherConverter, WeatherApiService ]
    }
  }
}