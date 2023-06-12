const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to out homepage");
  }
  if (req.url === "/about") {
    res.end("Welcome to about section");
  }
  res.end(`
    <h1>Page doesnt exist</h1>
    <a href="/">homepage</a>
`)
});

server.listen(3000);
