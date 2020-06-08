import React, { useState } from "react";
import socketContext, { SOCKET_INITIAL_STATE } from "./socket.context";

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(SOCKET_INITIAL_STATE);

  const socketProvider = { socket, setSocket };
  return (
    <socketContext.Provider value={socketProvider}>
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
