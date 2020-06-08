import userTypes from "./user.types";

export const logIn = (username) => {
  return {
    type: userTypes.LOG_IN,
    payload: username,
  };
};
export const logOut = () => {
  return {
    type: userTypes.LOG_OUT,
  };
};
