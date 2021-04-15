//1. Write a program that calculates the maximum of two given numbers.
function maximum(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}
var result = maximum(5, 6);
console.log(result);
//2. Write a program that checks if a given number is odd.
function isOdd(n) {
    var res = 0; {
        if (n % 2 !== 0) {
            res = n + ' is odd'
        } else {
            res = n + ' is not odd'
        }
    }
    return res;
}
var res = isOdd(3);
console.log(res);
//3. Write a program that checks if a given number is a three digit long number.
function isThreeDigit(n) {
    var res = 0; {
        if (n >= 100 && n < 1000) {
            return true;
        } else {
            return false;
        }
    }
}
var res = isThreeDigit(1001);
console.log(res);

//4. Write a program that calculates an arithmetic mean of four numbers.
function arithmeticMean(n1, n2, n3, n4) {
    var res = (n1 + n2 + n3 + n4) / 4;
    return res;

}
var res = arithmeticMean(2, 5, 6, 8);
console.log(res);
/*5. Write a program that draws a square of a given size.For example, if the size of square
is 5 the program should draw:
    *****  
    *   *
    *   *
    *   *
    *****...............*/
function drawSquare(n) {
    var square = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                square += '*';
            } else if (j === 0 || j === n - 1) {
                square += '*';
            } else {
                square += ' ';
            }
        }
        square += '\n';
    }

    return square;
}
var square1 = drawSquare(4);
console.log(square1);


/*6. Write a program that draws a horizontal chart representing three given values.For
example,
if values are 5, 3, and 7, the program should draw:
    *****
    ***
    *******.....................*/


function drawChart() {
    var chart1 = '';
    var numOfArgs = arguments.length;
    for (var i = 0; i < numOfArgs; i++) {
        for (var j = 0; j < arguments[i]; j++) {
            chart1 += '*';
        }
        chart1 += '*\n';
    }
    return chart1;
}
chart1 = drawChart(5, 3, 7);
console.log(chart1);
//7. Write a program that calculates a number of digits of a given number.
function digits(num) {
    var count = 0;
    while (num > 1 && num != 0) {
        num = num / 10;
        count++;
    }
    if (num === 1) {
        count++;
    }
    return count;
}
var dig = digits(452);
console.log(dig);

function numberOfdigits(number) {
    var i = 0;
    while (number > 1 && number !== 0) {
        number = number / 10;
        i++;
    }
    if (number === 1) {
        i++;
    }
    return i;
}
var digits = numberOfdigits(990);
console.log(digits);


/*8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3*/

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;


function given(a, e) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            count++;
        }

    }

    return count;

}
var result = given(a, e);
console.log(result);
//9. Write a program that calculates the sum of odd elements of a given array.
function sumOfOdd(array) {
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {

            sum += array[i];
        }
    }
    return sum;
}
var sum = sumOfOdd([2, 6, 3, 7]);
console.log(sum);
/*10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/
function appearancesOfLetter(string, letter) {
    var count = 0;
    var string = 'banana';
    var letter = 'b';

    for (i = 0; i < string.length; i++) {
        if (string[i] === letter) {

            count++;
        }

    }
    return count;
}
var count = appearancesOfLetter('banana', 'b');
console.log(count);
/*11. Write a program that concatenates a given string given number of times.For example,
 if“ abc” and 4 are given values, the program prints out abcabcabcabc.*/
function concatenatesString(string, num) {
    var count = '';
    for (i = 0; i < num; i++) {
        count += string;
    }
    return count;
}
console.log(concatenatesString("abc", 4));