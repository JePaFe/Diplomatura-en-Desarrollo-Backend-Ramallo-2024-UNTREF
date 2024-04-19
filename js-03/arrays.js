const paises = ["Argentina", "Uruguay", "Francia"];
// console.log(paises[0]);

const usuario = ["Juan", 33, true];
// console.log(usuario[1], usuario.length);

// usuario[usuario.length] = "Perez";

usuario.push("Perez");

console.log(usuario, usuario.length);

let apellido = usuario.pop();

console.log(usuario, usuario.length, apellido);
