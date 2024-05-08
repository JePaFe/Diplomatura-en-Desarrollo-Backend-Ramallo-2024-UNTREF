// const user = {
//   nombre: "Juan",
//   apellido: "Perez",
//   dni: 98765432,
//   admin: false,
//   info() {
//     return `Nombre: ${this.nombre} Apellido: ${this.apellido}`;
//   },
// };

// console.log(user);

// const json = JSON.stringify(user);
// console.log(json);

// const obj = JSON.parse(json);
// console.log(obj);

const fs = require("fs");

const json = fs.readFileSync("./data.json", "utf-8");

const users = JSON.parse(json);

console.log(users);
