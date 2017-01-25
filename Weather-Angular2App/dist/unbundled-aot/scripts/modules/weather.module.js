import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
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
import { WeatherDTOtoWeatherConverter } from './../services/WeatherDTOtoWeatherConverter';
import { WeatherApiService } from './../services/WeatherAPI';
export var WeatherModule = (function () {
    function WeatherModule() {
    }
    WeatherModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, SharedModule],
                    declarations: [CityWeatherSectionComponent, CityWeatherTableComponent, CityWeatherComponent, CityFormComponent,
                        KelvinToCelsiusPipe, CityWeatherPipe, WeatherColorDirective, WindIconDirective, WindSectionComponent, WeatherIconComponent],
                    exports: [CityWeatherSectionComponent],
                    providers: [WeatherDTOtoWeatherConverter, WeatherApiService]
                },] },
    ];
    /** @nocollapse */
    WeatherModule.ctorParameters = [];
    return WeatherModule;
}());
//# sourceMappingURL=weather.module.js.map