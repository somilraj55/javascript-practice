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



// ========================================
// map() Method
// ========================================

// Definition:
// map() is an array method used to transform
// each element of an array and return a new array.

// map() does NOT modify the original array.

// ========================================
// Example 1 - Multiply Elements
// ========================================

let numbersMap = [1, 2, 3, 4];

let mapResult = numbersMap.map((number) => {
    return number * 2;
});

console.log(mapResult);

// Output:
// [2, 4, 6, 8]

// ========================================
// Example 2 - Add Value
// ========================================

let numbersMapTwo = [10, 20, 30];

let mapResultTwo = numbersMapTwo.map((number) => {
    return number + 5;
});

console.log(mapResultTwo);
console.log(numbersMapTwo);

// Output:
// [15, 25, 35]
// [10, 20, 30]

// ========================================
// Example 3 - Strings
// ========================================

let fruitsMap = ["apple", "banana", "mango"];

let upperFruits = fruitsMap.map((fruit) => {
    return fruit.toUpperCase();
});

console.log(upperFruits);

// Output:
// ["APPLE", "BANANA", "MANGO"]

// ========================================
// Example 4 - Callback Parameters
// ========================================

// map() callback can receive:
// element
// index
// array

let technologiesMap = ["HTML", "CSS", "JavaScript"];

let techResult = technologiesMap.map((technology, index) => {
    return index + " - " + technology;
});

console.log(techResult);

// Output:
// ["0 - HTML", "1 - CSS", "2 - JavaScript"]

// ========================================
// map() with Objects
// ========================================

let studentsMap = [
    { name: "Somil", marks: 80 },
    { name: "Rahul", marks: 90 },
    { name: "Aman", marks: 70 }
];

let studentNames = studentsMap.map((student) => {
    return student.name;
});

console.log(studentNames);

// Output:
// ["Somil", "Rahul", "Aman"]

// ========================================
// map() - Get Marks
// ========================================

let studentMarks = studentsMap.map((student) => {
    return student.marks;
});

console.log(studentMarks);

// Output:
// [80, 90, 70]

// ========================================
// map() - Transform Objects
// ========================================

let updatedStudents = studentsMap.map((student) => {
    return {
        name: student.name,
        marks: student.marks + 5
    };
});

console.log(updatedStudents);

// Output:
// [
//   { name: "Somil", marks: 85 },
//   { name: "Rahul", marks: 95 },
//   { name: "Aman", marks: 75 }
// ]

// ========================================
// map() vs forEach()
// ========================================

// forEach()
// → Performs an action
// → Returns undefined

// map()
// → Transforms elements
// → Returns a new array

// ========================================
// filter() Method
// ========================================

// Definition:
// filter() is an array method used to create
// a new array containing elements that satisfy
// a specific condition.

// filter() does NOT modify the original array.

// ========================================
// Example 1 - Numbers Greater Than 20
// ========================================

let numbersFilter = [10, 15, 20, 25, 30];

let filterResult = numbersFilter.filter((number) => {
    return number > 20;
});

console.log(filterResult);

// Output:
// [25, 30]

// ========================================
// Example 2 - Even Numbers
// ========================================

let numbersFilterTwo = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbersFilterTwo.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);

// Output:
// [2, 4, 6]

// ========================================
// Example 3 - Strings
// ========================================

let fruitsFilter = ["Apple", "Mango", "Banana", "Kiwi"];

let shortFruits = fruitsFilter.filter((fruit) => {
    return fruit.length <= 5;
});

console.log(shortFruits);

// Output:
// ["Apple", "Mango", "Kiwi"]

// ========================================
// filter() with Objects
// ========================================

let studentsFilter = [
    { name: "Somil", marks: 80 },
    { name: "Rahul", marks: 40 },
    { name: "Aman", marks: 70 }
];

let passedStudents = studentsFilter.filter((student) => {
    return student.marks >= 50;
});

console.log(passedStudents);

// Output:
// [
//   { name: "Somil", marks: 80 },
//   { name: "Aman", marks: 70 }
// ]

// ========================================
// map() + filter() Chaining
// ========================================

// filter() → Select
// map() → Transform

let studentsChain = [
    { name: "Somil", marks: 80 },
    { name: "Rahul", marks: 45 },
    { name: "Aman", marks: 70 }
];

let passedStudentNames = studentsChain
    .filter((student) => {
        return student.marks >= 50;
    })
    .map((student) => {
        return student.name;
    });

console.log(passedStudentNames);

// Output:
// ["Somil", "Aman"]

// ========================================
// find() Method
// ========================================

// Definition:
// find() is used to find the first element
// that satisfies a condition.

// find() returns the element itself.

// If no element is found, it returns undefined.

// ========================================
// Example 1
// ========================================

let numbersFind = [10, 20, 30, 40];

let findResult = numbersFind.find((number) => {
    return number > 15;
});

console.log(findResult);

// Output:
// 20

// ========================================
// Example 2 - Not Found
// ========================================

