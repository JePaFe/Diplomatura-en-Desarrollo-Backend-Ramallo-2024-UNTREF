const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const { Op } = require("sequelize");

const sequelize = require("./src/conexion/connection");
const Product = require("./src/modelos/product");
const ProductCategoryView = require("./src/modelos/productsandcategories");

app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    await Product.sync();
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

app.get("/productosycategorias", async (req, res) => {
  try {
    const allProducts = await ProductCategoryView.findAll();

    const response = {
      info: {
        dateOfQuery: new Date(),
        totalRecords: allProducts.length || 0,
        database: sequelize.getDatabaseName(),
      },
      results: [...allProducts],
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

app.get("/productos", async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      order: [
        ["categoryID", "ASC"],
        ["productName", "DESC"],
      ],
    });

    const allProductsData = allProducts.map((product) => product.dataValues);

    allProductsData.length !== 0
      ? res.status(200).json(allProducts)
      : res.status(404).json({ error: "No se encontraron productos." });
  } catch (error) {
    res.status(500).json({
      error: "Error al conectar o consultar la base de datos",
      description: error.message,
    });
  } finally {
    sequelize.close();
  }
});

app.get("/productos/:productID", async (req, res) => {
  try {
    const { productID } = req.params;
    const product = await Product.findByPk(productID);

    !product
      ? res.status(404).json({ error: "Producto no encontrado." })
      : res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

app.get("/productos/nombre/:productName", async (req, res) => {
  try {
    const { productName } = req.params;
    const product = await Product.findOne({ where: { productName } });

    !product
      ? res.status(404).json({ error: "Producto no encontrado." })
      : res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

app.get("/productos/categoria/:categoryID", async (req, res) => {
  try {
    const { categoryID } = req.params;
    const products = await Product.findAll({
      where: { categoryID },
      order: [["productName", "ASC"]],
    });

    // console.log(products, !products, products.length == 0);

    products.length == 0
      ? res.status(404).json({ error: "Producto no encontrado" })
      : res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
});

app.get("/productos/buscar/:query", async (req, res) => {
  try {
    const { query } = req.params;
    const products = await Product.findAll({
      where: {
        productName: {
          [Op.like]: `%${query}%`,
        },
      },
    });

    products.length !== 0
      ? res.status(200).json(products)
      : res
          .status(404)
          .json({ error: "No se encontraron productos para listar." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

app.get("/productos/importemayor/:unitPrice", async (req, res) => {
  try {
    const { unitPrice } = req.params;
    const products = await Product.findAll({
      where: {
        UnitPrice: {
          [Op.gt]: unitPrice,
        },
      },
    });

    products.length !== 0
      ? res.status(200).json(products)
      : res
          .status(404)
          .json({ error: "No se encontraron productos para listar." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
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
