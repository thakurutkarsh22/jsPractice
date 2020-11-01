
// Instance Vs ProtoType Members

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);




let person = {
    name: 'utt'
}

console.log(person);

let objectBase = Object.getPrototypeOf(person);

console.log(objectBase);

let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');

console.log(descriptor);

// for(let key in person){
//     console.log(key);
// }


// create own property 

Object.defineProperty(person,'name', {
    writable: false
})

person.name = 'jos';

console.log(person);  // name dosent change 






// example of making a method go to proto type as when we have more copies of
// object so methods will have large number in our memory 


function CircleNew(radius) {
    // instance Members
    this.radius = radius;
    // this.draw = function() {
    //     console.log('draw');
    // }
    this.move = function() {
        this.draw();
        console.log('move');
    }
}

const c1 = new CircleNew(10);

// Prototype members
CircleNew.prototype.draw = function() {
    // this.move();
    console.log('draw');
}




CircleNew.prototype.toString = function() {
    return 'cic with rad' + this.radius;
}








// Iterate Over Instance Vs Prototype Properties 




function Circle1(radius) {
    // instance Members
    this.radius = radius;
    this.move = function() {
        console.log('move');
    }
}

const c2 = new Circle1(10);

// Prototype members
Circle1.prototype.draw = function() {
    console.log('draw');
}

//return only instance members
console.log(Object.keys(c2))// draw is not included

//returns all members(instance(own) + prototype)
for(let key in c1) console.log(key);


console.log(c1.hasOwnProperty('radius')); // true
console.log(c1.hasOwnProperty('radiusss')); // false