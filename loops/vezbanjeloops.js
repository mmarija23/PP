//Write a program that will iterate from 0 to 10 and display squares of numbers.
for (var x = 0; x <= 10; x++) {
    console.log(x * x);
}

/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/
for (var i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log(i + ' is even');
    } else if ((i % 2) === 0) {
        console.log(i + ' is even')
    } else {
        console.log(i + ' is odd');
    }
}

for (var i = 0; i <= 15; i++) {
    if (i === 0 || i % 2 === 0) {
        console.log(i + ' is even');
    } else { console.log(i + ' is odd'); }
}


//2. Write a program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);



//3. Write a program to compute the sum and product of an array of integers.
var array = [1, 2, 3, 4, 5],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i++) {
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


//5. Write a program that prints the elements of the following array.
var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
//koristi se nested petlja
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

var result = '';
for (var j = 0; j < a[i].length; j++) {
    console.log(a[i][j]);
}



//6. Write a program that outputs the sum of squares of the first 20 numbers.
var sum = 0;
i = 1;

for (i = 0; i <= 20; i++) {
    square = i * i;
    sum = sum + square;
}
console.log(sum);
//7. Write a program that computes average marks of the following students.Then use this
//average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68
The grades are computed as follows:


    60 % F &
    lt;
70 % D &
    lt;
80 % C

    &
    lt;
90 % B &
    lt;
100 % A
var students = [80, 77, 88, 95, 68];
var average = 0;
for (i = 0; i < students.length; i++) {
    average += students[i];
    var avg = (average / students.length);
}
console.log("Average grade: " + avg);

if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

/*8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions.For numbers divisible by 3, print 
"Fizz" instead of the number, and for numbers divisible by 5(and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz",for numbers that are divisible by both 3 and 5(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/
num = 0;

for (num = 1; num <= 100; num++) {
    //if (a == 0); { console.log("Fizz"); }
    //if (b == 0); { console.log("Buzz"); } else { console.log(Number); } {
    if ((num % 3 == 0) && (num % 5 == 0))
        console.log("FizzBuzz");
    else if (num % 3 == 0) console.log("Fizz");
    else if (num % 5 == 0)
        console.log("Buzz");
    else console.log(num);
} //moj nacin



// make a loop that goes from 1 to 100
for (var num = 1; num < 101; num++) {

    // check if the number is divisible by 3 or 5
    var checkForThree = num % 3;
    var checkForFive = num % 5;

    // if the number is divisible by both 3 and 5, then print FizzBuzz
    if ((checkForThree == 0) && (checkForFive == 0))
        console.log("FizzBuzz");

    // if the number is divisible by 3, then print Fizz
    else if (checkForThree == 0)
        console.log("Fizz");

    // if the number is divisible by 5, then print Buzz
    else if (checkForFive == 0)
        console.log("Buzz");

    // otherwise just print the number
    else
        console.log(num);
}




/*Note: This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates.So
if you’ ve solved it, you’ re now allowedto feel good about yourself.*/