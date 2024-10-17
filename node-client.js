const net = require("net");

// Here you need to create a connection - no need to bind to a port - createConnection - expects network options object

const client = net.createConnection({ port: 8080 }, () => {
  console.log("Client connected");

  // * Sending data to the server using write method
  client.write("Hello from node client");
});

// * For client also we should set up an event - when client receives data

client.on("data", (serverData) => {
  console.log("Data received from  Sever :", serverData.toString());
});