let numbersFindTwo = [10, 20, 30];

let findResultTwo = numbersFindTwo.find((number) => {
    return number > 100;
});

console.log(findResultTwo);

// Output:
// undefined

// ========================================
// Example 3 - Objects
// ========================================

let studentsFind = [
    { name: "Somil", marks: 40 },
    { name: "Rahul", marks: 75 },
    { name: "Aman", marks: 90 }
];

let studentFind = studentsFind.find((student) => {
    return student.marks >= 50;
});

console.log(studentFind);

// Output:
// { name: "Rahul", marks: 75 }

// ========================================
// find() vs filter()
// ========================================

// find()
// → First matching element
// → Returns element
// → Not found = undefined

// filter()
// → All matching elements
// → Returns new array
// → Not found = []

// ========================================
// some() Method
// ========================================

// Definition:
// some() checks whether at least one element
// satisfies a condition.

// Returns true or false.

// ========================================
// Example 1
// ========================================

let numbersSome = [10, 20, 30, 40];

let someResult = numbersSome.some((number) => {
    return number > 35;
});

console.log(someResult);

// Output:
// true

// ========================================
// Example 2
// ========================================

let numbersSomeTwo = [10, 20, 30];

let someResultTwo = numbersSomeTwo.some((number) => {
    return number > 100;
});

console.log(someResultTwo);

// Output:
// false

// ========================================
// every() Method
// ========================================

// Definition:
// every() checks whether all elements
// satisfy a condition.

// Returns true or false.

// ========================================
// Example 1
// ========================================

let numbersEvery = [10, 20, 30, 40];

let everyResult = numbersEvery.every((number) => {
    return number > 5;
});

console.log(everyResult);

// Output:
// true

// ========================================
// Example 2
// ========================================

let numbersEveryTwo = [10, 20, 3, 40];

let everyResultTwo = numbersEveryTwo.every((number) => {
    return number > 5;
});

console.log(everyResultTwo);

// Output:
// false

// ========================================
// some() vs every()
// ========================================

// some()
// → At least ONE element must satisfy condition
// → Returns true or false

// every()
// → ALL elements must satisfy condition
// → Returns true or false

// ========================================
// reduce() Method
// ========================================

// Definition:
// reduce() is used to process all elements
// of an array and reduce them into a
// single final value.

// ========================================
// Example 1 - Sum
// ========================================

let numbersReduce = [10, 20, 30, 40];

let totalReduce = numbersReduce.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(totalReduce);

// Output:
// 100

// ========================================
// Example 2 - Product
// ========================================

let numbersReduceTwo = [2, 3, 4];

let productReduce = numbersReduceTwo.reduce((acc, num) => {
    return acc * num;
}, 1);

console.log(productReduce);

// Output:
// 24

// ========================================
// Example 3 - Initial Value
// ========================================

let numbersReduceThree = [10, 20, 30];

let resultReduce = numbersReduceThree.reduce((acc, num) => {
    return acc + num;
}, 100);

console.log(resultReduce);

// Output:
// 160

// ========================================
// Example 4 - Without Initial Value
// ========================================

let numbersReduceFour = [10, 20, 30];

let resultReduceTwo = numbersReduceFour.reduce((acc, num) => {
    return acc + num;
});

console.log(resultReduceTwo);

// Output:
// 60

// First element becomes initial accumulator.

// 1st → acc = 10, num = 20
// 2nd → acc = 30, num = 30
// Result → 60

// ========================================
// reduce() with Objects
// ========================================

let studentsReduce = [
    { name: "Somil", marks: 80 },
    { name: "Rahul", marks: 70 },
    { name: "Aman", marks: 90 }
];

let totalMarks = studentsReduce.reduce((acc, student) => {
    return acc + student.marks;
}, 0);

console.log(totalMarks);

// Output:
// 240

// ========================================
// reduce() Important Terms
// ========================================

// acc → accumulator
// Stores the accumulated result.

// num / currentValue → current element.

// initialValue → starting value.

// ========================================
// findIndex() Method
// ========================================

// Definition:
// findIndex() returns the index of the first
// element that satisfies a condition.

// If no element is found, it returns -1.

// ========================================
// Example 1
// ========================================

let numbersFindIndex = [10, 20, 30, 40];

let findIndexResult = numbersFindIndex.findIndex((num) => {
    return num > 15;
});

console.log(findIndexResult);

// Output:
// 1

// ========================================
// Example 2 - Not Found
// ========================================

let numbersFindIndexTwo = [5, 10, 15];

let findIndexResultTwo = numbersFindIndexTwo.findIndex((num) => {
    return num > 100;
});

console.log(findIndexResultTwo);

// Output:
// -1

// ========================================
// Example 3 - Objects
// ========================================

let studentsFindIndex = [
    { name: "Somil", marks: 40 },
    { name: "Rahul", marks: 75 },
    { name: "Aman", marks: 90 }
];

let studentIndex = studentsFindIndex.findIndex((student) => {
    return student.name === "Aman";
});

