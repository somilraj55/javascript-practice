// ========================================
// Closures
// ========================================

// Definition:
// A Closure is created when an inner function
// remembers and accesses the variables of its
// outer function even after the outer function
// has finished executing.

// ========================================
// Scope Chain (Not a Closure)
// ========================================

// This is NOT a Closure because outer()
// is still executing.

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// Output:
// Hello

// ========================================
// Closure Example
// ========================================

// Here inner() is returned.
// Even after outerFunction() finishes,
// innerFunction() still remembers message.

function outerFunction() {
    let message = "Hello";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

const myFunction = outerFunction();

myFunction();

// Output:
// Hello

// ========================================
// Practice Example
// ========================================

function userName() {
    let name = "Somil";

    function displayName() {
        console.log(name);
    }

    return displayName;
}

const result = userName();

result();

// Output:
// Somil

// ========================================
// Counter Function using Closure
// ========================================

// A Counter Function remembers the value
// of count even after the outer function
// has finished executing.

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

// counter() is called only once.
const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

// ========================================
// Another Counter Example
// ========================================

function counterOne() {
    let count = 10;

    return function () {
        count++;
        console.log(count);
    };
}

const c = counterOne();

c(); // 11
c(); // 12
c(); // 13

// ========================================
// Multiple Closures
// ========================================

// Every call to counterTwo()
// creates a new Closure.

function counterTwo() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const c1 = counterTwo();
const c2 = counterTwo();

c1(); // 1
c1(); // 2
c2(); // 1
c1(); // 3
c2(); // 2

// c1 and c2 have different Closure.
// They do not share the same count.

// ========================================
// Practice Question 1
// ========================================

function score() {
    let points = 100;

    return function () {
        points += 10;
        console.log(points);
    };
}

const player = score();

player(); // 110
player(); // 120
player(); // 130

// ========================================
// Practice Question 2
// ========================================

function value() {
    let num = 5;

    return function () {
        num *= 2;
        console.log(num);
    };
}

const double = value();

double(); // 10
double(); // 20
double(); // 40

// ========================================
// Practice Question 3
// ========================================

function counterThree() {
    let count = 1;

    return function () {
        console.log(count);
        count++;
    };
}

const a = counterThree();
const b = counterThree();

a(); // 1
a(); // 2
b(); // 1
a(); // 3
b(); // 2

// ========================================
// Interview Revision
// ========================================

// Q1. What is a Closure?
// A Closure is created when an inner function
// remembers and accesses the variables of its
// outer function even after the outer function
// has finished executing.

// Q2. Is every nested function a Closure?
// No.
// A nested function becomes a Closure only
// when it remembers outer variables after
// the outer function has finished executing.

// Q3. What is a Counter Function?
// A Counter Function uses a Closure to
// remember the value of a variable.

// Q4. Why doesn't count become 0 every time?
// Because the inner function remembers
// the count variable using Closure.

// Q5. Why do c1 and c2 have different outputs?
// Every call to counterTwo()
// creates a new Closure with its own
// private count variable.

// Q6. What happens when counter()
// is called multiple times?
// Every call creates a new Closure
// with a separate memory.

// ========================================
// Important Points
// ========================================

// • Closure = Function + Lexical Environment.
// • Closure remembers outer variables.
// • Variables stay alive as long as
//   the returned function needs them.
// • Counter Function is a real-world
//   application of Closure.
// • Each Closure has its own private memory.
// • Different Closures do not share variables.
// • Every call to the outer function
//   creates a new Closure.