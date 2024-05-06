// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros);

// function multiplicar(numero) {
//   return numero * 3;
// }

// const otrosNumeros = numeros.map(multiplicar);
// console.log(otrosNumeros);

// otrosNumeros.push(6);
// console.log(numeros, otrosNumeros);

// ---

// const numeros = [1, 2, 3];

// const otrosNumeros = numeros;

// otrosNumeros.push(4);

// console.log(numeros, otrosNumeros);

// console.log("Hola".map((letra) => console.log(letra))); // no funciona
// console.log("Hola"[0]);

// filter

// const numeros = [1, 2, 3, 4, 5];

// function filtrar(numero) {
//   if (numero > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function filtrar(numero) {
//   if (numero >= 3) {
//     return true;
//   }

//   return false;
// }

// function filtrar(numero) {
//   return numero >= 3;
// }

// const filtrar = function (numero) {
//   return numero >= 3;
// };

// const filtrar = numero => numero >= 3;

// const numerosFiltrados = numeros.filter(numero => numero >= 3);
// console.log(numerosFiltrados);

// reduce

// const numeros = [1, 2, 3];
// //                               3         3
// const total = numeros.reduce((previous, current) => {
//   return previous + current;
// }, 0);
// console.log(total);

// forEach

// const nombres = ["Juan", "Maria", "Pedro", "Camila"];

// function mostrarNombre(nombre) {
//   console.log(`El nombre es: ${nombre}`);
// }

// // nombres.forEach(mostrarNombre);

// nombres.forEach(nombre => console.log(nombre));

// findIndex

const productos = [
  { id: 1, nombre: "Producto 1", cantidad: 3, precio: 100 },
  { id: 5, nombre: "Producto 5", cantidad: 1, precio: 150 },
  { id: 9, nombre: "Producto 9", cantidad: 4, precio: 60 },
];

function buscar(producto) {
  if (producto.id == 9) {
    return true;
  } else {
    return false;
  }
}

// const index = productos.findIndex(buscar);
const index = productos.findIndex(producto => producto.id == 91);
console.log(index);
