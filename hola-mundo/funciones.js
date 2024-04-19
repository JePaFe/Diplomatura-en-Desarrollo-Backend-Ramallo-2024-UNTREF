// let nombre = "Maria";
// let apellido = "Perez";

// function saludar(parametroNombre, parametroApellido) {
//   console.log("Hola, " + parametroNombre + " " + parametroApellido);
// }

// saludar("Juan", "Garcia");
// saludar(nombre, apellido);

// ---

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// let resultadoSuma = sumar(5, 3);
// console.log("La suma es: " + resultadoSuma);

// resultadoSuma = sumar(7, 15);
// console.log("La suma es: " + resultadoSuma);

// ---

// const sumar = function (num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// let resultadoSuma = sumar(15, 3);
// console.log("La suma es: " + resultadoSuma);

// ---

// const sumar = (num1, num2) => num1 + num2;

// let resultadoSuma = sumar(1, 3);
// console.log("La suma es: " + resultadoSuma);

// ---

// function saludar(nombre) {
//   return "Hola " + nombre;
// }

// const saludar = function (nombre) {
//   return "Hola " + nombre;
// };

const saludar = nombre => "Hola " + nombre;

const mensaje = saludar("Juan");
console.log(mensaje);
