// -------------------------- FILE READ-------------------

// File System uses thread Pool from LibUV takes this Task for reading the file

/*
const fs = require("node:fs");

console.log("First");

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("file content");
});

console.log("last");

*/

// --------------------- CRYPTO ---------------------------

/* ------ EXPERIMENT 1 ------ */
// const crypto = require("node:crypto");

// const start = Date.now();
// // hash the passsword..
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // 400ms
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // 400ms
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // 400ms
// console.log("HASH: ", Date.now() - start);

// Hash might take 1300ms for all the lines
// comment out the other line of pbkdf2Sync to see the effect.

/* --------  EXPERIMENT 2 -------- */

// const MAX_CALLS = 1;
// const MAX_CALLS = 2;
// const MAX_CALLS = 3;
// const MAX_CALLS = 4; // TILL 4 we have by default 4 thread pool so till here we see all the task have same time
// const MAX_CALLS = 5; // at 5 the thread pool hits limit and the task has to wait and hence we can see increase in time.
// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (error, key) => {
//     console.log(`HASH: ${i + 1}`, Date.now() - start, "  :: KEY  ::", key);
//   });
// }

// THREAD POOL DEFAULT SIZE = 4;

/* --------  EXPERIMENT 3 -------- */
// Increase the threadpool size;

// process.env.UV_THREADPOOL_SIZE = 5;
// const MAX_CALLS = 5; // at 5 now all the request will be finished at the same time.
// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (error, key) => {
//     console.log(`HASH: ${i + 1}`, Date.now() - start, "  :: KEY  ::", key);
//   });
// }

/* --------  EXPERIMENT 4 -------- */
// FINDING the limits to which THREADPOOL size (UV_THREADPOOL_SIZE) can be increased.

// // process.env.UV_THREADPOOL_SIZE = 10;
// process.env.UV_THREADPOOL_SIZE = 18;
// // const MAX_CALLS = 10;
// const MAX_CALLS = 18;
// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (error, key) => {
//     console.log(`HASH: ${i + 1}`, Date.now() - start);
//   });
// }

// I noticed that my laptop has 10 CORES, if we have 10 request with 10 threadpool
// then time is 800ms.

// If i increase the threadPool to 18 and CORES will always reamain same to 10.
// THe way concurrenncy works it will handle all 18 threads concurently hence taking more time
// EACH thread
// then time is 1550ms.

//---------------- NOTE: Not all Async Methods in Node js Uses THREAD POOL. ---------------

// --------------------- Network I/O ---------------------------

/* ------ EXPERIMENT 5 ------ */

const https = require("https");

// const MAX_CALLS = 1; // 300 ms
// const MAX_CALLS = 2; // 300 ms
// const MAX_CALLS = 6; // 300 ms -> DEFAULT threadpool size is 4 (STILL response time has not changed).
const MAX_CALLS = 12; // 300 ms -> DEFAULT threadpool size is 4 (STILL response time has not changed).
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}

// IT SEEMS https.request method DOSENT SEEMS TO USE THREAD POOL.
// IT SEEMS https.request method DOSENT SEEMS TO care about CPU CORE.

// NETWORK I/O is not a CPU bound operation so it dosent need thread pool.

// Libuv delegates the work to the OS kernel and whenever possible it polls the kernel
// to see if the request has completed.
