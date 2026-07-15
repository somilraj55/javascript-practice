// ==========================================
// JavaScript While Loop Practice
// By: Somil
// ==========================================



// ==========================================
// What is While Loop?
// ==========================================

// while loop executes code until
// the condition becomes false.


// Syntax

/*
while(condition){
    // code
}
*/



// ==========================================
// Example 1
// Print Numbers 1 to 5
// ==========================================

let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

// Output
// 1
// 2
// 3
// 4
// 5




// ==========================================
// Example 2
// Reverse Counting
// ==========================================

let j = 5;

while(j >= 1){
    console.log(j);
    j--;
}

// Output
// 5
// 4
// 3
// 2
// 1




// ==========================================
// Question 1
// Count Digits
// ==========================================

let num = 987654321;

let count = 0;

while(num > 0){
    num = Math.floor(num / 10);
    count++;
}

console.log(count);

// Output
// 9




// ==========================================
// Question 2
// Reverse Number
// ==========================================

num = 12345;

let reverse = 0;

while(num > 0){

    let lastDigit = num % 10;

    reverse = reverse * 10 + lastDigit;

    num = Math.floor(num / 10);

}

console.log(reverse);

// Output
// 54321




// ==========================================
// Question 3
// Sum of Digits
// ==========================================

num = 12345;

let sum = 0;

while(num > 0){

    let lastDigit = num % 10;

    sum = sum + lastDigit;

    num = Math.floor(num / 10);

}

console.log(sum);

// Output
// 15




// ==========================================
// Revision Notes
// ==========================================

// while loop
// Executes until condition becomes false.


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




// ==========================================
// Important Concepts
// ==========================================

// % 10
// Gives the last digit.

// Math.floor(num / 10)
// Removes the last digit.

// while(num > 0)
// Loop runs until the number becomes 0.