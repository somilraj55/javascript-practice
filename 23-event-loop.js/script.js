// ========================================
// JavaScript Event Loop
// ========================================


// Part 1: Synchronous Code + setTimeout

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
// Part 2: Promise vs setTimeout
// ========================================

console.log("First");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("Last");

// Output:
// First
// Last
// Promise
// setTimeout


// ========================================
// Part 3: Promise Chaining + setTimeout
// ========================================

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise 1");
    })
    .then(() => {
        console.log("Promise 2");
    });

console.log("End");

// Output:
// Start
// End
// Promise 1
// Promise 2
// Timer


// ========================================
// IMPORTANT POINTS
// ========================================

// 1. Synchronous code pehle execute hota hai.
// 2. setTimeout callback baad mein execute hota hai.
// 3. Promise .then() callback microtask hota hai.
// 4. Promise microtasks, timer callbacks se pehle execute hote hain.
// 5. Event Loop ready callbacks ko execute hone ka mauka deta hai.