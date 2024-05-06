const nombres = ["Juan", "Maria", "Pedro", "Camila"];
// console.log(nombres[1]);

// const datos = [1, "a", true, "Palabra", -23, 12.5];

// nombres[4] = "Violeta";
// nombres[nombres.length] = "Violeta";
// console.log(nombres.push("Violeta"));

// let nombre = nombres.pop();
// console.log(nombre);

// let nombre = nombres.shift();
// console.log(nombre);

// nombres.unshift("Violeta");

// console.log(nombres.indexOf("Mario"));

// console.log(nombres.includes("Pedro"));

// console.log(nombres.join(", "));

// const mesa1 = nombres.slice(1, 3);
// console.log(mesa1);

// console.log(nombres);

// ---

// const numeros = [3, 1, 4, 6, 8, 4, 9];

// console.log(numeros.lastIndexOf(44));

// splice

// const dias = ["Martes", "Miércoles", "Friday", "Sábado"];

// dias.splice(4, 0, "Domingo", "Osvaldo"); // push
// dias.splice(0, 0, "Lunes"); // unshift

// // dias.splice(2, 1); // delete

// const indexFriday = dias.indexOf("Friday");
// if (indexFriday != -1) {
//   dias.splice(indexFriday, 1, "Jueves", "Viernes"); // reemplazar
// }

// console.log(dias);

// concat

// const letras = ["a", "b", "c"];
// const otrasLetras = ["d", "e"];

// const alfabeto = letras.concat(otrasLetras, ["f", "j"]);
// console.log(alfabeto);

// sort

const numeros = [4, 10, 2, 100, 60, 6, 6, 1, 9, 15];

function compareFn(a, b) {
  //   console.log(a - b);
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

console.log(numeros.sort((a, b) => a - b));
