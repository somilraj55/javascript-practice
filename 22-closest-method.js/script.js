// ========================================
// PART 22 - closest() Method
// ========================================

// closest() finds the nearest ancestor (or itself)
// that matches a CSS selector.

// Example HTML:
//
// <div class="card">
//     <div class="content">
//         <button id="btn">Click Me</button>
//     </div>
// </div>

let btn = document.querySelector("#btn");

// Find the nearest parent with class "content"
console.log(btn.closest(".content"));

// Find the nearest parent with class "card"
console.log(btn.closest(".card"));

// Find the nearest ancestor with tag "div"
console.log(btn.closest("div"));

// Check if the button itself matches the selector
console.log(btn.closest("#btn"));


// ========================================
// IMPORTANT POINTS
// ========================================

/*
1. closest() checks the element itself first.

2. If it doesn't match, it moves up through ancestors.

3. It returns the nearest matching element.

4. It returns null if no matching element exists.

5. closest() is useful in event delegation
   when you need to find a matching parent element.
*/
