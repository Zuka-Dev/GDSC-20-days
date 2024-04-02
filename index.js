//Creating a web server Challenge

//Importing necessary packages
import http from "http";

//Creating variables for server and Port
var server;
var PORT = 3000;

//Creating server
server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  // switch statement statement for each post
  switch (url.pathname) {
    case "/hello":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<b>Hello GDSC</b>");
      break;

    case "/api/hello":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Hello GDSC" }));
      break;

    default:
      //If not specified
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
      break;
  }
});

server.listen(PORT, () => console.log(`Application running at port ${PORT}`));
