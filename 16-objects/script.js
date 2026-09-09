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

    greet: function () {
        console.log("Hello");
    }
};

studentMethod.greet();


// ========================================
// Accessing Object Property Inside Method
// ========================================

let studentGreeting = {
    name: "Somil",

    greet: function () {
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

    introduce: function () {
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

    greet: function (message) {
        console.log(message + ", " + this.name);
    }
};

studentMessage.greet("Hello");


// ========================================
// Method Shorthand Syntax
// ========================================

// Traditional Syntax

let userOne = {
    greet: function () {
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

    showDetails: function () {
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



// ========================================
// Objects
// ========================================


// ========================================
// Part 1: Object Basics
// ========================================

// Object is a data structure used to store related data
// in key-value pairs.

let student = {
    name: "Somil",
    age: 21,
    course: "BCA"
};

// Accessing properties
console.log(student.name);
console.log(student["age"]);

// Updating property
student.age = 22;

// Adding property
student.city = "Bokaro";

// Deleting property
delete student.city;

// Missing property returns undefined
console.log(student.address);


// ========================================
// Part 2: Nested Objects & Arrays
// ========================================

// Nested Object
let studentInfo = {
    name: "Somil",
    age: 21,
    address: {
        city: "Bokaro",
        state: "Jharkhand"
    }
};

console.log(studentInfo.address.city);


// Array inside Object
let studentSkills = {
    name: "Somil",
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(studentSkills.skills[2]);


// Object inside Array
let students = [
    { name: "Somil", age: 21 },
    { name: "Rahul", age: 22 },
    { name: "Aman", age: 20 }
];

console.log(students[1].name);


// Nested Array + Object
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

console.log(studentList[1].skills[1]);


// ========================================
// Part 3: Methods & this
// ========================================

// Function inside an object is called a Method.

let user = {
    name: "Somil",

    greet: function () {
        console.log("Hello");
    }
};

user.greet();


// this refers to the current object.

let studentDetails = {
    name: "Somil",
    age: 21,

    introduce: function () {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
};

studentDetails.introduce();


// Method shorthand

let person = {
    greet() {
        console.log("Hello");
    }
};

person.greet();


// ========================================
// Part 4: Object.keys(), values(), entries()
// ========================================

let userInfo = {
    name: "Somil",
    age: 21,
    city: "Bokaro"
};

// Returns an array of keys
console.log(Object.keys(userInfo));

// Returns an array of values
console.log(Object.values(userInfo));

// Returns an array of [key, value] pairs
console.log(Object.entries(userInfo));


// ========================================
// Part 5: Object Destructuring
// ========================================

let studentData = {
    name: "Somil",
    age: 21,
    course: "BCA"
};

// Extract properties from object
let { name, age } = studentData;

console.log(name);
console.log(age);


// Single property
let { course } = studentData;

console.log(course);


// Rename properties
let {
    name: studentName,
    age: studentAge
} = studentData;

console.log(studentName);
console.log(studentAge);


// Default value
let { city = "Bokaro" } = studentData;

console.log(city);


// ========================================
// Part 6: Nested Destructuring
// ========================================

let studentProfile = {
    name: "Somil",
    address: {
        city: "Bokaro",
        state: "Jharkhand"
    },
    skills: ["HTML", "CSS", "JavaScript"]
};


// Nested Object Destructuring
let {
    address: { city: studentCity }
} = studentProfile;

console.log(studentCity);


// Array Destructuring
let { skills } = studentProfile;

let [first, second, third] = skills;

console.log(first);
console.log(second);
console.log(third);


// Object destructuring works with property names.
// Array destructuring works according to position/index.


// ========================================
// Part 7: Spread Operator
// ========================================

// Spread operator (...) copies/spreads properties
// into a new object.

let originalUser = {
    name: "Somil",
    age: 21
};

let newUser = {
    ...originalUser
};

console.log(newUser);


// Adding a new property while copying
let newStudent = {
    ...originalUser,
    course: "BCA"
};

console.log(newStudent);


// Combining two objects
let personalInfo = {
    name: "Somil",
    age: 21
};

let education = {
    course: "BCA"
};

let combinedStudent = {
    ...personalInfo,
    ...education
};

console.log(combinedStudent);


// ========================================
// Part 8: Rest Operator
// ========================================

// Rest operator (...) collects remaining properties.

let studentDetails2 = {
    name: "Somil",
    age: 21,
    course: "BCA"
};

let {
    name: studentDetailsName,
    ...details
} = studentDetails2;

console.log(studentDetailsName);
console.log(details);


// Rest collects the remaining properties.

// Spread → expands / copies
// Rest → collects remaining


// ========================================
// Part 9: Optional Chaining
// ========================================

let optionalUser = {
    name: "Somil"
};

// Without optional chaining:
// optionalUser.address.city
// This would cause an error.

// With optional chaining:
console.log(optionalUser.address?.city);


// Nested optional chaining
let profile = {
    name: "Somil"
};

console.log(profile.address?.city);


// Optional chaining with method
let account = {};

account.greet?.();


// ?. returns undefined instead of throwing an error
// when the value before it is null or undefined.


// ========================================
// Part 10: Object Shorthand
// ========================================

let studentName2 = "Somil";
let studentAge2 = 21;

// Normal way
let studentNormal = {
    name: studentName2,
    age: studentAge2
};

console.log(studentNormal);


// Object shorthand
let studentShort = {
    studentName2,
    studentAge2
};

console.log(studentShort);


// Shorthand works when variable name and property name are same.


// ========================================
// Part 10: Computed Property Names
// ========================================

let key = "course";

let studentComputed = {
    [key]: "BCA"
};

console.log(studentComputed);


// Variable value becomes the property name.

let property = "name";
let value = "Somil";

let dynamicStudent = {
    [property]: value
};

console.log(dynamicStudent);


// ========================================
// Interview Revision
// ========================================

// 1. What is an Object?
// Object is a data structure used to store related data
// in key-value pairs.


// 2. What is a Method?
// A function inside an object is called a Method.


// 3. What is this?
// this refers to the current object when used inside
// an object's method.


/*
4. Object.keys()
   → Returns an array of keys.

5. Object.values()
   → Returns an array of values.

6. Object.entries()
   → Returns an array of [key, value] pairs.

7. Object Destructuring
   → Extracts properties from an object and assigns
     them directly to variables.

8. Spread Operator
   → Expands/copies properties into a new object.

9. Rest Operator
   → Collects remaining properties into a new object.

10. Optional Chaining
    → Safely accesses nested properties without throwing
      an error when an intermediate value is null/undefined.

11. Object Shorthand
    → Shortens object syntax when variable and property
      names are the same.

12. Computed Property Names
    → Allows a variable or expression to be used as
      an object's property name.
*/


// ========================================
// Important Points
// ========================================

/*
Object:
    key → value

Access:
    student.name
    student["name"]

Nested Object:
    student.address.city

Array inside Object:
    student.skills[0]

Object inside Array:
    students[0].name

Method:
    Function inside Object

this:
    Refers to current object

Destructuring:
    let { name } = student;

Spread:
    let newStudent = { ...student };

Rest:
    let { name, ...details } = student;

Optional Chaining:
    user.address?.city

Object Shorthand:
    { name, age }

Computed Property:
    { [key]: value }
*/