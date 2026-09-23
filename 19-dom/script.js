// ========================================
// DOM - Document Object Model
// ========================================


// ========================================
// Part 1: DOM Basics
// ========================================

// DOM = Document Object Model
// Browser HTML page ko object/tree structure mein convert karta hai.

// document represents the current HTML document.

console.log(document);


// ========================================
// getElementById()
// ========================================

// HTML:
// <h1 id="heading">Hello</h1>

// Select element using ID

let heading = document.getElementById("heading");

console.log(heading);


// Change text using textContent

heading.textContent = "DOM is Easy";


// ========================================
// Part 2: querySelector()
// ========================================

// querySelector() selects the FIRST matching element.

// ID selector
let title = document.querySelector("#title");

console.log(title);


// Class selector
let info = document.querySelector(".info");

console.log(info);


// Tag selector
let button = document.querySelector("button");

console.log(button);


// querySelector() selects only the first matching element.


// ========================================
// Part 3: querySelectorAll()
// ========================================

// querySelectorAll() selects ALL matching elements.

let titles = document.querySelectorAll(".title");

console.log(titles);


// Access elements using index

console.log(titles[0]);
console.log(titles[1]);


// ========================================
// forEach() with DOM
// ========================================

// forEach() can be used to work with
// every element returned by querySelectorAll().

let textElements = document.querySelectorAll(".text");

textElements.forEach((element) => {
    console.log(element);
});


// Change all elements

textElements.forEach((element) => {
    element.textContent = "I am learning JavaScript";
});


// ========================================
// Part 4: textContent
// ========================================

// textContent gets or sets the text content.

let box = document.querySelector("#box");

console.log(box.textContent);


// Change text

box.textContent = "I am learning DOM";


// ========================================
// innerText
// ========================================

// innerText gets or sets visible text.

console.log(box.innerText);


// ========================================
// innerHTML
// ========================================

// innerHTML gets or sets HTML content.

console.log(box.innerHTML);


// Insert HTML

box.innerHTML = `
    <h2>DOM is Easy</h2>
    <p>I am learning JavaScript</p>
`;


// Difference:
//
// textContent -> Text content
// innerText   -> Visible text
// innerHTML   -> HTML + text


// ========================================
// Part 5: Attributes
// ========================================

// Example HTML:
// <a id="website" href="https://google.com">Visit</a>

let website = document.querySelector("#website");


// getAttribute()
// Read attribute value

console.log(website.getAttribute("href"));


// setAttribute()
// Set/change attribute

website.setAttribute("href", "https://youtube.com");


// Example image

let photo = document.querySelector("#photo");


// Change src

photo.setAttribute("src", "profile.jpg");


// hasAttribute()
// Check whether attribute exists

console.log(photo.hasAttribute("alt"));


// removeAttribute()
// Remove attribute

photo.removeAttribute("alt");


// Attribute methods:
//
// getAttribute()    -> Read
// setAttribute()    -> Set/change
// removeAttribute() -> Remove
// hasAttribute()    -> Check


// ========================================
// Part 6: classList
// ========================================

let card = document.querySelector("#card");


// add()
// Add class

card.classList.add("active");


// contains()
// Check class

console.log(card.classList.contains("active"));


// remove()
// Remove class

card.classList.remove("active");


// toggle()
// Add if absent
// Remove if present

card.classList.toggle("hidden");


// classList methods:
//
// add()      -> Add class
// remove()   -> Remove class
// contains() -> Check class
// toggle()   -> Add/remove switch


// ========================================
// Part 7: Creating Elements
// ========================================

// createElement() creates a new HTML element.

let newHeading = document.createElement("h2");

newHeading.textContent = "DOM is Easy";

newHeading.classList.add("title");

console.log(newHeading);


// Create paragraph

let paragraph = document.createElement("p");

paragraph.textContent = "I am learning JavaScript";

console.log(paragraph);


// Create link

let link = document.createElement("a");

link.textContent = "Visit GitHub";

link.setAttribute("href", "https://github.com");

console.log(link);


// IMPORTANT:
// createElement() only creates the element.
// It does NOT automatically add it to the webpage.


// ========================================
// Part 8: append()
// ========================================

// append() adds element/text at the end of a parent.

let container = document.getElementById("container");

let headingElement = document.createElement("h2");

headingElement.textContent = "DOM is Easy";

container.append(headingElement);


// append() can add multiple values

let paragraphElement = document.createElement("p");

paragraphElement.textContent = "I am learning JavaScript";

container.append(paragraphElement, "Hello");


// ========================================
// appendChild()
// ========================================

// appendChild() adds a Node/element to a parent.

let newParagraph = document.createElement("p");

newParagraph.textContent = "Learning DOM";

container.appendChild(newParagraph);


// Difference:
//
// append()
// -> elements + text
// -> multiple values possible
//
// appendChild()
// -> one Node/element


// ========================================
// Part 9: remove()
// ========================================

// remove() removes the element itself.

let headingToRemove = document.getElementById("heading");

headingToRemove.remove();


// ========================================
// removeChild()
// ========================================

// removeChild() is used by the parent
// to remove one of its child elements.

let parent = document.getElementById("container");

let child = document.getElementById("para");

parent.removeChild(child);


// Difference:
//
// remove()
// -> Element removes itself
//
// removeChild()
// -> Parent removes its child


// ========================================
// DOM Interview Revision
// ========================================

// 1. What is DOM?
//
// DOM stands for Document Object Model.
// It represents the HTML document as an object/tree structure
// that JavaScript can manipulate.
//
//
// 2. What does getElementById() do?
//
// It selects an element using its ID.
//
//
// 3. What does querySelector() do?
//
// It selects the first element matching a CSS selector.
//
//
// 4. What does querySelectorAll() do?
//
// It selects all elements matching a CSS selector.
//
//
// 5. What is textContent?
//
// It gets or sets the text content of an element.
//
//
// 6. What is innerText?
//
// It gets or sets the visible text of an element.
//
//
// 7. What is innerHTML?
//
// It gets or sets the HTML content inside an element.
//
//
// 8. What is classList?
//
// It is used to add, remove, toggle and check CSS classes.
//
//
// 9. What does createElement() do?
//
// It creates a new HTML element.
//
//
// 10. Difference between append() and appendChild()?
//
// append() can add elements and text and can accept multiple values.
// appendChild() adds one Node/element.
//
//
// 11. Difference between remove() and removeChild()?
//
// remove() removes the element itself.
// removeChild() removes a child through its parent.


// ========================================
// Important Points
// ========================================

// document
// -> Current HTML document
//
// getElementById()
// -> Select by ID
//
// querySelector()
// -> First matching element
//
// querySelectorAll()
// -> All matching elements
//
// textContent
// -> Text
//
// innerText
// -> Visible text
//
// innerHTML
// -> HTML + text
//
// getAttribute()
// -> Read attribute
//
// setAttribute()
// -> Set/change attribute
//
// removeAttribute()
// -> Remove attribute
//
// hasAttribute()
// -> Check attribute
//
// classList.add()
// -> Add class
//
// classList.remove()
// -> Remove class
//
// classList.contains()
// -> Check class
//
// classList.toggle()
// -> Add/remove class
//
// createElement()
// -> Create new element
//
// append()
// -> Add element/text
//
// appendChild()
// -> Add one Node
//
// remove()
// -> Self remove
//
// removeChild()
// -> Parent removes child