const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/connection"); // Asegúrate de ajustar la ruta según tu estructura de archivos

const OrderDetailsProductsView = sequelize.define(
  "OrderDetailsProductsView",
  {
    OrderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ProductID: {
      type: DataTypes.INTEGER,
    },
    ProductName: {
      type: DataTypes.STRING,
    },
    UnitPrice: {
      type: DataTypes.DOUBLE,
    },
    Quantity: {
      type: DataTypes.SMALLINT,
    },
  },
  {
    tableName: "VistaOrderDetails",
    timestamps: false,
  }
);

module.exports = OrderDetailsProductsView;
