const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(req.url);
  const filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
  }

  console.log(filePath);
  console.log(contentType);

  fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`<h1>404 Not Found</h1>`);
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Error al leer el archivo: ${err}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

const PORT = 3000;

server.listen(PORT, () => console.log("http://localhost:" + PORT));
