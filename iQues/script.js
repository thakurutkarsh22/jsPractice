// https://www.linkedin.com/pulse/top-10-tricky-javascript-questions-i-used-ask-interviews-amit-pal/

// --------------------------------------------- Hoisting --------------------------------------

// Q1./
// greetings(); // 2nd greeting 

// var greetings = function () {
//   console.log("1st greeting")
// }

// greetings(); // 1st greeting

// function greetings(){
//   console.log("2nd Greeting")
// }

// greetings(); //1st greeting


// Q2. 

// var v = 10; 

// (()=> {
//     v3 = 54;
//     console.log(v3); // 54
//     var v3 = 45;
//     v2 = 15;
//     console.log(v) // 10
// })();

// console.log(v2); // 15
// console.log(v3) // reference error;

// var v = 30; 

// bsically we get to know that the variable with var are only hoisted and variable with nothing directly goes to window they are not hoisted 
// v2 = 15 simply says window.v2 = 15 it dosen't matter the execution context 

// steps how window gets a new key v2 with value 15; 

//1. when program reads line  v2 =15 : it sees that if v2 is in local scope or not. 
//2. if it dosent find in local scope then with the help of proto chain the program sees if v2 is in outer context 
//3. this follows until we hit global scope
//4. there we see if v2 is present or not, if not then v2 is added to windows object  




// ---------------------------------------- Closure and variable scope  -----------------------------------------------------

// let counter = function() {
//     let k = 10;
//     return () => ++k;
// }

// console.log(counter()()) // 11
// console.log(counter()()) // 11
// console.log(counter()())// 11

// function createClosureArray() {
//     var badArr = [];

//     for(let index = 0; index<5; index++){
//         badArr[index] = function() {
//             return 'n = ' + index; 
//         }
//     }

//     return badArr;
// }

// var badArr = createClosureArray();

// for(var item in badArr) {
//     console.log(badArr[item]());
// }

/// ------------------------------------------------------ this --------------------------------------------

var fullName = 'john Doe';
var obj = {
    fullname: 'colin ihrthig',
    prop: {
        fullname: 'auriolio',
        getFullname: function() {
            return this.fullname;
        }
    },
    getMyName: function() {
        return this.fullname;
    },
    getFirstName: function(){
        return this.fullname.split(' ')[0];
    },
    getLastName: function() {
        return this.fullname.split(' ')[1]; 
    }    
}

console.log(obj.prop.getFullname());
console.log(obj.getFirstName());
console.log(obj.getMyName());
console.log(obj.getLastName);