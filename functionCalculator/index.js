/**
 * question create a function calculator that should take one initial value. 
 * Chain calculations like add, subtract on it
 * Return the calculated value on invocation of val function at the end of the chain.
 */

//  cal(2).add(5).sub(4).val();

/// approach 1 --------------------------------- 

// function cal(initialValue) {
//     // 1.  create accumulator - store result.
//     var accumulator = initialValue;


//     //2. Define add, subtract and val functions. 
//     this.add = function add(num) {
//         accumulator += num;
//         console.log(this)
//         return this;
//     }

//     this.sub = function sub(num) {
//         accumulator -= num;
//         return this; 
//     }

//     this.val = function val() {
//         return accumulator;
//     }

//     //3. Return an object with add, sub, and val function -- chaining 
//     return this;    

// }

// var result = cal(2).add(5).sub(4).val();
// console.log(result);


///// Approach 2 ------------------------------------



// function cal(initialValue) {
//     // 1.  create accumulator - store result.
//     var accumulator = initialValue;

//     var calObj = {
//         add, sub, val
//     }

//     //2. Define add, subtract and val functions. 
//     function add(num) {
//         accumulator += num;
//         console.log(this)
//         return calObj;
//     }

//     function sub(num) {
//         accumulator -= num;
//         return calObj; 
//     }

//     function val() {
//         return accumulator;
//     }

//     //3. Return an object with add, sub, and val function -- chaining 
//     return calObj;    

// }

// var result = cal(2).add(5).sub(4).val();
// console.log(result);







// approach 3 ------------------------



// function cal(initialValue) {
//     // 1.  create accumulator - store result.
//     // var accumulator = initialValue;

//     var calObj = {
//         add, sub, val
//     }

//     //2. Define add, subtract and val functions. 
//     function add(num) {
//         return cal(initialValue + num);
//     }

//     function sub(num) {
//         return cal(initialValue + num);
//     }

//     function val() {
//         return initialValue;
//     }

//     //3. Return an object with add, sub, and val function -- chaining 
//     return calObj;    

// }

// var result = cal(2).add(5).sub(4).val();
// console.log(result);



// approach 4 -------------


class Calculator {
    constructor(initialValue) {
        this.accumulator = initialValue;
    }

    add(num) {
        this.accumulator += num;
        return this;
    }

    sub(num) {
        this.accumulator -= num;
        return this;
    }

    val() {
        return this.accumulator;
    }
}


var result = cal(2).add(5).sub(4).val();
console.log(result);