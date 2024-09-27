const express = require("express");
const app = express();

const { Op } = require("sequelize");

const sequelize = require("./src/conexion/connection");
const Product = require("./src/modelos/product");
const Category = require("./src/modelos/category");
const Employee = require("./src/modelos/employee");
const ProductCategoryView = require("./src/modelos/productsandcategories");
const OrderDetailsProductsView = require("./src/modelos/orderdetailsandproducts");

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

app.get("/productos", async (req, res) => {
  try {
    // await sequelize.authenticate();
    // await Product.sync();
    const allProducts = await Product.findAll({
      order: [
        ["categoryID", "ASC"],
        ["productName", "ASC"],
      ],
    });
    const allProductsData = allProducts.map((product) => product.dataValues);
    res.status(200).json(allProductsData);
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

app.post("/productos/", async (req, res) => {
  try {
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

    const product = await Product.create({
      ProductName,
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

app.delete("/categorias/:CategoryID", async (req, res) => {
  const { CategoryID } = req.params;

  try {
    const categoryToDelete = await Category.findByPk(CategoryID);
    if (!categoryToDelete) {
      return res.status(404).json({ error: "Categoría no encontrada." });
    }

    // update Products sin categoría

    await categoryToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
});

app.get("/empleados", async (req, res) => {
  try {
    // await sequelize.authenticate();
    // await Employee.sync();
    const allEmployees = await Employee.findAll();
    const allEmployeesData = allEmployees.map(
      (employee) => employee.dataValues
    );
    res.status(200).json(allEmployeesData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

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
