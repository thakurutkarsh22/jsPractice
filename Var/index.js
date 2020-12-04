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






// Add a new method to the Shape class's prototype, calcPerimeter(), which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
// Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
// Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser DevTools' console as expected.
// Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
// Call triangle.calcPerimeter() to check that it works OK.





function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }


Shape.prototype.calcPerimeter = function () {
    console.log(this.sideLength * this.sides);   
}

const square = new Shape('square', 4 ,5);
square.calcPerimeter();


class ShapeEs6 {

    constructor(name,sides,sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        console.log(this.sideLength * this.sides);
    }

    get a() {

    }

    set a(value) {

    }
}

let obj = new ShapeEs6('a',3,2);
obj.a = 123;
obj.a