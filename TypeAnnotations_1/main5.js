let message = 'abc'; // Compilation error in endsWith function, if we compile with es2015 and No compilation error in endsWith function, if we compile with --target ES6
let endWithC = message.endsWith('c');
/*
$ tsc main5.ts
main5.ts:2:24 - error TS2550: Property 'endsWith' does not exist on type 'string'. Do you need to change your target library? Try changing the `lib` compiler option to 'es2015' or later.

2 let endWithC = message.endsWith('c');
                         ~~~~~~~~
Found 1 error.

$ tsc --target ES6 main5.ts | node main5.js
*/
let message1;
message1 = 'abc';
let endWithC1 = message.endsWith('c');
/*
$ tsc main5.ts
$ node main5.js
*/
// let message2;
// message2 = 2; // No compilation errors. Only Runtime error.
// let endWithC2 = message2.endsWith('c'); // Only Runtime error.
/*
$ tsc main5.ts
$ node main5.js
/Users/sagar.puneria/data/ts-hello/main5.ts:26
let endWithC2 = message2.endsWith('c');

TypeError: message2.endsWith is not a function
    at Object.<anonymous> (/Users/sagar.puneria/data/ts-hello/main5.ts:26:26)
*/
let message3;
// message3 = 3; // Compilation error in endsWith function, if we compile with es2015 and No compilation error in endsWith function, if we compile with --target ES6
message3 = 'abc'; // Compilation error in endsWith function, if we compile with es2015 and No compilation error in endsWith function, if we compile with --target ES6
let endWithC3 = message3.endsWith('c'); // Runtime error, only if message3 = 3
let alternativeWay = message3.endsWith('c'); // Runtime error, only if message3 = 3
/*
$ tsc --target ES6 main5.ts | node main5.js

$ tsc main5.ts
main5.ts:41:38 - error TS2550: Property 'endsWith' does not exist on type 'string'. Do you need to change your target library? Try changing the `lib` compiler option to 'es2015' or later.
41 let endWithC3 = (message3 as string).endsWith('c');

main5.ts:42:41 - error TS2550: Property 'endsWith' does not exist on type 'string'. Do you need to change your target library? Try changing the `lib` compiler option to 'es2015' or later.
42 let alternativeWay = (<string>message3).endsWith('c'); // Runtime error, only if message3 = 3

Found 2 error.
*/ 
