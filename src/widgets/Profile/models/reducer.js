import { UPDATE_USER_PROFILE_INFO } from "./types";

const initialState = {
  username: "",
  email: "",
  token: "",
  image: "",
  hasError: {},
  isLoading: true,
};

export const updateUserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};
