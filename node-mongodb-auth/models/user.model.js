const { connectToMongoDB, disconnectToMongoDB } = require("../db/mongodb");

const store = async (data) => {
  try {
    const client = await connectToMongoDB();
    if (!client) {
      //   return res.status(500).json({ error: "Error del servidor" });
      throw new Error("Error del servidor");
    }

    const collection = client.db("tienda").collection("users");

    const user = await collection.findOne({ email: data.email });
    // console.log(user);
    if (user) {
      //   return res.status(400).json({ error: "Usuario duplicado" });

      const error = new Error("Usuario duplicado");
      error.status = 400;
      throw error;
    }

    const result = await collection.insertOne(data);
    // console.log("result", result);
    console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    throw error;
  } finally {
    await disconnectToMongoDB();
  }
};

const login = async (data) => {
  try {
    const client = await connectToMongoDB();
    if (!client) {
      return res.status(500).json({ error: "Error del servidor" });
    }

    const collection = client.db("tienda").collection("users");

    const user = await collection.findOne({ email: req.body.email });
    if (!user) {
      //   return res
      //     .status(401)
      //     .json({ error: "El usuario y/o password son incorrectos" });
      throw new Error("El usuario y/o password son incorrectos");
    }

    if (req.body.password != user.password) {
      //   return res
      //     .status(401)
      //     .json({ error: "El usuario y/o password son incorrectos" });
      throw new Error("El usuario y/o password son incorrectos");
    }
  } catch (error) {
    throw new Error(error);
  } finally {
    await disconnectToMongoDB();
  }
};

module.exports = {
  store,
};
