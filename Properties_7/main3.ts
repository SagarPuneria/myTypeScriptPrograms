// get and set keyword
class Point {
    private _x: number;
    private y: number;
    z: number;
    // constructor(a?: number, b?: number, c?: number) {
    constructor(private a?: number, private b?: number, public c?: number) {
        this._x = a;
        this.y = b;
        this.z = c;
    }
    draw() {
        console.log('X:' + this._x + ', Y:' + this.y + ', Z:' + this.z);
    }
    get x(): number {
        return this._x;
    }
    set x(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');
        this._x = value;
    }
}
let point = new Point(1, 2, 3);
point.draw();
let v = point.x; // Calls get x(){}
console.log('v:', v);
point.x = 10; // Calls set x(value){}
point.z = 30;
point.draw();
console.log('point.X:', point.x);
/*
$ tsc --target ES6 main3.ts
$ node main3.js
X:1, Y:2, Z:3
v: 1
X:10, Y:2, Z:30
point.X: 10
*/