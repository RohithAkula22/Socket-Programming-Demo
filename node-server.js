const net = require("net");

// * Creating a Socket Object
const server = net.createServer((socket) => {
  // * Server receives data from the client
  socket.on("data", (clientData) => {
    console.log("Data received from the client : ", clientData.toString());

    // Sending data to the client
    socket.write("Received on server! THANK YOU!");
  });
});

// * Binding it to the PORT, in python binding has been happening separetly and listening has been happening separately - Here binding and listening both happen on the same function
server.listen(8080, () => {
  // You do not need to mention IP address in nodejs - nodejs net module is smart enough whatever your machine you are running with and if you want to connect to local server you can mention as localhost

  console.log("New Server upon Port 8080");
});
