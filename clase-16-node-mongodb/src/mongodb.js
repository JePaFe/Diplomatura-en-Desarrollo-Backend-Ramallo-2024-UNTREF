require("dotenv").config();

const { MongoClient } = require("mongodb");

const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI);

const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log("Conectado");
    return client;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const disconnectToMongoDB = async () => {
  try {
    await client.close();
    console.log("Desconectado");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectToMongoDB,
  disconnectToMongoDB,
};
