require("dotenv").config();

const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

app.use(express.json());

const paises = JSON.parse(
  fs.readFileSync(path.join(__dirname, "paises.json"), "utf-8")
);

app.get("/", (req, res) => {
  res.json("API Países");
});

app.get("/paises", (req, res) => {
  let idioma = req.query.idioma;

  if (idioma) {
    idioma = idioma.trim().toLowerCase();
    const paisesIdioma = paises.filter((pais) => {
      // const filterIdioma = item.idioma.filter((item) => item == idioma);
      // console.log(filterIdioma);

      // const findIdioma = item.idioma.find((item) => item == idioma);
      // console.log(findIdioma);

      //   // ["Italiano", "Maltés", "Inglés"]
      //   const idiomas = pais.idioma.map((idiomaPais) => idiomaPais.toLowerCase());
      //   // ["italiano", "maltés", "inglés"]
      //   return idiomas.includes(idioma);

      return pais.idioma.some(
        (idiomaPais) => idiomaPais.toLowerCase() == idioma
      );
    });

    return res.json(paisesIdioma);
  }

  res.json(paises);
});

app.get("/paises/:nombre", (req, res) => {
  //   const { nombre } = req.params;

  //   const pais = paises.find(
  //     (item) => item.pais.toLowerCase() == nombre.trim().toLowerCase()
  //   );

  const nombre = req.params.nombre.trim().toLowerCase();

  const pais = paises.find((item) => item.pais.toLowerCase() == nombre);

  if (!pais) {
    return res.status(404).json({ error: "No se encontró el registro" });
  }

  res.send(pais);
});

app.post("/paises", (req, res) => {
  //   console.log(req.body);

  paises.push(req.body);
  //   console.log(paises);

  fs.writeFileSync(
    path.join(__dirname, "paises.json"),
    JSON.stringify(paises),
    "utf-8"
  );

  res.status(201).json(req.body);
});

app.delete("/paises/:nombre", (req, res) => {
  const nombre = req.params.nombre.trim().toLowerCase();

  const paisIndex = paises.findIndex(
    (item) => item.pais.toLowerCase() == nombre
  );

  if (paisIndex == -1) {
    return res.status(404).json({ error: "No se encontró el registro" });
  }

  const pais = paises.splice(paisIndex, 1);

  fs.writeFileSync(
    path.join(__dirname, "paises.json"),
    JSON.stringify(paises),
    "utf-8"
  );

  res.json(pais[0]);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
