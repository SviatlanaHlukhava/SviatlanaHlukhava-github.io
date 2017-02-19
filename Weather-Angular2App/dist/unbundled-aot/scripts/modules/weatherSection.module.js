import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { WeatherModule } from './weather.module';
import { CityWeatherTableComponent } from './../components/cityWeatherTable.component';
import { CityWeatherSectionComponent } from './../components/cityWeatherSection.component';
import { CityWeatherComponent } from './../components/cityWeather.component';
import { CityWeatherPipe } from './../pipes/cityWeather.pipe';
import { WeatherColorDirective } from './../directives/weatherColor.directive';
import { CityFormComponent } from './../components/cityForm.component';
import { TableFormComponent } from './../components/tableForm.component';
import { ValidationErrorComponent } from './../components/validationError.component';
import { MultiselectControlComponent } from './../components/multiselect.component';
import { WeatherActions } from './../actions/WeatherActions';
import { CityWeatherSectionRouterComponent } from './../components/cityWeatherSectionRouter.component';
export var WeatherSectionModule = (function () {
    function WeatherSectionModule() {
    }
    WeatherSectionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, HttpModule, ReactiveFormsModule, SharedModule, RouterModule, WeatherModule, WeatherModule.forRoot()],
                    declarations: [CityWeatherSectionComponent, CityWeatherTableComponent, CityWeatherComponent, CityFormComponent, TableFormComponent, ValidationErrorComponent,
                        CityWeatherSectionRouterComponent, CityWeatherPipe, WeatherColorDirective, MultiselectControlComponent],
                    exports: [CityWeatherSectionRouterComponent],
                    providers: [WeatherActions]
                },] },
    ];
    /** @nocollapse */
    WeatherSectionModule.ctorParameters = [];
    return WeatherSectionModule;
}());
//# sourceMappingURL=weatherSection.module.js.map