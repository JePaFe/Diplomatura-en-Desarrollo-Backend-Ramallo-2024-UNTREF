const express = require("express");
const app = express();

app.use(express.json());

const router = require("./routes/productos.router");
app.use("/api", router);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
