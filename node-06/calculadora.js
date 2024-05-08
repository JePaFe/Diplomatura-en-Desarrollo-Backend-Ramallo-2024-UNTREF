// function sumar(num1, num2) {
//   return num1 + num2;
// }

// function restar(num1, num2) {
//   return num1 - num2;
// }

// function calculadora(num1, num2, operacion) {
//   //   if (operacion == "+") {
//   //     return num1 + num2;
//   //   } else if (operacion == "-") {
//   //     return num1 - num2;
//   //   } else if (operacion == "*") {
//   //     return num1 * num2;
//   //   } else if (operacion == "/") {
//   //     return num1 / num2;
//   //   }

//   return operacion(num1, num2);
// }

// let result = calculadora(2, 3, sumar);
// console.log(result);

// result = calculadora(7, 4, restar);
// console.log(result);

// result = calculadora(2, 4, "*");
// console.log(result);

// result = calculadora(8, 2, "/");
// console.log(result);

function saludar(nombre) {
  const apellido = "Garcia";
  return function () {
    return `${nombre} ${apellido}`;
  };
}

const mensaje = saludar("Juan");

const texto = mensaje();
console.log(texto);
