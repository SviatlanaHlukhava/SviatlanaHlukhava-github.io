var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Wind } from './../model/Wind';
export var WindSectionComponent = (function () {
    function WindSectionComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Wind)
    ], WindSectionComponent.prototype, "wind", void 0);
    WindSectionComponent = __decorate([
        Component({
            selector: 'wind-section',
            templateUrl: './../../pages/templates/windSection.tmpl.html',
            styleUrls: ['./../../css/windSection.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], WindSectionComponent);
    return WindSectionComponent;
}());
