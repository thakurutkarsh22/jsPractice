const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};



// const me = Object.create(person); // method creates a new object, using an existing object as the prototype of the newly created object.

// console.log(person);
// console.log(me);

// me.printIntroduction();


const normalobject = Object.create(null);

normalobject.name = 'utkarsh';
normalobject.class = '12th';

for(let key in normalobject) {
    console.log(key);
}

const ab = {};
ab.name = 'utkarsh';
ab.class = '12th';

for(let key in ab) {
    console.log(key);
}




// polyfill 

Object.prototype.myCreate = function(proto) {

    function F() { }
    F.prototype = proto;
    return new F();
}

const myObj = Object.myCreate(person);
console.log(myObj);