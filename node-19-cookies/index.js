require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const vistaPrincipal = require("./views/principal.js");
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  const texto = "Un texto";
  const texto64 = Buffer.from(texto).toString("base64");
  console.log(texto64);

  const texto2 = Buffer.from(texto64, "base64").toString();
  console.log(texto2);

  const datosCookie = new Date();
  res.cookie("nodeCookie", datosCookie);
  res.send(vistaPrincipal);
});

app.get("/leer-cookie", (req, res) => {
  const fecha = req.cookies.nodeCookie || "No existe la cookie";
  res.send("Fecha de acceso: " + fecha);
});

app.get("/eliminar-cookie", (req, res) => {
  res.clearCookie("nodeCookie");
  res.send("eliminar");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
