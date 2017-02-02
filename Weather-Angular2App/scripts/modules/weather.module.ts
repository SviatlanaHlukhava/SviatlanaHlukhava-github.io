import { NgModule }  from '@angular/core';
import { SharedModule } from './shared.module'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
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
import { TableFormComponent } from './../components/tableForm.component'
import { ValidationErrorComponent } from './../components/validationError.component'
import { MultiselectControlComponent } from './../components/multiselect.component'
import { WeatherDTOtoWeatherConverter } from './../services/WeatherDTOtoWeatherConverter'
import { WeatherApiService } from './../services/WeatherAPI'
import { WeatherActions } from './../actions/WeatherActions'

@NgModule({
    imports:      [FormsModule, ReactiveFormsModule, SharedModule],
    declarations: [CityWeatherSectionComponent, CityWeatherTableComponent, CityWeatherComponent, CityFormComponent, TableFormComponent, ValidationErrorComponent,
      KelvinToCelsiusPipe, CityWeatherPipe,  WeatherColorDirective, WindIconDirective, WindSectionComponent, WeatherIconComponent, MultiselectControlComponent],
    exports: [CityWeatherSectionComponent],
    providers: [WeatherDTOtoWeatherConverter, WeatherApiService, WeatherActions]
})
export class WeatherModule {}