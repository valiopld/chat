import { createContext } from "react";

export const SOCKET_INITIAL_STATE = null;

const socketContext = createContext(SOCKET_INITIAL_STATE);

export default socketContext;
