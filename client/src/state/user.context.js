import { createContext } from "react";

const USER_INITIAL_STATE = {
  user: null,
};

const userContext = createContext(USER_INITIAL_STATE);

export default userContext;
