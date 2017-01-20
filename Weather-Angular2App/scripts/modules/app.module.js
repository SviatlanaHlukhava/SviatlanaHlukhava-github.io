var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './../components/app.component';
import { MapModule } from './map.module';
import { WeatherModule } from './weather.module';
import { FooterModule } from './footer.module';
import { HeaderModule } from './header.module';
import { LoaderModule } from './loader.module';
import { Profiler } from './../services/Profiler';
import { LocationService } from './../services/Location';
import { LoggerService } from './../services/Logger';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, FooterModule, HeaderModule, LoaderModule, MapModule, WeatherModule],
            bootstrap: [AppComponent],
            declarations: [AppComponent],
            providers: [Profiler, LocationService, LoggerService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
