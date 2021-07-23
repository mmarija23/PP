/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/
var array = [5, -4.2, 3, 7];
var e = 3;

function checksElementInArray(array, e) {
    var res = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] === e) {
            res = "yes";
            break;
        } else {
            res = "no";
        }
    }
    return res;
}
console.log(checksElementInArray(array, e));
/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/
var array = [-3, 11, 5, 3.4, -8];

function multipliesPositiveElement(array) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            res[res.length] = array[i] * 2;
        } else {
            res[res.length] = array[i];
        }
    }
    return res;
}
console.log(multipliesPositiveElement(array));
/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/
var array = [4, 2, 2, -1, 6];

function valueAndIndex(array) {
    var min = array[0];
    var index = 0;
    var res = '';
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            index = i;
        }
        res = 'minimum is ' + min + ' index is ' + index;
    }

    return res;
}
console.log(valueAndIndex(array));
/*4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/
var array = [4, 2, 2, -1, 6];

function theSecondSmallestNumber(array) {
    var first = array[0];
    var second = array[1];
    for (var i = 0; i < array.length; i++) { //sa ovim prvim delom vraca second ali za first vraca 6.
        if (array[i] < first) {
            second = first;
            first = array[i];
        } else if (array[i] < second) { //bez ovog dela ovde ne vraca first tacno.
            second = array[i];
        }
    }
    return second;
}
console.log(theSecondSmallestNumber(array));
/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/
var array = [3, 11, -5, -3, 2];
var sum = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum += array[i];
    }
}
console.log(sum);
/*6. Write a program that checks if a given array is symmetric.An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’ t symmetric.*/
var array = [2, 4, -2, 7, -2, 4, 2];
var output = '';
for (var start = 0, end = array.length - 1; start < end; start++, end--) {
    if (array[start] === array[end]) {
        output = 'The array is symetric'
    } else {
        output = 'The array isn\'t symetric'
    }
}
console.log(output);

/*7. Write a program that intertwines two arrays.You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/
var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];
var newarr = [];

function interwinesTwoArrays(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {

        newarr[newarr.length] = arr1[i];
        newarr[newarr.length] = arr2[i];
    }
    return newarr;
}
console.log(interwinesTwoArrays(arr1, arr2));
/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

arr1 = [4, 5, 6, 2];
arr2 = [3, 8, 11, 9];

function concatenatesTwoArrays(arr1, arr2) {
    arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        arr3[arr3.length] = arr1[i];
    }
    for (var j = 0; j < arr2.length; j++) {
        arr3[arr3.length] = arr2[j];
    }
    return arr3;
}
console.log(concatenatesTwoArrays(arr1, arr2));
/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/
var array = [4, 6, 2, 8, 2, 2];
var e = 2;

function deleteGivenElement(array, e) {
    var newarray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== e) {
            newarray[newarray.length] = array[i];

        }
    }
    return newarray;
}
console.log(deleteGivenElement(array, e));
/*10. Write a program that inserts a given element e on the given position p in the array a.If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */


var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
var output = [];
for (var i = 0; i < a.length; i++) {
    if (i === p) {
        output[output.length] = e;
    }
    output[output.length] = a[i];
}
console.log(output);