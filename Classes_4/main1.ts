class Point {
    x: number;
    y: number;
    draw() {
        // ...
        console.log('X: ' + this.x + ',Y: ' + this.y);
    }
    // https://www.javascripttutorial.net/javascript-return-multiple-values/
    getDistanceUsingArray(another: Point) {
        // Returning multiple values from a function using an array
        console.log('Inside getDistanceUsingArray');
        return [another.x, another.y];
    }
    getDistanceUsingObject(another: Point) {
        // Returning multiple values from a function using an object
        console.log('Inside getDistanceUsingObject');
        let a = another.x, b = another.y;
        return { a, b };
    }
}

// let point: Point; // No memory allocation -> Below Runtime error
// point.draw(); // Runtime error -> TypeError: Cannot read property 'draw' of undefined


// let point: Point = new Point();
// OR
let point = new Point();
point.draw();
point.x = 1;
point.y = 2;
point.draw();


let distances = point.getDistanceUsingArray(point);
console.log(distances, distances[0], distances[1])

// In ES6, you can destructuring assignment syntax to unpack values from an array more intuitively, like this:
const [a1, b1] = point.getDistanceUsingArray(point);
console.log(a1, b1)



let distances1 = point.getDistanceUsingObject(point)
console.log(distances1, distances1.a, distances1.b);

// If you want to unpack properties from an object, you can use the object destructuring syntax as follows:
let { a, b } = point.getDistanceUsingObject(point);
console.log(a, b);
/*
$ tsc main1.ts
$ node main1.js
X: undefined,Y: undefined
X: 1,Y: 2
Inside getDistanceUsingArray
[ 1, 2 ] 1 2
Inside getDistanceUsingArray
1 2
Inside getDistanceUsingObject
{ a: 1, b: 2 } 1 2
Inside getDistanceUsingObject
1 2
*/