import { Observable } from 'rxjs';
export var PreloadSelectedModulesList = (function () {
    function PreloadSelectedModulesList() {
    }
    PreloadSelectedModulesList.prototype.preload = function (route, load) {
        return route.data && route.data['preload'] ? load() : Observable.of(null);
    };
    return PreloadSelectedModulesList;
}());
//# sourceMappingURL=preloadSelectedModulesList.js.map