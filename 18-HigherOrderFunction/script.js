```js
// ========================================
// Higher Order Functions
// ========================================


// ========================================
// Part 1: What is a Higher Order Function?
// ========================================

// A Higher Order Function (HOF) is a function that:
// 1. Takes another function as an argument
// OR
// 2. Returns another function


// Function stored in a variable

function greet() {
    console.log("Hello Somil");
}

let myFunction = greet;

myFunction();


// Function passed as an argument

function welcome() {
    console.log("Welcome Somil");
}

function execute(fn) {
    fn();
}

execute(welcome);


// ========================================
// Part 2: Callback Function
// ========================================

// A callback is a function passed as an argument to another function.

function sayHello(name) {
    console.log("Hello " + name);
}

function executeCallback(fn) {
    fn("Somil");
}

executeCallback(sayHello);


// Callback with parameters

function add(a, b) {
    console.log(a + b);
}

function calculate(fn) {
    fn(10, 20);
}

calculate(add);


// ========================================
// Part 3: forEach()
// ========================================

// forEach() runs a callback function for every element.

// forEach() is used mainly for performing an action.
// It returns undefined.

let numbers = [10, 20, 30, 40];

numbers.forEach(function (number) {
    console.log(number);
});


// Using arrow function

numbers.forEach(number => {
    console.log(number * 2);
});


// forEach() with index

numbers.forEach((number, index) => {
    console.log(index, number);
});


// ========================================
// Part 4: map()
// ========================================

// map() runs a callback on every element
// and returns a NEW array.

// map() is mainly used for transformation.

let prices = [100, 200, 300, 400];

let doubledPrices = prices.map(price => {
    return price * 2;
});

console.log(doubledPrices);


// Shorter syntax

let triplePrices = prices.map(price => price * 3);

console.log(triplePrices);


// Original array remains unchanged

console.log(prices);


// ========================================
// Part 5: filter()
// ========================================

// filter() selects elements based on a condition.
// true  -> element is included
// false -> element is excluded
//
// filter() returns a NEW array.

let ages = [12, 18, 21, 15, 25];

let adults = ages.filter(age => age >= 18);

console.log(adults);


// Filter even numbers

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);


// ========================================
// Part 6: reduce()
// ========================================

// reduce() combines multiple values
// into ONE final value.

let marks = [10, 20, 30, 40];

let total = marks.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(total);


// Reduce with multiplication

let product = marks.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);

console.log(product);


// ========================================
// Part 7: find()
// ========================================

// find() returns the FIRST element
// that matches the condition.
//
// If no element matches -> undefined

let values = [10, 15, 20, 25, 30];

let foundValue = values.find(value => value > 20);

console.log(foundValue);


// No match

let noValue = values.find(value => value > 100);

console.log(noValue);


// ========================================
// some()
// ========================================

// some() checks whether AT LEAST ONE element
// satisfies the condition.
//
// Returns true or false.

let hasLargeNumber = values.some(value => value > 25);

console.log(hasLargeNumber);


// ========================================
// every()
// ========================================

// every() checks whether ALL elements
// satisfy the condition.
//
// Returns true or false.

let allPositive = values.every(value => value > 0);

console.log(allPositive);


// ========================================
// Difference between find(), some(), every()
// ========================================

console.log(values.find(value => value > 20));
// First matching element

console.log(values.some(value => value > 20));
// At least one match -> true/false

console.log(values.every(value => value > 5));
// All elements match -> true/false


// ========================================
// Mixed HOF Practice
// ========================================

let users = [
    { name: "Aman", age: 20, active: true },
    { name: "Rahul", age: 17, active: false },
    { name: "Neha", age: 22, active: true },
    { name: "Ravi", age: 15, active: false }
];


// map()
// Get only names

let userNames = users.map(user => user.name);

console.log(userNames);


// filter()
// Get users whose age is 18 or above

let adultUsers = users.filter(user => user.age >= 18);

console.log(adultUsers);


// find()
// Get first active user

let activeUser = users.find(user => user.active === true);

console.log(activeUser);


// some()
// Check if any user is under 18

let hasMinor = users.some(user => user.age < 18);

console.log(hasMinor);


// every()
// Check if all users are at least 15

let allAtLeast15 = users.every(user => user.age >= 15);

console.log(allAtLeast15);


// ========================================
// Final HOF Example
// ========================================

let nums = [10, 15, 20, 25, 30];


// map()
// Transform every element

let doubled = nums.map(num => num * 2);

console.log(doubled);


// filter()
// Select numbers greater than 20

let greaterThan20 = nums.filter(num => num > 20);

console.log(greaterThan20);


// find()
// Find first number greater than 20

let firstGreaterThan20 = nums.find(num => num > 20);

console.log(firstGreaterThan20);


// some()
// Check if at least one number is greater than 25

let isAnyGreaterThan25 = nums.some(num => num > 25);

console.log(isAnyGreaterThan25);


// every()
// Check if all numbers are greater than 5

let areAllGreaterThan5 = nums.every(num => num > 5);

console.log(areAllGreaterThan5);


// reduce()
// Calculate total

let sum = nums.reduce((acc, current) => {
    return acc + current;
}, 0);

console.log(sum);


// ========================================
// Interview Revision
// ========================================

// 1. What is a Higher Order Function?
//
// A Higher Order Function is a function that
// takes another function as an argument
// or returns another function.
//
//
// 2. What is a callback function?
//
// A callback is a function passed as an argument
// to another function.
//
//
// 3. What does forEach() do?
//
// forEach() performs an action on every element
// and returns undefined.
//
//
// 4. What does map() do?
//
// map() transforms every element and returns
// a new array.
//
//
// 5. What does filter() do?
//
// filter() selects elements based on a condition
// and returns a new array.
//
//
// 6. What does find() do?
//
// find() returns the first matching element.
// If nothing matches, it returns undefined.
//
//
// 7. What does some() do?
//
// some() checks whether at least one element
// satisfies the condition.
// It returns true or false.
//
//
// 8. What does every() do?
//
// every() checks whether all elements satisfy
// the condition.
// It returns true or false.
//
//
// 9. What does reduce() do?
//
// reduce() combines multiple values into
// one final value.


// ========================================
// Important Points
// ========================================

// forEach()  -> Action -> undefined
// map()      -> Transform -> New Array
// filter()   -> Select -> New Array
// find()     -> First match -> Element / undefined
// some()     -> At least one -> true / false
// every()    -> All -> true / false
// reduce()   -> Combine -> One final value


// Memory Trick:
//
// Action
// Transform
// Select
// First
// Some
// Every
// Combine
```
