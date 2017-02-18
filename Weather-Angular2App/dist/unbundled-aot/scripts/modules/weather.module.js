import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CityWeatherTableComponent } from './../components/cityWeatherTable.component';
import { CityWeatherSectionComponent } from './../components/cityWeatherSection.component';
import { CityWeatherComponent } from './../components/cityWeather.component';
import { KelvinToCelsiusPipe } from './../pipes/kelvinToCelsius.pipe';
import { CityWeatherPipe } from './../pipes/cityWeather.pipe';
import { WeatherColorDirective } from './../directives/weatherColor.directive';
import { WindIconDirective } from './../directives/windIcon.directive';
import { WindSectionComponent } from './../components/windSection.component';
import { WeatherIconComponent } from './../components/weatherIcon.component';
import { CityFormComponent } from './../components/cityForm.component';
import { TableFormComponent } from './../components/tableForm.component';
import { ValidationErrorComponent } from './../components/validationError.component';
import { MultiselectControlComponent } from './../components/multiselect.component';
import { WeatherDTOtoWeatherConverter } from './../services/WeatherDTOtoWeatherConverter';
import { WeatherApiService } from './../services/WeatherAPI';
import { WeatherActions } from './../actions/WeatherActions';
import { CityWeatherSectionRouterComponent } from './../components/cityWeatherSectionRouter.component';
import { WeatherDetailsComponent } from './../components/weatherDetails.component';
import { WeatherDetailsResolver } from './../services/WeatherDetailsResolver';
export var WeatherModule = (function () {
    function WeatherModule() {
    }
    WeatherModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, HttpModule, ReactiveFormsModule, SharedModule, RouterModule],
                    declarations: [CityWeatherSectionComponent, CityWeatherTableComponent, CityWeatherComponent, CityFormComponent, TableFormComponent, ValidationErrorComponent,
                        CityWeatherSectionRouterComponent, WeatherDetailsComponent,
                        KelvinToCelsiusPipe, CityWeatherPipe, WeatherColorDirective, WindIconDirective, WindSectionComponent, WeatherIconComponent, MultiselectControlComponent],
                    exports: [CityWeatherSectionRouterComponent, WeatherDetailsComponent],
                    providers: [WeatherDTOtoWeatherConverter, WeatherApiService, WeatherActions, WeatherDetailsResolver]
                },] },
    ];
    /** @nocollapse */
    WeatherModule.ctorParameters = [];
    return WeatherModule;
}());
//# sourceMappingURL=weather.module.js.map