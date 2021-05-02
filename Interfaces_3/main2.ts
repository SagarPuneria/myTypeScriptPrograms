interface Point {
    x: number;
    y: number;
    draw: (Point) => void;
}

let drawPoint = (point: Point) => {
    console.log('Inside drawPoint:', point.x, point.y);
    point.draw(point);
}

let drawWithOutPoint = () => {
    console.log('Inside drawWithOutPoint, without parameter');
}

function drawWithPoint(point): void {
    console.log('Inside drawWithPoint, with parameter:', point.x, point.y);
}

// let point = { x: 1, y: 2, draw: drawPoint };// Recusive call
let point = { x: 1, y: 2, draw: drawWithOutPoint };
let point2 = { x: 1, y: 2, draw: drawWithPoint };
drawPoint(point);
drawPoint(point2);
/*
$ tsc main2.ts
$ node main2.js
Inside drawPoint: 1 2
Inside drawWithOutPoint, without parameter
Inside drawPoint: 1 2
Inside drawWithPoint, with parameter: 1 2
*/