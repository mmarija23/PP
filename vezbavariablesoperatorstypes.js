//1. Create several variables using different letter cases and beginning characters.
/*Check if they still exist if you refer to them in different case -does case matter here ? Try to declare a variable
starting with number as the first character*/

var ime = "Marija"
console.log(ime) /*ako pocne sa brojem pokazuje syntaxError*/


//2. Save a string (text) describing your current mood in a variable and print it out in console.

var myMood = "Fantastic"
console.log(myMood)

//Arithmetic operators
/*4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well.Think about expressions: 3 - 2 - 31, 3 * 5 - 7 / 3, 4 / 2 - 1.14 * 3.
Why do we get these results ?*/

var a = 3;
var b = 2;
var c = 31;
var result = a - b - c;
console.log(result);

var a = 3 * 5 - 7 / 3;
console.log(a);

var a = 3;
var b = 5;
var c = 7;
var d = 3;
var result = a * b - c / d;
console.log(result)
console.log(a * b - c / d);

var a = 3 * 5 - 7 / 3;
console.log(a);

//5. How many grams weight 1.2kg of bananas?
var kg = 1000;
var banane = 1.2 * kg;
console.log(banane)


/*6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour ? It is hard to be on time these days…*/
var minuta = 60;
var Anna = 5 * minuta;
var Tom = 30 * minuta;
console.log(Anna);
console.log(Tom);


/*7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it?*/
var kb = 1;
var mb = 1000 * kb;
var gb = 1000 * mb;
var usb = 4 * gb;
console.log(usb);

var clanak = 98 * kb

console.log(usb / clanak);


/*9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?*/
var a = 2;
a *= 2;
console.log(a)

var b = 4;
b = b + 3;
console.log(b)
var b = 4;
b += 3;
console.log(b)

var c = 15;
c = c / 5;
console.log(c);
var c = 15;
c /= 5;
console.log(c);

var d = 8;
d = d - 7;
console.log(d)
var d = 8;
d -= 7;
console.log(d);


/*10. Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.*/

var ime = "Marija"; //  typeof string
var godina = 37; // typeof number
var macka = false; // typeof boolean
console.log(ime, godina, macka);
console.log(typeof ime);
var godine = 37;
console.log(typeof godine);
var macka = false;
console.log(typeof macka);

/*11. Check which type are these values:
- “number”
- true
- null
- “false”
- 56*/

var a = "number"; //string
console.log(typeof a);
var b = true; // boolean
console.log(typeof true);
var c = null; //object
console.log(typeof c);
var d = "false"; //string
console.log(typeof d);
var e = 56; //number
console.log(typeof e);

//Logical operators
/*12. Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value?*/
var x = 5;
var y = 5;
var z = 6;
console.log(x == z); //false
console.log(x == y); //true

/*13. Use the console to check the results you think should go in the following table:

p      q        p && q     p || q
true true          T          T
true false         F          T
false true         F          T
false false        F          T*/


var p = true;
var q = true;
console.log(p && q, p || q);
var p = true;
var q = false;
console.log(p && q, p || q);
var p = false;
var q = true;
console.log(p && q, p || q);
var p = false;
var q = false;
console.log(p && q, p || q);

/*14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/
var age = 37;
console.log(age < 0);
console.log(age > 120);

var age = 37;
if (age <= 0) {
    console.log(false);
} else {
    console.log("age isn\'t negative value");

}
var age = 37;
if (age >= 120) {
    console.log(false);
} else {
    console.log("age isn\'t greater then 120");
}


/*15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)*/
var speed = 100;
if (speed >= 60 && speed <= 120) {
    console.log(true);
} else {
    console.log(false);
}
var speed = 150;
if (speed >= 60 && speed <= 120) {
    console.log(true);
} else {
    console.log(false);
}

var speed = 130;
console.log((speed > 60) && (speed < 120));
/*PItanje za zadatke 14 i 15=> Koji nacin postavke je bolji tj. ispravniji za ovakvu postavku zadatka?*/