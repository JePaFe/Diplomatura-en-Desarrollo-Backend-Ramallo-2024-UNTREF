const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/connection");

const Category = sequelize.define(
  "Category",
  {
    CategoryID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CategoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: null,
    },
  },
  {
    tableName: "Categories",
    timestamps: false,
  }
);

module.exports = Category;
