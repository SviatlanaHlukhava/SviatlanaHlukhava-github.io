import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './../components/app.component';
import { MapModule } from './map.module';
import { WeatherModule } from './weather.module';
import { FooterModule } from './footer.module';
import { HeaderModule } from './header.module';
import { LoaderModule } from './loader.module';
import { RoutingModule } from './routing.module';
import { Profiler } from './../services/Profiler';
import { LocationService } from './../services/Location';
import { LoggerService } from './../services/Logger';
import { CoordinateActions } from './../actions/CoordinateActions';
import { LoadingActions } from './../actions/LoadingActions';
import { CoordinateEffects } from './../effects/CoordinateEffects';
import * as WeatherReducer from './../reducers/WeatherListReducer';
import { CoordinateReducer } from './../reducers/CoordinateReducer';
import { LoadingReducer } from './../reducers/LoadingReducer';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserModule, FormsModule, ReactiveFormsModule, FooterModule, HeaderModule, LoaderModule, MapModule, WeatherModule, RoutingModule,
                        StoreModule.provideStore({
                            coordinate: CoordinateReducer,
                            loading: LoadingReducer,
                            weatherList: WeatherReducer.WeatherListReducer
                        }), EffectsModule.run(CoordinateEffects)],
                    bootstrap: [AppComponent],
                    declarations: [AppComponent],
                    providers: [Profiler, LocationService, LoggerService, CoordinateActions, LoadingActions]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map