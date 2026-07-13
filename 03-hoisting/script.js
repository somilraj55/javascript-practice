// ==========================================
// JavaScript Hoisting Practice
// By: Somil
// ==========================================


// ==========================================
// What is Hoisting?
// ==========================================

// Hoisting is JavaScript's default behavior of moving
// variable and function declarations to the top of their scope.


// ==========================================
// var Hoisting
// ==========================================

console.log(a);

var a = 10;

// Output:
// undefined

// Reason:
// var is hoisted and initialized with undefined.


// ==========================================
// let Hoisting
// ==========================================

// console.log(b);

// let b = 20;

// Output:
// ReferenceError

// Reason:
// let is hoisted but remains in the
// Temporal Dead Zone (TDZ).


// ==========================================
// const Hoisting
// ==========================================

// console.log(c);

// const c = 30;

// Output:
// ReferenceError

// Reason:
// const is also in the TDZ.


// ==========================================
// Variable after Declaration
// ==========================================

var x = 100;
console.log(x);

// Output:
// 100


let y = 200;
console.log(y);

// Output:
// 200


const z = 300;
console.log(z);

// Output:
// 300


// ==========================================
// Function Hoisting
// ==========================================

greet();

function greet() {
    console.log("Hello");
}

// Output:
// Hello

// Reason:
// Function declarations are completely hoisted.


// ==========================================
// Function Expression
// ==========================================

// sayHello();

// var sayHello = function () {
//     console.log("Hi");
// };

// Output:
// TypeError

// Reason:
// sayHello becomes undefined during hoisting.


// ==========================================
// Arrow Function
// ==========================================

// greetUser();

// const greetUser = () => {
//     console.log("Welcome");
// };

// Output:
// ReferenceError

// Reason:
// Arrow functions stored in const are not callable
// before initialization.


// ==========================================
// Temporal Dead Zone (TDZ)
// ==========================================

// console.log(firstName);

// let firstName = "Somil";

// Output:
// ReferenceError

// TDZ starts from the beginning of the block
// until the variable is initialized.


// ==========================================
// Interview Questions
// ==========================================

// Q1

var p = 10;

console.log(p);

// Output:
// 10


// Q2

console.log(q);

var q = 20;

// Output:
// undefined


// Q3

// console.log(r);

// let r = 30;

// Output:
// ReferenceError


// Q4

// console.log(s);

// const s = 40;

// Output:
// ReferenceError


// Q5

function add() {
    console.log(10 + 20);
}

add();

// Output:
// 30


// ==========================================
// Practice Questions
// ==========================================

// Q1

console.log(num);

var num = 5;

// Answer:
// undefined


// Q2

// console.log(age);

// let age = 21;

// Answer:
// ReferenceError


// Q3

// console.log(city);

// const city = "Bokaro";

// Answer:
// ReferenceError


// Q4

hello();

function hello() {
    console.log("Hello World");
}

// Answer:
// Hello World


// Q5

// test();

// var test = function () {
//     console.log("Testing");
// };

// Answer:
// TypeError


// Q6

// greetMe();

// let greetMe = function () {
//     console.log("Hi");
// };

// Answer:
// ReferenceError


// ==========================================
// Revision Notes
// ==========================================

// var
// ✔ Hoisted
// ✔ Initialized with undefined

// let
// ✔ Hoisted
// ✘ Not initialized
// ✔ TDZ

// const
// ✔ Hoisted
// ✘ Not initialized
// ✔ TDZ

// Function Declaration
// ✔ Completely Hoisted

// Function Expression
// ✘ Not callable before initialization

// Arrow Function
// ✘ Not callable before initialization