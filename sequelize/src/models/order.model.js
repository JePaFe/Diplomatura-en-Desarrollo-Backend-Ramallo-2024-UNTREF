const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Order = sequelize.define(
  "Order",
  {
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Order;
