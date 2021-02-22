function Person(name, prof) {
    this.name = name;
    this.prof = prof;
}

let utkarsh = new Person('utkarsh','student');
// {
        // name: utkarsh,
        // prof: student
// }



// but what happens when constructor function returns non primitive values i.e objects

function Person1(name, prof) {
    this.name = name;
    this.prof = prof;

    return {
        isProfessional: true
    }
}

let lakshay = new Person1('utkarsh','student');
// {
        // isProfessional: true
// }



/// -----------------------------  Test question (good)

// this is my library and I want user that uses this library to invoke with new keyword but they do not do this.
// var object =  MyLibrary({data: 'abc'}) // forgets new 
// so how will I abe to detect and correct this behaviour 

function MyLibrary(config) {
    if(new.target) {
        throw new Error('call me new operator!!!');
    }
}

// module.exports = MyLibrary;

var object =  MyLibrary({data: 'abc'})