function vacationStartDate(day, month) {
    var date;
    date = day + '.' + month + '.';
    return date; //ako izostavimo return dobicemo undefined
}

var startDate = vacationStartDate(5, 7);
console.log(startDate);

///// 
var year = 2021;

function vacationStartDate(day, month) {
    var date;
    date = day + '.' + month + '.' + year + '.';
    return date;
}

var startDate = vacationStartDate(5, 7);
console.log(startDate);
///
var year = 2021;

function vacationStartDate(day, month) {
    var date;
    var year = 2022; //kada var imaju isti naziv prvo se koristi lokalna var pa onda globalna
    date = day + '.' + month + '.' + year + '.';
    return date;
}

var startDate = vacationStartDate(5, 7);
console.log(startDate);

//
var year = 2021;

function vacationStartDate(day, month) {
    var date;
    var month = 8; //radi sa onim sto je poslednje dato a to je 8, ne reaguje na onaj dole zadati parametar
    date = day + '.' + month + '.' + year + '.';
    return date;
}

var startDate = vacationStartDate(5, 7);
console.log(startDate);

//
var year = 2021;

function vacationStartDate(day) {
    var date;
    date = day + '.' + month + '.' + year + '.';
    return date;
}
var month = 8; //ako ovde stavimo opet dobijamo isto, ali ako prebacimo ispod varstartdate onda dobijemo undefined zbog hojstinga
var startDate = vacationStartDate(5, 7);
//var month = 8;prvo js deklarise var month; a posle joj dodeli vrednost.
console.log(startDate);

//
var b = 5; //ovde a uzima vrednost 2 zato sto u davanju parametara nemamo b i onda se 
//desava ono da a ima prvo jednu vrednost pa dobije drugu vrednost
function f(a, a, c) {
    return a + b + c;
}
var result = f(1, 2, 3);
console.log(result); //ali ako ukljucimo'use strict' dobicemo da b is not defined
//
var isValidUsername = function(username) {
    return username.length > 5;
};
var isValidPassword = function(password) {
    return password.indexOf('*') != -1;
};

///////////