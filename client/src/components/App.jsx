import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./login/login";
import Chat from "./chat/chat";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
