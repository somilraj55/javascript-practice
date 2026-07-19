// ===============================
// Strong Number
// ===============================

let strongNum = 145;
let original = strongNum;
let sum = 0;

while (strongNum > 0) {

    let lastDigit = strongNum % 10;

    let factorial = 1;

    for (let i = 1; i <= lastDigit; i++) {
        factorial *= i;
    }

    sum += factorial;

    strongNum = Math.floor(strongNum / 10);
}

if (sum === original) {
    console.log("Strong Number");
} else {
    console.log("Not Strong Number");
}