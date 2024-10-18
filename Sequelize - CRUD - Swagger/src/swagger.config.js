const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerDefinition = {
  info: {
    title: "CRUD en Sequelize",
    version: "1.0.2023",
    description: "Documentación de la API de Sequelize y MySQL.",
  },
  basePath: "/",
};

const productSchema = {
  type: "object",
  properties: {
    ProductID: { type: "integer" },
    ProductName: { type: "string" },
    SupplierID: { type: "integer" },
    CategoryID: { type: "integer" },
    QuantityPerUnit: { type: "string" },
    UnitPrice: { type: "number" },
    UnitsInStock: { type: "integer" },
    UnitsOnOrder: { type: "integer" },
    ReorderLevel: { type: "integer" },
    Discontinued: { type: "boolean" },
  },
  example: {
    ProductID: 1,
    ProductName: "Producto de ejemplo",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "N/A",
    UnitPrice: 19.99,
    UnitsInStock: 10,
    UnitsOnOrder: 5,
    ReorderLevel: 2,
    Discontinued: false,
  },
};

const options = {
  swaggerDefinition,
  apis: ["./server.js"],
  components: {
    schemas: { Product: productSchema },
  },
};
const swaggerSpecs = swaggerJSDoc(options);

module.exports = { swaggerJSDoc, swaggerSpecs, swaggerUI };
