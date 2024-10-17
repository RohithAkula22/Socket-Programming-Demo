import socket
#python supports multi-threading
import threading

def connect_a_client(conn, addr):
  print("New client has been connected")
  data = conn.recv(2048)
  print("Data received from the client is:", data)
  conn.sendall(b"Server has received your data thanks")

HOST = "localhost"

PORT = 3000

#create a new socket object
server_socket = socket.socket()

#bind the socket object to HOST and PORT
server_socket.bind((HOST, PORT))

#start listening for a new connection - client will create a new socket connection
server_socket.listen()

print("Server is listening on ", HOST, PORT)

#it accepts multiple requests 
while True:
  #wait for new connection acceptance
  conn, addr = server_socket.accept() #it is accepting a new connection
  t = threading.Thread(target=connect_a_client, args=(conn, addr)) #it is preparing the thread
  t.start() #it starts running thr thread