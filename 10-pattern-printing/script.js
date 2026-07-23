// ========================================
// Pattern 1 - Right Triangle
// Output:
// *
// **
// ***
// ****
// *****
// ========================================

for (let i = 1; i <= 5; i++) {
    let star = "";

    for (let j = 1; j <= i; j++) {
        star += "*";
    }

    console.log(star);
}


// ========================================
// Pattern 2 - Inverted Right Triangle
// Output:
// *****
// ****
// ***
// **
// *
// ========================================

for (let i = 5; i >= 1; i--) {
    let star = "";

    for (let j = i; j >= 1; j--) {
        star += "*";
    }

    console.log(star);
}


// ========================================
// Pattern 3 - Right Aligned Triangle
// Output:
//     *
//    **
//   ***
//  ****
// *****
// ========================================

for (let i = 1; i <= 5; i++) {
    let star = "";

    // Print Spaces
    for (let j = 1; j <= 5 - i; j++) {
        star += " ";
    }

    // Print Stars
    for (let j = 1; j <= i; j++) {
        star += "*";
    }

    console.log(star);
}


// ========================================
// Pattern 4 - Inverted Right Aligned Triangle
// Output:
// *****
//  ****
//   ***
//    **
//     *
// ========================================

for (let i = 1; i <= 5; i++) {
    let star = "";

    // Print Spaces
    for (let j = 1; j <= i - 1; j++) {
        star += " ";
    }

    // Print Stars
    for (let j = 5; j >= i; j--) {
        star += "*";
    }

    console.log(star);
}


// ========================================
// Pattern 5 - Pyramid Pattern
// Output:
//     *
//    ***
//   *****
//  *******
// *********
// ========================================

for (let i = 1; i <= 5; i++) {
    let star = "";

    // Print Spaces
    for (let j = 1; j <= 5 - i; j++) {
        star += " ";
    }

    // Print Stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        star += "*";
    }

    console.log(star);
}


// ========================================
// Pattern 6 - Inverted Pyramid Pattern
// Output:
// *********
//  *******
//   *****
//    ***
//     *
// ========================================

for (let i = 1; i <= 5; i++) {
    let star = "";

    // Print Spaces
    for (let j = 1; j <= i - 1; j++) {
        star += " ";
    }

    // Print Stars
    for (let j = 1; j <= 2 * (5 - i + 1) - 1; j++) {
        star += "*";
    }

    console.log(star);
}


// ========================================
// Pattern 7 - Diamond Pattern
// Output:
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// ========================================

// Upper Pyramid
for (let i = 1; i <= 5; i++) {
    let star = "";

    // Print Spaces
    for (let j = 1; j <= 5 - i; j++) {
        star += " ";
    }

    // Print Stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        star += "*";
    }

    console.log(star);
}

// Lower Inverted Pyramid
for (let i = 2; i <= 5; i++) {
    let star = "";

    // Print Spaces
    for (let j = 1; j <= i - 1; j++) {
        star += " ";
    }

    // Print Stars
    for (let j = 1; j <= 2 * (5 - i) + 1; j++) {
        star += "*";
    }

    console.log(star);
}