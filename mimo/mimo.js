var toDo = ["call mom", "dishes"];
toDo.push("groceries");
console.log(toDo); //add new elem on the end of array

////
var toDo1 = ["call mom", "dishes"];
toDo1.pop();
console.log(toDo1); //remove the last element of the array
////
var toDo1 = ["call mom", "dishes"];
var newToDo = toDo1.pop();
console.log(newToDo); //kada stavimo pop() metod u varijablu, varijabla cuva vrednost koju smo uklonili iz niza
/////
var activeUsers = ["sue", "mike"];
activeUsers.push("joe");
console.log(activeUsers);

/////
var tasks = ["dishes", "windows", "vacuum"];
var length = tasks.length; //we can storethe length of an array in a variable
console.log(length);

if (tasks.length > 0) {
    console.log("fantastic!");
}
////
var friends = ["Anna", "Tim", "Eve"];
for (var i = 0; i < friends.length; i++) {
    //console.log(friends[i]);
    var current = friends[i];
    console.log("Hello " + current + "!");
}
/////f-je//////
function doubleNumber(number) {
    var result = number * 2;
    console.log(result);
}
doubleNumber(5); //ako stavimo c.log posle poziva f-je,dobijamo reference error result is not defined;

///
function userAge(num) {
    var age = "User age: " + num;
    return age; //ako ne stavimo return, f-ja vraca undefined
}
var result = userAge(30);
console.log(result);

//How do we store the return value in a variable? We call the f-on and store it in a variable.
//
function createID(name, year) {
    return name + year + "@mail.com";

}
var email = createID("jo", "1998");
console.log(email);
////
function calculateSum(a, b) {
    return a + b;
}

function calculateDifference(a, b) {
    return a - b;
}
var sum = calculateSum(30, 11);
var difference = calculateDifference(30, 11);
console.log(sum);
console.log(difference);
//
function isEqual(num) { //f-je koje vracaju boolean vrednost uglavnom pocinju sa is
    return num === 10;
}
var num = 100;
console.log(num);