// ========================================
// Arrow Functions (ES6)
// ========================================

// Notes:
// - Introduced in ES6.
// - Short syntax for writing functions.
// - Mostly used in React, Node.js and Modern JavaScript.
// - Works similar to Function Expression.


// ========================================
// Basic Arrow Function
// ========================================

const greet = () => {
    console.log("Hello");
};

greet();


// ========================================
// Example 1
// ========================================

const welcome = () => {
    console.log("Welcome to JavaScript");
};

welcome();


// ========================================
// Example 2
// ========================================

const hello = () => {
    console.log("Hello World");
};

hello();


// ========================================
// Practice 1
// ========================================

const learn = () => {
    console.log("Learning JavaScript");
};

learn();


// ========================================
// Practice 2
// ========================================

const pattern = () => {
    console.log("*****");
};

pattern();


// ========================================
// Arrow Function with Parameters
// ========================================

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// ========================================
// Implicit Return
// Notes:
// - If function has only one expression,
//   return keyword is not required.
// ========================================

const sum = (a, b) => a + b;

console.log(sum(5, 10));


// ========================================
// Square Number
// ========================================

const square = (num) => num * num;

console.log(square(5));


// ========================================
// Even or Odd
// ========================================

const isEven = (num) => num % 2 === 0;

console.log(isEven(4));
console.log(isEven(7));


// ========================================
// Single Parameter Shortcut
// Notes:
// - If there is only one parameter,
//   brackets () are optional.
// ========================================

const cube = num => num * num * num;

console.log(cube(3));


// ========================================
// Another Example
// ========================================

const isPositive = num => num > 0;

console.log(isPositive(5));
console.log(isPositive(-2));


// ========================================
// No Parameter
// Notes:
// - Empty brackets () are required.
// ========================================

const sayHi = () => {
    console.log("Hi");
};

sayHi();


// ========================================
// Multiple Parameters
// Notes:
// - Brackets () are required.
// ========================================

const multiply = (a, b) => a * b;

console.log(multiply(4, 5));


// ========================================
// Multi-line Arrow Function
// Notes:
// - Curly braces {} create function body.
// - return keyword is required.
// ========================================

const subtract = (a, b) => {
    let result = a - b;
    return result;
};

console.log(subtract(20, 8));


// ========================================
// Returning Object (Wrong Way)
// ========================================

const getUser1 = () => {
    name: "Somil";
};

console.log(getUser1()); // undefined


// ========================================
// Returning Object (Correct Way)
// Notes:
// - Wrap object inside ().
// ========================================

const getUser2 = () => ({
    name: "Somil"
});

console.log(getUser2());


// ========================================
// Object with Multiple Properties
// ========================================

const student = () => ({
    name: "Somil",
    age: 21,
    course: "BCA"
});

console.log(student());


// ========================================
// Practice 3
// ========================================

const mobile = () => ({
    brand: "Apple"
});

console.log(mobile());


// ========================================
// Practice 4
// ========================================

const address = () => ({
    city: "Bokaro",
    state: "Jharkhand"
});

console.log(address());


// ========================================
// Interview Revision
// ========================================

// Q1. What is Arrow Function?
// Q2. In which version was Arrow Function introduced?
// Q3. What is Implicit Return?
// Q4. Difference between Explicit Return and Implicit Return?
// Q5. When can we remove parentheses ()?
// Q6. Are parentheses required for multiple parameters?
// Q7. Are parentheses required for zero parameters?
// Q8. Is return required in a multi-line Arrow Function?
// Q9. Why does {} not return an object?
// Q10. How do you return an object from an Arrow Function?
// Q11. Difference between Function Expression and Arrow Function?


// ========================================
// Important Points
// ========================================

// ✔ Introduced in ES6
// ✔ Short syntax for writing functions
// ✔ Mostly used in React and Modern JavaScript
// ✔ Single-line function supports Implicit Return
// ✔ Multi-line function requires return keyword
// ✔ Single parameter → () optional
// ✔ Zero parameter → () required
// ✔ Multiple parameters → () required
// ✔ {} = Function Body
// ✔ ({}) = Returning Object