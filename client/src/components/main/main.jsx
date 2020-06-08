import React, { useState, useContext, useEffect } from "react";
import socketContext from "../../state/socket/socket.context";

import "./main.scss";

const Main = () => {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);
  const { socket } = useContext(socketContext);

  const send = () => {
    socket.emit("SEND_MESSAGE", message);
    setMessage("");
  };

  useEffect(() => {
    if (socket) {
      socket.on("ALL_MESSAGES", (messages) => setHistory(messages));
    }
  }, [socket]);
  console.log(history);

  return (
    <div className="main">
      <div className="mainInput">
        {history.map((mes, id) => (
          <p key={id}>
            {`[${mes.date}]`}
            {mes.author.username} : {mes.message}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onKeyDown={(e) => (e.keyCode === 13 ? send() : null)}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message ..."
      />
      <input type="submit" value="SEND" onClick={send} />
    </div>
  );
};
export default Main;
