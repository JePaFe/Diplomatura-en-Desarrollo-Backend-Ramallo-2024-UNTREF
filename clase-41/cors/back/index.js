const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: ["http://example.com", "http://127.0.0.1:5500"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hola CORS!!!" });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
