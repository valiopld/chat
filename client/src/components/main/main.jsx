import React, { useState, useContext, useEffect, useRef } from "react";
import socketContext from "../../state/socket/socket.context";

import "./main.scss";

const Main = () => {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);
  const { socket } = useContext(socketContext);
  const endMessage = useRef(null);
  const send = () => {
    socket.emit("SEND_MESSAGE", message);
    setMessage("");
  };

  useEffect(() => {
    if (socket) {
      socket.on("ALL_MESSAGES", (messages) => setHistory(messages));
    }
  }, [socket]);

  useEffect(() => {
    endMessage.current.scrollIntoView({ behavior: "smooth" });
  }, [history, endMessage]);

  return (
    <div className="main">
      <div className="messages-container">
        <div className="messages-sub-container">
          {history.map((mes, id) => (
            <span className="message" key={id}>
              {`[${mes.date}]`}
              {mes.author.username} : {mes.message}
            </span>
          ))}
          <span className="scroll-bottom" ref={endMessage} />
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onKeyDown={(e) => (e.keyCode === 13 ? send() : null)}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message ..."
        />
        <input type="submit" value="SEND" onClick={send} />
      </div>
    </div>
  );
};
export default Main;
