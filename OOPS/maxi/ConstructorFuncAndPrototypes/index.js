
// // class prototyping 

// class AgedPerson {
//     printAge(){
//         console.log(this.age);
//     }
// }

// class Person extends AgedPerson {
//     name = 'utkarsh';
//     constructor() {
//         super();
//         this.age = '23';
//     }

//     greet() {
//         console.log('Hi I am ' + this.name + ' and I am ' + this.age + ' years old');
//     }
// }


// console.dir(AgedPerson);

// ------------------------------------------ end of class prototypig ------------------------->

// functional prototyping 

function Person() {
    this.age = 30;
    this.name = 'Utt';
    this.greet = function() {
        console.log('Hi I am ' + this.name + ' and I am ' + this.age + ' years old');
    }; 
}

// Person.prototype = {
//     printAge(){
//         console.log(this.age);
//     }
// }

Person.prototype.printAge = function() {   
    console.log(this.age);
}


// ----------------------End of functional Prototyping------------------------->

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p);

console.log(p.__proto__ === Person.prototype);
console.log(p.__proto__ === Person.__proto__);

console.dir(Object);


// prototype waha hota hai jaha jaha constructor function hota hai













