/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/
var e = 3;
var a = [5, -4.2, 18, 7];
var output = 'no';
for (i = 0; i < a.lengt; i++) {
    if (e === a[i]) {
        output = "yes";
    }
}
console.log(output);
var e = 3;
var a = [5, -4.2, 3, 7];
var output = 'yes';
for (i = 0; i < a.lengt; i++) {
    if (e === a[i]) {
        output = "no";
    }
}
console.log(output);


/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var array = [-3, 11, 5, 3.4, -8];
var result = [];
for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result[i] = array[i] * 2;
    } else {
        result[i] = array[i];
    }
}
console.log(result);

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/
var arr = [4, 2, 2, -1, 6];
var min = arr[0];
var inx = 0;
for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
        inx = i;
    }
}
console.log(min, inx);


/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/
var arr = [4, 2, 2, -1, 6];
var first = arr[0];
var second = arr[1];
for (i = 1; i < arr.length - 1; i++) {
    if (arr[i] < first) {
        second = first;
        first = arr[i];

    } else if (arr[i] < second) {
        second = arr[i];
    }
}

console.log(first, second);


/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/
var arr = [3, 11, -5, -3, 2];
var result = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }

}
console.log(result);


/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can 
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’ t symmetric.*/
var array = [2, 4, -2, 7, -2, 4, 2];
var out = true;
for (var start = 0, end = array.length - 1; start < end; start++, end--) {
    if (array[start] !== array[end]) {
        out = false;
    }
}
console.log(out);


var arr2 = [3, 4, 12, 8];
var result = '';
for (var start = 0, end = arr2.length - 1; start < end; start++, end--) {
    if (arr2[start] !== arr2[end]) {
        result = 'The array isn\'t symmetric'
    } else {
        result = 'The array is symmetric'
    }
}
console.log(result);




/*7. Write a program that intertwines two arrays.You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/
var arr1 = [4, 5, 6, 2]; //????????????????????????
var arr2 = [3, 8, 11, 9];
var arr3 = [];
for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
        arr1[i] <= arr2[j];
        arr3[j] == arr1[i];
        i++;
        arr3[i] == arr2[j];
        j++;

    }
    if (i < arr1.length && j < arr2.length) {
        arr3 = arr1[i] + arr2[j];
        i++;
        j++;
    }

}
console.log(arr3);







/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */
var inp1 = [4, 5, 6, 2];
var inp2 = [3, 8, 11, 9];
var out = [];
for (i = 0; i < inp1.length + inp2.length; i++) {
    {
        if (i < inp1.length) {
            out[out.length] = inp1[i];
        } else {
            var newIndex = i - inp1.length;
            out[out.length] = inp2[newIndex];
        }

    }
}
console.log(out);

/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var test = [];
for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        test[test.length] = a[i];
    }
}
console.log(test);


/*10. Write a program that inserts a given element e on the given position p in the array a.If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/
var arr = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
var resArr = [];
for (i = 0; i < arr.length; i++) {
    if (i === p) {
        resArr[resArr.length] = e;
    }
    resArr[resArr.length] = arr[i];
}
console.log(resArr);