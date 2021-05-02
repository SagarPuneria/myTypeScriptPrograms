let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };
let backgroundColor = Color.Red;

/*
$ tsc main4.ts | node main4.js
*/