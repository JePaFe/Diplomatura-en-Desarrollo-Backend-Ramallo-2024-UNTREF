const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "public", "index.html");

// console.log(__dirname, filePath);
fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    console.error(err);
  } else {
    console.log(content);
  }
});
