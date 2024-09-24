const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const sequelize = require("./src/conexion/connection");
const Product = require("./src/modelos/product");

app.get("/productos", async (req, res) => {
  try {
    await sequelize.authenticate();
    await Product.sync();

    const allProducts = await Product.findAll();
    const allProductsData = allProducts.map((product) => product.dataValues);
    res.status(200).json(allProductsData);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Error al conectar o consultar la base de datos",
        description: error.message,
      });
  } finally {
    sequelize.close();
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// async function main() {
//   try {
//     await sequelize.authenticate();
//     console.log("Conexión exitosa a la base de datos.");
//     await Product.sync();
//     const allProducts = await Product.findAll();
//     // console.log(allProducts);
//     const allProductsData = allProducts.map((product) => product.dataValues);
//     console.table(allProductsData);
//   } catch (error) {
//     console.error("Error al conectar o consultar la base de datos:", error);
//   } finally {
//     sequelize.close();
//   }
// }

// main();
