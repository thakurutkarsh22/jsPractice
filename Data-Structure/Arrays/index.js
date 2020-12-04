// const items = [
//     {name: 'bike', price: 100},
//     {name: 'Tv', price: 200},
//     {name: 'Album', price: 10},
//     {name: 'Book', price: 5},
//     {name: 'Phone', price: 500},
//     {name: 'Computer', price: 1000},
//     {name: 'Keyboard', price: 25}
// ]

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

// items.forEach((item)=>{
//     console.log(item);
// })

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




//// ---------------------- Pollyfill Functions --------------------------------

// map 

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(callback) {
       let newArray = [];
        // iterate array elements
        let context = this;
       for(let item of this) {
       // pass each element to callback and push response to new array
         newArray.push(callback.call(context,item));
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

if (Array.prototype.myFilter === undefined) {
    Array.prototype.myFilter = function(fn) {
      var rv = [];
      
      for(var i=0, l=this.length; i<l; i++)
        if (fn(this[i])) rv.push(this[i]);
  
      return rv;
    };
}

const filter = arr.myFilter((i) =>{
   console.log(this);
   return i>20;

});
console.log(filter);


// find // findIndex 

Array.prototype.myFind = function(callback, thisArg) {
    if(!callback || typeof callback !== 'function') throw TypeError();
    const size = this.length;
    const that = thisArg || this;
    for(var i = 0; i < size; i++) {
        try {
            if(!!callback.apply(that,[this[i], i, this])) {
                return this[i];
            }
        } catch(e) {
            return undefined;
        }
    }
    return undefined;
}



//reduce

Array.prototype.reduce = function(callbackFn, initialValue) {
    if(!callbackFn || typeof callbackFn !== 'function') throw TypeError();
    var len = this.length;
    var i = 0;
    if(typeof initialValue === 'undefined' || initialValue === null) {
      initialValue =  this[0];
      ++i;
    } 
    for(; i < len; i++) {
      initialValue = callbackFn.apply(this, [initialValue, this[i], i, this])
    }
    return initialValue;
  }