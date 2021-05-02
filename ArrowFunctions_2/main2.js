let drawPoint = (x, y, a, b) => {
    //...
    console.log(x, y, a, b);
};
// drawPoint(1, 2); // main7.ts:5:1 - error TS2554: Expected 4 arguments, but got 2.
drawPoint(1, 2, 'Sagar', 'Puneria');
let drawNewPoint = (x, y, a, b) => {
    //... algorithmn  is used by x&y properties
    console.log('a:' + a, 'b:' + b);
    console.log('x:' + x);
};
drawNewPoint(1, 2, 'Sagar', 'Puneria');
/*
$ tsc --target ES6 main2.ts
$ node main2.js
1 2 Sagar Puneria
a:Sagar b:Puneria
x:1
*/ 
