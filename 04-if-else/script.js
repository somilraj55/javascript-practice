// ==========================================
// JavaScript If-Else Practice
// By: Somil
// ==========================================



// ==========================================
// What is if-else?
// ==========================================

// if-else is used to make decisions.
// If condition is true, if block executes.
// Otherwise else block executes.


// ==========================================
// Basic Examples
// ==========================================

// Example 1

let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output:
// Adult



// Example 2

let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Output:
// Odd



// Example 3

let marks = 85;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else {
    console.log("Fail");
}

// Output:
// B



// ==========================================
// Practice Questions
// ==========================================


// Q1 Adult or Minor

let personAge = 22;

if (personAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output:
// Adult



// Q2 Even or Odd

let number = 15;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Output:
// Odd



// Q3 Positive, Negative or Zero

let value = -5;

if (value > 0) {
    console.log("Positive");
} else if (value < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Output:
// Negative



// Q4 Largest of Two Numbers

let a = 10;
let b = 20;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

// Output:
// 20



// Q5 Login Check

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome");
} else {
    console.log("Please Login");
}

// Output:
// Welcome



// Q6 Grade

let score = 76;

if (score >= 90) {
    console.log("A");
} else if (score >= 75) {
    console.log("B");
} else if (score >= 60) {
    console.log("C");
} else {
    console.log("Fail");
}

// Output:
// B



// Q7 Eligible for Voting

let voteAge = 17;

if (voteAge >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// Output:
// Not Eligible



// Q8 Equal or Not

let x = 100;
let y = 100;

if (x === y) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}

// Output:
// Equal



// Q9 Empty String

let username = "";

if (username) {
    console.log("Not Empty");
} else {
    console.log("Empty");
}

// Output:
// Empty



// Q10 Truthy or Falsy

let data = 0;

if (data) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Output:
// Falsy




// ==========================================
// Logical Operators
// ==========================================


// AND (&&)

let age1 = 22;
let hasID = true;

if (age1 >= 18 && hasID) {
    console.log("Entry Allowed");
} else {
    console.log("Entry Denied");
}

// Output:
// Entry Allowed



// OR (||)

let email = "";
let phone = "9876543210";

if (email || phone) {
    console.log("Continue");
} else {
    console.log("No Contact");
}

// Output:
// Continue



// NOT (!)

let isAdmin = false;

if (!isAdmin) {
    console.log("Access Denied");
} else {
    console.log("Access Granted");
}

// Output:
// Access Denied




// ==========================================
// Interview Questions
// ==========================================


// Q1

let n = 0;

if (n) {
    console.log("Yes");
} else {
    console.log("No");
}

// Output:
// No



// Q2

let str = "";

if (str) {
    console.log("Filled");
} else {
    console.log("Empty");
}

// Output:
// Empty



// Q3

let value2 = null;

if (value2) {
    console.log("True");
} else {
    console.log("False");
}

// Output:
// False



// Q4

let num2 = 10;

if (!(num2 < 5)) {
    console.log("Correct");
} else {
    console.log("Wrong");
}

// Output:
// Correct



// Q5

let user = true;
let password = true;

if (user && password) {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}

// Output:
// Login Success




// ==========================================
// Revision Notes
// ==========================================

// if
// Executes when condition is true

// else
// Executes when if condition is false

// else if
// Checks multiple conditions

// &&
// Both conditions must be true

// ||
// At least one condition must be true

// !
// Reverses true/false