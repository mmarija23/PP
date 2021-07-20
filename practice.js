//7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
//articles each in size 98 KB can fit in it ?
var mb = 1000;
var gb = 4 * mb;
//console.log(gb);
var articles = 98 * ;
console.log(articles);
var kb = 1;
var mb = 1000 * kb;
var gb = 1000 * mb;
console.log(mb);

//??????
var kb = 1;
var mb = 1000 * kb;
var gb = 1000 * mb;
var usb = 4 * gb;
console.log(usb);

var clanak = 98 * kb

console.log(usb / clanak);
//If the variable age stores the information about user’s age, how we can check whether it
//contains a correct value ? Write expressions
//for checking: ●Is age negative value● Is age greater than 120
var age = 37;
if (age < 0) {
    console.log(true);

} else {
    console.log("Age isn\'t a negative value");
}
var neg = age <= 0;
var greater = age > 120;
console.log(neg, greater);



/*4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
72, 14, 9].*/
var nums = [5, 15, -5, 20, 12, 18,
    72, 14, 9
];
console.log(nums[0], nums[3], nums[6]) between the
if and the
else, there can also be an
unlimited number of
else if conditions. //???????????????????????


for(var i = 0, punishment = ''; i < 100; i++) {
    punishment += 'I will never do this again, ';
}
console.log(punishment);
for (
    var i = 0, punishment = ''; i < 100; i++, punishment += 'I will never do this again, ') {
    // nothing here   
}
console.log(punishment);
var v = 0 || 10;
console.log(v);
//Write a small program that prints out the multiplication table. Hint: use a loop3.nested inside another loop.
var res = '\n';
for (var i = 0; i < 14; i++) {
    for (var j = 0; j < 4; j++) {
        res += 'marija\t';
    }
    res += '\n';
}
console.log(res);
//Write a program that compare two numbers and display the larger. Result should be displayed in the console.
var x = 3;
var y = 8;
var z;
if (x > y) {
    z = 'Number ' + x + ' is lerger then ' + y;
} else if (y > x) {
    z = 'Number ' + y + ' is larger then ' + x;
} else {
    z = 'they are equal';
}
console.log(z);
/*Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.
Sample numbers: 3, 4, 9 (check one at the time)
Output: odd, even, odd*/
var a = 3;
var b = 4;
var c = 9;
var res = '';
if (a % 2 === 0) {
    res += 'Number ' + a + ' is even\n';
} else {
    res += 'Number ' + a + ' is odd\n';
}
if (b % 2 === 0) {
    res += 'Number ' + b + ' is even\n';
} else {
    res += 'Number ' + b + ' is odd\n';
}
if (c % 2 === 0) {
    res += 'Number ' + c + ' is even\n';
} else {
    res += 'Number ' + c + ' is odd\n';
}
console.log(res);
/*Write a program to check if the number is divisible by 3 and 5. If it is, print that number.
Sample numbers: 15, 12 (check one at the time) Output: 15*/
var a = 15;
var b = 12;
if (a % 3 === 0 && a % 5 === 0) {
    console.log(a);
} else {
    console.log(b);
} //??????????????????????
/*Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4,0,-1*/
var a = 0;
var b = -1;
var c = 4;
if (a > b > c) {
    console.log(a, b, c);
} else if (b > c > a) {
    console.log(b, c, a);
} else {
    console.log(c, a, b);
}
// ili ovaj drugi nacin
var x = 0;
var y = -1;
var z = 4;
if (x > y && x > z) {
    console.log(x, y, z);
} else
if (y > x && y > z) {
    console.log(y, x, z);
} else
if (z > x && z > y) {
    console.log(z, x, y)
}


for (i = 0; i <= 15; i++) {
    if (n % 2 === 0) {
        console.log('The number is evan');
    } else if (i % 2 !== 0) {
        console.log('The number is odd')
    }


}