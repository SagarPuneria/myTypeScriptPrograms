function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally:' + i);
}
doSomething();
/*
$ tsc main3.ts
main3.ts:5:28 - error TS2304: Cannot find name 'i'.

5     console.log('Finally:'+i);
                             ~


Found 1 error.
*/