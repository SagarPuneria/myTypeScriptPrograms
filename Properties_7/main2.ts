// get and set keyword
class Point {
    private x: number;
    private y: number;
    z: number;
    // constructor(a?: number, b?: number, c?: number) {
    constructor(private a?: number, private b?: number, public c?: number) {
        this.x = a;
        this.y = b;
        this.z = c;
    }
    draw() {
        console.log('X:' + this.x + ', Y:' + this.y + ', Z:' + this.z);
    }
    get X(): number {
        return this.x;
    }
    set X(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');
        this.x = value;
    }
}
let point = new Point(1, 2, 3);
point.draw();
let v = point.X; // Calls get X(){}
console.log('v:', v);
point.X = 10; // Calls set X(value){}
point.draw();
console.log('point.X:', point.X);
/*
$ tsc --target ES6 main2.ts
$ node main2.js
X:1, Y:2, Z:3
v: 1
X:10, Y:2, Z:3
point.X: 10
*/