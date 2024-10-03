const express = require("express");
const app = express();

const sequelize = require("./src/conexion/connection");
const Product = require("./src/models/product");
const Category = require("./src/models/category");
const Employee = require("./src/models/employee");
const ProductCategoryView = require("./src/models/productsandcategories");
const OrderDetailsProductsView = require("./src/models/orderdetailsandproducts");

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    await Product.sync();
    await Category.sync();
    await Employee.sync();
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

// app.get("/productosycategorias", async (req, res) => {
//   try {
//     const allProducts = await ProductCategoryView.findAll();

//     allProducts.length !== 0
//       ? res.status(200).json(allProducts)
//       : res.status(404).json({ error: "No se encontraron productos." });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "Error en el servidor", description: error.message });
//   }
// });

app.get("/productosycategorias", async (req, res) => {
  //Vista SQL más información adicional
  try {
    const allProducts = await ProductCategoryView.findAll();

    const response = {
      results: [...allProducts],
      info: {
        dateOfQuery: new Date(),
        totalRecords: allProducts.length || 0,
        database: sequelize.getDatabaseName(),
      },
    };

    allProducts.length !== 0
      ? res.status(200).json(response)
      : res.status(404).json({ error: "No se encontraron productos." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

app.get("/OrderDetailsProductsView", async (req, res) => {
  //Vista SQL más información adicional
  try {
    const allProducts = await OrderDetailsProductsView.findAll();

    const response = {
      results: [...allProducts],
      info: {
        dateOfQuery: new Date(),
        totalRecords: allProducts.length || 0,
        database: sequelize.getDatabaseName(),
      },
    };

    allProducts.length !== 0
      ? res.status(200).json(response)
      : res.status(404).json({ error: "No se encontraron productos." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

app.use("/productos", require("./src/routes/productos.router"));

app.use("/categorias", require("./src/routes/categorias.router"));

const empleadosRouter = require("./src/routes/empleados.router");
app.use(empleadosRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// async function main() {
//   try {
//     await sequelize.authenticate();
//     console.log("Conexión exitosa a la base de datos.");
//     await Product.sync();
//     const allProducts = await Product.findAll();
//     const allProductsData = allProducts.map((product) => product.dataValues);
//     console.table(allProductsData);
//   } catch (error) {
//     console.error("Error al conectar o consultar la base de datos:", error);
//   } finally {
//     sequelize.close();
//   }
// }

// main();
