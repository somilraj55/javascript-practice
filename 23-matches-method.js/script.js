// ========================================
// PART 23 - matches() Method
// ========================================

// matches() checks whether an element matches
// a given CSS selector.

// Example HTML:
//
// <button id="btn" class="active">Click Me</button>

let btn = document.querySelector("#btn");

// Check ID
console.log(btn.matches("#btn")); // true

// Check class
console.log(btn.matches(".active")); // true

// Check tag
console.log(btn.matches("button")); // true

// Check a class that doesn't exist
console.log(btn.matches(".hidden")); // false


// ========================================
// IMPORTANT POINTS
// ========================================

/*
1. matches() returns true or false.

2. It checks the element itself.

3. It does not search through parent elements.

4. closest() searches the element and its ancestors
   for the nearest matching element.

5. matches() is useful in event delegation
   to check which element triggered an event.
*/
