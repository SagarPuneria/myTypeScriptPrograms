// Generic function
function getArray(items) {
    return items;
}
/* const getArray = <T>(items: T[]): T[] => {
  return items;
} */
// Usage
const numbersValues = getArray([1, 2, 3, 4]);
const stringValues = getArray(["a", "b", "c"]);
console.log("Numbers:", numbersValues);
console.log("Strings:", stringValues);
// Generic class
export class Box {
    content;
    constructor(value) {
        this.content = value;
    }
    getValue() {
        return this.content;
    }
    setValue(value) {
        this.content = value;
    }
}
const numberBox = new Box(100);
console.log("Box value:", numberBox.getValue());
numberBox.setValue(200);
console.log("Updated value:", numberBox.getValue());
const stringBox = new Box("Hello");
console.log("String box:", stringBox.getValue());
/*
$ tsc genericsEx.ts | node genericsEx.js
Numbers: [ 1, 2, 3, 4 ]
Strings: [ 'a', 'b', 'c' ]
Box value: 100
Updated value: 200
String box: Hello
*/ 
