const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const router = require("./routes/router");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT || 3002;

const rootSocket = require("./sockets/root.socket");

app.use(router);
rootSocket(io);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
