/*1. Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/
var array = [3, 500, 12, 149, 53, 414, 1, 19];

function switchMinMaxElement(array) {
    var min = array[0];
    var minIndex = 0;
    var max = array[0];
    var maxIndex = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;

        }
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }

    }
    array[maxIndex] = min;
    array[minIndex] = max;

    return array;
}
var array = [3, 500, 12, 149, 53, 414, 1, 19];
console.log(switchMinMaxElement(array));
/*2. Use the following array to make a new one by dividing its values by two and adding 5. If
a given element's value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]*/
var array = [3, 500, -10, 149, 53, 414, 1, 19];

function newArray(array) {
    var res = [];
    var count = 0;
    for (i = 0; i < array.length; i++) {
        res[count] = array[i] / 2 + 5;
        if (res[count] === 0) {
            res[count] = 20;
        }
        count++;
    }

    return res;
}
console.log(newArray(array));
/*3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students&# 39;
names with their corresponding grade. Use the following ranges:
51 - 60 ->6,
61 - 70 ->7,
71 - 80 ->8,
81 - 90 ->9,
91 - 100 ->10.
Input: [ "Micahel ", "Anne ", "Frank ", "Joe ", "John ", "David ", "Mark ", "Bill "], [50, 39, 63, 72, 99, 51, 83, 59]
Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.*/
var arr1 = ["Micahel ", "Anne ", "Frank ", "Joe ", "John ", "David ", "Mark ", "Bill "];
var arr2 = [50, 39, 63, 72, 99, 51, 83, 59];

function studentsGrade(arr1, arr2) {
    var output = '';
    var grade = 0;

    for (i = 0; i < arr1.length; i++) {

        if (arr2[i] >= 51 && arr2[i] < 61) {
            grade = 6;
        } else if (arr2[i] >= 61 && arr2[i] < 71) {
            grade = 7;
        } else if (arr2[i] >= 71 && arr2[i] < 81) {
            grade = 8;
        } else if (arr2[i] >= 81 && arr2[i] < 91) {
            grade = 9;
        } else if (arr2[i] >= 91 && arr2[i] <= 100) {
            grade = 10;
        } else {
            grade = 5 + ' - failed to complete the exam';

        }
        output += arr1[i] + ' acquired ' + arr2[i] + ' points and earned ' + grade + '.\n';

    }
    return output;
}
console.log(studentsGrade(arr1, arr2));

/*4.(skip: )) Sort a previously defined array.Place its sorted values into a new array whose
values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]*/
var array = [13, 11, 15, 5, 6, 1, 8, 12];

function sortValues(array) {
    var array2 = [];

    for (i = 0; i < array.length; i++) {
        var temp;
        var min = array[i];
        var indexOfMin = i;
        for (var j = i; j < array.length; j++) {
            var currentElement = array[j];

            if (currentElement < min) {
                min = array[j];
                indexOfMin = j;
            }
        }
        temp = array[i];
        array[i] = min;
        array[indexOfMin] = temp;
        array2[array2.length] = min * 2;
    }
    return array2;
}
var duplicateArray = sortValues(array);
console.log(duplicateArray);

/*5. (skip :))Sort a previously defined array in a descending order and display it in the console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]*/
function descendingOrder(array) {
    for (var i = 0; i < array.length; i++) {
        var temp;
        var max = array[i];
        var indexOfMax = i;

        for (var j = i; j < array.length; j++) {
            var currentElement = array[j];

            if (currentElement > array[indexOfMax]) {
                max = array[j];
                indexOfMax = j;
            }
        }
        temp = array[i];
        array[i] = max;
        array[indexOfMax] = temp;
    }
    return array;
}
var array = [13, 11, 15, 5, 6, 1, 8, 12];
var sortedArray = descendingOrder(array);

console.log(sortedArray);


/*6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.
The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000*/
function multiplied() {
    var even = 0;
    var odd = 0;
    var result;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            even += i;
        }
    }
    for (var i = 1; i < 500; i++) {
        if (i % 2 !== 0) {
            odd += i;
        }
    }
    return result = (even - odd) * 12.5;
}
console.log(multiplied());


/*7. Define a 10 element array.Take the first two letters from every string(that has at least 2 letters) 
in the array and create a new string from them.Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa*/
var array = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

var result = "";

function newString(array) {
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            if (array[i].length >= 2) {
                result = result + array[i][0] + array[i][1];
            }
        }

    }
    return result;
}
console.log(newString(array));
/*8. Write a program that takes a string and prints its characters out in reversed order in the console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB*/
var input = 'Belgrade Institute of Technology';
var output = '';
for (var i = input.length - 1; i >= 0; i--) {
    output += input[i];

}
console.log(output);
/*9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time.Display the number of possible combinations, as well.
(E.g.(1.2), (2, 1) is allowed, but not(1, 1), (2, 2)...).*/
function combinationsOfNumbers() {
    var result = [];
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {
            if (i !== j) {
                result[result.length] = [i, j];
            }

        }

    }
    return result;
}
console.log(combinationsOfNumbers());
/*10. Write a program that checks if the entered number is a prime number(i.e.divisible only by 1 and by itself).
Input: 17 | 15
Output: true | false*/
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) { //zavrsiti
            return false;
        }

    }
    return true;
}
console.log(isPrime(24));
/*11. Check if a given string is a palindrome(spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true*/
function isPalindrom(string) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[string.length - 1]) {
            return true;
        } else {
            return false;
        }
    }
}
var string = 'a nut for a jar of tuna';
console.log(isPalindrom(string));

/*12. Write a program that calculates the greatest common divisor of two integers.
Note: The greatest common divisor of two non - zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9 */
function greatestCommonDivisior(num1, num2) {
    var min = num1 > num2 ? num2 : num1
    for (var i = min; i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i;
        }
    }

}
console.log(greatestCommonDivisior(192, 42));