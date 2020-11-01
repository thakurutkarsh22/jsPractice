
// |                /\
// |                |
// |                |
// |                |
// \/               |
// capturing      Bubbling  

// ------------------------------------bubbling ----------------------------------------------------

// const grandParentButton = document.querySelector('#grandparent');

// grandParentButton.addEventListener('click', () => {
//     console.log("grandParent hit!")
// },false);

// const parentButton = document.querySelector('#parent');

// parentButton.addEventListener('click', () => {
//     console.log("parent hit!")
// },false);

// const childButton = document.querySelector('#child');

// childButton.addEventListener('click', () => {
//     console.log("child hit!")
// },false);

// capturing

// const grandParentButton = document.querySelector('#grandparent');

// grandParentButton.addEventListener('click', () => {
//     console.log("grandParent hit!")
// },true);

// const parentButton = document.querySelector('#parent');

// parentButton.addEventListener('click', () => {
//     console.log("parent hit!")
// },true);

// const childButton = document.querySelector('#child');

// childButton.addEventListener('click', () => {
//     console.log("child hit!")
// },true);


// mix match for better performance



// const grandParentButton = document.querySelector('#grandparent');

// grandParentButton.addEventListener('click', () => {
//     console.log("grandParent hit!")
// },true); // capturing

// const parentButton = document.querySelector('#parent');

// parentButton.addEventListener('click', () => {
//     console.log("parent hit!")
// },false); // bubbling 

// const childButton = document.querySelector('#child');

// childButton.addEventListener('click', () => {
//     console.log("child hit!")
// },true); // capturing


// stop propogation


// const grandParentButton = document.querySelector('#grandparent');

// grandParentButton.addEventListener('click', () => {
//     console.log("grandParent hit!")
// },false); 

// const parentButton = document.querySelector('#parent');

// parentButton.addEventListener('click', () => {
//     console.log("parent hit!")
// },false);  

// const childButton = document.querySelector('#child');

// childButton.addEventListener('click', (e) => {
//     console.log("child hit!")
//     e.stopPropagation();
// },false); 