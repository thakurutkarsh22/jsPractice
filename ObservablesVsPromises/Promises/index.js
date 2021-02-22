const promise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        // resolve("abc");
        reject(new Error());
    }, 2000); 
    // reject(new Error());
})

promise
.finally(()=> console.log('finally'))
.then(data => {
    console.log(data +"data");
},
//  err => {
//     console.log("then" + err);
// }
).catch(err => {
    console.log(err + "catch Error ut")
})

// console.log(promise);

// let promise = Promise.reject(new Error("Promise Failed!"));
// setTimeout(() => promise.catch(err => {
//     alert('caught')
// }), 1000);
    

// // Error: Promise Failed!
// window.addEventListener('unhandledrejection', event => alert(event.reason));


// ,adarchod 
// let promise = Promise.resolve();

// promise.then(() => { setTimeout(()=>console.log("promise done!"),5000); }).then(()=> console.log("code finished"));


// -----------------  understand the difference to get the knowledge of microtask queue and normal job queue for set timeout

// let prom1 = new Promise((resolve)=>{
//     // setTimeout(()=>{resolve(`1st Promise - ${new Date()}`)},1000)}) ;
//     resolve('1st Promise')}) ;
    
// let prom2 = new Promise((resolve)=>{
// // setTimeout(()=>{resolve(`2nd Promise - ${new Date()}`)},3000)}) ;
// resolve('2nd Promise')}) ;

// console.log('normal line');

// prom1.then((val)=>{console.log(`${val}-${new Date()}-then1`)});
// prom2.then((val)=>{console.log(`${val}-${new Date()}`)});
// prom1.then((val)=>{console.log(`${val}-${new Date()}-then2`)});


    // let prom1 = new Promise((resolve)=>{
    //     setTimeout(()=>{resolve(`1st Promise - ${new Date()}`)},1000)}) ;
    //     // resolve('1st Promise')}) ;
        
    //     let prom2 = new Promise((resolve)=>{
    //     setTimeout(()=>{resolve(`2nd Promise - ${new Date()}`)},3000)}) ;
    //     // resolve('2nd Promise')}) ;
        
    //     console.log('normal line');
        
    //     prom1.then((val)=>{console.log(`${val}-${new Date()}-then1`)});
    //     prom2.then((val)=>{console.log(`${val}-${new Date()}`)});
    //     prom1.then((val)=>{console.log(`${val}-${new Date()}-then2`)});



// function setExample() {
//     return new Promise((resolve, reject)=> {
//         resolve(
//             new Promise((resolve, reject)=> {
//                 resolve(1)
//             })    
//         );
//     }).then(data => console.log(data));
// }

// setExample();




//// --------------------- async await --------------------------------

// 1. The word “async” before a function means one simple thing: 
// a function always returns a promise. Other values are wrapped in a resolved promise automatically.
// async function f() {
//     return 1; // return Promise.resolve(1);
// }

// f().then(data => console.log(data))


// function f1() {
//     return Promise.resolve(1);
// }

// f1().then(data => console.log(data))

// both give the same answer: so async ensures a function returns a promise. 


// 2. await only works inside the async function : this makes js wait until promise settels and returns its result.

// async function fAwait() {
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('done');
//         }, 1000); 
//     });

//     let result = await promise;

//     console.log(result);
// }

// fAwait();


// 3. async class methods 

// class Waiter {
//     async wait() {
//       return await Promise.resolve(1);
//     }
//   }
  
//   new Waiter()
//     .wait()
//     .then(alert); // 1


// 4. ErrorHandelling

// async function f() {

//     try {
//       let response = await fetch('/no-user-here');
//       let user = await response.json();
//     } catch(err) {
//       // catches errors both in fetch and response.json
//       console.log(err);
//     }
//   }
  
//   f();


//   async function f() {
//     let response = await fetch('http://no-such-url');
//   }
  
//   // f() becomes a rejected promise
//   f().catch(alert); // TypeError: failed to fetch // (*)


