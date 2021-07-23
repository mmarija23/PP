/*1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U.*/
function countVowels(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        var current = string[i];
        switch (current) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                count++;

                break;

            default:
                break;
        }

    }
    return count;
}
console.log(countVowels('vlaeuUoc'));
/*2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]*/

function mixArrays(arr1, arr2) {
    var together = arr1.length + arr2.length;
    var newArray = [];
    var j = 0;
    var k = 0;
    for (var i = 0; i < together; i++) {
        if (i % 2 == 0) {
            newArray[i] = arr1[j++];
        } else {
            newArray[i] = arr2[k++];
        }

    }
    return newArray;
}
console.log(mixArrays(['a', 'b', 'c'], [1, 2, 3]));


function combinesTwoArray(a1, a2) {
    var limit;
    var newArray = [];
    if (a1 > a2) {
        limit = a1.length;
    } else {
        limit = a2.length;
    }
    for (var i = 0; i < limit; i++) {
        var current1 = a1[i];
        var current2 = a2[i];
        if (current1 !== undefined) {
            newArray[newArray.length] = current1;
        }
        if (current2 !== undefined) {
            newArray[newArray.length] = current2;


        }
    }
    return newArray;

}
console.log(combinesTwoArray(['a', 'b', 'c'], [1, 2, 3]));
/*3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/
function rotateElements(list, k) {
    var newArray = [];

    for (var i = k; i < list.length; i++) {
        newArray[newArray.length] = list[i];

    }
    for (var j = 0; j < k; j++) {
        newArray[newArray.length] = list[j];

    }
    return newArray;
}
console.log(rotateElements([1, 2, 3, 4, 5, 6], 2));
/*4. Write a function that takes a number and returns array of its digits.*/
function returnDigits(num) {
    var digits = [];

}

/*5. Write a program that prints a multiplication table for numbers up to 12.*/

function multiplicationTable(num) {
    var table = '';
    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
            table += i * j + '';
        }
        table += '\n';

    }
    return table;
}
console.log(multiplicationTable(12));
/*6. Write a function to input temperature in Centigrade and convert to Fahrenheit.*/
function CentigradeToFahrenheit(Centigrade) {
    var Fahrenheit = (Centigrade * 9 / 5) + 32;
    return Fahrenheit;
}
console.log(CentigradeToFahrenheit(20));
/*7. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements.*/
function findMaxElement(array) {
    var max = -Infinity;
    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        if (typeof num === 'number' && isFinite(num) && num !== null) {
            if (max < num) {
                max = num;
            }
        }
    }
    return max;
}
var result = [1, 5, 6, 'abc', 2.5, false];
console.log(findMaxElement(result));
/*8. Write a function to find the maximum and minimum elements. Function returns an array.*/
function maxAndMin() {
    var max = -Infinity;

}
console.log();
/*9. Write a function to find the median element of array.*/
//if (arr.length % 2 === 0) {
// median = (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2 //Median avg od 2 srednja elementa ako je paran broj elemenata

/*10. Write a function to find the element that occurs most frequently.*/
function mostFrequently(element) {

}
console.log(mostFrequently(['a', 'a', 'a', 2, 5, 4, 2, 2, 2, 'b', 3]));
/*11. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements.If number of elements is even, return just the first and the
last.In other cases(empty array), input array should be returned.*/
function firstMiddleLast(array) {

}
console.log(firstMiddleLast([1, 2, 3, 4, 5, 6, 7]));
/*12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters.*/
function averageOfElements(n) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < n.length; i++) {
        sum = sum + n[i];
        count++;
    }
    return sum / count;
}
console.log(averageOfElements([1, 2, 5, 6, 4, 5, 9]));

///////
function averageOfElements(n) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < n.length; i++) {
        if (!isNaN(parseInt(n[i]))) {
            sum = sum + n[i];
            count++;
        }
    }
    return sum / count;
}
console.log(averageOfElements([1, 2, 5, 6, 4, 5, 9, 'a', 'b']));
/*13. Write a function to find all the numbers greater than the average.*/
function greaterThenAverage(array) {
    var average;
    var sum = 0;
    var result = [];
    for (var i = 0; i < array.length; i++) {
        sum += array[i];

    }
    average = sum / array.length;
}
console.log(greaterThenAverage([1, 5, 10, 16, 3, 7]));
/*14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40*/
function countBMI(weight, height) {
    var BMI = weight / (height * height);
    if (BMI < 15) {
        return "Starvation";
    }
    if (BMI < 17.5) {
        return "Anorexic";
    }
    if (BMI < 18.5) {
        return "Underweight";
    }
    if (BMI < 25) {
        return "Ideal";
    }
    if (BMI < 30) {
        return "Overweight";
    }
    if (BMI < 40) {
        return "Obese";
    }
    if (BMI >= 40) {
        return "Morbidly obese";
    }

}
console.log(countBMI(67, 1.70));

/*15. Write a function that takes a list of strings and prints them, 
one per line, in a rectangular
frame.: For example the list["Hello", "World", "in", "a", "frame"] gets
printed as:
*********
* Hello *
* World *
* in *
* a *
* frame *
*********
kraj || || | */
function printString(array) {
    var result = "";
    var count = 0;
    var maxChar = 0;
    for (var i = 0; i < array.length; i++) {
        while (array[i].length < maxChar) {
            array[i] += " "
        }
    }

}

console.log(printString(["Hello", "World", "in", "a", "frame"]));