const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

// http://localhost:3000/

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  //   console.log(req.url, parseUrl.pathname, parseUrl.query, req.method);

  // /frutas/all

  // /frutas/id/1
  // /frutas/id/5
  //   console.log(parseUrl.pathname.match(/^\/frutas\/id\/(\d+)$/i));

  if (parseUrl.pathname === "/") {
    try {
      const pathFile = path.join(__dirname, "public", "index.html");
      const html = fs.readFileSync(pathFile);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    } catch (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error en el servidor");
    }
  } else if (parseUrl.pathname === "/frutas/all") {
    // const frutas = require("./frutas.json");

    const pathFile = path.join(__dirname, "frutas.json");
    const JSONFrutas = fs.readFileSync(pathFile, "utf-8");

    // const objFrutas = JSON.parse(JSONFrutas);
    // console.log(typeof JSONFrutas, typeof objFrutas);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSONFrutas);
  } else if (parseUrl.pathname.match(/^\/frutas\/id\/(\d+)$/i)) {
    // /frutas/id/1
    const pathArray = parseUrl.pathname.split("/");
    // ['', 'frutas', 'id', '1']

    // const id = parseInt(pathArray.pop());
    // const id = pathArray.slice(pathArray.length - 1);
    // const id = pathArray[pathArray.length - 1];
    const id = parseInt(pathArray[3]);
    console.log(id);

    const pathFile = path.join(__dirname, "frutas.json");
    const jsonFrutas = fs.readFileSync(pathFile, "utf-8");

    const arrayFrutas = JSON.parse(jsonFrutas);
    const fruta = arrayFrutas.find((arrayFruta) => arrayFruta.id == id);
    // const indexFruta = arrayFrutas.findIndex(
    //   (arrayFruta) => arrayFruta.id == id
    // );

    // const fruta = arrayFrutas[indexFruta];
    // console.log(fruta);

    res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(`ID: ${id}`);
    res.end(JSON.stringify(fruta));
  } else {
    //   res.statusCode = 404;
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("La pagina no existe");
  }
});

const PORT = 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
