// const promesa = new Promise((resolve, reject) => {
//   const numeroAleatorio = Math.random();

//   setTimeout(() => {
//     if (numeroAleatorio < 0.5) {
//       resolve("El numero es menor a 0.5: " + numeroAleatorio);
//     } else {
//       reject("El numero es mayor o igual a 0.5: " + numeroAleatorio);
//     }
//   }, 1000);
// });

// promesa
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Se ejecuta siempre"));

// fetch

// console.log("Inicio");

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

// console.log("Fin");

// try - catch

// try {
//   let num1 = 4;
//   let num2 = 6;
//   let resultado = num1 + num2;
//   console.log(`La suma es: ${resultado}`);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Siempre se ejecuta");
// }

// console.log("fin");

// callback

// function tareaAsincronica(callback) {
//   setTimeout(() => {
//     callback("Pasaron 1500 mili segundos");
//   }, 1500);
// }

// console.log("Inicio");

// tareaAsincronica((texto) => console.log(texto));

// console.log("fin");

// async - await

async function getProductos() {
  try {
    const response = await fetch("https://fakestoreapi.com/prodducts");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }

  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((error) => console.log(error));
}

getProductos();
