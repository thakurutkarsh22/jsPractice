// // var x = 1;

// if (true) {
//   var x = 2;

//   console.log(x);
//   // expected output: 2
// }

// console.log(x);
// // expected output: 2

// var b = a;
// var a = 'A';
// console.log(a);
// console.log(b);
// 'use strict'

var x = 0;
function func() {
    var x = y = 1; // declare x locally; declares y globally
    var z = t = 100;
    var k = p = 14
    console.log("function : " + x,y);
    console.log("z: " + z);
    console.log("t: " + t);
}
func();
console.log(x,y);
// console.log("Outside z: " + z);
console.log("t: " + t);
// console.log("k: " + k);
console.log("p: " + p);