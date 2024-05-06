const fs = require("fs");
const path = require("path");

// console.log("    Hola       ".trim());

const filePath = path.join(__dirname, "archivo.txt");

// function fileExists(filePath) {
//   const existe = fs.existsSync(filePath);
//   return existe ? true : false;
// }

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function crearArchivo(filePath, content) {
  if (fileExists(filePath)) {
    console.log("El archivo existe");
  } else {
    fs.writeFile(filePath, content, (error) => {
      if (error) {
        return console.error(error);
      }
      console.log("Archivo creado");
    });
  }
}

// crearArchivo(filePath, "Hola mundo!!!");

function leerArchivo(filePath) {
  fs.readFile(filePath, "utf-8", (error, content) => {
    if (error) {
      return console.error(error);
    }

    console.log(content);
  });
}

// leerArchivo(filePath);

function agregarContenido(filePath, content) {
  fs.appendFile(filePath, content, (error) => {
    if (error) {
      return console.error(error);
    }

    console.log("Contenido agregado");
  });
}

// agregarContenido(filePath, "\nAlgo mas...");

function borraArchivo(filePath) {
  fs.unlink(filePath, (error) => {
    if (error) {
      return console.error(error);
    }

    console.log("Archivo borrado");
  });
}

// borraArchivo(filePath);