// task 1 

// async function loadJson(url) {
//     let fetch = await fetch(url);
//     if(fetch.status === 200) {
//         return 
//     } else {
//         throe new Response
//     }
// }



// ---------------------------- pollyfills ----------------------------

// promise.all 

// let promise = Promise.all([

//     new Promise((resolve,reject) => setTimeout(() => {
//         resolve(1)
//     }, 3000)),
//     new Promise((resolve,reject) => setTimeout(() => {
//         resolve(2)
//     }, 2000)),
//     new Promise((resolve,reject) => setTimeout(() => {
//         resolve(3)
//     }, 1000))

// ]);

// promise.then(data => console.log(data)); // 1 2 3 dosen't matter in what order this gets resolved.


// ------------------------------------  promise.all polyfill

// const firstPromise = () => {
//     return new Promise((resolve) => setTimeout(() => {
//       resolve('Data payload from the first promise...')
//     }, 2000))
//   }
  
//   const secondPromise = () => {
//     return Promise.resolve('Second Promise...')
//   }
  
//   function promiseAll (promises) {
//     return new Promise((resolve, reject) => {
      
//       const promiseCount = promises.length
//       const resolvedData = []
//       let resolvedCount = 0
  
      
//       function checkStatus (data, index) {
       
//         resolvedData[index] = data
//         resolvedCount++
  
        
//         if (resolvedCount === promiseCount) {
//           resolve(resolvedData)
//         }
//       }
  
      
//       promises.forEach((promise, i) => {
//         promise.then((data) => {
//           checkStatus(data, i)
//         }).catch((error) => {
//           reject(error)
//         })
//       })
//     })
//   }
  
//   /* Calls the promiseAll function, passing in other promises
//     within an array as the arguement. */
//   promiseAll([firstPromise(), secondPromise()])
//     .then((response) => {
//       console.log(response)
//     })
  
//     .catch((error) => {
//       console.log(error)
//     })



// -----------------------------------promise.all setteled -----------------------

// const resolverHandler = value => ({status: 'fulfilled', value});
// const rejectHandler = reason => ({status: 'rejected', reason})

// Promise.allSetteled = function(promises) {
//     const convertedPromises = promises.map(p => Promise.resolve(p).then(resolverHandler, rejectHandler));
//     let resultOfPromise = Promise.all(convertedPromises);
//     return resultOfPromise;
// }


///--------------------------------- promise.race --------------------------------

// const firstPromise = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve('Data payload from the first promise...'), 1000)
//     })
//   }
  
//   const secondPromise = () => {
//     return new Promise((resolve, reject) => {
//     //   setTimeout(() =>
//     //     reject('Promise has rejected...')
//     //   , 3000)
//     setTimeout(() => resolve('Data payload from the 2md promise...'), 99)
//     })
//   }
  
//   function promiseRace (promises) {
//     return new Promise((resolve, reject) => {
//       promises.forEach((promise) => {
//         promise
//           .then(data => {
//             resolve(data)
//           })
//           .catch(error => {
//             reject(error)
//           })
//       })
//     })
//   }
  
//   promiseRace([firstPromise(), secondPromise()])
//     .then(response => {
//       console.log(response)
//     })
  
//     .catch(error => {
//       console.log('error', error)
//     })

    // console.log(k);





// ------------------------ Promise.any ---------------------------

function promiseAny(promisesArray) {
    var errorOutput = new Array(promisesArray.length);
    var counter = 0;
  
    return new Promise((resolve, reject) => {
      promisesArray.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(resolve) // resolve outer promise, as and when any of the input promises resolves
          .catch(error => {
            errorOutput[index] = error;
            counter = counter + 1;
            if (counter === promisesArray.length) {
              // all promises rejected, reject outer promise
              reject(errorOutput);
            }
          });
      });
    });
}


https://iamabhilash.medium.com/javascript-promise-method-polyfills-a4a41623df1a