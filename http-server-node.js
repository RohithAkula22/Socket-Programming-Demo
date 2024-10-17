const http = require("http");

// TODO: Manually setting up HTTP Connection
// * This is a HTTP Server - HTTP Runs on application layer
// * TCP Runs on Transport layer

// * Returns you a brand new Server Object - which expects a callback - where you have access to the http request incoming and response which is outgoing

// *Everytime when a client connects to this server this callback will be executed

const server = http.createServer((req, response) => {
  console.log("New connection was created");

  console.log(req);

  if (req.url === ".home") {
    return response.end("Welcome Come Hero");
  } else {
    response.end("Something.....Something!!!");
  }
});

// * Binding this server to a PORT

server.listen(3000, () => {
  console.log("Server started at PORT 3000");
});

//  SUMMARY: All the internal details of creating a socket object connecting them through a TCP then sending the details all of that is actually hidden behind

//  In final version we will be using Frameworks anyway

// * HTTP relies on TCP -> NO TCP -> NO HTTP
