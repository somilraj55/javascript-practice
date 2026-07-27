// ========================================
// Functions in JavaScript
// ========================================


// ========================================
// Function Declaration
// Notes:
// - Function is a block of reusable code.
// - Declare using 'function' keyword.
// - Can be called before declaration (Hoisting).
// ========================================

function greet() {
    console.log("Hello");
}

greet();


// ========================================
// Practice 1
// ========================================

function abc() {
    console.log("Welcome to JavaScript");
}

abc();


// ========================================
// Practice 2
// ========================================

function pattern() {
    console.log("*****");
}

pattern();
pattern();
pattern();


// ========================================
// Parameters and Arguments
// Notes:
// - Parameter = Variable in function definition.
// - Argument = Value passed while calling function.
// ========================================

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Somil");
greetUser("Rahul");
greetUser("Aman");


// ========================================
// Return Keyword
// Notes:
// - return sends a value back.
// - return stops function execution.
// ========================================

function add(a, b) {
    return a + b;
}

let sum = add(10, 20);

console.log(sum);


// ========================================
// return stops execution
// ========================================

function demo() {
    console.log("Hello");

    return;

    console.log("World");
}

demo();


// ========================================
// Even or Odd
// ========================================

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));


// ========================================
// Short Version
// ========================================

function isEven2(num) {
    return num % 2 === 0;
}

console.log(isEven2(8));
console.log(isEven2(9));


// ========================================
// Function Expression
// Notes:
// - Function stored inside a variable.
// - Cannot be called before initialization.
// ========================================

let welcome = function () {
    console.log("Welcome to JavaScript");
};

welcome();


// ========================================
// Function Declaration Hoisting
// Notes:
// - Function Declaration is fully hoisted.
// ========================================

greetAgain();

function greetAgain() {
    console.log("Hello from Function Declaration");
}


// ========================================
// Function Expression with let
// Notes:
// - Calling before initialization gives ReferenceError.
// ========================================

/*
hello();

let hello = function () {
    console.log("Hello");
};
*/


// ========================================
// Function Expression with var
// Notes:
// - var is hoisted as undefined.
// - Calling it gives TypeError.
// ========================================

/*
sayHi();

var sayHi = function () {
    console.log("Hi");
};
*/


// ========================================
// Correct Function Expression
// ========================================

let multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 4));


// ========================================
// Another Example
// ========================================

const cube = function (num) {
    return num * num * num;
};

console.log(cube(2));
console.log(cube(3));


// ========================================
// Quick Revision
// ========================================

// ✔ Function = Reusable block of code
// ✔ Parameter = Variable
// ✔ Argument = Value
// ✔ return = Sends value + Stops execution
// ✔ Function Declaration = Hoisted
// ✔ Function Expression = Not fully hoisted
// ✔ let + Function Expression = ReferenceError
// ✔ var + Function Expression = TypeError




// ========================================
// Interview Revision
// ========================================

// Q1. Difference between Parameter and Argument?
// Q2. Difference between console.log() and return?
// Q3. What is Function Expression?
// Q4. Difference between Function Declaration and Function Expression?
// Q5. Why does Function Declaration work before declaration?
// Q6. Why does Function Expression with let give ReferenceError?
// Q7. Why does Function Expression with var give TypeError?
