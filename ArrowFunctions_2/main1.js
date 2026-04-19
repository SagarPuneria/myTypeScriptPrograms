"use strict";
let message;
message = 'abc';
let endWithC = message.endsWith('c');
/* let message: string;
message = 'abc';
let endWithC: boolean = message.endsWith('c'); */
/*
// Arrow operator(=>) indicate anonymous function (a function without a name)
// Single-line functions: without curly braces(i.e., {})
// In single-line functions, you can write only one line code(i.e., single expression)

const dologNothing1 = (msg: string) => console.log(msg); // Print only msg value
dologNothing1("dologNothing1")
// OR
const dologNothing2 = (msg: string) => console.log(msg); // Print only msg value
dologNothing2("dologNothing2")
// OR
const dologNothing3 = (msg: string) => {return console.log(msg)}; // Print only msg value
dologNothing3("dologNothing3")
*/
// if no parameters
const dologNothing = () => console.log(); // Print only new line
// Recommendation(let❌ or const✅): Always use 'const' before for function variable(Reason: The function reference is not being reassigned.)
// ❌ let dologNothing = () => console.log(); // Print only new line
const log = function (msg, bool) {
    console.log(msg, bool);
    console.log('log message: ' + msg + ',', 'endWithC: ' + bool);
    return true;
};
const res = log(message, endWithC);
console.log('res:' + res);
dologNothing();
const dolog = (msg, bool) => {
    console.log(msg, bool);
    console.log('dolog message: ' + msg + ',', 'endWithC:' + bool);
};
dolog(message, endWithC);
dologNothing();
const oneLineFunction = (msg, bool) => console.log('Braces can be ignored if function is one line, message: ' + msg + ', endWithC:' + bool);
oneLineFunction(message, endWithC);
/*
$ tsc --target ES6 main1.ts
$ node main1.js
abc true
log message: abc, endWithC:true
res:true

abc true
dolog message: abc, endWithC:true

Braces can be ignored if function is one line, message: abc, endWithC:true
$
*/
