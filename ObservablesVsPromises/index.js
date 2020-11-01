const { Observable } = require("rxjs");
//-------------------------------------------- creating ---------------------------------------------- 



// let promise = new Promise((resolve, reject) => {
//     let a = 2;
//     if(a == 22) {
//         resolve('Success');
//     } else {
//         reject('failed');
//     }
// })

// promise.then((data) =>
//      console.log('then: ' + data), (reject) => { console.log(reject)});     
     
// //      .catch((data) => {
// //          console.log('catch: ' + data)
// // });

// // creating observables 

// let observable = new Observable((observer) => {
//     let a = 2;
//     if (a==2)
//         observer.next(12);
//     else
//         observer.error('Error in observabel');
// });

// // let subscription$ = observable.subscribe((data) => {
// //     console.log(data);
// // }, (error) => {console.log('observalbe-error: ' + error)});

// let subscription$ = observable.subscribe({
//     next: (data) => {console.log(data)},
//     error: (error) => {console.log('observalbe-error: ' + error)},
// });

// subscription$.unsubscribe();


// --------------------------------------------------- single Value Vs Multiple Values ---------------------------

// const promise = new Promise(resolve => {
//     resolve('lio');
//     resolve('pio');
//     resolve('jio');
// });

// // promise.then(result => console.log(result));  // only prints lio 

// console.log('-------------------------');

// const observable = new Observable(observer => {
//     observer.next('lio');
//     observer.next('jio');
//     observer.next('pio');
//     observer.error('he;;');
// });


// observable.subscribe(data => {
//     console.log(data);
// }, error => {console.log(error)});



// --------------------------------------------- Eager Vs Lazy -----------------------------------------


// const promise = new Promise((resolve) => {
//     console.log('inside the promise');
//     resolve('resolved Success');
// });

// console.log('Outside subscribing');

// promise.then((data) => console.log('handling result of : ' + data));

// console.log('after resolution of Promise');


// const observables = new Observable(observer => {
//     console.log('inside the observable');
//     observer.next('resolved success');
// });

// console.log('Outside subscribing');

// observables.subscribe(data => {console.log('handling result of: ' + data)});


// console.log('after resolution of Observable');

// ---------------------------------------------- Non-cancellable Vs Cancellable -------------------------

// const promise = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("Async task done");
//         resolve();
//     }, 2000);
// });

// promise.then(() => console.log("Handler"));


// const observable = new Observable(observer => {
//     setTimeout(() => {
//         console.log("Async task done");
//         observer.next();
//     }, 2000);
// });

// let subscription$ = observable.subscribe(() => console.log("Handler"));
// subscription$.unsubscribe();\


// ---------------------------------- MultiCase Vs Unicast----------------------------------

// const promise = new Promise(resolve => {

//     let a = Math.random();
//     resolve(a);
// });

// (promise.then(data => {console.log(data)}))
// (promise.then(data => {console.log(data)}))
// (promise.then(data => {console.log(data)}))
// (promise.then(data => {console.log(data)})) // same vale over n over 


// const observable = new Observable(observer => {
//     console.log('executing....')
//     let a = Math.random();
//     observer.next(a);
// });

// observable.subscribe(data => {console.log(data)});
// observable.subscribe(data => {console.log(data)});
// observable.subscribe(data => {console.log(data)});
// observable.subscribe(data => {console.log(data)});



/// -------------------------------------------- Asynchronous Handlers Vs Synchronous Handlers -------------------------------------

// promise is async because of the use of event loop in the backend like in settimeout.

// console.log('creating Promise');
// const promise = new Promise((resolve) => {
//     console.log('promise Running');
//     resolve(1);
// });

// promise.then(data => {
//     console.log('handling result: ' + data);
// });

// console.log('after main last');

// console.log('creating Observable');
// const observable = new Observable(observer => {
//     console.log('Observable Running');
//     observer.next(1);
//     observer.next(21);
//     setTimeout(() => { observer.next(2)} ,0);
// });

// observable.subscribe(data => {
//     console.log('handling result: ' + data);
// });

// console.log('after main last');



// ---------------------------------- END -------------------------------------------------- 



// const promise = new Promise((resolve,reject) => {
//     console.log('inside the promise');
//     let a = 2;
//     if(a==2)
//         resolve(1);
//     else 
//         reject('This is rejected');
// });


// promise.then((data) => {
//     console.log( '1: ' + data)
//     if(data ==11) {
//         return 2;
//     } else {
//         return promise.reject();
//     }
// }).then((data) => {
//     // console.log('2: ' + data);
//     // if(data =='abc') {
//     //     return 2;
//     // } else {
//     //     return new Error('def');
//     // }
//     return new Error('as');
// }).catch((err) => {
//     console.log('error: ' + err);
// }).then((data) => {
//     console.log('3: ' + data);
// })
