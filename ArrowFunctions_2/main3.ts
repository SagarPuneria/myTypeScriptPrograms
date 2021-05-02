function printLabel(labeledObj: { label: string, size: number }) {
    console.log(labeledObj.label, labeledObj.size);
}

let myObj = { size: 10, label: "Size of Object is" };
printLabel(myObj);
/*
$ tsc main3.ts
$ node main3.js
Size of Object is 10
*/