import { GET_PROFILES_USERNAME } from "./types";

export const getProfilesUsernameAction = (jsonData, isItLoading = true) => {
  return {
    type: GET_PROFILES_USERNAME,
    username: jsonData.profile.username,
    image: jsonData.profile.image,
    following: jsonData.profile.following,
    isLoading: isItLoading,
  };
};

export async function getProfilesUsernameFunc(profile) {
  try {
    const profileUsernameUrl = `https://blog.kata.academy/api/profiles/${profile}`;
    const response = await fetch(profileUsernameUrl);

    if (response.status === 400) {
      throw new Error(`Response status: ${response.status}`);
    }

    if (response.status === 500) {
      throw new Error(`Response status: ${response.status}`);
    }

    if (!response.ok) {
      throw new Error(`Can't fetch URL ${profileUsernameUrl} Response status: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
}

export function dispatchProfileUsernameFunc() {
  return async (dispatch, getState) => {
    const { username } = getState().signInReducer;
    if (username) {
      const newProfileData = await getProfilesUsernameFunc(username);
      dispatch(getProfilesUsernameAction(newProfileData, false));
      return;
    }
    return;
  };
}
