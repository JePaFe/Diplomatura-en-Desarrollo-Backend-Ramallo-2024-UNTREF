require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const frutasRoutes = require("./src/routes/frutasRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenidos a la API");
});

app.use("/frutas", frutasRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
