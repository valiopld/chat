import React from "react";
import UserProvider from "./user/user.provider";
import SocketProvider from "./socket/socket.provider";
const StateProvider = ({ children }) => (
  <UserProvider>
    <SocketProvider>{children}</SocketProvider>
  </UserProvider>
);

export default StateProvider;
