import React, { useState, useContext } from "react";

import "./loginPage.scss";

import userContext from "../../../state/user.context";

const LoginPage = ({ history }) => {
  const [getTypedNickname, setTypedNickname] = useState("");

  const { setNickname } = useContext(userContext);

  const login = () => {
    if (getTypedNickname) {
      setNickname(getTypedNickname);
      console.log(`Nickname is setted: ${getTypedNickname}`);
      history.push("/chat");
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div>
        <span>nickname: </span>
        <input
          type="text"
          onChange={(e) => setTypedNickname(e.target.value)}
          placeholder="ex.: Pitoneca"
        />
      </div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginPage;
