const Product = require("./product.model");
const Category = require("./category.model");
const Order = require("./order.model");
const OrderProduct = require("./order-product.model");
const User = require("./user.model");
const Profile = require("./profile.model");

// Un usuario tiene un perfil
User.hasOne(Profile, {
  foreignKey: "userId",
  as: "profile",
});

// Un perfil pertenece a un usuario
Profile.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

Category.hasMany(Product, {
  foreignKey: "categoryId",
  as: "products",
});

Product.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Product.belongsToMany(Order, {
  through: OrderProduct,
  foreignKey: "productId",
  otherKey: "orderId",
  as: "orders",
});

Order.belongsToMany(Product, {
  through: OrderProduct,
  foreignKey: "orderId",
  otherKey: "productId",
  as: "products",
});

module.exports = { Product, Category, Order, OrderProduct, User, Profile };
