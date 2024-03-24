const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("ordering", (data, data2) => {
  console.log("Order recieved !! creating food", data, data2); // 1 hello
});

emitter.on("ordering", (data, data2) => {
  console.log("second listner"); // 1 hello
});

console.log("first");

emitter.emit("ordering", 1, "hello");

process.nextTick(() => {
  console.log("inside the next tick");
});

// first
// Order recieved !! creating food", data, data2
// second listner
// inside the next tick

// EMITTER.emit is a sync code it means runs on the main thread.
