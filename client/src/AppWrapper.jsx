import React from "react";
import { BrowserRouter } from "react-router-dom";
import StateProvider from "./state/stateProvider";

import App from "./components/App";
const AppWrapper = () => (
  <StateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>
);
export default AppWrapper;
