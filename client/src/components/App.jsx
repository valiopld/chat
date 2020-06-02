import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.scss";

import Header from "./header/header";
import Main from "./main/main";

import UserProvider from "../state/user.provider";
const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
