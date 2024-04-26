const multiplicar = (num1, num2, callback) => {
  setTimeout(() => {
    callback(num1, num2, num1 * num2);
  }, Math.floor(Math.random() * 2000));
};

multiplicar(1, 2, (n1, n2, result) => {
  console.log(`${n1} * ${n2} = ${result}`);
  multiplicar(2, 2, (n1, n2, result) => {
    console.log(`${n1} * ${n2} = ${result}`);
    multiplicar(3, 2, (n1, n2, result) =>
      console.log(`${n1} * ${n2} = ${result}`)
    );
  });
});
