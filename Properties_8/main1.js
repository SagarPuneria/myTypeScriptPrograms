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
        console.log('X:' + this.x + ', Y:' + this.y + ', Z:' + this.z);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');
        this.x = value;
    };
    return Point;
}());
var point = new Point(1, 2, 3);
point.draw();
var v = point.getX();
console.log('v:', v);
point.setX(10);
point.draw();
console.log('point.getX():', point.getX());
/*
$ tsc main1.ts
$ node main1.js
X:1, Y:2, Z:3
v: 1
X:10, Y:2, Z:3
point.getX(): 10
*/ 
