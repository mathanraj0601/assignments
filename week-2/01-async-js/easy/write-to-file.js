const fs = require("fs");
fs.appendFile("./easy/test.txt", "Added me", (err, data) => {
  console.log("append");
});
