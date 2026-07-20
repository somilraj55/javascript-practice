// ==========================================
// JavaScript While Loop Practice
// By: Somil
// ==========================================



// ==========================================
// What is While Loop?
// ==========================================

// while loop executes code until
// the condition becomes false.

/*
Syntax

while(condition){
    // code
}
*/



// ==========================================
// Example 1
// Print Numbers 1 to 5
// ==========================================

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}



// ==========================================
// Example 2
// Reverse Counting
// ==========================================

let j = 5;

while (j >= 1) {
    console.log(j);
    j--;
}



// ==========================================
// Question 1
// Count Digits
// ==========================================

let num = 987654321;

let count = 0;

while (num > 0) {
    num = Math.floor(num / 10);
    count++;
}

console.log(count);

// Output: 9



// ==========================================
// Question 2
// Reverse Number
// ==========================================

let num = 12345;

let reverse = 0;

while (num > 0) {

    let lastDigit = num % 10;

    reverse = reverse * 10 + lastDigit;

    num = Math.floor(num / 10);

}

console.log(reverse);

// Output: 54321



// ==========================================
// Question 3
// Sum of Digits
// ==========================================

let num = 12345;

let sum = 0;

while (num > 0) {

    let lastDigit = num % 10;

    sum = sum + lastDigit;

    num = Math.floor(num / 10);

}

console.log(sum);

// Output: 15



// ==========================================
// Question 4
// Product of Digits
// ==========================================

let num = 12345;

let product = 1;

while (num > 0) {

    let lastDigit = num % 10;

    product = product * lastDigit;

    num = Math.floor(num / 10);

}

console.log(product);

// Output: 120



// ==========================================
// Question 5
// Palindrome Number
// ==========================================

let num = 121;

let original = num;

let reverse = 0;

while (num > 0) {

    let lastDigit = num % 10;

    reverse = reverse * 10 + lastDigit;

    num = Math.floor(num / 10);

}

if (original === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}



// ==========================================
// Question 6
// Armstrong Number
// ==========================================

let num = 153;

let original = num;

let sum = 0;

while (num > 0) {

    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    sum = sum + (lastDigit ** 3);

}

if (original === sum) {
    console.log("Armstrong");
} else {
    console.log("Not Armstrong");
}



// ==========================================
// Revision Notes
// ==========================================

// Count Digits
// count++;
// num = Math.floor(num / 10);


// Reverse Number
// lastDigit = num % 10;
// reverse = reverse * 10 + lastDigit;
// num = Math.floor(num / 10);


// Sum of Digits
// lastDigit = num % 10;
// sum = sum + lastDigit;
// num = Math.floor(num / 10);


// Product of Digits
// lastDigit = num % 10;
// product = product * lastDigit;
// num = Math.floor(num / 10);


// Palindrome Number
// original = num;
// reverse = reverse * 10 + lastDigit;
// if(original === reverse)


// Armstrong Number
// original = num;
// sum = sum + (lastDigit ** 3);
// if(original === sum)



// ==========================================
// Important Concepts
// ==========================================

// % 10                -> Gives the last digit
// Math.floor(num / 10) -> Removes the last digit
// while(num > 0)       -> Loop runs until number becomes 0



