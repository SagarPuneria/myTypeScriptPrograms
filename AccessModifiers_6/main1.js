// Access modifiers: To control member of class from outside
// * Public
// * Private
// * Protected
// Note: By default all the member of class are  Public
export class Point {
    a;
    b;
    c;
    x;
    y;
    z;
    // constructor(a?: number, b?: number, c?: number) {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.x = a;
        this.y = b;
        this.z = c;
    }
    draw() {
        console.log('X:' + this.x + ', Y:' + this.y + ', Z:' + this.z);
    }
}
let point = new Point(1, 2, 3);
point.z = 4;
point.draw();
/*
// Note: Since the constructor already uses parameter properties (private a, private b, public c), the fields x, y, z and their assignments are redundant — this.a, this.b, and this.c already exist as class members.
// You could simplify the whole class to just use a and b in draw() directly, removing x, y, z entirely

export class Point {
    constructor(private a?: number, private b?: number, public c?: number) {}
    draw() {
        console.log('X: ' + this.a + ', Y:' + this.b);
    }
}
let point = new Point(1, 2, 3);
point.c = 4;
point.draw();

$ tsc main1.ts
$ node main1.js
X: 1, Y:2
*/ 
