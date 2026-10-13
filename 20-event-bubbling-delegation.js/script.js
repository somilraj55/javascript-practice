// ========================================
// PART 14 - Event Bubbling
// ========================================

// Event Bubbling means an event starts from the
// target element and bubbles up to its parent elements.

// Example HTML:
//
// <div id="parent">
//     Parent
//     <button id="child">Click Me</button>
// </div>

let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", () => {
    console.log("Child clicked");
});

// When the button is clicked, output:
// Child clicked
// Parent clicked


// ========================================
// PART 15 - stopPropagation()
// ========================================

// stopPropagation() stops the event from bubbling
// to parent elements.

child.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Button clicked only");
});


// ========================================
// PART 16 - Event Delegation
// ========================================

// Event Delegation means adding one event listener
// to a parent to handle events from its children.

// Example HTML:
//
// <ul id="list">
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>JavaScript</li>
// </ul>

let list = document.querySelector("#list");

list.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }
});


// ========================================
// Event Delegation with Dynamic Elements
// ========================================

// The parent listener can also handle newly added
// child elements.

let newItem = document.createElement("li");

newItem.textContent = "React";

list.append(newItem);

// Clicking the new React item also works because
// the event listener is attached to the parent list.


// ========================================
// INTERVIEW REVISION
// ========================================

/*
1. Event Bubbling:
   An event propagates from the target element
   towards its parent elements.

2. stopPropagation():
   Stops the event from propagating to parent elements.

3. Event Delegation:
   Uses a parent event listener to handle events
   from multiple child elements.

4. event.target:
   Identifies the element that triggered the event.

5. matches():
   Checks whether an element matches a CSS selector.

6. Benefit of Event Delegation:
   Reduces the need to attach separate listeners
   to every child and supports dynamically added children.
*/


// ========================================
// IMPORTANT POINTS
// ========================================

/*
1. Events can bubble from child to parent.

2. Event bubbling is useful for understanding
   how nested event listeners behave.

3. stopPropagation() stops propagation.

4. Event delegation uses a shared parent listener.

5. event.target helps identify the clicked child.

6. matches() checks an element against a selector.

7. Event delegation can handle dynamically added children.
*/