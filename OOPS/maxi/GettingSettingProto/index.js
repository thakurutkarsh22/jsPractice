const course = {
    title: 'Tit',
    rating: 5
};

console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating: function() {
        console.log(`${this.rating}/5`)
    }
});
course.printRating();












// setter 




// create an object where we can define our own prototypes
const student = Object.create({
    printProgress: function() {
        console.log(this.progress);
    }
},{
    name: {
    configurable: true,
    enumerable: true,
    value: 'ut',
    writable: true,
    }
})

// student.name = 'utkarsh';

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false, // this false means there is no meaninng og line 58 where I make value 123
})

student.printProgress();

console.log(student);

student.progress = 123;
console.log(student);