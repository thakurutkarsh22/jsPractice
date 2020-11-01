

////// ONLY DECELERATIONS ARE HOISTED


// ---------------------------- 

// console.log(num);  // will show undefined 
// var num;
// num = 6;

// ------------------------------

// example 1 

// Only y is hoisted

// x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
// console.log(x + " " + y); // '1 undefined'
// // This prints value of y as undefined as JavaScript only hoists declarations
// var y = 2; // Declare and Initialize y



// console.log(a + "" + b); // 'Cranberry'
// a = 'Cran'; // Initialize a
// b = 'berry'; // Initialize b


// ---------------------------------------


catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}



// --------------------------------------