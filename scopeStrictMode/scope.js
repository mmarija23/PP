//block, statements, expression
//block>statement>expression
//expression je fragment ili deo recenice
//statement je cela recenica
//block je pasus


//declaration statement
var a;
var sumResult;

function sum(a, b) {
    return a + b;
}

//expression statement
a = 22;
sumResult = sum(3, 4);
if (11 > 12)
    console.log('vece je');
//
//for (let index = 0; index < 10; index++)
"use strict"

var a = 22;
console.log(a);

var c = 10;

function myFunction() {
    console.log(c);
    var nesto = 20;
}
myFunction();
console.log(c);
console.log(nesto);