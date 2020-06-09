const users = [];

const messages = [];

class Message {
  constructor(author, message) {
    this.author = author;
    this.message = message;
    this.date = new Date();
  }
}

module.exports = (io) => {
  io.on("connection", (socket) => {
    const currentUser = {
      username: "",
      id: "",
    };
    const admin = {
      username: "Admin",
      id: 0,
    };
    socket.on("USER", (username) => {
      currentUser.username = username;
      currentUser.id = socket.id;
      users.push({ ...currentUser });
      console.log("CONNECT", currentUser);
      messages.push(new Message(admin, `${username} connected ... `));
      io.sockets.emit("USERS_LIST", users);
      io.sockets.emit("ALL_MESSAGES", messages);
    });

    socket.on("SEND_MESSAGE", (message) => {
      const newMessage = new Message(currentUser, message);
      messages.push(newMessage);

      io.sockets.emit("ALL_MESSAGES", messages);
    });

    socket.on("disconnect", () => {
      console.log("disconnect", currentUser);

      const index = users.indexOf(users.find((a) => a.id === socket.id));
      users.splice(index, 1);

      currentUser.username = "";
      currentUser.id = "";

      io.sockets.emit("USERS_LIST", users);
    });
  });
};
