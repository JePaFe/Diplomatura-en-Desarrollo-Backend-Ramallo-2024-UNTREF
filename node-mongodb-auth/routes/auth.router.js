const express = require("express");
const router = express.Router();

const { connectToMongoDB, disconnectToMongoDB } = require("../db/mongodb");

router.post("/register", async (req, res) => {
//   console.log(req.body);

  try {
    const client = await connectToMongoDB();
    if (!client) {
      return res.status(500).json({ error: "Error del servidor" });
    }

    const collection = client.db("tienda").collection("users");

    const user = await collection.findOne({ email: req.body.email });
    // console.log(user);
    if (user) {
      return res.status(400).json({ error: "Usuario duplicado" });
    }

    const result = await collection.insertOne(req.body);
    // console.log(result, req.body);

    await disconnectToMongoDB();

    res.status(201).json(req.body);
  } catch (error) {
    console.log(error);
    // res.status(500).json({ code: error.code, msg: error.errmsg });
    return res.status(500).json({ error: "Error del servidor" });
  }
});

router.post("/login", async (req, res) => {
//   console.log(req.body);

  try {
    const client = await connectToMongoDB();
    if (!client) {
      return res.status(500).json({ error: "Error del servidor" });
    }

    const collection = client.db("tienda").collection("users");

    const user = await collection.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(401)
        .json({ error: "El usuario y/o password son incorrectos" });
    }

    if (req.body.password != user.password) {
      return res
        .status(401)
        .json({ error: "El usuario y/o password son incorrectos" });
    }

    await disconnectToMongoDB();

    res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error del servidor" });
  }
});

module.exports = router;
