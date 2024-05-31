const express = require("express");
const app = express();

const { connectToMongoDB, disconnectToMongoDB } = require("./src/mongodb");

app.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});

app.get("/", (req, res) => {
  res.status(200).end("Hola");
});

app.get("/frutas", async (req, res) => {
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error client");
    return;
  }

  const db = client.db("sample_mflix");
  const frutas = await db.collection("frutas").find().toArray();

  await disconnectToMongoDB();

  res.json(frutas);
});

app.get("/frutas/:id", async (req, res) => {
  const frutaId = parseInt(req.params.id) || 0;
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error client");
    return;
  }

  const db = client.db("sample_mflix");
  const fruta = await db.collection("frutas").findOne({ id: frutaId });

  await disconnectToMongoDB();

  !fruta ? res.status(404).send("No existe esa fruta") : res.json(fruta);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
