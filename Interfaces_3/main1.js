var drawPoint = function (point) {
    //...
    console.log(point.x, point.y);
};
var point = { x: 1, y: 2 };
drawPoint(point);
/*
$ tsc main1.ts
$ node main1.js
1 2
*/ 
