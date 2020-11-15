// let and cost is also hoisted but not on global object but n script object

// time between hoisting and assignment of a variable or const is known as temporal dead zone.
// you can add debugger on the line and see that it associates memory to the lest and const same as var.

// reference error 

console.log(a);
let a = 10;

var b =100;

console.log(lassun) // reference error: lassun is not defined


// --- syntax error 

let a = 10;
let a = 100;

// or

let b = 10;
var b = 199;


// but this works 

var c =10;
var c = 100;



/// --- const is eve more strict then let ----------// 

//how ?  cant reassign both declaration and assignment should be at same line 

const a1 = 100;

const a;
a = 20;  // syntax error : missing initializer in const declaration.



//////  type error 

const ak = 1000;
ak = 100;






