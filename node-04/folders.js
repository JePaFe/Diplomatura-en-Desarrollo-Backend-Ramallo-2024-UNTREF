const fs = require("fs");
const path = require("path");

let folderPath = path.join(__dirname, "prueba");

// fs.mkdir(folderPath, (error) => {
//   if (error) {
//     return console.error(error);
//   }

//   console.log("Carpeta creada");
// });

// console.log(1);

// fs.readdir(folderPath, (error, files) => {
//   if (error) {
//     return console.error(error);
//   }

//   console.log(files);
// });

// const files = fs.readdirSync(folderPath);
// console.log(files);

// console.log(2);

// fs.rename(folderPath, "nueva-prueba", (error) => {
//   if (error) {
//     return console.error(error);
//   }

//   console.log("Nombre cambiado");
// });

folderPath = path.join(__dirname, "nueva-prueba");

// fs.rmdir(folderPath, (error) => {
//   if (error) {
//     return console.error(error);
//   }

//   console.log("Carpeta borrada");
// });

fs.rm(folderPath, { recursive: true }, (error) => {
  if (error) {
    return console.error(error);
  }

  console.log("Carpeta borrada");
});
