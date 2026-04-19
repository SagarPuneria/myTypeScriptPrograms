export class Point {
    private x: number;
    private y: number;
    z: number;
    constructor(private a?: number, private b?: number, public c?: number) {
        this.x = a;
        this.y = b;
        this.z = c;
    }
    draw() {
        console.log('X:' + this.x + ', Y:' + this.y + ', Z:' + this.z);
    }
}