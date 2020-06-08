import React, { useContext, useEffect, useState } from "react";

import userContext from "../../state/user/user.context";
import socketContext from "../../state/socket/socket.context";
import { logOut } from "../../state/user/user.actions";

import "./side.scss";

const Side = () => {
  const { userState, userDispatch } = useContext(userContext);
  const { socket } = useContext(socketContext);
  const { username } = userState;
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.on("USERS_LIST", (users) => setUsersList(users));
    }
  }, [socket]);

  const handleLogOut = () => userDispatch(logOut());

  return (
    <div className="side">
      <div className="user-info">
        <span>{username}</span>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
      <div className="users-list">
        {usersList.map((user) => (
          <p key={user.id}>{user.username}</p>
        ))}
      </div>
    </div>
  );
};
export default Side;
