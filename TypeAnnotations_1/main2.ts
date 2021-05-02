function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally:' + i);
}
doSomething();
/*
$ tsc main2.ts | node main2.js
0
1
2
3
4
Finally:5
*/