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
    getX(): number {
        return this.x;
    }
    setX(value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');
        this.x = value;
    }
}
let point = new Point(1, 2, 3);
point.draw();
let v = point.getX();
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