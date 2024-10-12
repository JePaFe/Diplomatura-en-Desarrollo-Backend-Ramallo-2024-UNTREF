const express = require("express");
const app = express();
const bcryptjs = require("bcryptjs");

const users = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la API" });
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcryptjs.hash(password, 12);

  const user = {
    id: Date.now(),
    email,
    password: hash,
  };

  users.push(user);
  console.log(users);

  res.status(201).json({ message: `Se creo un usuario con el id: ${user.id}` });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email == email);

  if (!user) {
    return res.status(404).json({ message: "El correo y/o la contraseña son incorrectos" });
  }

  const result = await bcryptjs.compare(password, user.password);
//   console.log(result, !result);

  if (!result) {
    return res.status(404).json({ message: "El correo y/o la contraseña son incorrectos" });
  }

  res.json({ message: `Inicio session el usuario ${user.id}` });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
