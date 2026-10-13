// ========================================
// Synchronous vs Asynchronous JavaScript
// ========================================


// ========================================
// PART 1 - Synchronous JavaScript
// ========================================

// Synchronous code executes line by line.

console.log("First");
console.log("Second");
console.log("Third");

// Output:
// First
// Second
// Third


// ========================================
// PART 2 - Asynchronous JavaScript
// ========================================

// Asynchronous tasks can be scheduled to run later.

console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");

// Output:
// A
// C
// B


// ========================================
// PART 3 - setTimeout() with 0 milliseconds
// ========================================

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timer


// ========================================
// PART 4 - Call Stack
// ========================================

function first() {
    console.log("First function");
}

function second() {
    console.log("Second function");
    first();
    console.log("Second function finished");
}

second();

// Output:
// Second function
// First function
// Second function finished


// ========================================
// PART 5 - return in Function Calls
// ========================================

function one() {
    console.log("A");
    return two();
    console.log("B");
}

function two() {
    console.log("C");
    return "D";
}

console.log(one());

// Output:
// A
// C
// D


// ========================================
// IMPORTANT POINTS
// ========================================

/*
1. Synchronous code executes line by line.

2. setTimeout() schedules a callback for later.

3. setTimeout(callback, 0) does not run the
   callback before the current synchronous code finishes.

4. The Call Stack tracks currently executing functions.

5. A function call pauses the caller until the
   called function finishes.

6. return ends the current function's execution.

7. Code written after return in the same execution
   path does not run.
*/
