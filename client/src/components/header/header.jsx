import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

import userContext from "../../state/user.context";

const Header = () => {
  return (
    <div className="header">
      {React.useContext(userContext).getNickname}
      <ul className="header-nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/chat">
          <li>Chat</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
