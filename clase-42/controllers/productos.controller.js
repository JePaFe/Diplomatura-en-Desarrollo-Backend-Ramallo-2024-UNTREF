const index = (req, res) => {
  res.send("JSON de productos");
};

const store = (req, res) => {
  const { nombre } = req.body;
  console.log(nombre);
  res.status(201).send("Producto creado");
};

module.exports = {
  index,
  store,
};
