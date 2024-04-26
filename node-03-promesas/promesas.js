const multiplicar = (num1, num2) => {
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

multiplicar(1, 2)
  .then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.result}`);
    return multiplicar(2, 2);
  })
  .then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.result}`);
    return multiplicar(3, 2);
  })
  .then((response) => {
    console.log(`${response.num1} * ${response.num2} = ${response.result}`);
  })
  .catch((error) => console.log(error));
