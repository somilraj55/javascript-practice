// ========================================
// Strings
// ========================================


// ========================================
// Part 1: String Basics
// ========================================

// String is a sequence of characters used to represent text.

let name = "Somil";
let city = 'Bokaro';
let course = `BCA`;

console.log(name);
console.log(city);
console.log(course);


// Accessing characters using index

console.log(name[0]); // S
console.log(name[1]); // o
console.log(name[4]); // l


// String length

console.log(name.length); // 5


// ========================================
// Part 2: Common String Methods
// ========================================

// toUpperCase()
// Converts string to uppercase.

let text = "javascript";

console.log(text.toUpperCase()); // JAVASCRIPT


// toLowerCase()
// Converts string to lowercase.

let language = "JAVASCRIPT";

console.log(language.toLowerCase()); // javascript


// trim()
// Removes extra spaces from beginning and end.

let username = "   Somil   ";

console.log(username.trim()); // Somil


// String methods do not modify the original string.

let originalText = "Somil";

originalText.toUpperCase();

console.log(originalText); // Somil


// ========================================
// Part 3: slice()
// ========================================

// slice() extracts a portion of a string.
// start is included, end is excluded.

let text1 = "JavaScript";

console.log(text1.slice(0, 4)); // Java


// Negative index

console.log(text1.slice(-3)); // ipt


// Original string does not change.

let text2 = "Somil";

let result1 = text2.slice(1, 4);

console.log(result1); // omi
console.log(text2);   // Somil


// ========================================
// Part 4: substring()
// ========================================

// substring() also extracts a portion of a string.

let text3 = "JavaScript";

console.log(text3.substring(0, 4)); // Java


// Negative values are treated as 0.

console.log(text3.substring(-3)); // JavaScript


// If start > end, substring() swaps the values.

console.log(text3.substring(6, 2)); // vaSc


// ========================================
// Part 5: includes(), startsWith(), endsWith()
// ========================================

// includes()
// Checks whether text exists anywhere in the string.

let text4 = "I love JavaScript";

console.log(text4.includes("JavaScript")); // true
console.log(text4.includes("Python"));     // false


// startsWith()
// Checks whether string starts with given text.

let text5 = "JavaScript";

console.log(text5.startsWith("Java"));   // true
console.log(text5.startsWith("Script")); // false


// endsWith()
// Checks whether string ends with given text.

console.log(text5.endsWith("Script")); // true
console.log(text5.endsWith("Java"));   // false


// Strings are case-sensitive.

console.log("Hello".includes("hello")); // false
console.log("Hello".includes("Hello")); // true


// ========================================
// Part 6: indexOf() & lastIndexOf()
// ========================================

// indexOf()
// Returns the index of the first occurrence.

let text6 = "banana";

console.log(text6.indexOf("a")); // 1


// lastIndexOf()
// Returns the index of the last occurrence.

console.log(text6.lastIndexOf("a")); // 5


// If text is not found, returns -1.

let text7 = "JavaScript";

console.log(text7.indexOf("z")); // -1


// ========================================
// Part 7: replace() & replaceAll()
// ========================================

// replace()
// Replaces the first matching occurrence.

let text8 = "Java Java Java";

console.log(text8.replace("Java", "Python"));
// Python Java Java


// replaceAll()
// Replaces all matching occurrences.

console.log(text8.replaceAll("Java", "Python"));
// Python Python Python


// Original string does not change.

let text9 = "Hello World";

let result2 = text9.replace("World", "Somil");

console.log(text9);   // Hello World
console.log(result2); // Hello Somil


// ========================================
// Part 8: split()
// ========================================

// split() breaks a string and returns a new array.

// Split by space

let text10 = "Hello World";

console.log(text10.split(" "));
// ["Hello", "World"]


// Split by comma

let fruits = "Apple,Banana,Mango";

console.log(fruits.split(","));
// ["Apple", "Banana", "Mango"]


// Split every character

let name2 = "Somil";

console.log(name2.split(""));
// ["S", "o", "m", "i", "l"]


// String → Array

let text11 = "I am learning JavaScript";

let words = text11.split(" ");

console.log(words);
// ["I", "am", "learning", "JavaScript"]


// ========================================
// Part 9: Template Literals
// ========================================

// Template literals use backticks.

// Variables can be inserted using ${}.

let studentName = "Somil";
let age = 21;

console.log(`My name is ${studentName} and I am ${age} years old.`);


// Expressions can also be used.

let a = 10;
let b = 20;

console.log(`Sum is ${a + b}`);


// Multi-line strings

let message = `Hello Somil
Welcome to JavaScript
Keep learning!`;

console.log(message);


// ========================================
// Part 10: Escape Characters
// ========================================

// \" → Double quote

let quote = "He said \"Hello\"";

console.log(quote);


// \' → Single quote

let sentence = 'It\'s JavaScript';

console.log(sentence);


// \n → New line

let newLine = "Hello\nSomil";

console.log(newLine);


// \t → Tab

let tabText = "Hello\tWorld";

console.log(tabText);


// ========================================
// Interview Revision
// ========================================

/*
1. What is a String?
   A string is a sequence of characters used to represent text.


2. What does length do?
   length returns the number of characters in a string.


3. What does slice() do?
   slice() extracts a portion of a string.
   It supports negative indexes.


4. What is the difference between slice() and substring()?
   slice() supports negative indexes.
   substring() treats negative values as 0.

   If start > end:
   slice() → returns empty string
   substring() → swaps the values


5. What does includes() do?
   Checks whether a given text exists anywhere in the string.
   Returns true or false.


6. What does startsWith() do?
   Checks whether the string starts with given text.


7. What does endsWith() do?
   Checks whether the string ends with given text.


8. What does indexOf() do?
   Returns the index of the first occurrence.
   Returns -1 if not found.


9. What does lastIndexOf() do?
   Returns the index of the last occurrence.
   Returns -1 if not found.


10. What is the difference between replace() and replaceAll()?
    replace() → replaces the first matching occurrence.
    replaceAll() → replaces all matching occurrences.


11. What does split() do?
    split() divides a string based on a separator
    and returns a new array.


12. What are Template Literals?
    Template literals allow variables and expressions
    to be easily inserted into strings using ${}.


13. What are Escape Characters?
    Escape characters are used to represent special
    characters inside strings.

    \n → new line
    \t → tab
    \" → double quote
    \' → single quote
*/


// ========================================
// Important Points
// ========================================

/*
String:
    Sequence of characters used to represent text.

Index:
    Starts from 0.

length:
    Returns number of characters.

toUpperCase():
    Converts to uppercase.

toLowerCase():
    Converts to lowercase.

trim():
    Removes outside spaces.

slice():
    Extracts portion.
    Supports negative indexes.

substring():
    Extracts portion.
    Negative values become 0.

includes():
    Checks text anywhere.

startsWith():
    Checks starting text.

endsWith():
    Checks ending text.

indexOf():
    First occurrence index.

lastIndexOf():
    Last occurrence index.

replace():
    First matching occurrence.

replaceAll():
    All matching occurrences.

split():
    String → Array.

Template Literal:
    `Hello ${name}`

Escape Characters:
    \n → new line
    \t → tab
*/