//Creating a web server Challenge

//Importing necessary packages
import http from "http";

//Creating variables for server and Port
var server;
var PORT = 3000;

//Creating server
server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  //Returning this JSON Object
  res.end(
    JSON.stringify({
      message: "I love gdsc",
    })
  );
});

//Server to run
server.listen(PORT, () => console.log(`Application running at port ${PORT}`));
