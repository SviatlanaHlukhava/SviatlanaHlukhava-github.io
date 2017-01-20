var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, ElementRef } from '@angular/core';
export var WindIconDirective = (function () {
    function WindIconDirective(elementRef) {
        this.elementRef = elementRef;
    }
    WindIconDirective.prototype.ngOnChanges = function (changes) {
        if (this.degree) {
            this.elementRef.nativeElement.style.transform = 'rotate(' + this.degree + 'deg)';
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], WindIconDirective.prototype, "degree", void 0);
    WindIconDirective = __decorate([
        Directive({
            selector: '[wind-icon]'
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], WindIconDirective);
    return WindIconDirective;
}());
