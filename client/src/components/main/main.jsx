import React from "react";
import { Switch, Route } from "react-router-dom";
import "./main.scss";

import LoginPage from "../pages/login/loginPage";
import ChatPage from "../pages/chat/chatPage";
const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </div>
  );
};

export default Main;