console.log(studentIndex);

// Output:
// 2

// ========================================
// find() vs findIndex() vs filter()
// ========================================

// find()
// → First matching element

// findIndex()
// → Index of first matching element

// filter()
// → New array containing all matching elements

// ========================================
// flat() Method
// ========================================

// Definition:
// flat() is used to flatten nested arrays
// and return a new array.

// Default depth is 1.

// ========================================
// Example 1
// ========================================

let nestedArray = [1, 2, [3, 4], 5];

let flatResult = nestedArray.flat();

console.log(flatResult);

// Output:
// [1, 2, 3, 4, 5]

// ========================================
// Example 2 - Nested Array
// ========================================

let nestedArrayTwo = [1, [2, [3, 4]]];

console.log(nestedArrayTwo.flat());

// Output:
// [1, 2, [3, 4]]

// ========================================
// Example 3 - Depth
// ========================================

let nestedArrayThree = [1, [2, [3, 4]]];

console.log(nestedArrayThree.flat(2));

// Output:
// [1, 2, 3, 4]

// ========================================
// Example 4 - Infinity
// ========================================

let nestedArrayFour = [1, [2, [3, [4, 5]]]];

console.log(nestedArrayFour.flat(Infinity));

// Output:
// [1, 2, 3, 4, 5]

// ========================================
// Important Points
// ========================================

// flat()
// → Does NOT modify original array.
// → Returns a new array.
// → Default depth = 1.

// ========================================
// flatMap() Method
// ========================================

// Definition:
// flatMap() combines map() and flat().
// It transforms elements and flattens
// the result by one level.

// ========================================
// Example 1
// ========================================

let numbersFlatMap = [1, 2, 3];

let flatMapResult = numbersFlatMap.flatMap((num) => {
    return [num, num * 2];
});

console.log(flatMapResult);

// Output:
// [1, 2, 2, 4, 3, 6]

// ========================================
// map() vs flatMap()
// ========================================

let numbersFlatMapTwo = [1, 2, 3];

let mapArray = numbersFlatMapTwo.map((num) => {
    return [num, num * 2];
});

console.log(mapArray);

// Output:
// [
//   [1, 2],
//   [2, 4],
//   [3, 6]
// ]

let flatMapArray = numbersFlatMapTwo.flatMap((num) => {
    return [num, num * 2];
});

console.log(flatMapArray);

// Output:
// [1, 2, 2, 4, 3, 6]

// ========================================
// Important Points
// ========================================

// map()
// → Transform elements.

// flatMap()
// → Transform + flatten one level.

// flatMap() does NOT modify original array.

// ========================================
// Array.isArray()
// ========================================

// Definition:
// Array.isArray() checks whether a value
// is an array.

// It returns true or false.

// ========================================
// Example 1
// ========================================

let fruitsArray = ["Apple", "Mango", "Banana"];

console.log(Array.isArray(fruitsArray));

// Output:
// true

// ========================================
// Example 2
// ========================================

let nameValue = "Somil";

console.log(Array.isArray(nameValue));

// Output:
// false

// ========================================
// Example 3
// ========================================

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray(100));
console.log(Array.isArray("JavaScript"));
console.log(Array.isArray(true));

// Output:
// true
// false
// false
// false

// ========================================
// typeof [] vs Array.isArray()
// ========================================

console.log(typeof []);
console.log(Array.isArray([]));

// Output:
// object
// true

// typeof [] returns "object",
// therefore Array.isArray() is used
// to specifically check for an array.

// ========================================
// FINAL ARRAY METHODS SUMMARY
// ========================================

// push()
// → Adds at end
// → Returns new length

// pop()
// → Removes from end
// → Returns removed element

// shift()
// → Removes from beginning
// → Returns removed element

// unshift()
// → Adds at beginning
// → Returns new length

// splice()
// → Adds, removes, or replaces
// → Modifies original array
// → Returns removed elements

// slice()
// → Copies a portion
// → Does NOT modify original array

// concat()
// → Combines arrays
// → Returns new array

// includes()
// → Checks whether value exists
// → Returns true/false

// indexOf()
// → Finds first index of a value
// → Returns index or -1

// join()
// → Combines elements into a string
// → Returns string

// reverse()
// → Reverses array
// → Modifies original array

// sort()
// → Sorts array
// → Modifies original array

// forEach()
// → Performs action for each element
// → Returns undefined

// map()
// → Transforms elements
// → Returns new array

// filter()
// → Selects matching elements
// → Returns new array

// find()
// → Returns first matching element
// → Not found = undefined

// some()
// → Checks if at least one element matches
// → Returns true/false

// every()
// → Checks if all elements match
// → Returns true/false

// reduce()
// → Combines elements into one final value

// findIndex()
// → Returns index of first matching element
// → Not found = -1

// flat()
// → Flattens nested arrays
// → Returns new array

// flatMap()
// → map() + flat(1)

// Array.isArray()
// → Checks whether value is an array
// → Returns true/false