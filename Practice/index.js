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


const obj1 = {
  property1: a12
}

const descripton = Object.getOwnPropertyDescriptor(on);
Object.hasOwnProperty();

let arr = ["abcd", "defg"];

