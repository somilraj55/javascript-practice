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



// ========================================
// Block Scope
// ========================================

// A block means anything inside { }.
// Variables declared with let and const
// are accessible only inside that block.

// ========================================
// Example 1
// ========================================

{
    let name = "Somil";
    console.log(name);
}

// Output:
// Somil

// ========================================
// Example 2
// ========================================

{
    let age = 21;
}

// console.log(age);
// ReferenceError: age is not defined

// ========================================
// Example 3
// ========================================

if (true) {
    const city = "Bokaro";
    console.log(city);
}

// Output:
// Bokaro

// ========================================
// var is NOT Block Scoped
// ========================================

// var ignores block scope.

{
    var language = "JavaScript";
}

console.log(language);

// Output:
// JavaScript

// ========================================
// var is Function Scoped
// ========================================

function test() {
    var x = 100;
    console.log(x);
}

test();

// Output:
// 100

// ========================================
// var cannot be accessed outside function
// ========================================

function demo() {
    var marks = 95;
}

// demo();

// console.log(marks);
// ReferenceError: marks is not defined

// ========================================
// let vs var
// ========================================

{
    let a = 10;
    var b = 20;
}

console.log(b);

// console.log(a);
// ReferenceError: a is not defined

// Output:
// 20

// ========================================
// Interview Revision
// ========================================

// 1. What is Block Scope?
// -> A block is anything inside { }.
//    Variables declared with let and const
//    can only be accessed inside that block.

// 2. Which keywords are block scoped?
// -> let and const

// 3. Is var block scoped?
// -> No

// 4. What is var?
// -> var is Function Scoped.

// 5. Can we access var outside a block?
// -> Yes

// 6. Can we access var outside a function?
// -> No

// 7. What error do we get when accessing
//    let or const outside their block?
// -> ReferenceError

// ========================================
// Important Points
// ========================================

// let  -> Block Scoped
// const -> Block Scoped
// var  -> Function Scoped
// var ignores block scope.
// let and const do not.












// ========================================
// Scope Chain (Lexical Scope)
// ========================================

// Scope Chain is the process of searching
// for a variable.
//
// JavaScript searches:
// 1. Current Scope
// 2. Outer Scope
// 3. Global Scope
//
// If the variable is not found anywhere,
// JavaScript throws a ReferenceError.

// ========================================
// Example 1
// ========================================

let language = "JavaScript";

function outer() {
    console.log(language);
}

outer();

// Output:
// JavaScript

// ========================================
// Example 2
// ========================================

let framework = "React";

function printFramework() {
    let framework = "Angular";
    console.log(framework);
}

printFramework();

// Output:
// Angular

// ========================================
// Example 3
// ========================================

let country = "India";

function first() {

    function second() {
        console.log(country);
    }

    second();
}

first();

// Output:
// India

// ========================================
// Example 4
// ========================================

let a = 10;

function one() {
    let b = 20;

    function two() {
        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    two();
}

one();

// Output:
// 10
// 20
// 30

// ========================================
// Example 5
// ========================================

let x = 100;

function demo() {
    console.log(x);
}

demo();

// Output:
// 100

// ========================================
// Example 6
// ========================================

let message = "Hello";

function firstFunction() {

    function secondFunction() {
        console.log(message);
    }

    secondFunction();
}

firstFunction();

// Output:
// Hello

// ========================================
// Variable Not Found
// ========================================

function test() {

    // console.log(age);

}

test();

// ReferenceError:
// age is not defined

// ========================================
// Interview Revision
// ========================================

// 1. What is Scope Chain?
// -> Scope Chain is the process of searching
//    for a variable.
//
//    JavaScript first searches the current scope.
//    If not found, it searches the outer scope.
//    Finally, it searches the global scope.
//    If the variable is not found anywhere,
//    JavaScript throws a ReferenceError.

// 2. What is Lexical Scope?
// -> Lexical Scope means the accessibility
//    of variables is determined by where
//    they are written in the code.

// 3. In which order does JavaScript search variables?
// -> Current Scope
// -> Outer Scope
// -> Global Scope

// 4. What happens if a variable is not found?
// -> JavaScript throws a ReferenceError.

// ========================================
// Important Points
// ========================================

// JavaScript always searches the current scope first.
// If not found, it searches the outer scope.
// Finally, it searches the global scope.
// If the variable is not found,
// JavaScript throws a ReferenceError.

// Scope Chain is also called Lexical Scope.