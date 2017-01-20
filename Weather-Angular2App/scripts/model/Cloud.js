export var Cloud = (function () {
    function Cloud(all) {
        this.all = all;
    }
    Cloud.prototype.getAll = function () {
        return this.all;
    };
    Cloud.prototype.setAll = function (all) {
        this.all = all;
    };
    return Cloud;
}());
