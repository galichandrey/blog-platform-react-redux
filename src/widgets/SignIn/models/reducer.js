import { SIGN_IN, UPDATE_USER_PROFILE_INFO, LOG_OUT } from "./types";

const initialState = {
  username: "",
  email: "",
  token: "",
  hasError: {},
  isLoading: true,
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        username: action.username,
        email: action.email,
        token: action.token,
        hasError: action.hasError,
        isLoggedIn: action.isLoggedIn,
        isLoading: action.isLoading,
      };

    case UPDATE_USER_PROFILE_INFO:
      return {
        ...state,
        username: action.username,
        email: action.email,
        token: action.token,
        image: action.image,
        hasError: action.hasError,
        isLoading: action.isLoading,
      };

    case LOG_OUT:
      return {
        ...state,
        username: action.username,
        email: action.email,
        token: action.token,
        hasError: action.hasError,
        isLoggedIn: action.isLoggedIn,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
