const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const frutasRoutes = require("./src/routes/frutasRoutes");

app.use(express.json());

app.use("/frutas", frutasRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
