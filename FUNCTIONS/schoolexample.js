var f = function(a) {
    return a;
};
console.log(f); //=> [Function: f]

//////
function invokeAdd(a, b) {
    return a() + b(); //->iz ovoga zakljucujemo da su a i b argumenti gornje fje.
}

var result = invokeAdd(function() { //ova vraca 3
    return 3;
}, function() { //ova vraca 6
    return 6;
});
console.log(result); //a+b=3+6=9   stampa 9

////
var a = function() {
    return function() {
        return 13;
    }
}
var result = a();
console.log(result); //stampa [Function (anonymous)]

///
(function() {
    console.log('HI'); //samopozivajuca fja je anonimna fja, nema ime; unutar fje pisemo sve. Sve unutar tela fje ce odmah da se izvede.
})(); //stampa HI

///
(function() {
    function sum(num1, num2) { //ovo je inner fja tj privatna fja, nalazi se u drugoj fji
        return num1 + num2;
    }
    var result = sum(22, 44)
    console.log(result);
    console.log('Hi');

})();

///
console.log(x);
var x = 10; // undefined->zbog hojstinga=>I var x;  II log(x)  III x=10