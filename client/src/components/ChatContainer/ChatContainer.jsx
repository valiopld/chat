import React, { useContext, useEffect } from "react";
import io from "socket.io-client";
import { Redirect } from "react-router-dom";

import userContext from "../../state/user/user.context";
import socketContext from "../../state/socket/socket.context";

import Side from "../side/side.jsx";
import Main from "../main/main.jsx";

import "./ChatContainer.scss";
const ChatContainer = () => {
  const { userState } = useContext(userContext);
  const { setSocket } = useContext(socketContext);

  const { isLoggedIn, username } = userState;

  useEffect(() => {
    if (isLoggedIn) {
      const URL = "http://localhost:3002";
      const socket = io(URL);
      setSocket(socket);

      socket.emit("USER", username);
    }
  }, [isLoggedIn, setSocket, username]);

  return isLoggedIn ? (
    <div className="chat-container">
      <Side />
      <Main />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default ChatContainer;
