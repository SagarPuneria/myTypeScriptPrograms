class Point {
    x: number;
    y: number;

    // constructor(a: number, b: number) { // Compilation Error -> new Point(): Expected 2 arguments, but got 0.
    constructor(a?: number, b?: number) { // Optional paramater
        this.x = a;
        this.y = b;
    }
    draw() {
        console.log('X: ' + this.x + ', Y:' + this.y);
    }
}
let point = new Point();// No initial/optional parameters
point.draw();

let point1 = new Point(1, 2);
point1.draw();

/*
$ tsc main1.ts
$ node main1.js
X: undefined, Y:undefined
X: 1, Y:2
*/