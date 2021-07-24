/*1. Write a function that capitalizes the first letter of each string argument it receives.
Function arguments: ['hello', 'there', 'ES', 6]
Output: ['Hello', 'There', 'ES']*/
const array = ['hello', 'there', 'ES', 6];

const capitalize = array => {
    const filteredArr = array.filter(item => typeof item === 'string')
    const mappedArr = filteredArr.map(item => item[0].toUpperCase() + item.slice(1))
    return mappedArr;
}
console.log(capitalize(array));
////drugi nacin kraci
const capitalize = arr => {
    const result = arr
        .filter(item => typeof item === 'string')
        .map(item => item[0].toUpperCase() + item.slice(1))
    return result;
}
console.log(capitalize(['hello', 'there', 'ES', 6]));

/*2. Write a function that calculates sale tax that should be paid for the product of the given price.
Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
Output2: [ 24, 20 ] // tax only


const products = [{ name: "Banana", price: 120.23, date: new Date() }, { name:
"Orange", price: 100, date: new Date() }]
const productsWithTax = products.map(product => {
const { price: prodPrice } = product;
const newProd = {
...product,
price: Number.parseFloat(prodPrice),
priceWithTax: prodPrice * 1.2,
tax: prodPrice * 0.2
}
return newProd
})
console.log(products);
console.log(productsWithTax);*/


/*3. Write a function that increases each elementent of the given array by the given value. If the value is
omitted, increase each elementent of the array by 1.
Input: [4, 6, 11, -9, 2.1], 2
Output: [6, 8, 13, -7, 4.1]*/
const array = [4, 6, 11, -9, 2.1];
let num = 2;
let newArray = array.map(number => number + 2);
console.log(newArray);
/////f-ja/////
const plusTwo = () => {
    const array = [4, 6, 11, -9, 2.1];
    let newArray = array.map(number => number + 2);
    console.log(newArray);
}
plusTwo();

/*4. Write a function that filters all even elementents of the array.
Input: [6, 11, 9, 0, 3]
Output: [6, 0]*/
let arr = [6, 11, 9, 0, 3];
let filterAllEvenElementents = arr.filter(number => number % 2 === 0);
console.log(filterAllEvenElementents);
////
const array = [6, 11, 9, 0, 3];
let filtArr = array.filter(elementent => {
    return (elementent % 2 === 0);
})
console.log(filtArr);
////f-ja
const filterAllEvenElementents = array => {
    const filterEll = array.filter(number => number % 2 === 0)
    return filterEll;
}
console.log(filterAllEvenElementents([6, 11, 9, 0, 3]));
////f-ja
let getEvenNumbers = () => {
    let arr = [6, 11, 9, 0, 3];
    let filterAllEvenElementents = arr.filter(number => number % 2 === 0);
    console.log(filterAllEvenElementents);
}
getEvenNumbers();
/*5. Write a function that filters all the strings from the given array that contain substring JS or js.
Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
Output: ['babel.js, 'JS standard ']*/
let array = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];
let stringsArr = [];
let filterArr = array.filter(element => {
    for (let i = 0; i < element.length; i++) {
        if ((element[i] === 'j' || element[i] === 'J') && (element[i + 1] === 's' || element[i + 1] === 'S')) {
            stringsArr.push(element);
            return stringsArr;
        }
    }
})
console.log(filterArr);

/*6. Write a function that filters all integer numbers from the given array.
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
Output: [7, 8]*/
const arrInput = [1.6, 11.34, 9.23, 7, 3.11, 8];
const integerNumber = arrInput.filter(element => {
    return (Number.isInteger(element));
})
console.log(integerNumber);
/*7. Write a function that filters all integer arguments that contain digit 5. 
Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553
Output: [45, 553]*/
const filterInegerArguments = (...args) => args.filter((e) => Number.isInteger(e) & e.toString().indexOf("5") != -1);
console.log(filterInegerArguments(23, 11.5, 9, 'abc', 45, 28, 553));

/*8. Write a function that returns indexes of the elementents greater than 10.
Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
Output: 1, 2, 5*/
const indexesGreaterThan10 = arr => {
    let newArray = [];
    arr.forEach((element, index) => {
        if (element > 10) {
            newArray.push(index);
        }
    });
    return newArray;
};
console.log(indexesGreaterThan10([1.6, 11.34, 29.23, 7, 3.11, 18]));
/*9.
a.Create an array of persons.A person should be an object with name and age properties.
Experiment with enhanced object literals.*/
const persons = [
    { name: 'Pera', age: 33 },
    { name: 'Laza', age: 22 },
    { name: 'Ana', age: 18 },
    { name: 'Suza', age: 45 }
];
console.log(persons);

//b.Write a function that prints out the names of persons older than 25.
const personOlderThen25 = persons.filter((item) => {
    return item.age >= 25
})
console.log(personOlderThen25);


//c.Write a function that check if there is a person older than 40.
const isOlderTnen40 = persons.some((item) => {
    return item.age >= 40
})
console.log(isOlderTnen40);

//d.Write a function that checks if all persons are older than 20.*/
const isAllOlderThen20 = persons.every((item) => {
    return item.age >= 20
})
console.log(isAllOlderThen20);

/*10. Write a function that checks if the given array is an array of positive integer values.
Input: [3, 11, 9, 5, 6]
Output: yes
Input: [3, -12, 4, 11]
Output: no*/
const arr = [3, 11, 9, 5, 6];

const isArrayOfPositiveValues = arr.every((item) => {
    const positiveInteger = item >= 0;
    return positiveInteger;
})
console.log(isArrayOfPositiveValues);

//
const arr1 = [3, -12, 4, 11];

const isArrayOfPositiveValues = arr1.every((item) => {
    const positiveInteger = item >= 0;
    return positiveInteger;
})
console.log(isArrayOfPositiveValues);
/*11. Write a function that calculates the product of the elementents of the array.
Input: [2, 8, 3]
Output: 48*/

let arr = [2, 8, 3];
let productOfArrays = (arr) => {
    let first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        first *= arr[i];
    }
    return first;
}
console.log(productOfArrays(arr));

/*12. Write a function that calculates the maximum of the given array.
Input: [2, 7, 3, 8, 5.4]
Output: 8 */

let arr = [2, 7, 3, 8, 5.4];
let maxNumber = arr => {
    return Math.max(...arr);
}
console.log(maxNumber(arr));
////
let maxNumber = arr => Math.max(...arr);

console.log(maxNumber([2, 7, 3, 8, 5.4]));