/*1. Write a function to check whether the `input` is a string or not.*/
function isString(a) {
    if (typeof a === 'string') {
        return true;
    } else {
        return false;
    }
}
console.log(isString('My random string'));
console.log(isString(12));
//ili ovako krace
function isString(a) {
    return (typeof a === 'string');
}
console.log(isString(' My random string '));
console.log(isString(12));
/*2. Write a function to check whether a string is blank or not.
"My random string" ->; false
" " ->; true
12 ->; false
false ->; false*/
function isBlankOrNot(a) {
    if (a === ' ') {
        return true;
    } else {
        return false;
    }

}
console.log(isBlankOrNot("My random string"));
console.log(isBlankOrNot(" "));
console.log(isBlankOrNot(12));
console.log(isBlankOrNot(false));
/*3. Write a function that concatenates a given string n times(default is 1).
"Ha" - > "Ha"
"Ha", 3 - > "HaHaHa"*/
function concatenatesString(str, count) {
    var result = '';
    for (i = 0; i < count; i++) {
        result += str;
    }
    return result;
}
console.log(concatenatesString("Ha", 1));
console.log(concatenatesString("Ha", 3));

/*4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" - > 2*/
function numberOfLetter(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}
console.log(numberOfLetter("My random string", "n"));

/*5. Write a function to find the position of the first occurrence of a character in a string.The
result should be the position of character.If there are no occurrences of the character, the function should
return -1.*/
function positionFirst(string, letter) {

    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            return i;
        }

    }
    return -1;
}
var string = "My random string"
var letter = "b"
console.log(positionFirst(string, letter));

/*6. Write a function to find the position of the last occurrence of a character in a string.The
result should be in human numeration form.If there are no occurrences of the character, function should
return -1.*/
function positionLast(string, letter) {

    for (i = string.length - 1; i >= 0; i--) {
        if (string[i] === letter) {
            return i;

        }
    }
    return -1;
}
console.log(positionLast("My random string", "n"));

/*7. Write a function to convert string into an array.Space in a string should be represented as“ null” in new array.
"My random string" - > ["M", "y", null, "r", "a"]
"Random" - > ["R", "a", "n", "d", "o", "m"]*/
function stringIntoArray(string) {
    var result = [];
    for (i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            result[result.length] = string[i];
        } else {
            result[result.length] = null;
        }

    }
    return result;
}
console.log(stringIntoArray("Random"));
console.log(stringIntoArray("My random string"));

/*8. Write a function that accepts a number as a parameter and checks
if the number is prime or not.
Note: A prime number(or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/
function isPrime(num) {
    if (num <= 1) {
        return num + ' is not a prime number';
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return num + ' is a not a prime number';
        } else {
            return num + ' is a prime number';
        }
    }
}
console.log(isPrime(11));

/*9. Write a function that replaces spaces in a string with provided separator.If separator is not provided, use“ - ”(dash) as the
default separator.
"My random string", "_" - > "My_random_string"
"My random string", "+" - > "My+random+string"
"My random string" - >"My-random-string"*/
function replaceSpace(string, separator) {
    var result = "";
    var sep = "";
    if (separator === undefined) {
        sep = "-";
    } else {
        sep = separator;
    }
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            result += sep;
        } else {
            result += string[i];
        }
    }
    return result;
}
console.log(replaceSpace("My random string", "_"));
console.log(replaceSpace("My random string", "+"));
console.log(replaceSpace("My random string"));




/*10. Write a function to get the first n characters and add“...”at the end of newly created string.*/
function getAndAdd(string, n) {
    var result = "";
    var add = "...";
    for (var i = 0; i < n; i++) {
        result += string[i];
    }
    result += add;

    return result;
}
console.log(getAndAdd("marija", 2));


/*11. Write a function that converts an array of strings into an array of numbers.Filter out all
non - numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] - > [1, 21, 42, 1000]*/
function convertsArrayIntoArray(array) {
    var arr1 = [];
    for (i = 0; i < array.length; i++) {
        if (isFinite(array[i])) {
            arr1[arr1.length] = parseFloat(array[i])
        }
    }
    return arr1;
}
console.log(convertsArrayIntoArray(["1", "21", undefined, "42", "1e+3", Infinity]));
/*12. Write a function to calculate how many years there are left until retirement based on the
year of birth.Retirement for men is at age of 65 and for women at age of 60. If someone is 
already retired, a proper message should be displayed.*/
function yearsUntilRetirement(nowDate, gender, dateOfBirth) {

    var retired = "Person is already retired";
    var personAge = nowDate - dateOfBirth;
    var yearsLeft = 0;
    if (gender === "female" && (personAge < 60)) {
        yearsLeft = 60 - personAge;
        var message = "Years to retire " + yearsLeft;
        return message;
    } else {
        return retired;
    }
    if (gender === "male" && personAge < 65) {
        yearsLeft = 65 - personAge;
        message = "Years to retire " + yearsLeft;
        return message;
    } else {
        return retired;
    }
}
console.log(yearsUntilRetirement(2021, "female", 1983));

/*13. Write a function to humanize a number(formats a number to a human - readable string) with
the correct suffix such as 1 st, 2 nd, 3 rd or 4 th.
1 - > 1 st
11 - > 11 th */
function humanizeNumber(num) {
    var res = '';
    if (num % 100 >= 11 && num % 100 <= 13) {
        res = num + "th";
    } else {
        switch (num % 10) {
            case 1:
                res = num + "st";
                break;
            case 2:
                res = num + "nd";
                break;
            case 3:
                res = num + "rd";
                break;
            default:
                res = num + "th";
        }
    }
    return res;
}
console.log(humanizeNumber(2));