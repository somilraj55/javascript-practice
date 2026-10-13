// ========================================
// JavaScript Promises - Basics
// ========================================


// Part 1: Promise States

// 1. Pending   - Promise ka result abhi nahi aaya
// 2. Fulfilled - Promise successfully complete hua
// 3. Rejected  - Promise fail ho gaya


// ========================================
// Part 2: Promise.resolve()
// ========================================

console.log("Start");

Promise.resolve("Task Completed").then((result) => {
  console.log(result);
});

console.log("End");

// Output:
// Start
// End
// Task Completed


// ========================================
// Part 3: Promise vs setTimeout
// ========================================

console.log("First");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("Last");

// Output:
// First
// Last
// Promise
// Timer


// ========================================
// IMPORTANT POINTS
// ========================================

// 1. Promise asynchronous operations ko handle karne mein help karta hai.
// 2. Promise ki 3 states hoti hain: pending, fulfilled, rejected.
// 3. .then() fulfilled Promise ke result ko handle kar sakta hai.
// 4. Promise callbacks microtask queue mein schedule hote hain.
// 5. Synchronous code pehle execute hota hai.