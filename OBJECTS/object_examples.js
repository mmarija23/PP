"tomato" [0] //t



var result = String({
    a: 1
})

(255).toString(16);
console.log((255).toString(16));
console.log(Math.PI);

function C() {
    this.a = 1;
    return false;
}
console.log(typeof new C()); //C { a: 1 },object
///////
function F() {
    function C() {
        return this;
    }
    return C();
}
var o = new F();
console.log(o);