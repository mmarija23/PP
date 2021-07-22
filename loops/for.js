var punishment = '';

for (var i = 0; i <= 100; i++) { punishment += 'I will never do this again\n'; }
console.log(punishment);


var sum = 0;
for (var i = 1; i <= 100; i++) { sum = sum + i; }
console.log(sum);
//dobijamo 5050
//1: i=1,1<=100(true), sum =0+1, sum=1 i++(2)
//2: i=2,2<=100(true), sum =1+2,  sum=3,i++(3)
//3: i=3,3<=100(true), sum =sum+1(sum=3+3),  sum=6, i++(4)
//...
//100: i=100,100<=100(true), sum =sum+1(sum=4950+100),  sum=5050, i++(101)
//101: i=101,3101<=100(false), end

var sum = 0;
for (vari = 1; i <= 100; i++) {
    if (sum === 0) {
        console.log
    }
}
//////
for (var i = 0; i < 4; i++) {
    console.log("*******---------------");
}
for (var j = 0; j < 4; j++) {
    console.log("----------------");
}