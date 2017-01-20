var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
export var KelvinToCelsiusPipe = (function () {
    function KelvinToCelsiusPipe() {
    }
    KelvinToCelsiusPipe.prototype.transform = function (value, digits) {
        if (digits === void 0) { digits = 0; }
        var celsiusNumber = (value - 273);
        var celsiusString = celsiusNumber.toFixed(digits);
        celsiusString = (celsiusNumber < 0) ? celsiusString : ('+' + celsiusString);
        return celsiusString;
    };
    KelvinToCelsiusPipe = __decorate([
        Pipe({
            name: 'sgKelvinToCelsius'
        }), 
        __metadata('design:paramtypes', [])
    ], KelvinToCelsiusPipe);
    return KelvinToCelsiusPipe;
}());
