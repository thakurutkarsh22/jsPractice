const items = [
    {name: 'bike', price: 100},
    {name: 'Tv', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

// // filter

// const filteredItems = items.filter((items)=>{
//     return items.price<=100
// })

// // map : convert an array and return an new Array

// const mapItems = items.map((items)=>{
//     return items.name;
// })

// // find : find a single object in an array;

// const foundItem = items.find((item)=>{
//     return items.price === 5;
// });

// // for each : just for iteration 

items.forEach((item)=>{
    console.log(item);
})

// // some : so even if one is true it will return true for the whole array 

// const hasInexpensiveitems = items.some((item)=>{
//     return item.price <=100; 
// })

// // any : so every items has to fall under a condition if true then return true


// const hasInexpensiveitems1 = items.every((item)=>{
//     return item.price <=10000; 
// })


// // reduce 

// const total = items.reduce((currentTotal, item)=>{
//     return item.price + currentTotal;
// },0)


// // includes return if the val is inside the array or not. 

// const arrNo = [1,2,3,45];
// arrNo.includes(2); // true
// arrNo.includes(7); // false 


// slice: creates new array and no impact on the original array // also give the shallow copy.

[1,2,3,4].slice(); // [1,2,3,4]
[1,2,3,4].slice(2,3); // [3,4]
[1,2,3,4].slice(12,13); // []
[1,2,3,4].slice(-1,-3); // [2,3,4]


//splice: fetch a subarray it changes the original array in place so no new array is returned.
[1,2,3,4].splice(0,2)// returned arr [1,2] , original array [3,4]
[1,2,3,4].splice(0,2, 10,12)  //, [1,2],  original array[10,12,3,4]








//// ---------------------- Pollyfill Functions --------------------------------

// map 

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(callback) {
       let newArray = [];
        // iterate array elements
        let context = this;
       for(let item of this) {
       // pass each element to callback and push response to new array
         newArray.push(callback.call(null,item));
       }
       // return final array
       return newArray;
     }
}
// declare an array
const arr = [10,20,30,40];
// call custom map() on array to square each element or perform any     other operation
const squaredArray = arr.myMap((i) => i * i);
// prints [100,400,900,1600]
console.log(squaredArray);



// filter

// if (Array.prototype.myFilter === undefined) {
//     Array.prototype.myFilter = function(fn) {
//       var rv = [];
      
//       for(var i=0, l=this.length; i<l; i++)
//         if (fn(this[i])) rv.push(this[i]);
  
//       return rv;
//     };
// }

// const filter = arr.myFilter((i) =>{
//    console.log(this);
//    return i>20;

// });
// console.log(filter);


// find // findIndex 

// Array.prototype.myFind = function(callback, thisArg) {
//     if(!callback || typeof callback !== 'function') throw TypeError();
//     const size = this.length;
//     const that = thisArg || this;
//     for(var i = 0; i < size; i++) {
//         try {
//             if(!!callback.apply(that,[this[i], i, this])) {
//                 return this[i];
//             }
//         } catch(e) {
//             return undefined;
//         }
//     }
//     return undefined;
// }

// Array.prototype.gghfind = function(callback, thisArgs) {
//   if(!callback || typeof callback !== 'function') new Error();

//   let context = this; // [1,2,3,4,56]
//   let size = this.length;

// }


// //reduce

// Array.prototype.reduce = function(callbackFn, initialValue) {
//     if(!callbackFn || typeof callbackFn !== 'function') throw TypeError();
//     var len = this.length;
//     var i = 0;
//     if(typeof initialValue === 'undefined' || initialValue === null) {
//       initialValue =  this[0];
//       ++i;
//     } 
//     for(; i < len; i++) {
//       initialValue = callbackFn.apply(this, [initialValue, this[i], i, this])
//     }
//     return initialValue;
//   }

[1,2,3,4].reduce((pv,currValue,index,arr), 5);

// // Flat 


// let input = [
//   1,2,3,[4],
//   [5,6, [7],[8,[9,[10]]]],
//   11,12,13,[14,[[[[[15,[16]]]]]]],
//   17,18,
//   [19,[20,[21,[22,[23,[24,[[[[[25]]]]]]]]]]],
// ];

// Array.prototype.flatten = function(depth) {
//   let output = [];

//   function abc(arr, depth) {
//     for(let i=0;i<arr.length;i++) {
//       if(depth<0){
//         return;
//       }
//       if(Array.isArray(arr[i])){
//         abc(arr[i],depth-1);
//       } else {
//         output.push(arr[i]);
//       }
//     }
//   }

//   abc(this,depth);
//   return output;

// }


// let flatArr = input.flatten(2);
// console.log(flatArr);

// // Array.prototype.flat2 = function() {
// //   // this == arr
// //   return this.toString().split(',').map((n)=> Number(n) );
// // }


