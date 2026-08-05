// ========================================
// Arrays - Part 1
// ========================================

// Definition:
// An array is a special data structure
// used to store multiple values in a
// single variable.

// ========================================
// Creating Arrays
// ========================================

let students = ["Somil", "Rahul", "Aman"];

console.log(students);

// Output:
// ["Somil", "Rahul", "Aman"]

// ========================================
// Different Types of Arrays
// ========================================

// String Array
let names = ["Somil", "Rahul", "Aman"];

// Number Array
let marks = [80, 90, 95];

// Boolean Array
let status = [true, false, true];

// Mixed Data Types
let data = ["Somil", 21, true, null];

console.log(names);
console.log(marks);
console.log(status);
console.log(data);

// ========================================
// Accessing Elements
// ========================================

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Output:
// Apple
// Mango
// Banana

// ========================================
// length Property
// ========================================

console.log(fruits.length);

// Output:
// 3

// Last Element

console.log(fruits[fruits.length - 1]);

// Output:
// Banana

// ========================================
// Updating Elements
// ========================================

let colors = ["Red", "Green", "Blue"];

colors[2] = "Yellow";

console.log(colors);

// Output:
// ["Red", "Green", "Yellow"]

// ========================================
// Adding Element Using Index
// ========================================

let city = ["Delhi", "Mumbai", "Bokaro"];

city[3] = "Ranchi";

console.log(city);

// Output:
// ["Delhi", "Mumbai", "Bokaro", "Ranchi"]

// ========================================
// Sparse Array
// ========================================

let arr = ["A", "B"];

arr[5] = "C";

console.log(arr);
console.log(arr.length);

console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// Output:
// ["A","B", empty × 3, "C"] (console may display holes differently)
// 6
// undefined
// undefined
// undefined

// ========================================
// push()
// ========================================

let numbers = [10, 20];

let result = numbers.push(30);

console.log(numbers);

console.log(result);

// Output:
// [10,20,30]
// 3

// push()
// Adds element at the end.
// Returns new length.

// ========================================
// Multiple push()
// ========================================

let nums = [1, 2];

let x = nums.push(3, 4);

console.log(nums);

console.log(x);

// Output:
// [1,2,3,4]
// 4

// ========================================
// pop()
// ========================================

let fruitsOne = ["Apple", "Mango", "Banana"];

let removed = fruitsOne.pop();

console.log(fruitsOne);

console.log(removed);

// Output:
// ["Apple","Mango"]
// Banana

// pop()
// Removes last element.
// Returns removed element.

// ========================================
// shift()
// ========================================

let fruitsTwo = ["Apple", "Mango", "Banana"];

let first = fruitsTwo.shift();

console.log(fruitsTwo);

console.log(first);

// Output:
// ["Mango","Banana"]
// Apple

// shift()
// Removes first element.
// Returns removed element.

// ========================================
// unshift()
// ========================================

let fruitsThree = ["Mango", "Banana"];

let length = fruitsThree.unshift("Apple");

console.log(fruitsThree);

console.log(length);

// Output:
// ["Apple","Mango","Banana"]
// 3

// unshift()
// Adds element at the beginning.
// Returns new length.

// ========================================
// Interview Revision
// ========================================

// Q1. What is an Array?
// An array is a special data structure
// used to store multiple values
// in a single variable.

// Q2. Why do we use Arrays?
// To store multiple values in one variable,
// organize data efficiently, and access
// elements using index numbers.

// Q3. Can an Array store different data types?
// Yes.
// JavaScript arrays can store strings,
// numbers, booleans, objects,
// arrays, functions, etc.

// Q4. From which index does an Array start?
// 0

// Q5. How do you access the last element?
// array[array.length - 1]

// Q6. What does push() return?
// New length of the array.

// Q7. What does pop() return?
// Removed last element.

// Q8. What does shift() return?
// Removed first element.

// Q9. What does unshift() return?
// New length of the array.

// ========================================
// Important Points
// ========================================

// • Arrays store multiple values.
// • Array index starts from 0.
// • Last Index = length - 1.
// • Arrays can store mixed data types.
// • Access non-existing index -> undefined.
// • push() adds element at the end.
// • pop() removes element from the end.
// • shift() removes first element.
// • unshift() adds element at the beginning.
// • push() & unshift() return new length.
// • pop() & shift() return removed element.