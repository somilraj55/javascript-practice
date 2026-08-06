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




// ========================================
// slice() Method
// ========================================

// Definition:
// slice() is used to copy a portion of an
// array into a new array without modifying
// the original array.

// Syntax:
// array.slice(startIndex, endIndex);

// startIndex -> Included
// endIndex -> Excluded

// ========================================
// Example 1
// ========================================

let fruits = ["Apple", "Mango", "Banana", "Orange"];

let result = fruits.slice(1, 3);

console.log(result);
console.log(fruits);

// Output:
// ["Mango", "Banana"]
// ["Apple", "Mango", "Banana", "Orange"]

// Original array is NOT modified.

// ========================================
// Example 2
// ========================================

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(2));

// Output:
// [30, 40, 50]

// If endIndex is not provided,
// slice() copies till the last element.

// ========================================
// Example 3
// ========================================

let technologies = ["HTML", "CSS", "JavaScript"];

console.log(technologies.slice());

// Output:
// ["HTML", "CSS", "JavaScript"]

// slice() without arguments
// returns a copy of the entire array.

// ========================================
// Example 4
// ========================================

let colors = ["Red", "Green", "Blue", "Yellow"];

console.log(colors.slice(1, 2));

// Output:
// ["Green"]

// endIndex is NOT included.

// ========================================
// Practice Example 1
// ========================================

let arr1 = [10, 20, 30, 40];

console.log(arr1.slice(1, 3));

// Output:
// [20, 30]

// ========================================
// Practice Example 2
// ========================================

let arr2 = ["A", "B", "C", "D"];

console.log(arr2.slice(2));

// Output:
// ["C", "D"]

// ========================================
// Practice Example 3
// ========================================

let arr3 = ["HTML", "CSS", "JS"];

let copy = arr3.slice();

console.log(copy);
console.log(arr3);

// Output:
// ["HTML", "CSS", "JS"]
// ["HTML", "CSS", "JS"]

// ========================================
// Difference Between splice() and slice()
// ========================================

// splice()
// • Modifies original array.
// • Used to add, remove and replace elements.
// • Returns removed elements.

// slice()
// • Does NOT modify original array.
// • Used to copy elements.
// • Returns copied elements.

// ========================================
// Interview Questions
// ========================================

// Q1. What is slice()?
// slice() is used to copy a portion of an
// array into a new array.

// Q2. Does slice() modify the original array?
// No.

// Q3. What does slice() return?
// A new array containing copied elements.

// Q4. What is the difference between
// splice() and slice()?

// splice()
// • Changes original array.
// • Add, Remove, Replace.

// slice()
// • Does not change original array.
// • Only copies elements.

// ========================================
// Important Points
// ========================================

// • slice() creates a new array.
// • Original array remains unchanged.
// • startIndex is included.
// • endIndex is excluded.
// • If endIndex is omitted,
//   elements are copied till the end.
// • slice() without arguments
//   copies the whole array.