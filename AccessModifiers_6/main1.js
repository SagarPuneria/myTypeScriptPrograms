// Access modifiers: To control member of class from outside
// * Public
// * Private
// * Protected
// Note: By default all the member of class are  Public
var Point = /** @class */ (function () {
    // constructor(a?: number, b?: number, c?: number) {
    function Point(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.x = a;
        this.y = b;
        this.z = c;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y:' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2, 3);
point.z = 4;
point.draw();
