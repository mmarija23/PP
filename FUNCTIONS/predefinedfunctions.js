/*1. Write a function that converts an array of strings into an array of numbers. Filter out all non - numeric values.
Input: [ "1", "21", undefined,"42","1e+3", Infinity]
Output: [1, 21, 42, 1000]*/

arr = ["1", "21", undefined, "42", "1e+3", Infinity];

function converts(array) {
    var res = [];
    //arrayCounter = 0;
    for (i = 0; i < arr.length; i++) {
        if (isFinite(array[i])) {
            res[res.length] = parseFloat(arr[i]);
            //arrayCounter++;
        }

    }
    return res;
}
var res = converts(["1", "21", undefined, "42", "1e+3", Infinity, "A"]);
console.log(res);



/*2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: “015false - 2247”  */
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function joinAllElements(array) {
    var result = '';
    arrayCounter = 0;
    for (var counter = 0; counter < array.length; counter++) {
        if ((array[counter] != undefined) && (array[counter] != null) && (!isNaN(array[counter])) && (array[counter] != Infinity)) {
            result += array[counter];
        }
    }
    return result;
}
var result = joinAllElements([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(result);


/*3. Write a program to filter out falsy values from the arr(ay.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47] */
function filterOutFalsy(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) // je ekvivalentno if (bool(array[i])))
        /*
        Ovde se array[0] konvertuje u bool variablu.
        Za brojeve 0-> false, neNula -> true
        Za string ''-> false, neprazanString -> true
        Za array [] -> false, neprazanArray -> true
        Nan, false, undefined, null -> false
*/
        {
            result[result.length] = array[i];
        }
    }
    return result;
}
a = [NaN, 0, 15, false, -22, '', undefined, 47, null]
result = filterOutFalsy(a)
console.log(result)

/*4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3*/
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function countIntiger(array) {
    var result = 0;
    for (i = 0; i < array.length; i++) {
        if (!isNaN(array[i]) && parseInt(array[i]) === array[i]) {
            result++;
        }
    }
    return result;
}
result = countIntiger(array);
console.log(result);


/*5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2 */
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function numOfFloat(array) {
    var res = 0;
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (!isNaN(array[i]) && parseFloat(array[i]) === array[i] && parseInt(array[i]) != array[i]) {
            count++;
        }

    }
    return count; // - countIntiger(array);
}


var count = numOfFloat(array);
console.log(count);