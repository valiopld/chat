import userTypes from "./user.types";
export const USER_INITIAL_STATE = {
  username: null,
  isLoggedIn: false,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case userTypes.LOG_IN:
      return {
        ...state,
        username: action.payload,
        isLoggedIn: true,
      };
    case userTypes.LOG_OUT:
      return {
        ...state,
        username: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
