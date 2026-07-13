// ==========================================
// JavaScript Data Types Practice
// By: Somil
// ==========================================

// ==========================================
// Primitive Data Types
// ==========================================

// 1. Number
let age = 21;
console.log(age);
console.log(typeof age);

// Output:
// 21
// number


// 2. String
let name = "Somil";
console.log(name);
console.log(typeof name);

// Output:
// Somil
// string


// 3. Boolean
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// Output:
// true
// boolean


// 4. Undefined
let city;
console.log(city);
console.log(typeof city);

// Output:
// undefined
// undefined


// 5. Null
let value = null;
console.log(value);
console.log(typeof value);

// Output:
// null
// object


// 6. BigInt
let bigNumber = 12345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

// Output:
// bigint


// 7. Symbol
let id = Symbol("id");
console.log(id);
console.log(typeof id);

// Output:
// symbol



// ==========================================
// Non Primitive Data Types
// ==========================================

// Object
let person = {
    name: "Somil",
    age: 21
};

console.log(person);
console.log(typeof person);

// Output:
// object


// Array
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(typeof fruits);

// Output:
// object


// Function
function greet() {
    console.log("Hello");
}

console.log(typeof greet);

// Output:
// function



// ==========================================
// Practice Questions
// ==========================================

// Q1
// What is the output?

console.log(typeof 100);

// Answer:
// number



// Q2

console.log(typeof "Hello");

// Answer:
// string



// Q3

console.log(typeof true);

// Answer:
// boolean



// Q4

console.log(typeof undefined);

// Answer:
// undefined



// Q5

console.log(typeof null);

// Answer:
// object



// Q6

console.log(typeof []);

// Answer:
// object



// Q7

console.log(typeof {});

// Answer:
// object



// Q8

console.log(typeof function () { });

// Answer:
// function



// ==========================================
// Truthy and Falsy Values
// ==========================================

// Falsy Values

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Output:
// false
// false
// false
// false
// false
// false
// false


// Truthy Values

console.log(Boolean(1));
console.log(Boolean("Somil"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("false"));

// Output:
// true
// true
// true
// true
// true



// ==========================================
// Interview Questions
// ==========================================

// typeof null
console.log(typeof null);

// Answer:
// object


// typeof NaN
console.log(typeof NaN);

// Answer:
// number


// Array is object?
console.log(typeof []);

// Answer:
// object


// Function is?
console.log(typeof function () { });

// Answer:
// function


// String vs Number

let num = 10;
let str = "10";

console.log(typeof num);
console.log(typeof str);

// Output:
// number
// string