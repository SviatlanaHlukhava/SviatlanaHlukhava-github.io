import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export var LocationService = (function () {
    function LocationService() {
    }
    LocationService.prototype.getCurrentPosition = function () {
        return Observable.create(function (observer) {
            navigator.geolocation.getCurrentPosition(function (position) {
                observer.next(position);
                observer.complete();
            }, function (error) {
                observer.error(error);
            });
        });
    };
    LocationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LocationService.ctorParameters = [];
    return LocationService;
}());
//# sourceMappingURL=Location.js.map