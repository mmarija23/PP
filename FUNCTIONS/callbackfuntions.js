/*1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd”
Output: true
Input: “1bser9re”
Output: false*/
var input = "1b895abd";
var output = input.indexOf(5);
console.log(output);

var input = "1bser9re";
var output = input.indexOf(5);
console.log(output);
///////////////////
function checkGivenString() {
    var digit = 5;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === digit) {
            return false;
        } else {
            return true; //???????????????'''
        }
    }

}
var input = "1b895abd";
var output = checkGivenString(input);
console.log(output);



/*2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
‘**’.
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”*/
function replaceString(string) {
    var output = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'J' && string[i] === 'S') {
            var stars = '*';

        }

    }
    return output;
}
console.log(replaceString("Programming in JS is super interesting!"));
/*3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning”*/
/*4. Write a function that deletes a character from the given position in the string.
Input: “Goodd morning!”, 3
Output: “Good morning!”*/
/*5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]*/
/*6. Write a function that replaces the elements of the given array between two positions with
their doubled values.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]*/
/*7. Write a function that checks if a given object has a given property with the given value.
Input: { x: 20, y: 30 }, “x”, 20
Output: true
Input: { x: 20, y: 30 }, “z”, 20
Output: false
Input: { x: 20, y: 30 }, “x”, 10
Output: false*/
/*8. Write a function that checks if every element of the first array is contained in the second
array.Be careful with repetitions!
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true*/

/*9. Write a function that sorts an array of strings by the number of appearances of the letter‘ a’ or‘ A’.
Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]*/
/*10. Write a function that prints out the date of the next day.
Output: 25. 10. 2018.*/
/*11. Write a function that prints out the date of the previous day.
Output: 23. 10. 2018.*/
/*12. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output:
78
111
4
4321 */