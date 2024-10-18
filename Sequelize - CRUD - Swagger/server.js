const express = require("express");
const app = express();

const sequelize = require("./src/conexion/connection");
const Product = require("./src/modelos/product");
const Category = require("./src/modelos/category");
const ProductCategoryView = require("./src/modelos/productsandcategories");
const { Op, Sequelize } = require("sequelize");

const {
  swaggerJSDoc,
  swaggerSpecs,
  swaggerUI,
} = require("./src/swagger.config");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    await Product.sync();
    await Category.sync();
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtener todos los productos
 *     description: Endpoint para obtener una lista de todos los productos en la base de datos.
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve una lista de productos.
 *         content:
 *           application/json:
 *               example:
 *                 $ref: '#/components/schemas/Product'  # Referencia al esquema Product definido en swagger.config.js
 *       404:
 *         description: No se encontraron productos para listar.
 *         content:
 *           application/json:
 *             example:
 *               error: No se encontraron productos para listar.
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: Error en el servidor
 *               description: Mensaje de error detallado.
 */

app.get("/productos", async (req, res) => {
  try {
    const allProducts = await Product.findAll();

    allProducts.length !== 0
      ? res.status(200).json(allProducts)
      : res
          .status(404)
          .json({ error: "No se encontraron productos para listar." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
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
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
});

app.get("/productos/categoria/:categoryID", async (req, res) => {
  try {
    const { categoryID } = req.params;
    const products = await Product.findAll({ where: { categoryID } });

    !products
      ? res.status(404).json({ error: "Producto no encontrado" })
      : res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
});

// ENDPOINT PARA INSERTAR UN NUEVO PRODUCTO DE NORTHWIND.PRODUCTS (POST)
app.post("/productos/", async (req, res) => {
  try {
    const {
      productName,
      CategoryID,
      SupplierID,
      QuantityPerUnit,
      UnitPrice,
      UnitsInStock,
      ReorderLevel,
      UnitsOnOrder,
      Discontinued,
    } = req.body;

    const product = await Product.create({
      productName,
      CategoryID,
      SupplierID,
      QuantityPerUnit,
      UnitPrice,
      UnitsInStock,
      ReorderLevel,
      UnitsOnOrder,
      Discontinued,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
});

// ENDPOINT PARA INSERTAR MODIFICAR UN PRODUCTO DE NORTHWIND.PRODUCTS (PUT)
app.put("/productos/:ProductID", async (req, res) => {
  try {
    const { ProductID } = req.params;

    const {
      ProductName,
      CategoryID,
      SupplierID,
      QuantityPerUnit,
      UnitPrice,
      UnitsInStock,
      ReorderLevel,
      UnitsOnOrder,
      Discontinued,
    } = req.body;

    const [productToUpdate] = await Product.update(
      {
        ProductName,
        SupplierID,
        CategoryID,
        QuantityPerUnit,
        UnitPrice,
        UnitsInStock,
        UnitsOnOrder,
        ReorderLevel,
        Discontinued,
      },
      {
        where: { ProductID },
      }
    );
    if (productToUpdate === 0) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }

    const updatedProduct = await Product.findByPk(ProductID);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
});

// ENDPOINT PARA ELIMINAR UN PRODUCTO DE NORTHWIND.PRODUCTS (DELETE)
app.delete("/productos/:ProductID", async (req, res) => {
  const { ProductID } = req.params;

  try {
    const productToDelete = await Product.findByPk(ProductID);

    if (!productToDelete) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }

    await productToDelete.destroy();

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
});

// ##############################################################
// ### A PARTIR DE AQUÍ, CORRESPONDE A LA EJERCITACIÓN PROPUESTA
// ##############################################################

// ENDPOINT PARA INTERACTUAR CON LA TABLA NORTHWIND.CATEGORIES (GET)
app.get("/categorias", async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      raw: true,
    });

    return allCategories.length !== 0
      ? res.status(200).json(allCategories)
      : res.status(404).json({ error: "No se encontraron Categorías." });
  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
});

// ENDPOINT PARA INTENTAR ELIMINAR UN REGISTRO DE LA TABLA NORTHWIND.CATEGORIES (DELETE)
app.delete("/categorias/:CategoryID", async (req, res) => {
  const { CategoryID } = req.params;

  try {
    const categoryToDelete = await Category.findByPk(CategoryID);
    if (!categoryToDelete) {
      return res.status(404).json({ error: "Categoría no encontrada." });
    }
    await categoryToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
});

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
