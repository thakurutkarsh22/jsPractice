
// --------------------------------------- Object coercion // object to primitive conversion ------------------------------------------------- 
// https://javascript.info/object-toprimitive

// understanding the value of toString() and valueOf();


// To Number
// If any non-number value is used in a way that requires it to be a number, such as a mathematical operation, 
// the ES5 spec defines the ToNumber abstract operation in section 9.3.


// Objects (and arrays) will first be converted to their primitive value equivalent, and the resulting value 
// (if a primitive but not already a number) is coerced to a number according to the ToNumber rules just mentioned.


// To do the conversion, JavaScript tries to find and call three object methods:

//     Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
//     Otherwise if hint is "string"
//         try obj.toString() and obj.valueOf(), whatever exists.
//     Otherwise if hint is "number" or "default"
//         try obj.valueOf() and obj.toString(), whatever exists.

// by default toString returns [object Object]

// conclusion in type conversion in objects js looks to 3 above mentioned things;


var a = {
  abc : 1
}

console.log(Number(a)); // print NaN


var b = {
  abc: 1,
  valueOf: function () {
    return "60";
  }
}

console.log( Number(b)) // print 60 (integer not string)

var c = {
  abc: 1,
  toString: function() {
    return "66";
  }
}

console.log( Number(c)) //print 66 (integer not string)

var d = {
  abc : 1, 
  [Symbol.toPrimitive]() {
    return "121";
  }
}

console.log( Number(d)) //print 121 (integer not string)

var e = {
  abc : 1, 
  [Symbol.toPrimitive]() {
    return `${this.abc}`;
  }
}

console.log(+e); // 1 (integer)


/// 
// alert(b); // [object Object]

// alert(b+66); // "6066"

// alert(c); // "66"




// let user = {
//   name: "John",
//   money: 1000,

//   // for hint="string"
//   toString() {
//     return `{name: "${this.name}"}`;
//   },

//   // for hint="number" or "default"
//   valueOf() {
//     return this.money;
//   }

// };

// alert(user); // toString -> {name: "John"}
// alert(+user); // valueOf -> 1000
// alert(user + 500); // valueOf -> 1500
// alert(user * 500); // valueOf -> 500000
// console.log(user); // full user object


var f = {
  valueOf: function() {
    return "abc";
  }
}

alert(f)