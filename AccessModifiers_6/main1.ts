// Access modifiers: To control member of class from outside
// * Public
// * Private
// * Protected
// Note: By default all the member of class are  Public
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
        console.log('X: ' + this.x + ', Y:' + this.y);
    }
}
let point = new Point(1, 2, 3);
point.z = 4;
point.draw();
/*
$ tsc main1.ts
$ node main1.js
X: 1, Y:2
*/