const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hola de Node.js");

  //   res.setHeader("Content-Type", "text/html");
  //   res.end("<h1>Hola de Node.js con HTTP</h1>");

  //   res.setHeader("Content-Type", "text/json");
  //   res.end(JSON.stringify({ nombre: "Juan", apellido: "Perez" }));
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);

  //   console.log("http://localhost:" + PORT);
});
