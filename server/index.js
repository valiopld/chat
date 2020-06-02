const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const router = require("./routes/router");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT || 3001;

app.use(router);

io.on("connection", (socket) => {
  console.log("User Connected ...");
  socket.on("disconnect", () => console.log("User disconnect ..."));
  socket.on("join", ({ getNickname }) => {
    console.log(getNickname);
  });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
