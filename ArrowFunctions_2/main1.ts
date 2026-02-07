let message;
message = 'abc';
let endWithC = (message as string).endsWith('c');

/*
// Arrow operator(=>) indicate anonymous function (a function without a name)
// Single-line functions: without curly braces(i.e., {})
// In single-line functions, you can write only one line code(i.e., single expression)

let dologNothing = msg => console.log(msg); // Print only msg value
dologNothing("dologNothing")
// OR
let dologNothing2 = (msg) => console.log(msg); // Print only msg value
dologNothing2("dologNothing2")
// OR
let dologNothing3 = (msg) => {return console.log(msg)}; // Print only msg value
dologNothing2("dologNothing3")

*/

// if no parameters
let dologNothing = () => console.log(); // Print only new line

let log = function (msg, bool) {
    console.log(msg, bool);
    console.log('log message: ' + msg + ',', 'endWithC: ' + bool);
    return true;
}
let res = log(message, endWithC);
console.log('res:' + res);
dologNothing();

let dolog = (msg, bool) => {
    console.log(msg, bool);
    console.log('dolog message: ' + msg + ',', 'endWithC:' + bool);
}
dolog(message, endWithC);
dologNothing();

let oneLineFunction = (msg, bool) => console.log('Braces can be ignored if function is one line, message: ' + msg + ', endWithC:' + bool);
oneLineFunction(message, endWithC)

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
