'use strict '

var obj = { x: 5, y: 13 };
obj.z = 20;
console.log(obj);


var a = [2, 3, 4, 5];
var b = a;
console.log(a === b);
var a = 34;

function transform(a) {
    a = a * 2;
}
transform(a);
console.log(a);

function ordC() {
    console.log(this.coffee);
}
ordC();
var coffee = 'espr';

Object.prototype.day = 'Monday';
var plan = { activity: 'JS codding' };
console.log(plan.day);
var res;
res = String.prototype.concat.call("abc", "ABC");
console.log(res);