// bind way

let multiply = function(x,y) {
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2); // we intentionally pass 2 here so we are currying our method 
multiplyByTwo(5);


let multiplyBtThree = multiply.bind(this,3);
multiplyBtThree(5);



// function closures way 

// let multiply1 = function(x) {
//     return function(y) {
//         console.log(x*y);
//     }
// }


// let multiplyByTwo = multiply1(2); 
// multiplyByTwo(5);


// let multiplyBtThree = multiply(3);
// multiplyBtThree(5);