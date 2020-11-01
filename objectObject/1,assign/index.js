

const target = { a: 1, b:2 };
const source = {a : 3 , c : 4 };

const s2 = { z:12 };

const returnVal  = Object.assign(target,source,s2);

// console.log(target);   // {a : 3, b : 2 , c:4}
// console.log(source);
console.log(returnVal);
console.log(target===returnVal);



// polyfill

Object.prototype.myAssign = function(...args) {

    var target = args[0];
    for(var i=1; i<args.length;i++){
        var source = arguments[i];

        for(var key in source) {
            console.log('key' , key);
            if(Object.prototype.hasOwnProperty.call(source,key))  // this check is important !!! 
                target[key] = source[key];
        }
    }

    return target;
}


console.log(myAssign(target,source,s2));


// with assign you cant deep clone the items it makes copy only in the first place.

// deep clone 

let obj1 = {a :0, b :{c:0}};
let obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj1 === obj2);













/// 
// Object.prototype.hasOwnProperty() :  method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

