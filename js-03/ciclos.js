// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

//              4
// for (let i = 1; i <= 1000; i++) { // i = 4
//   console.log(i);
// }

// const paises = ["Argentina", "Uruguay", "Francia", "Chile", "Peru"];

// for (let i = 0; i < paises.length; i++) { // 5
//   console.log(paises[i]);
// }

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;

// //   if (i == 6) {
// //     break;
// //   }
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 3);

// const paises = ["Argentina", "Uruguay", "Francia", "Chile", "Peru"];

// for (let i = 0; i < paises.length; i++) {
//   if (paises[i] == "Chile") {
//     console.log("País encontrado: ", i);
//     break;
//   }
// }

// console.log(paises.indexOf("Paraguay"));

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 3 != 0) {
    continue;
  }
  console.log(numeros[i]);
}
