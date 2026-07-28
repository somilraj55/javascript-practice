// ========================================
// Scope
// ========================================

// ========================================
// What is Scope?
// ========================================

// Scope means the area where a variable can be accessed.

// ========================================
// Global Scope
// ========================================

// Variables declared outside any function or block
// can be accessed from anywhere in the program.

let city = "Bokaro";

function showCity() {
    console.log(city);
}

showCity();
console.log(city);

// ----------------------------------------

const language = "JavaScript";

function learnLanguage() {
    console.log(language);
}

learnLanguage();
console.log(language);

// ----------------------------------------

let country = "India";

function one() {
    console.log(country);
}

function two() {
    console.log(country);
}

one();
two();
console.log(country);

// ========================================
// Function Scope
// ========================================

// Variables declared inside a function
// are called Local Variables.
// They can only be accessed inside that function.

function greet() {
    let message = "Hello";
    console.log(message);
}

greet();

// ----------------------------------------

function test() {
    let age = 21;
    console.log(age);
}

test();

// ----------------------------------------

// Accessing a local variable outside
// the function gives ReferenceError.

function sayHello() {
    let message = "Hello";
    console.log(message);
}

sayHello();

// console.log(message);
// ReferenceError: message is not defined

// ========================================
// Variable Shadowing
// ========================================

// A local variable with the same name
// as a global variable hides (shadows)
// the global variable inside the function.

let place = "Bokaro";

function printPlace() {
    let place = "Delhi";
    console.log(place);
}

printPlace(); // Delhi
console.log(place); // Bokaro

// ----------------------------------------

let tech = "JavaScript";

function coding() {
    console.log(tech);
}

coding(); // JavaScript

// ----------------------------------------

let course = "JavaScript";

function study() {
    let course = "React";
    console.log(course);
}

study(); // React
console.log(course); // JavaScript

// ========================================
// TDZ Revision with Scope
// ========================================

// JavaScript first checks the current scope.
// Here, x exists in the current scope,
// but it is inside the Temporal Dead Zone.

let x = 10;

function demo() {
    // console.log(x);
    // ReferenceError:
    // Cannot access 'x' before initialization

    let x = 20;
}

demo();

// ========================================
// Interview Revision
// ========================================

// 1. What is Scope?
// -> Scope is the area where a variable can be accessed.

// 2. What is Global Scope?
// -> Variables declared outside functions or blocks
//    can be accessed anywhere.

// 3. What is Function Scope?
// -> Variables declared inside a function
//    can only be accessed inside that function.

// 4. What is a Local Variable?
// -> A variable declared inside a function.

// 5. Can a local variable be accessed outside a function?
// -> No. It gives a ReferenceError.

// 6. What is Variable Shadowing?
// -> A local variable with the same name
//    hides the global variable inside its scope.

// 7. How does JavaScript search for variables?
// -> JavaScript first looks in the current scope.
//    If not found, it looks in the outer scope.
//    This is called the Scope Chain.

// 8. Why does this give an error?
//
// let x = 10;
//
// function test() {
//     console.log(x);
//     let x = 20;
// }
//
// -> Because the local x is in the
//    Temporal Dead Zone (TDZ).