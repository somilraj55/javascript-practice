// ========================================
// PART 21 - Event Capturing
// ========================================

// Event Capturing means the event travels from
// the outer parent towards the target element.

// Example HTML:
//
// <div id="parent">
//     Parent
//     <button id="child">Click Me</button>
// </div>

let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

// Event Capturing on parent
parent.addEventListener("click", () => {
    console.log("Parent clicked");
}, true);

// Event Capturing on child
child.addEventListener("click", () => {
    console.log("Child clicked");
}, true);


// ========================================
// PART 22 - Bubbling vs Capturing
// ========================================

// Capturing: Parent -> Child
// Bubbling:  Child -> Parent

parent.addEventListener("click", () => {
    console.log("Parent bubbling");
});

child.addEventListener("click", () => {
    console.log("Child bubbling");
});


// ========================================
// IMPORTANT POINTS
// ========================================

/*
1. Event capturing travels from parent to target.

2. Event bubbling travels from target to parent.

3. The third argument true enables capturing.

4. By default, addEventListener() uses bubbling.

5. Capturing and bubbling are phases of event propagation.
*/
