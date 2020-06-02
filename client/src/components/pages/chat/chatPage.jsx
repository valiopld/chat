import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import io from "socket.io-client";
import "./chatPage.scss";

import userContext from "../../../state/user.context";

const ChatPage = () => {
  const { getNickname } = useContext(userContext);
  useEffect(() => {
    const ENDPOINT = "http://localhost:3001";
    const socket = io(ENDPOINT);
    console.log(socket);

    socket.emit("join", { getNickname });
  }, [getNickname]);
  if (!getNickname) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="chat-page">
      <h1>Hello {getNickname}</h1>
      <div className="chat-input">
        <input type="text" />
        <button onClick={() => {}}>SEND</button>
      </div>
    </div>
  );
};

export default ChatPage;
