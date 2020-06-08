import React, { useState, useContext } from "react";

import userContext from "../../state/user/user.context";
import { logIn } from "../../state/user/user.actions";

const Login = ({ history }) => {
  const { userDispatch } = useContext(userContext);
  const [usernameInput, setUsernameInput] = useState("");

  const handleLogIn = () => {
    if (usernameInput.length > 3) {
      userDispatch(logIn(usernameInput));
      history.push("/chat");
    }
  };

  return (
    <div className="login">
      <input
        type="text"
        onKeyDown={(e) => (e.keyCode === 13 ? handleLogIn() : null)}
        value={usernameInput}
        onChange={(e) => {
          setUsernameInput(e.target.value);
        }}
        placeholder="Enter you username ..."
      />
      <input type="submit" value="Enter" onClick={handleLogIn}></input>
    </div>
  );
};

export default Login;
