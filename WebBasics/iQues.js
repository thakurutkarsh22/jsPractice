
// Q: change this arr to {
//     val: 'jan',
//     'from': ,
//     "to": ,
// } using reduce function.

// var arr = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov']

// var number = 3;

// var fun = (number, arr) => {
//   var range = +(100/number).toFixed(0);
//   var reduceFunction = arr.reduce((accumulator, val, index)=> {
//     if(index >= number) {
// 			return accumulator;
// 		}
//     var newArr = [...accumulator]
//     newArr.push(  {
//       "value": val,
//       "from": index==0 ? 0 : accumulator[accumulator.length-1].to,
//       "to": index == number-1 ? 100 : index == 0 ? range : range + +accumulator[accumulator.length-1].to,
//     })
//     return newArr;
// //     accumulator.push(v);
//   },[]);
//   return reduceFunction;
// }

// console.log(fun(number, arr));

// functions // var  let var const 

// Hoisting 

greetings(); // 2nd greeting 

var greetings = function () {
  console.log("1st greeting")
}

greetings(); // 1st greeting

function greetings(){
  console.log("2nd Greeting")
}

greetings(); //1st greeting



// browser cacheing in housing 