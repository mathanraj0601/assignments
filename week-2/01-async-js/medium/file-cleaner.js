const fs = require("fs");
const { resolve } = require("path");

function readFileAsync(path) {
  return new Promise((resolve) => {
    fs.readFile(path, "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

function writeFileAsync(path, data) {
  return new Promise((resolve) => {
    fs.writeFile(path, data, (err, data) => {
      resolve();
    });
  });
}

async function fileCleaner() {
  const data = await readFileAsync("./medium/test.txt");
  const words = data.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") continue;
    if (i == words.length - 1) result += words[i].trim();
    else result += words[i].trim() + " ";
  }
  await writeFileAsync("./medium/test.txt", result);
}

fileCleaner();
