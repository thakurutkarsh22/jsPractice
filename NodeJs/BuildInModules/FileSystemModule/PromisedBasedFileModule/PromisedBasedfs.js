const fs = require("node:fs/promises");

fs.readFile("./file.txt", "utf-8").then((data) => {
  console.log(data, "data");
});

async function readFile() {
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
    console.log(data);
  } catch (error) {}
}

readFile();

// NOTE: Promise based apprach is not good for the MAX performance and memory taken.
