import React, { useState } from "react";
import userContext from "./user.context";

const UserProvider = ({ children }) => {
  const [getNickname, setNickname] = useState("");

  const userProviderValue = { getNickname, setNickname };
  return (
    <userContext.Provider value={userProviderValue}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
