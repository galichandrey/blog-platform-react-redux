import { GET_PROFILES_USERNAME } from "./types";

const initialState = {
  username: "",
  image: "",
  following: "",
  isLoading: true,
};

export const profileUsernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES_USERNAME:
      return {
        ...state,
        username: action.username,
        image: action.image,
        following: action.following,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
