//replace(stara vrednost,nova vrednost)
var str = "Visit Microsoft";
var res = str.replace("Microsoft", "Smart");
console.log(res); //Visit Smart

//substr(pozicija,duzina)
var str = "Hello World";
var res = str.substr(1, 4); //posle prvog duzina 4
console.log(res); //ello

//toLowewCase();toUperCase()
var str = "Hello World";
var res = str.toUpperCase();
console.log(res); //HELLO WORLD

//split()-deli stringu niz podstringova
var str = "Kako si danas?";
var res = str.split(" ");
console.log(res); //[ 'Kako', 'si', 'danas?' ]

//charAt()vraca karakter u stringu na zadatoj poziciji
var str = "SMART";
var res = str.charAt(0);
console.log(res); //S

//concat()-spaja dva stringa
var str1 = "Hello";
var str2 = "World";
var res = str1.concat(str2);
console.log(res); //HelloWorld

//indexOf()-vraca poziciju zadatog karaktera ili stringa
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");
console.log(n); //13

//parseFloat(string)
var a = parseFloat("10"); //10
var b = parseFloat("10.00"); //10
var c = parseFloat("10.33"); //10.33
var d = parseFloat("34 46 55"); //34
var e = parseFloat(" 60 "); //60
var f = parseFloat("40 kvadrata"); //40
var g = parseFloat("Stan ima 40 kvadrata"); //NaN
console.log(g);

//parseInt(string,radix)
var a = parseInt("10"); //10
var b = parseInt("10.00"); //10
var c = parseInt("10.33"); //10
var d = parseInt("34 46 55"); //34
var e = parseInt(" 60 "); //60
var f = parseInt("40 kvadrata"); //40
var g = parseInt("Stan ima 40 kvadrata"); //NaN
console.log(g);

////
var count = 0;

function makeAdder(x) {
    return function inner(y) {
        return x + y;
    };
}
var add5 = makeAdder(5);
count += add5(2);
console.log(count);

/////
var user = {
    name: 'Tyler',
    age: 28,
    handle: '@tylermcginnis',
    greet: function() {
        console.log('Hello! My name is ', this.name);
    }
};

user.greet();