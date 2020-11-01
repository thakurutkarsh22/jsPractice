const obj1 = {};

Object.defineProperty(obj1, 'a', {
    value: 5,
    writable: false,
    configurable: false,
    enumerable: true,
});
Object.defineProperty(obj1, 'b', {
    value: 5,
    writable: false,
    configurable: false,
    enumerable: true,
});

obj1['c'] = 'aaa';

delete obj1.a;
console.log(obj1['c']);
console.dir(Object.keys(obj1));


// configurable
// true if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
// Defaults to false.

// enumerable
// true if and only if this property shows up during enumeration of the properties on the corresponding object.
// Defaults to false.

// A data descriptor also has the following optional keys:

// value
// The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).
// Defaults to undefined.

// writable
// true if the value associated with the property may be changed with an assignment operator.
// Defaults to false.