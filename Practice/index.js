// let sum = a => b => b ? sum(a+b) : a;

// let problem = sum(1)(2)(3)(14)();
// console.log(problem);


// // recursion

// let user ={
//     name: "Akshay Saini",
//     address: {
//       personal: {
//         city: "Dehradun",
//         state: "Uttrakhand",
//         area: "Majra",
//       },
//       office: {
//         city: "Hyderabad",
//         area: {
//           landmark: "Hi Tech",
//         }
//       }
//     }
// }

// let magic = (obj, parent, finalObj) => {
//     for(let key in obj){
//         console.log(key);
//         if(typeof obj[key] === "object"){
//             magic(obj[key], parent + "_" + key, finalObj);
//         }
//         else {
//             finalObj[parent + "_" + key] = obj[key];
//         }
//     }
// }

// let finalObj= {};
// magic(user, "user", finalObj);

// console.log(finalObj);
  
// const clickFunction = function() {
//   console.log('clicked');
//   // console.log(this);
//   this.classList.toggle("abc");
// }

// const div = document.getElementById('abc');

// div.setAttribute('name' , 'red');


// div.addEventListener('click', clickFunction.bind(div) );
// // console.log(div.);




/// -- advance stuff----


// const obj1 = {
//   property1: a12
// }

// const descripton = Object.getOwnPropertyDescriptor(on);
// Object.hasOwnProperty();

// let arr = ["abcd", "defg"];


// abc();
// abc();

// function abc() {
//   let x = 0;
//   console.log(++x);
// }


// function attachEventListner() {
//   let count = 0;

//   document.getElementById("button").addEventListener("click", function click() {
//     console.log(++count);
//   })
// }

// attachEventListner();


// closure 

// function abc(y) {

//   const x = y;
//   const p = y;

//   const inside = () => {
//     console.log(x, p, window.innerHeight);
//   }

//   inside();
// }

// abc(2);
// abc(3);

// const a = () => {

// }





// function parseData(data) { /* Some computation */ return data;  };

// class User {
// 	constructor(name, ...data) {
// 		const parsedData = parseData(data);

// 		this.name = name;
// 		this.data = parsedData;

// 		// return parsedData;
// 	}

// 	getData() {
// 		return this.data;
// 	}
// }

// const Yomesh = new User('Yomesh', { youtubeChannel: 'https://bit.ly/devtools-yt', shouldSubscribe: true });

// // What would be the output of the following statement?
// console.log(Yomesh.data); 


// let newArr = input.fl



// tricky this question ofr arguments 

var length = 10;
function fn() {
  console.log(this.length);
}
var obj = {  
  length: 5,  
  method: function(fn) {    
    fn();    
    let f = arguments[0];
    // f();
  }
};
obj.method(fn, 1)


function a(){
  setTimeout(() => {
    console.log("set time out")
  }, 0)
  Promise.resolve("solved").then(res => console.log(res));
}


​function abc(){
  for(var i=0;i<5;i++){
    setTimeout(function(){console.log(i)}, 500)
  }   
}   
abc()


var name = 'ruhi'   
var a = {
  name: "rohan",
  printName: () => {console.log(this.name)},
  pName: function() {
    console.log(this.name);
  }
}   
a.printName();
a.pName();




function deepCopy (obj) {
  const res = {}
  const keys = Object.keys(obj)
  keys.forEach(key => {
    if (typeof obj[key] === 'object') {
      res[key] = deepCopy(obj[key])
    } else {
      res[key] = obj[key]
    }
  })
  return res;
}


var abc = {
  name: 'john',
  age: 20,
  address: {
    city: 'bangalore',
    state: 'tamilnadu',
    street: {
      pincode: 11111,
      houseno: 234
    }
  }   
}


// importynt to know the type of obj 
if(Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array!');
}


// js associativity rule 
var z = 1, y = z = typeof y;
console.log(y);

// assignments return the rightmost value
let a;
console.log(a = 'dignity!') // dignity!