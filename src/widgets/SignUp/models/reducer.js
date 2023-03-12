import { REGISTER_NEW_USER } from "./types";

const initialState = {
  username: "",
  email: "",
  token: "",
  hasError: {},
  isLoading: true,
};

export const registerNewUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_NEW_USER:
      return {
        ...state,
        username: action.username,
        email: action.email,
        token: action.token,
        hasError: action.hasError,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
