const path = require("path");

const ruta = path.resolve(__dirname, "../public", "index.html");
const info = path.parse(ruta);

// console.log(__dirname);

console.log(ruta);
console.log(info);
