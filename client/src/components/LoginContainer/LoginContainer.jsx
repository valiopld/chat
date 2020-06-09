import React, { useState, useContext } from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { isUsernameValid } from "./login.utils";

import userContext from "../../state/user/user.context";
import { logIn } from "../../state/user/user.actions";

import "./LoginContainer.scss";
const LoginContainer = ({ history }) => {
  const { userDispatch } = useContext(userContext);
  const [usernameInput, setUsernameInput] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogIn = () => {
    if (isUsernameValid(usernameInput, setLoginError, [])) {
      userDispatch(logIn(usernameInput));
      history.push("/chat");
    }
  };

  const handleChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleKeyEnter = (e) => (e.keyCode === 13 ? handleLogIn() : null);
  console.log(loginError);

  return (
    <div className="login-container">
      <Paper elevation={5} className="login-paper">
        <h1 className="login-title">Login</h1>
        <TextField
          label="username: "
          onKeyDown={handleKeyEnter}
          value={usernameInput}
          onChange={handleChange}
          className="username-input"
          error={loginError}
        />
        <p color="primary" className="login-error">
          {loginError}
        </p>

        <Button
          className="login-button"
          variant="contained"
          color="primary"
          value="Enter"
          onClick={handleLogIn}
        >
          JOIN
        </Button>
      </Paper>
    </div>
  );
};

export default LoginContainer;
