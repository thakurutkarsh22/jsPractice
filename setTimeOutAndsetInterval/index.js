// const { throwError } = require("rxjs");

// setTimeout(() => {
//   console.log('this is sparta');
// }, 2000);

// setinter

// ------------------------------------- setInterval Polyfill ---------------------------

// function createSetIntervalPolyfill() {

//   var intervalId = 0;
//   var intervalMap = {};

//   function setIntervalPolyfill(callBackfn, delay =0, ...args) {

//     if(typeof callBackfn !== 'function') {
//       throw new TypeError('callback should be a function');
//     }

//     var id = intervalId + 1; // unique Id

//     function repeat() {
//       intervalMap[id] = setTimeout(()=>{
//         callBackfn(args);
//         // terminating
//         if(intervalMap[id]) {
//           repeat();
//         }
//       }, delay); 
//     }

//     repeat();

//     return id;
    
//   }

//   function clearIntervalPolyfill(intervalId) {
//     clearTimeout(intervalMap[intervalId]);
//     delete intervalMap[intervalId];
//   }


//   return {
//     setIntervalPolyfill,
//     clearIntervalPolyfill,
//   }
// }




// const {
//   setIntervalPolyfill, // fuction
//   clearIntervalPolyfill
// } = createSetIntervalPolyfill();



// let counter =0;
// let intervalId;


// function greeting(name) {
//   counter = counter + 1;
//   console.log(`Hello ${name}`);
//   if(counter >=3){
//     clearIntervalPolyfill(intervalId);
//   }
// }

// intervalId = setIntervalPolyfill(greeting,1000,'abba');

// function printNumbers(from, to) {
//   let current = from;

//   let timeId = setInterval(() => {
//     console.log(current);
//     if(current == to) {
//       clearTimeout(timeId);
//     }
//     current++;
//   }, 1000)
// }

// printNumbers(5,10);



// / ------------ another method of setInterval() ----------------------------------

let timerId = setTimeout(function tick() {
  console.log('tick')
  timerId = setTimeout(tick,2000);
}, 2000);