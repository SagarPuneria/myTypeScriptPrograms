/**
 * Generics:
 * Returns a typed array of the given items.
 * The type parameter `T` is inferred from the argument or can be specified explicitly.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} items - The array of items to return.
 * @returns {T[]} The same array passed in, typed as `T[]`.
 *
 * @example for Generic functions:
 * getArray<number>([1, 2, 3]); // [1, 2, 3]
 * getArray<string>(["a", "b"]); // ["a", "b"]
 */
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
/**
 * A generic container that holds a single value of type `T`.
 * Demonstrates a generic class with typed get/set operations.
 *
 * @template T - The type of the value stored in the box.
 *
 * @example for Generic classes:
 * const box = new Box<number>(42);
 * box.getValue(); // 42
 * box.setValue(99);
 */
export class Box {
    content;
    /**
     * Creates a new Box with the given initial value.
     * @param {T} value - The initial value to store.
     */
    constructor(value) {
        this.content = value;
    }
    /**
     * Returns the current value stored in the box.
     * @returns {T} The stored value.
     */
    getValue() {
        return this.content;
    }
    /**
     * Replaces the stored value with a new one.
     * @param {T} value - The new value to store.
     */
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
