function printLabel(labeledObj) {
    console.log(labeledObj.label, labeledObj.size);
}
var myObj = { size: 10, label: "Size of Object is" };
printLabel(myObj);
/*
$ tsc main3.ts
$ node main3.js
Size of Object is 10
*/ 
