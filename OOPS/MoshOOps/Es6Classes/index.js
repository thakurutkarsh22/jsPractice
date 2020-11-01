// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const c = new Circle(11);
// console.log(c);



// class CircleEs6 {
//     constructor(radius) {
//         this.radius = radius;
//         this.move = function() {
//             // this method will not go in proto 
//         }
//     }

//     // all methods here will go to proto
//     draw() {
//         console.log('draw');
//     }
// }

// const c1 = new CircleEs6(12);
// console.log(c1);




// ---------------- hoisting ------------------

// sayHello(); // I can call this Hoisted 
// // functional declaration 
// function sayHello() {

// }

// // sayGoodbye() // will show error 
// // Function expression 
// const sayGoodbye = function(){};


// // class decleration and class expression are not hoisted

// const c = new Circle(); // this wont work will throw an error

// // class decleration 
// class Circle {

// }

// // Class Expression 
// const Square = class {

// }


// ------------------ Instance vs static methods ---------------------

// class Circle {
//     constructor(radius){
//         this.radius = radius;
//     }

//     // instance method
//     draw() {

//     }

//     // static method

//     static parse(str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);        
//     }
// }

// const circle = new Circle(1);

// console.log(circle);

// console.log(Circle.parse('{"radius":1}'));

// // circle.parse // dont exist




// ---------------------------------- this ---------------------------

// 'use strict'
// const Circle = function() {
//     this.draw = function() {console.log(this)}
// };

// const c = new Circle();
// //method call
// c.draw();

// //functional call 
// const draw = c.draw;
// draw();


// by default class in js use strict mode 

// class Circle {
//     draw() {
//         console.log(this);
//     }
// } 


// const c = new Circle();
// const draw = c.draw;
// draw();



// --------------------- private member using symbol ---------------------

// const _radius = Symbol(); // symbol is a unique identifier
// const _draw = Symbol();

// class Circle {
//     constructor(radius){
//         // this.radius = radius;
//         this[_radius] = radius;
//     }

//     [_draw]() {

//     }
// }

// const c = new Circle(1);
// // c.radius;

// // hack to access private property 

// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);


// ----------------------- private property and methods using maps -------------------

// const _radius = new WeakMap();
// const _move = new WeakMap();

// class Circle {
//     constructor(radius){
//         _radius.set(this,radius)    
//         _move.set(this, () => { // arrow functin for this 
//             console.log('move',this);
//         })
//     }

//     draw() {
//         console.log(_radius.get(this));
//         _move.get(this)();
//         console.log('draw');
//     }
// }

// const c = new Circle(1);




// -------------------------- getter and setter -------------------------


// const _radius = new WeakMap(); 

// class Circle {
//     constructor(radius){
//         _radius.set(this,radius)
//     }

//     get radius() {
//         return _radius.get(this);
//     }

//     set radius(value){
//         if(value<=0)
//         throw new Error('invalid');
//         _radius.set(this,value);
//     }
// }

// const c = new Circle(1);



// --------------------- Inheritance --------------------------

// class Shape {

//     constructor(color){
//         this.color = color;
//     }

//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     constructor(color,radius){
//         super(color); // if not called faat jayegi iski
//         this.radius = radius;
//     }

//     draw() {
//         console
//     }
// }

// const c = new Circle('red',12);


// ----------------- Method Overriding-------------------


class Shape { 

    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        console.log('circle Move');
    }
}

const c = new Circle();
