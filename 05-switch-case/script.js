// ==========================================
// JavaScript Switch Statement Practice
// By: Somil
// ==========================================



// ==========================================
// What is Switch?
// ==========================================

// switch is used when we need to compare
// one value with multiple cases.


// Syntax

/*
switch(expression){

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
*/



// ==========================================
// Example 1 - Day Name
// ==========================================

let day = 2;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}

// Output:
// Tuesday




// ==========================================
// Example 2 - Fruit
// ==========================================

let fruit = "Apple";

switch(fruit){

    case "Mango":
        console.log("Yellow");
        break;

    case "Apple":
        console.log("Red");
        break;

    default:
        console.log("Unknown");
}

// Output:
// Red




// ==========================================
// Example 3 - Grade
// ==========================================

let grade = "A";

switch(grade){

    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Good");
        break;

    case "C":
        console.log("Average");
        break;

    default:
        console.log("Fail");
}

// Output:
// Excellent




// ==========================================
// Fall Through Example
// ==========================================

let num = 1;

switch(num){

    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");

    default:
        console.log("End");
}

// Output:
// One
// Two
// Three
// End




// ==========================================
// Practice Questions
// ==========================================


// Q1 Month Name

let month = 4;

switch(month){

    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid Month");
}



// ==========================================
// Q2 Traffic Signal
// ==========================================

let signal = "green";

switch(signal){

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}



// ==========================================
// Q3 Calculator
// ==========================================

let a = 20;
let b = 10;
let operator = "+";

switch(operator){

    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;

    case "%":
        console.log(a % b);
        break;

    default:
        console.log("Invalid Operator");
}



// ==========================================
// Q4 Day Number
// ==========================================

let dayNumber = 7;

switch(dayNumber){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}



// ==========================================
// Q5 Grade
// ==========================================

let studentGrade = "B";

switch(studentGrade){

    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Good");
        break;

    case "C":
        console.log("Average");
        break;

    case "D":
        console.log("Pass");
        break;

    case "F":
        console.log("Fail");
        break;

    default:
        console.log("Invalid Grade");
}



// ==========================================
// Interview Questions
// ==========================================


// Q1

let value = 10;

switch(value){

    case 5:
        console.log("Five");
        break;

    case 10:
        console.log("Ten");
        break;

    default:
        console.log("Nothing");
}

// Output:
// Ten




// Q2

let number = 2;

switch(number){

    case 1:
        console.log("A");

    case 2:
        console.log("B");

    default:
        console.log("C");
}

// Output:
// B
// C




// Q3

let ch = "b";

switch(ch){

    case "a":
        console.log("Apple");
        break;

    case "b":
        console.log("Ball");

    case "c":
        console.log("Cat");
        break;

    default:
        console.log("None");
}

// Output:
// Ball
// Cat




// Q4

let number2 = 5;

switch(number2){

    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    default:
        console.log("Invalid");
}

// Output:
// Invalid




// ==========================================
// Revision Notes
// ==========================================

// switch
// Used for multiple conditions based on one value.

// case
// Compares the value.

// break
// Stops execution after a matched case.

// default
// Executes when no case matches.

// Fall Through
// Happens when break is omitted.