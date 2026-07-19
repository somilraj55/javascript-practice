// ===============================
// Prime Number
// ===============================

let num = 11;
let isPrime = true;

if (num <= 1) {
    console.log("Not Prime");
} else {

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Prime");
    } else {
        console.log("Not Prime");
    }
}
