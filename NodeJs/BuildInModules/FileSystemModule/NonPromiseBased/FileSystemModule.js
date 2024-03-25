const fs = require("node:fs");

//  ---------- ENCODING -----------

// const fileCOntent = fs.readFileSync("./file.txt", "utf-8"); // hello world
// const fileCOntent = fs.readFileSync("./file.txt"); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// console.log(fileCOntent);

// ------------ METHODS ------------

// ----- read file

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// ------ write file
// Overrites the Whole file.

fs.writeFileSync("./greet.txt", "helloWorld");

fs.writeFile("./greet1.txt", "Hello utkarsh", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File written successgully!!");
  }
});

// -------- append file
// appends in the file

fs.appendFile("./greet.txt", " hello what is this", () => {});

// -------------- UnderStanding STREAMS with FIle System -------------
// Reading the whole file means we have to load the whole file in the ram and then read it.
// Better solution is to read in chunks.

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

// Make sure here the file2 is empty.
const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk, "chunk of data");
  writableStream.write(chunk);
});

// Buffer that Streams use are of Default size of 64 KB. Our file is less then that.
// so thats why we see only 1 chunk

// FOR that  change readable stream buffer size . (highWaterMark)

//  ---------------- STREAMS and its types ----------------------

// 1. Readable -> from which data can be read.
// 2. Writable -> to which we can write data.
// 3. Duplex -> that re both redable and writable
// 4. Transform -> that can modify or transform the data as it is wirtten and read.
