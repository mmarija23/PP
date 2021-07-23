function goToTheDentist() {
    console.log('uzima prskalicu')
    console.log('uzima prskalicu')
    console.log('uzima prskalicu')
    console.log('uzima prskalicu')
    console.log('uzima prskalicu')
    console.log('uzima prskalicu')

}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];










//Write a program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
/*
var array = [];
var arrayCounter = 0;
for (var counter = 0; counter < 1000; counter++) {
    if (counter % 3 === 0 || counter % 5 === 0) {
        array[arrayCounter] = counter;
        arrayCounter++;
    }
}

for (var counter = 0; counter < array.length; counter++) {
    sum = sum + array[counter];

}
console.log(sum); */
/*for (var counter = 0; counter < 1000; counter++) {
    if (counter % 3 === 0 || counter % 5 === 0) {
        sum = sum + counter;
    }
}
console.log(sum); */

var matrix = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
//console.log(matrix[3][0])
for (var row = 0; row < matrix.length; row++) {
    for (var column = 0; column < matrix[row].length; column++)
        console.log(matrix[row][column]);
}



function addElement(array) {
    array[array.length] = 'a';
}
arr = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log(arr);
addElement(arr);
console.log(arr);

////Andjelka predavanje
function vacationStartDate(day, month) {
    var date;
    date = day + '.' + month + '.';
    return date;
}

var startDate = vacationStartDate(5, 7);
console.log(startDate);
/////////////////////
function isRentingAge(age) {
    return age >= 25;
}
var carRent = isRentingAge(25);
console.log(carRent);

////
function displayNames(names) {
    console.log(names);
}
var students = ["l", "M"];
displayNames(students);
/////
function getListOfNames(names) {
    return names[0] + ", " +
        names[1];
}
var students = ["Vera", "Nada"];
var list = getListOfNames(students);
console.log(list);
/////
var res = '\n';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        res += '*\t';
    }
    res += '\n';
}
console.log(res);
//////
a = 3E+3;
a++;
console.log(a);
//////////
var f = function() {
    return 1;
};
f(4);
console.log(f);
///////
var result = true;

function subtract(first, second) {
    return first - second;
}
result = subtract(12, -10);
result = subtract(22, 2);
console.log(result);
////////
'use strict';

myVar = "random";

function addOne(num) {

    return num + 1;
}
var result = addOne(4);
console.log(result);
///////
var global = 123;

var resetGlobal = function() {

    global = -1;

};
resetGlobal;
console.log(global);
////////
var global = 123;

var resetGlobal = function() {

    global = arguments[0] || -1;

};

resetGlobal(10);

console.log(global);

resetGlobal(0);

console.log(global);
//////
'use strict';

var result = square(10);

console.log(result);

function square(num) {

    num *= num;

}
/////////
function toString(num) {

    result = num + '';

    return result;

}

console.log(result);

var a = { name: 'd', age: 50 }
b = a;
b.hasDog = false;
console.log(a);
console.log(b);


var global = 1;

function f() {
    var local = 2;
    global++;
    return global;
}
console.log(global);
////////////////////////////////////////////
function makeSquare(array) {
    var maxLength = 0;
    var topAndBottomLength = 0;
    var topAndBottomString = '';
    var middlePart = '';
    var square = '';

    function generateString(stringLength, char) {
        var resultString = '';
        for (var j = 0; j < stringLength; j++) {
            resultString += char;
        }
        return resultString;
    }
    //find length of the longest word
    for (var i = 0; i < array.length; i++) {
        var word = array[i];
        if (word.length > maxLength) {
            maxLength = word.length
        }
    }
    topAndBottomLength = maxLength + 4;
    // create top and bottom string
    topAndBottomString = generateString(topAndBottomLength, '*')
        // create middle part
    for (var k = 0; k < array.length; k++) {
        var spaceLength = maxLength - array[k].length;
        var spaceString = generateString(spaceLength, ' ')
        middlePart += '* ' + array[k] + spaceString + ' *' + '\n';
    }
    // make square
    square = topAndBottomString + '\n' + middlePart + topAndBottomString;
    return square;
}
///////////////////////////////////////////////////////////////

function drawVerticalLine() {
    for (var i = 0; i < 3; i++) {
        con
    }
}
//////
try new Error('omg smthng went wrong');
throw {
    name: "window",
    message: "omg! Something wrong happend"
}

console.log(global);
console.log(this);
var importantMessage = 'hmhmhmhm';
//////
var message = 'hi';
message[0] = 'H'; //stringovi su nepromenjivi, ako zelimo da ih promenimo moramo da ih seckamo i da ih peske kreiramo
console.log(message);
//////////