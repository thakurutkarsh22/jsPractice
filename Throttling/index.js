// Throtling : is generally used for performance optimisation 
// on click button call api and if user clicks again n again it will be disaster so ewe have to limit it using throtling 

const expensive = () => {
    console.log("Expensive");
}

// window.addEventListener("resize",expensive);

const throttle = (fn, limit) => {
    let flag = true;
    console.log(flag);
    return function() {
        let context = this;
        args = arguments;
        if(flag) { 
            fn.apply(context,args);
            flag = false;
        }
           
        setTimeout(()=>{
            flag = true;
        },limit);
    }
}

const betterExpensiveFunction = throttle(expensive,10000);

window.addEventListener("resize",betterExpensiveFunction);


// memoizer 

function memoizer(fun) {

    let cache = {};
    return function(n){
        if(cache[n]) {
            return cache[n];
        } else {
            var result = fun.call(this, n);
            cache[n] = result;
            return result;
        }
    }
}

// function fibonacci(n,memo) {
//     memo = memo || {}
//     if (memo[n]) {
//         return memo[n]
//     }
//     if (n <= 1) {
//         return 1
//     }
//     return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
// }

function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const betterFibbo = memoizer(fibonacci);
betterFibbo(5);