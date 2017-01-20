import { Injectable } from '@angular/core';
export var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.errorLog = function (error) {
        console.error(error);
    };
    LoggerService.prototype.log = function (message) {
        console.log(message);
    };
    LoggerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = [];
    return LoggerService;
}());
//# sourceMappingURL=Logger.js.map