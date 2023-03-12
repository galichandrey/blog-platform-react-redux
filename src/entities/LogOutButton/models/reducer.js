import { LOG_OUT } from "./types";

const initialState = {
  username: "",
  email: "",
  token: "",
  isLoading: true,
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT:
      return {
        ...state,
        username: action.username,
        email: action.email,
        token: action.token,
        isLoggedIn: action.isLoggedIn,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
