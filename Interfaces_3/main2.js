var drawPoint = function (point) {
    console.log('Inside drawPoint:', point.x, point.y);
    point.draw(point);
};
var drawWithOutPoint = function () {
    console.log('Inside drawWithOutPoint, without parameter');
};
function drawWithPoint(point) {
    console.log('Inside drawWithPoint, with parameter:', point.x, point.y);
}
// let point = { x: 1, y: 2, draw: drawPoint };// Recusive call
var point = { x: 1, y: 2, draw: drawWithOutPoint };
var point2 = { x: 1, y: 2, draw: drawWithPoint };
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
