require("dotenv").config();

const express = require("express");
const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hola Express");
});

app.get("/productos", async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const productos = await response.json();
    // console.log(productos);

    res.render("listado", { title: "Productos", productos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error interno");
  }
});

app.get("/categorias", (req, res) => {
  res.render("listado", { title: "Categorías" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
