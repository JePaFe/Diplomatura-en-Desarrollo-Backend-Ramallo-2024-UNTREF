const { Op } = require("sequelize");

const Product = require("../models/product");

const index = async (req, res) => {
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
};

const show = async (req, res) => {
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
};

const findName = async (req, res) => {
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
};

const forCategory = async (req, res) => {
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
};

const buscar = async (req, res) => {
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
};

const mayorPrecio = async (req, res) => {
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
};

const store = async (req, res) => {
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

    // console.log(product, "Linea 142");

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
};

const update = async (req, res) => {
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
};

const destroy = async (req, res) => {
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
};

module.exports = {
  index,
  show,
  findName,
  forCategory,
  buscar,
  mayorPrecio,
  store,
  update,
  destroy,
};
