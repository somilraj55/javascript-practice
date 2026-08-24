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
// splice() Method
// ========================================

// Definition:
// splice() is used to add, remove, or replace
// elements in an array.
//
// Syntax:
// array.splice(startIndex, deleteCount, item1, item2, ...)

// ========================================
// Example 1 - Remove Elements
// ========================================

let fruits = ["Apple", "Mango", "Banana", "Orange"];

fruits.splice(1, 2);

console.log(fruits);

// Output:
// ["Apple", "Orange"]

// ========================================
// Example 2 - Return Removed Elements
// ========================================

let fruitsOne = ["Apple", "Mango", "Banana"];

let removed = fruitsOne.splice(1, 1);

console.log(removed);
console.log(fruitsOne);

// Output:
// ["Mango"]
// ["Apple", "Banana"]

// ========================================
// Example 3 - Add Elements
// ========================================

let fruitsTwo = ["Apple", "Banana"];

fruitsTwo.splice(1, 0, "Mango");

console.log(fruitsTwo);

// Output:
// ["Apple", "Mango", "Banana"]

// ========================================
// Example 4 - Replace Elements
// ========================================

let fruitsThree = ["Apple", "Mango", "Banana"];

fruitsThree.splice(1, 1, "Orange");

console.log(fruitsThree);

// Output:
// ["Apple", "Orange", "Banana"]

// ========================================
// Example 5
// ========================================

let numbers = [1, 2, 3, 4];

let removedNumbers = numbers.splice(1, 2);

console.log(removedNumbers);
console.log(numbers);

// Output:
// [2, 3]
// [1, 4]

// ========================================
// Example 6
// ========================================

let languages = ["HTML", "CSS", "React"];

let removedLanguage = languages.splice(1, 1, "JavaScript");

console.log(removedLanguage);
console.log(languages);

// Output:
// ["CSS"]
// ["HTML", "JavaScript", "React"]

// ========================================
// Interview Questions - splice()
// ========================================

// Q1. What is splice()?
// splice() is used to add, remove,
// or replace elements in an array.

// Q2. Does splice() modify the original array?
// Yes.

// Q3. What does splice() return?
// It returns an array containing
// the removed elements.

// ========================================
// Important Points - splice()
// ========================================

// • Modifies the original array.
// • Used to Add, Remove and Replace.
// • Returns removed elements.

// ========================================
// slice() Method
// ========================================

// Definition:
// slice() is used to copy a portion of
// an array into a new array without
// modifying the original array.
//
// Syntax:
// array.slice(startIndex, endIndex)

// startIndex -> Included
// endIndex -> Excluded

// ========================================
// Example 1
// ========================================

let fruitsFour = ["Apple", "Mango", "Banana", "Orange"];

let result = fruitsFour.slice(1, 3);

console.log(result);
console.log(fruitsFour);

// Output:
// ["Mango", "Banana"]
// ["Apple", "Mango", "Banana", "Orange"]

// ========================================
// Example 2
// ========================================

let marks = [10, 20, 30, 40, 50];

console.log(marks.slice(2));

// Output:
// [30, 40, 50]

// ========================================
// Example 3
// ========================================

let tech = ["HTML", "CSS", "JavaScript"];

console.log(tech.slice());

// Output:
// ["HTML", "CSS", "JavaScript"]

// ========================================
// Example 4
// ========================================

let colors = ["Red", "Green", "Blue", "Yellow"];

console.log(colors.slice(1, 2));

// Output:
// ["Green"]

// ========================================
// Example 5
// ========================================

let arr1 = [10, 20, 30, 40];

console.log(arr1.slice(1, 3));

// Output:
// [20, 30]

// ========================================
// Example 6
// ========================================

let arr2 = ["A", "B", "C", "D"];

console.log(arr2.slice(2));

// Output:
// ["C", "D"]

// ========================================
// Example 7
// ========================================

let arr3 = ["HTML", "CSS", "JS"];

let copy = arr3.slice();

console.log(copy);
console.log(arr3);

