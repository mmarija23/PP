//IIFE = Immediately Invoked Function Expressions
/*Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [9, 5, 11, 4] */
(
    function(a) {
        var b = [];
        b[0] = a[a.length - 1];
        b[a.length - 1] = a[0];
        for (var i = 1; i < a.length; i++) {
            b[i] = a[i];
        }
        console.log(b);
    }
)([4, 5, 11, 9]);
/*2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20*/
(
    function(a, b) {
        var c = a * b;
        console.log(c);
    }
)(4, 5);
/*3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2*/
(
    function(string) {
        var res = '';
        var counter = 0;
        for (i = 0; i < string.length; i++) {
            if (string[i] == 'M' || string[i] == 'm') {
                res += '*';
                counter += 1;
            } else {
                res += string[i];
            }
        }
        console.log(res, counter);
    }
)('prograMming');
/*4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com*/
(
    function(name, surname) {
        var result = '';
        result = name + '.' + surname + '@gmail.com';
        console.log(result)
    }
)('pera', 'peric');
/*5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28*/
(
    function(num, radix) {
        var result = parseInt(034);
        console.log(result);

    }
)(034, 8);
/*6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!*/
var password = JSGuru;
(
    function(password, succes, error) {
        var numberCheck = false;
        for (var i = 0; i < password.length; i++) {
            if () ///zavrsiti
        }
    }
)(JSGuru);
/*7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]*/
(
    function(array) {
        var newArr = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                newArr[newArr.length] = array[i];
            }
        }
        console.log(newArr);
    }
)([2, 8, 11, 4, 9, 3]);
////TASK 6 NOT FINISH