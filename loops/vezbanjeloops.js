//Write a program that will iterate from 0 to 10 and display squares of numbers.
for (var x = 0; x <= 10; x++) { console.log(x * x); }

/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/
for (var i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log(i + 'is even');
    } else if (i % 2 === 0) { console.log(i + 'is even') } else { console.log(i + 'is odd'); }
}

for (var i = 0; i <= 15; i++) {
    if (i === 0 || i % 2 === 0) {
        console.log(i + 'is even');
    } else { console.log(i + 'is odd'); }
}


//2. Write a program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) { sum += i; }
}
console.log(sum);



//3. Write a program to compute the sum and product of an array of integers.
var array = [1, 2, 3, 4, 5],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) {
    s += array[i];
    p *= array[i];
}
console.log('Sum : ' + s + ' Product :  ' + p);


//4. Write a program which prints the elements of the following array as a single string.
//var x = [ '1';, 'A';, B;, c & quot;, & quot;r & quot;, true, NaN, undefined];
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

for (var i of x) {
    console.log(i);
}


/*5. Write a program that prints the elements of the following array.
var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];*/
//koristi se nested petlja
for (var i = 0; i < a.length; i++) { console.length(a[i]); }

var result = '';
for (var j = 0; j < a[i].length; j++) { console.length(a[i][j]); }



//6. Write a program that outputs the sum of squares of the first 20 numbers.
var sum = 0;
i = 1;

for (i = 0; i <= 20; i++) {
    square = i * i;
    sum = sum + square;


}
console.log(sum);