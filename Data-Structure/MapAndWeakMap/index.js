// // objects 

// let obj = {};

// let a = {};
// let b = {
//     key:1
// }

// obj[a] = 'val of a';
// obj[b] = 'val of b';  // in objects we cant have 2 keys as objects this b will overrite the key a;
// console.log(obj);

// // so objects gove problems to overcome this we have maps and weakMaps

// -------------------------------- Map --------------------------------

// const map = new Map();

// map.set(a, 'val of a');
// map.set(b, 'val of b');
// console.log(map);
// for(let [key, val] of map.entries()){  // has Symbol.Iterator
//     console.log(key, val);
// }

// // convertinh map to arrays 

// const arr =  [...map];

// ----------------------------------------- WEAKMAP ----------------------------------------
// whe we need weakmap ?
// this is because map dosn't le go of the key and let js to garbage collect. 

{
    let x = {
        a: [1,2]
    };

    var map = new Map();
    map.set(x,'something')

}

console.log(map);  // here I can access x 
