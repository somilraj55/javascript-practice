// ========================================
// Closures
// ========================================

// Definition:
// A Closure is created when an inner function
// remembers and accesses the variables of its
// outer function even after the outer function
// has finished executing.

// ========================================
// Scope Chain (Not a Closure)
// ========================================

// This is NOT a Closure because outer()
// is still executing.

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// Output:
// Hello

// ========================================
// Closure Example
// ========================================

// Here inner() is returned.
// Even after outerFunction() finishes,
// innerFunction() still remembers message.

function outerFunction() {
    let message = "Hello";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

const myFunction = outerFunction();

myFunction();

// Output:
// Hello

// ========================================
// Practice Example
// ========================================

function userName() {
    let name = "Somil";

    function displayName() {
        console.log(name);
    }

    return displayName;
}

const result = userName();

result();

// Output:
// Somil

// ========================================
// Counter Function using Closure
// ========================================

// A Counter Function remembers the value
// of count even after the outer function
// has finished executing.

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

// counter() is called only once.
const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

// ========================================
// Another Counter Example
// ========================================

function counterOne() {
    let count = 10;

    return function () {
        count++;
        console.log(count);
    };
}

const c = counterOne();

c(); // 11
c(); // 12
c(); // 13

// ========================================
// Multiple Closures
// ========================================

// Every call to counterTwo()
// creates a new Closure.

function counterTwo() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const c1 = counterTwo();
const c2 = counterTwo();

c1(); // 1
c1(); // 2
c2(); // 1
c1(); // 3
c2(); // 2

// c1 and c2 have different Closure.
// They do not share the same count.

// ========================================
// Practice Question 1
// ========================================

function score() {
    let points = 100;

    return function () {
        points += 10;
        console.log(points);
    };
}

const player = score();

player(); // 110
player(); // 120
player(); // 130

// ========================================
// Practice Question 2
// ========================================

function value() {
    let num = 5;

    return function () {
        num *= 2;
        console.log(num);
    };
}

const double = value();

double(); // 10
double(); // 20
double(); // 40

// ========================================
// Practice Question 3
// ========================================

function counterThree() {
    let count = 1;

    return function () {
        console.log(count);
        count++;
    };
}

const a = counterThree();
const b = counterThree();

a(); // 1
a(); // 2
b(); // 1
a(); // 3
b(); // 2

// ========================================
// Interview Revision
// ========================================

// Q1. What is a Closure?
// A Closure is created when an inner function
// remembers and accesses the variables of its
// outer function even after the outer function
// has finished executing.

// Q2. Is every nested function a Closure?
// No.
// A nested function becomes a Closure only
// when it remembers outer variables after
// the outer function has finished executing.

// Q3. What is a Counter Function?
// A Counter Function uses a Closure to
// remember the value of a variable.

// Q4. Why doesn't count become 0 every time?
// Because the inner function remembers
// the count variable using Closure.

// Q5. Why do c1 and c2 have different outputs?
// Every call to counterTwo()
// creates a new Closure with its own
// private count variable.

// Q6. What happens when counter()
// is called multiple times?
// Every call creates a new Closure
// with a separate memory.

// ========================================
// Important Points
// ========================================

// • Closure = Function + Lexical Environment.
// • Closure remembers outer variables.
// • Variables stay alive as long as
//   the returned function needs them.
// • Counter Function is a real-world
//   application of Closure.
// • Each Closure has its own private memory.
// • Different Closures do not share variables.
// • Every call to the outer function
//   creates a new Closure.




// ========================================
// Private Variables & Data Hiding
// ========================================

// A Private Variable cannot be accessed
// directly from outside the function.

// Data Hiding means hiding internal data
// and allowing access only through methods.

// ========================================
// Example 1 (Without Closure)
// ========================================

let balance = 1000;

balance = 5000;

console.log(balance);

// Output:
// 5000

// Anyone can change the balance.

// ========================================
// Example 2 (Using Closure)
// ========================================

function bankAccount() {

    let balance = 1000;

    return {

        deposit(amount) {
            balance += amount;
            console.log(balance);
        }

    };

}

const account = bankAccount();

account.deposit(500);
account.deposit(1000);

// Output:
// 1500
// 2500

// ========================================
// Example 3
// ========================================

function createUser() {

    let age = 20;

    return {

        getAge() {
            console.log(age);
        }

    };

}

const user = createUser();

user.getAge();

console.log(user.age);

// Output:
// 20
// undefined

// user.age does not exist because
// age is a private variable.

// ========================================
// Example 4
// ========================================

function createStudent() {

    let age = 20;

    return {

        getAge() {
            return age;
        }

    };

}

const student = createStudent();

student.age = 50;

console.log(student.getAge());

console.log(student.age);

// Output:
// 20
// 50

// student.age creates a new object property.
// It does NOT change the private variable.

// ========================================
// Example 5
// ========================================

function bank() {

    let balance = 1000;

    return {

        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }

    };

}

const accountOne = bank();

accountOne.deposit(500);

console.log(accountOne.getBalance());

accountOne.balance = 100000;

console.log(accountOne.getBalance());

console.log(accountOne.balance);

// Output:
// 1500
// 1500
// 100000

// ========================================
// Example 6
// ========================================

function bankTwo() {

    let balance = 500;

    return {

        getBalance() {
            return balance;
        }

    };

}

const acc = bankTwo();

console.log(acc.balance);

console.log(acc.getBalance());

// Output:
// undefined
// 500

// ========================================
// Interview Revision
// ========================================

// 1. What is a Private Variable?
// A variable that cannot be accessed
// directly from outside the function.

// 2. What is Data Hiding?
// Hiding internal data and allowing
// access only through methods.

// 3. Can we access a private variable directly?
// No.

// 4. Why does user.age return undefined?
// Because age is not an object property.
// It is a private variable.

// 5. Why does student.getAge() return 20
// even after student.age = 50?
// Because student.age creates a new object
// property. It does not modify the private variable.

// ========================================
// Important Points
// ========================================

// • Closures help create Private Variables.
// • Private Variables cannot be accessed directly.
// • Data Hiding improves security.
// • Object properties and private variables
//   are different.
// • Only closure methods can access
//   private variables.