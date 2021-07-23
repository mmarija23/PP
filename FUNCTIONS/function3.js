/*1. Write a program to insert a string within a string at a particular position(default is 1,beginning of a string). 
"My random string ", "JS " - > "JS My random string " 
"My random string ", "JS ", 10 - > "My random JS string "*/

function insertString(string, additionalstring, position) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (i === position) {
            result += additionalstring;
        }
        result += string[i];
    }
    return result;
}
console.log(insertString("My random string ", "JS ", 10));
/*2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
    [NaN, 0, 15, false, -22, '', undefined, 47, null]*/
function joinAllElements(array) {
    var output = '';
    //var counter = 0;
    for (var i = 0; i < array.length; i++) {
        if (([array[i]] != undefined) && (array[i] != null) && (array[i] != Infinity) && (!isNaN(array[i]))) {
            output += array[i];

        }
    }
    return output;
}
console.log(joinAllElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));
/*3. Write a program to filter out falsy values from the array.
    [NaN, 0, 15, false, -22, '', undefined, 47, null] - > [15, -22, 47]*/
function filterOutFalsy(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            result[result.length] = array[i];
        }
    }
    return result;
}
console.log(filterOutFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));
/*4. Write a function that reverses a number.The result must be a number.
12345 - > 54321 // Output must be a number*/
function reverseNumber(a) {
    var b = a + '';
    var c = '';
    for (var i = b.length - 1; i >= 0; i--) {
        c += b[i];

    }
    return parseInt(c);
}
var result = reverseNumber(12345);
console.log(result, typeof(result));

/*5. Write a function to get the last element of an array.Passing a parameter 'n' will return the last 'n' elements of the array.
    [7, 9, 0, -2] - > -2
    [7, 9, 0, -2], 2 - > [0, -2]*/
function lastElement(array, n) {
    var last = 0;
    for (var i = 0; i < array.length; i++) {
        last = array[array.length - 1];
    }
    return last;
}
console.log(lastElement([7, 9, 0, -2]));
console.log(lastElement([7, 9, 0, -2], 2));
//
var elements = [7, 9, 0, -2];
var x = 2;

function lastElements(elements, x) {
    var newResult = [];
    x = x || 1;
    var lastIndex = elements.length - 1;
    if (x >= elements.length) {
        return elements;
    }

    for (var i = elements.length - x; i <= elements.length - 1; i++) {
        var currentElement = elements[i];
        var firstIndex = newResult.length;

        newResult[firstIndex] = currentElement;

    }
    return newResult;
}
console.log(lastElements([7, 9, 0, -2], 2));

/*6. Write a function to create a specified number of elements with pre - filled numeric value array.
6, 0 - > [0, 0, 0, 0, 0, 0]
2, "none " - > ["none ", "none "]
2 - > [null, null]*/
function specifiedNumber(num, elements) {
    var array = [];
    if (elements === undefined) {
        elements = null;
    }
    for (i = 0; i < num; i++) {
        array[i] = elements;

    }
    return array;
}
console.log(specifiedNumber(6, 0));
console.log(specifiedNumber(2, "none "));
console.log(specifiedNumber(2));

/*7. Write a function that says whether a number is perfect.
28 - > 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself(also known as its aliquot sum).Equivalently, a perfect number is a number that is half the sum of all of its positive divisors(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.*/


function isPerfectNumber(num) {
    var perf = 0;

    for (i = 1; i < num; i++) {
        if (num % i === 0) {
            perf += i;
            divisor = i;
        }
    }
    if (num / 2 === divisor) {
        console.log(num + ' is perfect number')
    } else {
        console.log(num + ' is not perfect number');
    }
    return perf;

}
isPerfectNumber(23);
/*8. Write a function to find a word within a string.
'The quick brown fox', 'fox' ->"'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"*/
function findWord(string, word) {
    var result = word + ' was found ' + count2 + ' times.';
    var count = 0;
    var count2 = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (string[j] == word[j - i]) {
                    count2++;
                }
                if (count2 == word.length) {
                    count++;
                }
            }
            count2 = 0;
        }
    }
    return word + ' was found ' + count + ' times.';
}
console.log(findWord('The quick brown fox', 'fox'));
console.log(findWord('aa bb cc dd aa', 'aa'));

/*9. Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs"*/
function hideEmailAddress(mail) {
    var monkey;
    var first = "";
    var rest = "";
    var counter;
    for (var i = 0; i < mail.length; i++) {
        if (i < 3) {
            first += mail[i];
        }
        if (mail[i] === '@') {
            monkey = i;
        }
        if (monkey) {
            rest += mail[i];

        }
    }
    return first + '...' + rest;
}
console.log(hideEmailAddress("myemailaddress@bgit.rs"));
/*10. Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]*/
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequentItem(array) {
    var result;
    var frequent = 0;
    var max = 0;
    for (i = 0; i < array.length; i++) {
        for (j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                frequent++;
            }
            if (max < frequent) {
                max = frequent;
                result = array[i];
            }
        }
        frequent = 0;
    }
    return result + " repeats " + max + " times.";
}
console.log(mostFrequentItem(array));