// ==========================================
// JavaScript For Loop Practice
// By: Somil
// ==========================================



// ==========================================
// What is a For Loop?
// ==========================================

// A for loop is used to execute a block of code
// multiple times.


// Syntax

/*
for(initialization; condition; increment/decrement){
    // code
}
*/



// ==========================================
// Basic Examples
// ==========================================

// Print numbers from 1 to 5

for(let i = 1; i <= 5; i++){
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5



// Reverse Counting

for(let i = 5; i >= 1; i--){
    console.log(i);
}

// Output:
// 5
// 4
// 3
// 2
// 1



// Print Even Numbers

for(let i = 2; i <= 10; i += 2){
    console.log(i);
}

// Output:
// 2
// 4
// 6
// 8
// 10



// Print a Word 5 Times

for(let i = 1; i <= 5; i++){
    console.log("Somil");
}

// Output:
// Somil
// Somil
// Somil
// Somil
// Somil




// ==========================================
// Practice Questions
// ==========================================


// Q1 Print 1 to 20

for(let i = 1; i <= 20; i++){
    console.log(i);
}



// Q2 Print 20 to 1

for(let i = 20; i >= 1; i--){
    console.log(i);
}



// Q3 Print Even Numbers (1-50)

for(let i = 2; i <= 50; i += 2){
    console.log(i);
}



// Q4 Print Odd Numbers (1-50)

for(let i = 1; i <= 50; i += 2){
    console.log(i);
}



// ==========================================
// Table Practice
// ==========================================


// 5 Table

for(let i = 1; i <= 10; i++){
    console.log("5 x " + i + " = " + (5 * i));
}



// 7 Table

for(let i = 1; i <= 10; i++){
    console.log("7 x " + i + " = " + (7 * i));
}



// 12 Table

for(let i = 1; i <= 10; i++){
    console.log("12 x " + i + " = " + (12 * i));
}



// Dynamic Table

let num = 9;

for(let i = 1; i <= 10; i++){
    console.log(num + " x " + i + " = " + (num * i));
}



// ==========================================
// Sum Programs
// ==========================================


// Sum from 1 to 10

let sum = 0;

for(let i = 1; i <= 10; i++){
    sum = sum + i;
}

console.log(sum);

// Output:
// 55




// Sum of Even Numbers

sum = 0;

for(let i = 2; i <= 20; i += 2){
    sum += i;
}

console.log(sum);

// Output:
// 110




// Sum of Odd Numbers

sum = 0;

for(let i = 1; i <= 20; i += 2){
    sum += i;
}

console.log(sum);

// Output:
// 100




// ==========================================
// If + For Loop
// ==========================================


// Fizz

for(let i = 1; i <= 20; i++){

    if(i % 3 === 0){
        console.log("Fizz");
    }else{
        console.log(i);
    }

}




// FizzBuzz

for(let i = 1; i <= 30; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }

}



// ==========================================
// Revision Notes
// ==========================================

// for loop has 3 parts

// Initialization
// let i = 1

// Condition
// i <= 10

// Increment
// i++

// Reverse Loop
// i--

// Even Numbers
// i += 2 (starting from 2)

// Odd Numbers
// i += 2 (starting from 1)

// Sum Logic
// sum = sum + i;

// Table Logic
// number * i

// Fizz
// i % 3 === 0

// Buzz
// i % 5 === 0

// FizzBuzz
// i % 3 === 0 && i % 5 === 0