// Output:
// ["HTML", "CSS", "JS"]
// ["HTML", "CSS", "JS"]

// ========================================
// Difference Between splice() & slice()
// ========================================

// splice()
// • Modifies original array.
// • Used to Add, Remove and Replace.
// • Returns removed elements.

// slice()
// • Does NOT modify original array.
// • Used to copy elements.
// • Returns copied elements.

// ========================================
// Interview Questions - slice()
// ========================================

// Q1. What is slice()?
// slice() is used to copy a portion
// of an array into a new array.

// Q2. Does slice() modify the original array?
// No.

// Q3. What does slice() return?
// A new array containing copied elements.

// Q4. Difference between splice() and slice()?

// splice()
// • Changes original array.
// • Add, Remove, Replace.
// • Returns removed elements.

// slice()
// • Does not change original array.
// • Only copies elements.
// • Returns copied elements.

// ========================================
// Important Points
// ========================================

// • splice() modifies the original array.
// • slice() does NOT modify the original array.
// • splice() returns removed elements.
// • slice() returns copied elements.
// • slice() startIndex is included.
// • slice() endIndex is excluded.






// ========================================
// indexOf() Method
// ========================================

// Definition:
// indexOf() is used to find the first index
// of a particular value in an array.

// Syntax:
// array.indexOf(value);

// Example 1

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.indexOf("Mango"));
// Output: 1


// Example 2

console.log(fruits.indexOf("Orange"));
// Output: -1


// Example 3
// indexOf() returns the first occurrence

let numbers = [10, 20, 30, 20, 40];

console.log(numbers.indexOf(20));
// Output: 1


// indexOf() is case-sensitive

let skills = ["HTML", "CSS", "JavaScript"];

console.log(skills.indexOf("HTML"));
// Output: 0

console.log(skills.indexOf("html"));
// Output: -1


// indexOf() does not modify the original array

console.log(skills);
// ["HTML", "CSS", "JavaScript"]


// ========================================
// includes() vs indexOf()
// ========================================

// includes() returns true or false

console.log(skills.includes("CSS"));
// true

console.log(skills.includes("React"));
// false


// indexOf() returns index number

console.log(skills.indexOf("CSS"));
// 1

console.log(skills.indexOf("React"));
// -1


// ========================================
// join() Method
// ========================================

// Definition:
// join() is used to combine all elements
// of an array into a single string.

// Syntax:
// array.join(separator);


// Example 1
// Default separator is comma (,)

let languages = ["HTML", "CSS", "JavaScript"];

console.log(languages.join());
// Output: HTML,CSS,JavaScript


// Example 2
// Using space as separator

console.log(languages.join(" "));
// Output: HTML CSS JavaScript


// Example 3
// Using custom separator

console.log(languages.join(" | "));
// Output: HTML | CSS | JavaScript


// join() returns a new string

let result = languages.join("-");

console.log(result);
// Output: HTML-CSS-JavaScript


// join() does not modify the original array

console.log(languages);
// ["HTML", "CSS", "JavaScript"]


// ========================================
// reverse() Method
// ========================================

// Definition:
// reverse() is used to reverse the order
// of elements in an array.

// Example 1

let numbers2 = [10, 20, 30, 40];

numbers2.reverse();

console.log(numbers2);
// [40, 30, 20, 10]


// reverse() modifies the original array

let arr = ["A", "B", "C"];

let reversedArray = arr.reverse();

console.log(reversedArray);
// ["C", "B", "A"]

console.log(arr);
// ["C", "B", "A"]


// ========================================
// sort() Method
// ========================================

// Definition:
// sort() is used to sort the elements
// of an array.

// Example 1
// Sorting strings

let fruits2 = ["Banana", "Apple", "Mango"];

fruits2.sort();

console.log(fruits2);
// ["Apple", "Banana", "Mango"]


// ========================================
// IMPORTANT:
// sort() with numbers
// ========================================

// By default, sort() converts elements
// to strings and compares them
// lexicographically.

// Example

let numbers3 = [10, 2, 5, 20];

numbers3.sort();

