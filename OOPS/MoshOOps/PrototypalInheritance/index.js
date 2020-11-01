
// function Shape() {
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// const s = new Shape();
// s.duplicate();


// function Circle(radius){
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype) // setting inheritance
// // with this we loose our constructor

// // so when you reset prototype of object reset constructor also
// Circle.prototype.constructor = Circle;


// Circle.prototype.draw = function() {
//     console.log('draw');
// }

// const c = new Circle(1);
// c.draw();



/// ------------------------ Inheritance ----------------------------

// function Shape(color) {
//     this.color = color;
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// const s = new Shape();
// s.duplicate();


// function Circle(radius, color){
//     Shape.call(this,color); // calling super constructor
//     this.radius = radius;
// }

// console.log( );

// Circle.prototype = Object.create(Shape.prototype) // setting inheritance 
// // with this we loose our constructor 

// // so when you reset prototype of object reset constructor also 
// Circle.prototype.constructor = Circle;


// Circle.prototype.draw = function() {
//     console.log('draw');
// }

// const c = new Circle(1,'red');
// c.draw();


// extend method 


// function Square(size){
//     this.size =  size;
// }

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// extend(Square,Shape);

// const sq = new Square(10);




// -------------------- Method Overriding -------------------

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Shape() {

// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate')
// }

// function Circle() {
//     this.test = function() {
//         console.log('propertyTest');
//     }
// }


// //This order is necessary 
// extend(Circle,Shape);

// Circle.prototype.test = function() {
//     console.log('proto Test');
// }

// Circle.prototype.duplicate = function() {
//     Shape.prototype.duplicate.call(this); // caling base duplicate also 
//     console.log('duplicate circle')
// }

// const c = new Circle();




// ----------------- PolyMorphism --------------------------

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Shape() {

// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate')
// }

// function Circle() {

// }


// // This order is necessary 
// extend(Circle,Shape);

// Circle.prototype.duplicate = function() {
//     Shape.prototype.duplicate.call(this); // calling base duplicate also 
//     console.log('duplicate circle')
// }


// function Square() {

// }

// extend(Square,Shape);
// Square.prototype.duplicate = function() {
//     console.log('duplicate square')
// }

// const shapes = [
//     new Circle(),
//     new Square()
// ];

// for(let shape of shapes){
//     shape.duplicate();
// }



/// ---------------- favor composition over inheritance -------------------
    // --------Mixins for composition------------

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function(){
        this.hunger--;
        console.log('walking');
    }
};

const canSwim = {
    swim: function(){
        this.hunger--;
        console.log('swim');
    }
};


// const person = Object.assign({},canEat,canWalk);
// console.log(person);



// // by const function 

function Person() {

}

Object.assign(Person.prototype,canEat,canWalk);

const person = new Person();
console.log(person);


// function Goldfish() {

// }

// Object.assign(Goldfish.prototype,canEat,canSwim);

// const goldfish = new Goldfish();
// console.log(goldfish); 













//////// what we leared 
Object.create
Object.assign
