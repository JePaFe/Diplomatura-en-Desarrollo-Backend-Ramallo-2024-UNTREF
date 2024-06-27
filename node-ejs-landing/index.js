require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const path = require("path");

app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contacto", (req, res) => {
  res.render("contacto");
});

app.get("/galeria", (req, res) => {
  res.render("galeria");
});

app.get("/servicios", (req, res) => {
  res.render("servicios");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
