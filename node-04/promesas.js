const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "archivo.txt");

async function crearArchivo() {
  try {
    await fs.writeFile(filePath, "Hola mundo");
  } catch (error) {
    console.error(error);
  }
}

crearArchivo();