console.log(numbers3);
// [10, 2, 20, 5]


// ========================================
// Correct way to sort numbers
// ========================================

// Ascending Order

let numbers4 = [10, 5, 20, 2];

numbers4.sort((a, b) => a - b);

console.log(numbers4);
// [2, 5, 10, 20]


// Descending Order

let numbers5 = [10, 5, 20, 2];

numbers5.sort((a, b) => b - a);

console.log(numbers5);
// [20, 10, 5, 2]


// Remember:
//
// a - b → Ascending Order
// b - a → Descending Order


// ========================================
// Compare Function
// ========================================

// (a, b) => a - b
//
// JavaScript takes two elements at a time
// and calculates:
//
// a - b
//
// If result is negative:
// a comes before b
//
// If result is positive:
// b comes before a
//
// If result is zero:
// their order is considered equal.


// Example

let a = 10;
let b = 20;

console.log(a - b);
// -10

// Negative value means:
// 10 comes before 20


// sort() modifies the original array

let numbers6 = [30, 10, 20];

let sortedNumbers = numbers6.sort((a, b) => a - b);

console.log(sortedNumbers);
// [10, 20, 30]

console.log(numbers6);
// [10, 20, 30]


// ========================================
// forEach() Method
// ========================================

// Definition:
// forEach() is used to execute a function
// once for each element of an array.

// Example 1

let fruits3 = ["Apple", "Mango", "Banana"];

fruits3.forEach(function (fruit) {
    console.log(fruit);
});

// Output:
// Apple
// Mango
// Banana


// ========================================
// forEach() with Arrow Function
// ========================================

fruits3.forEach((fruit) => {
    console.log(fruit);
});


// ========================================
// forEach() with index
// ========================================

fruits3.forEach((fruit, index) => {
    console.log(index, fruit);
});

// Output:
// 0 Apple
// 1 Mango
// 2 Banana


// ========================================
// forEach() Callback Parameters
// ========================================

// forEach() callback can receive
// three parameters:
//
// 1. element
// 2. index
// 3. array


let subjects = ["HTML", "CSS", "JavaScript"];

subjects.forEach((element, index, array) => {

    console.log("Element:", element);
    console.log("Index:", index);
    console.log("Array:", array);

});


// ========================================
// forEach() Return Value
// ========================================

// forEach() returns undefined

let numbers7 = [1, 2, 3];

let result2 = numbers7.forEach((number) => {

    return number * 2;

});

console.log(result2);
// undefined


// IMPORTANT:
//
// return inside forEach() callback
// does NOT make forEach() return a value.
//
// forEach() itself returns undefined.


// ========================================
// forEach() does not automatically
// modify the original array
// ========================================

let numbers8 = [10, 20, 30];

numbers8.forEach((number) => {

    console.log(number);

});

console.log(numbers8);
// [10, 20, 30]


// ========================================
// Array Methods — Quick Revision
// ========================================

// push()
// → Add element at the end
// → Returns new length
// → Modifies original array


// pop()
// → Removes last element
// → Returns removed element
// → Modifies original array


// shift()
// → Removes first element
// → Returns removed element
// → Modifies original array


// unshift()
// → Adds element at beginning
// → Returns new length
// → Modifies original array


// splice()
// → Add, remove or replace elements
// → Returns removed elements
// → Modifies original array


// slice()
// → Copies a portion of an array
// → Returns a new array
// → Does NOT modify original array


// concat()
// → Combines arrays
// → Returns a new array
// → Does NOT modify original array


// includes()
// → Checks whether value exists
// → Returns true or false
// → Does NOT modify original array


// indexOf()
// → Finds first index of a value
// → Returns index or -1
// → Does NOT modify original array


// join()
// → Combines array elements into a string
// → Returns a string
// → Does NOT modify original array


// reverse()
// → Reverses array
// → Returns reversed array
// → Modifies original array


// sort()
// → Sorts array
// → Returns sorted array
// → Modifies original array


// forEach()
// → Executes a function for every element
// → Returns undefined
// → Does NOT create a new array