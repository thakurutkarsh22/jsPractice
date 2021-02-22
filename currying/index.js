// bind way

// let multiply = function(x,y) {
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this,2); // we intentionally pass 2 here so we are currying our method 
// multiplyByTwo(5);


// let multiplyBtThree = multiply.bind(this,3);
// multiplyBtThree(5);



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


// function sum (x, y, z) {
//     return x + y + z
//   }
  
// function curry (fn) {
// let args = []
// function curr () {
//     const currentArgs = Array.prototype.slice.call(arguments)
//     args = args.concat(currentArgs)
//     if (args.length === 3) {
//         console.log(this)
//     return fn.apply(this, args)
//     }
//     return curr
// }
// return curr
// }
  
//   const curriedFn = curry(sum)
//   const a = curriedFn(10, 20, 30) // 60
//   const b = curriedFn(10, 20)(30) // 60
//   const c = curriedFn(10)(20)(30) // 60
//   const d = curriedFn(10)(20)(30) // 100

//   console.log(a,b,c,d);


// using toString

function getSum (...args) {
    let total = 0
    function sum (...args) {
      for (const item of args) {
        total += item
      }
      return sum
    }
  
    sum.toString = function () {
      return total
    }
  
    return sum(...args)
  }
  
  console.log(0 + getSum(1, 2)(4, 3)(4)(5)())
  
  // using valueOf
  
  function getSumV2 (...args) {
    let total = 0
    function sum (...args) {
      for (const item of args) {
        total += item
      }
      return sum
    }

    sum.valueOf = function () {
      return total
    }
  
    return sum(...args)
  }
  
  console.log(0 + getSumV2(1, 2)(4, 3)(4)(5))
  
  // using extra ()
  
  function getSumV3 (...args) {
    let total = 0
    function sum (...args) {
      for (const item of args) {
        total += item
      }
      if (args.length === 0) {
        return total
      }
      return sum
    }
  
    return sum(...args)
  }
  
  console.log(getSumV3(1, 2)(4, 3)(4)(5)())



  // let sum = a => b => b ? sum(a+b) : a;

// let problem = sum(1)(2)(3)(14)();
// console.log(problem);


// addition(6,1,2,3,4)(1)(23, 5,6, 7)....(1).end(); // create addition method

function getSumV4 (...args) {
    let total = 0
    function sum (...args) {
      for (const item of args) {
        total += item
      }
      return sum
    }

    sum.end = function() {
        return total;
    }
   
    sum.valueOf = function () {
      return total
    }
  
    return  sum(...args)
}

console.log(0 + getSumV4(1, 2)(4, 3)(4)(5).end());