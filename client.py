# Writing a client
import socket
print("Starting a client : Client 1")

HOST = "localhost"
PORT = 3000 #this is a port for the server to connect

client_socket = socket.socket()

client_socket.connect((HOST, PORT)) #client needs to conenct with socket object

#our client is ready. now lets connect to our server

client_socket.sendall(b"Hello from the client 1")

response_from_server = client_socket.recv(2048)

print(response_from_server)