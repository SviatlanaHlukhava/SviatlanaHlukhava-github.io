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
export var HeaderComponent = (function () {
    function HeaderComponent() {
        this.currentDate = new Date();
    }
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], HeaderComponent.prototype, "latitude", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], HeaderComponent.prototype, "longitude", void 0);
    HeaderComponent = __decorate([
        Component({
            selector: 'header',
            templateUrl: './../../pages/templates/header.tmpl.html',
            styleUrls: ['./../../css/header.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
