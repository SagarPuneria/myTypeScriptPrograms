"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.x = a;
        this.y = b;
        this.z = c;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ', Y:' + this.y + ', Z:' + this.z);
    };
    return Point;
}());
exports.Point = Point;
