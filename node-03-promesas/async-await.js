const multiplicar = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return Promise.reject("Los valores de los parámetros no son números");
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        num1: num1,
        num2: num2,
        result: num1 * num2,
      });
    }, Math.floor(Math.random() * 2000));
  });
};

const tabla = async () => {
  try {
    let response = await multiplicar(1, 2);
    console.log(`${response.num1} * ${response.num2} = ${response.result}`);

    response = await multiplicar(2, 2);
    console.log(`${response.num1} * ${response.num2} = ${response.result}`);

    response = await multiplicar(3, 2);
    console.log(`${response.num1} * ${response.num2} = ${response.result}`);
  } catch (error) {
    console.log(error);
  }
};

tabla();
