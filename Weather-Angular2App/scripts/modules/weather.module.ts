import { NgModule }  from '@angular/core';
import { SharedModule } from './shared.module'
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { CityWeatherTableComponent }   from './../components/cityWeatherTable.component';
import { CityWeatherSectionComponent }   from './../components/cityWeatherSection.component';
import { CityWeatherComponent }   from './../components/cityWeather.component';
import { KelvinToCelsiusPipe } from './../pipes/kelvinToCelsius.pipe'
import { CityWeatherPipe } from './../pipes/cityWeather.pipe'
import { WeatherColorDirective }   from './../directives/weatherColor.directive';
import { WindIconDirective } from './../directives/windIcon.directive'
import { WindSectionComponent }   from './../components/windSection.component';
import { WeatherIconComponent }   from './../components/weatherIcon.component';
import { CityFormComponent }   from './../components/cityForm.component';
import { WeatherDTOtoWeatherConverter } from './../services/WeatherDTOtoWeatherConverter'
import { WeatherApiService } from './../services/WeatherAPI'
import { WeatherActions } from './../actions/WeatherActions'
import { WeatherListReducer } from './../reducers/WeatherListReducer'

@NgModule({
    imports:      [FormsModule, SharedModule, StoreModule.provideStore({weatherList: WeatherListReducer})],
    declarations: [CityWeatherSectionComponent, CityWeatherTableComponent, CityWeatherComponent, CityFormComponent,
      KelvinToCelsiusPipe, CityWeatherPipe,  WeatherColorDirective, WindIconDirective, WindSectionComponent, WeatherIconComponent],
    exports: [CityWeatherSectionComponent],
    providers: [WeatherDTOtoWeatherConverter, WeatherApiService, WeatherActions]
})
export class WeatherModule {}