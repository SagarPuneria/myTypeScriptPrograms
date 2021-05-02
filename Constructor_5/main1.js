var Point = /** @class */ (function () {
    // constructor(a: number, b: number) { // Compilation Error -> new Point(): Expected 2 arguments, but got 0.
    function Point(a, b) {
        this.x = a;
        this.y = b;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y:' + this.y);
    };
    return Point;
}());
var point = new Point(); // No initial/optional parameters
point.draw();
var point1 = new Point(1, 2);
point1.draw();
/*
$ tsc main1.ts
$ node main1.js
X: undefined, Y:undefined
X: 1, Y:2
*/ 
