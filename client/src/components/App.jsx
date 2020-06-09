import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginContainer from "./LoginContainer/LoginContainer";
import ChatContainer from "./ChatContainer/ChatContainer";

import "./App.scss";

const App = () => {
  const isLoggedIn = false;
  return (
    <div className="app">
      <Switch>
        <Route path="/chat" component={ChatContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route exact path="/">
          <Redirect to={isLoggedIn ? "/chat" : "/login"} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
