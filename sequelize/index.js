require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const sequelize = require("./src/database");
const { User, Product, Order } = require("./src/models/associations");

app.use(async (req, res, next) => {
  try {
    await sequelize.sync({ force: false });
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Bienvenido a Express.js");
});

app.use("/api", require("./src/routes/user.router"));
app.use("/api", require("./src/routes/product.router"));
app.use("/api", require("./src/routes/order.router"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
