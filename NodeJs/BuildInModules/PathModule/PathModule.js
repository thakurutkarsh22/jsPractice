const path = require("node:path");

console.log(__filename); // gives the file // ->  /Users/uthkarshthakur/Desktop/jsPractice/NodeJs/PathModule/PathModule.js
console.log(__dirname); // gives the folder // ->  /Users/uthkarshthakur/Desktop/jsPractice/NodeJs/PathModule

// --- returns the last portion of the path ----
console.log(path.basename(__filename)); // PathModule.js
console.log(path.basename(__dirname)); // PathModule

// ----- returns extension------
console.log(path.extname(__filename)); // .js
console.log(path.extname(__dirname)); // ""

// ------ return parsed Object version ----
console.log(path.parse(__filename)); // obj is returned
// {
//     root: '/',
//     dir: '/Users/uthkarshthakur/Desktop/jsPractice/NodeJs/PathModule',
//     base: 'PathModule.js',
//     ext: '.js',
//     name: 'PathModule'
//   }

console.log(path.parse(__dirname));

// ------ returns path string

console.log(path.format(path.parse(__filename))); // /Users/uthkarshthakur/Desktop/jsPractice/NodeJs/PathModule/PathModule.js'

// -------- return if path is absolute path or not

console.log(path.isAbsolute(__filename)); // true
console.log(path.isAbsolute(__dirname)); // true;
console.log(path.isAbsolute("./data.json")); // false;

// -------- join all path segments to get RELATIVE path

console.log(path.join("folder1", "folder2", "index.html")); // folder1/folder2/index.html
console.log(path.join("/folder1", "folder2", "index.html")); // /folder1/folder2/index.html
console.log(path.join("folder1", "//folder2", "index.html")); // folder1/folder2/index.html
console.log(path.join("folder1", "//folder2", "../index.html")); // folder1/index.html

// --------- resolves a sequence of path to absolute path.
console.log(path.resolve("folder1", "folder2", "index.html")); // /Users/uthkarshthakur/Desktop/jsPractice/NodeJs/PathModule/folder1/folder2/index.html
console.log(path.resolve("/folder1", "folder2", "index.html")); // /folder1/folder2/index.html
console.log(path.resolve("folder1", "//folder2", "index.html")); // /folder2/index.html
console.log(path.resolve("folder1", "//folder2", "../index.html")); // /index.html

// THE MAIN thing is if in your arguments we have '/' then resolves takes the path from THAT '/' only.
