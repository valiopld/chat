import React, { useReducer } from "react";
import userContext from "./user.context";

import { userReducer, USER_INITIAL_STATE } from "./user.reducer";

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, USER_INITIAL_STATE);

  const userProvider = { userState, userDispatch };
  return (
    <userContext.Provider value={userProvider}>{children}</userContext.Provider>
  );
};

export default UserProvider;
