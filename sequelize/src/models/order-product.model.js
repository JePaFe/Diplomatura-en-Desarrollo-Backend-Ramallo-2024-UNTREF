const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const OrderProduct = sequelize.define(
  "OrderProduct",
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = OrderProduct;
