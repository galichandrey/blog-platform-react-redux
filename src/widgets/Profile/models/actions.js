import { UPDATE_USER_PROFILE_INFO } from "./types";

export const updateUserInfoAction = (jsonData, isItLoading = true, token) => {
  return {
    type: UPDATE_USER_PROFILE_INFO,
    username: jsonData?.hasError ? "" : jsonData.user.username,
    email: jsonData?.hasError ? "" : jsonData.user.email,
    token,
    image: jsonData?.user?.image,
    hasError: jsonData.hasError ? jsonData.hasError : false,
    isLoading: isItLoading,
  };
};

export async function updateUserInfoFunc(data, token) {
  try {
    const updateUserInfoUrl = "https://blog.kata.academy/api/user";
    const response = await fetch(updateUserInfoUrl, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });

    if (response.status > 200) {
      throw new Error({ hasError: response.status });
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (e) {
    return { hasError: 422 };
  }
}

export function dispatchupdateUserInfoFunc(data) {
  return async (dispatch, getState) => {
    const { token } = getState().signInReducer;
    const newUserData = await updateUserInfoFunc(data, token);
    dispatch(updateUserInfoAction(newUserData, false, token));
  };
}
