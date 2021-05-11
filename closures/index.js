// definition: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 


let f = (a) => {
    let i = 1;
    let j = 2; //  j will not be included in closure as long as it is not used inside the inner function
    return ()=> {
        console.log(i +"a");
    }
}

console.dir(f(1));




// -------------------------------- closure inside a loop ---------------

for(let i=0;i<3;i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// console.log(i); i is not defined

console.log('-------------------- seperator -----------------')

for(j=0;j<3;j++){
    setTimeout(() => {
        console.log(j);
    }, 1000);
}


console.log(j + "j");



// solution for above prob 

for(var  k=0;k<3;k++){
    ((l)=>{
        setTimeout(() => {
            console.log(l);
        }, 1000);
    })(k);   
}


// polyfill of then finally

if (!Promise.prototype.finally) {
    Promise.prototype.finally = function f(fn){
        return this.then(
            function t(v){
                return Promise.resolve( fn() )
                    .then(function t(){
                        return v;
                    });
            },
            function c(e){
                return Promise.resolve( fn() )
                    .then(function t(){
                        throw e;
                    });
            }
        );
    };
}

//// ---- advantages of closure 

// 1. module pattern 
// 2. function currying 
// 3. higherOrderFunctions memoise and ones


// closures work in data hiding and encapsulation. 

// var counter = 0;

// function incrementCounter(){
//     counter++;
// }

function counter() {
    var count = 0;

    return function incrementCounter(){
        counter++;
        console.log(counter);
    }
}

console.log(count); // cant do this is privacy 

var counter1 = counter();
counter1(); // this will increment the counter to 1
counter1(); // this will increment the counter to 2


var counter2 = counter(); // this will be a completly new counter the previous. 
counter2(); // 1 
counter2(); // 2 


/// ---- disadvantages of closures -------------- 

// 1. over consumptions of memory those closed variables are not garbage collected till the program expire. 
//2. it can lead to memory leaks.