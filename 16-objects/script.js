// ========================================
// Objects - Part 1
// ========================================

// ========================================
// What is an Object?
// ========================================

// An object is a data structure used to
// store related data in key-value pairs.

// Example:

let student = {
    name: "Somil",
    age: 21,
    course: "BCA"
};

console.log(student);

// name   → key
// "Somil" → value
// age    → key
// 21     → value
// course → key
// "BCA"  → value


// ========================================
// Accessing Object Properties
// ========================================

// Dot Notation

console.log(student.name);
console.log(student.age);
console.log(student.course);


// Bracket Notation

console.log(student["name"]);
console.log(student["age"]);
console.log(student["course"]);


// ========================================
// Updating a Property
// ========================================

student.age = 22;

console.log(student);


// ========================================
// Adding a New Property
// ========================================

student.city = "Delhi";

console.log(student);


// ========================================
// Deleting a Property
// ========================================

delete student.city;

console.log(student);


// ========================================
// Accessing Missing Property
// ========================================

console.log(student.city);

// Output:
// undefined


// ========================================
// Array vs Object
// ========================================

// Array  → Uses index
// Object → Uses key


// ========================================
// Objects - Part 2
// Nested Objects, Arrays & Objects
// ========================================


// ========================================
// Nested Object
// ========================================

// Object ke andar object
// = Nested Object

let studentInfo = {
    name: "Somil",
    age: 21,

    address: {
        city: "Bokaro",
        state: "Jharkhand"
    }
};

console.log(studentInfo);


// Accessing Nested Object

console.log(studentInfo.address.city);
console.log(studentInfo.address.state);


// ========================================
// Array Inside Object
// ========================================

let studentSkills = {
    name: "Somil",
    age: 21,

    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(studentSkills);


// Accessing Array Inside Object

console.log(studentSkills.skills);

console.log(studentSkills.skills[0]);
console.log(studentSkills.skills[1]);
console.log(studentSkills.skills[2]);


// ========================================
// Object Inside Array
// ========================================

let students = [
    {
        name: "Somil",
        age: 21
    },

    {
        name: "Rahul",
        age: 22
    },

    {
        name: "Aman",
        age: 20
    }
];

console.log(students);


// Accessing Object Inside Array

console.log(students[0]);
console.log(students[0].name);

console.log(students[1].name);
console.log(students[1].age);


// ========================================
// Nested Array + Object
// ========================================

let studentList = [
    {
        name: "Somil",
        skills: ["HTML", "CSS", "JavaScript"]
    },

    {
        name: "Rahul",
        skills: ["Java", "Python"]
    }
];

console.log(studentList);


// Accessing Nested Array

console.log(studentList[0].skills[2]);

console.log(studentList[1].skills[1]);


// ========================================
// Objects - Part 3
// Object Methods
// ========================================


// ========================================
// Function Inside Object
// ========================================

// Object ke andar function ko
// Method kehte hain.

let studentMethod = {
    name: "Somil",

    greet: function() {
        console.log("Hello");
    }
};

studentMethod.greet();


// ========================================
// Accessing Object Property Inside Method
// ========================================

let studentGreeting = {
    name: "Somil",

    greet: function() {
        console.log(studentGreeting.name);
    }
};

studentGreeting.greet();


// ========================================
// this Keyword
// ========================================

// this refers to the current object.

let studentDetails = {
    name: "Somil",
    age: 21,

    introduce: function() {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
};

studentDetails.introduce();


// ========================================
// Method With Parameter
// ========================================

let studentMessage = {
    name: "Somil",

    greet: function(message) {
        console.log(message + ", " + this.name);
    }
};

studentMessage.greet("Hello");


// ========================================
// Method Shorthand Syntax
// ========================================

// Traditional Syntax

let userOne = {
    greet: function() {
        console.log("Hello");
    }
};

userOne.greet();


// Shorthand Syntax

let userTwo = {
    greet() {
        console.log("Hello");
    }
};

userTwo.greet();


// ========================================
// Object Method Example
// ========================================

let car = {
    brand: "Toyota",
    model: "Fortuner",

    showDetails: function() {
        console.log(this.brand, this.model);
    }
};

car.showDetails();


// ========================================
// Objects - Part 4
// Object.keys()
// Object.values()
// Object.entries()
// ========================================


// ========================================
// Object.keys()
// ========================================

// Returns all keys as an array.

let user = {
    name: "Somil",
    age: 21,
    city: "Bokaro"
};

let keys = Object.keys(user);

console.log(keys);

// Output:
// ["name", "age", "city"]


// ========================================
// Object.values()
// ========================================

// Returns all values as an array.

let values = Object.values(user);

console.log(values);

// Output:
// ["Somil", 21, "Bokaro"]


// ========================================
// Object.entries()
// ========================================

// Returns key-value pairs
// as nested arrays.

let entries = Object.entries(user);

console.log(entries);

// Output:
// [
//     ["name", "Somil"],
//     ["age", 21],
//     ["city", "Bokaro"]
// ]


// ========================================
// Original Object
// ========================================

// Object.keys(), Object.values()
// and Object.entries() do not modify
// the original object.

console.log(user);


// ========================================
// Interview Revision
// ========================================

// Q1. What is an Object?
// An object is a data structure used to
// store related data in key-value pairs.

// Q2. What is a key?
// A key is the name/identifier used to
// access a value inside an object.

// Q3. What is a value?
// A value is the data stored against a key.

// Q4. What is a Nested Object?
// An object inside another object
// is called a Nested Object.

// Q5. What is a Method?
// A function stored inside an object
// is called a Method.

// Q6. What is this?
// this refers to the current object
// in an object method.

// Q7. How do you get all keys?
// Object.keys(object)

// Q8. How do you get all values?
// Object.values(object)

// Q9. How do you get keys and values?
// Object.entries(object)


// ========================================
// Important Points
// ========================================

// • Object stores data in key-value pairs.
// • Object properties can be accessed using
//   dot notation and bracket notation.
// • Object properties can be updated.
// • New properties can be added.
// • Properties can be deleted using delete.
// • Missing property returns undefined.
// • Object can contain another object.
// • Object can contain an array.
// • Array can contain objects.
// • Function inside an object is called a method.
// • this refers to the current object.
// • Object.keys() returns keys as an array.
// • Object.values() returns values as an array.
// • Object.entries() returns key-value pairs.
// • These methods do not modify the original object.