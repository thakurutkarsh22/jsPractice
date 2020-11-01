
// class prototyping 

class AgedPerson {
    printAge(){
        console.log(this.age);
    }
}

class Person {
    name = 'utkarsh'; // name is added just like age but after super() call 
    constructor(age) {
        // super();
        this.age = age;
        // this.greet = function() {...}
    }

    // greet // this shorthand is the trigger for the js to do the optimisation 

    greet() { // not created for every instace of this class
        console.log('Hi I am ' + this.name + ' and I am ' + this.age + ' years old');
    }

    // greet = () => { // created for every instance of this class
    //     console.log('Hi I am ' + this.name + ' and I am ' + this.age + ' years old');
    // }
}

const p = new Person(12);
console.log(p);

const p2 = new Person(14);
console.log(p2);
p.greet();
console.log(p);
console.log(p.__proto__.greet ===  p2.__proto__.greet); // true
console.log(p.age ===  p2.age); // false


const button = document.getElementById('btn');
// button.addEventListener('click',p.greet) // works with 2nd type
button.addEventListener('click',p.greet.bind(p)) // this works with shorthand greet


// browser does some optimization and make method available in __proto__ so that function should be same object across different instantiations.





// construction function equivalent of above code 

// function Person(age) {
//     this.age = age;
//     this.name = 'mmk';
//     // this.greet = function() {

//     // }
// }

// Person.prototype.greet = function() {
//     console.log('Hi I am ' + this.name + ' and I am ' + this.age + ' years old');
// }


// const p = new Person(12);
// console.log(p);

// const p2 = new Person(14);
// console.log(p2);

// console.log(p.__proto__.greet ===  p2.__proto__.greet); // true
// console.log(p.age ===  p2.age); // false