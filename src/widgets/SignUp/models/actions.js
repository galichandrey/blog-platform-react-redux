import { REGISTER_NEW_USER } from "./types";

export const registerNewUserAction = (jsonData, isItLoading = true) => {
  return {
    type: REGISTER_NEW_USER,
    username: jsonData.hasError ? "" : jsonData.user.username,
    email: jsonData.hasError ? "" : jsonData.user.email,
    token: jsonData.hasError ? "" : jsonData.user.token,
    hasError: jsonData.hasError ? jsonData.hasError : false,
    isLoading: isItLoading,
  };
};

export async function registerNewUserFunc(registrationData) {
  try {
    const registerNewUserUrl = "https://blog.kata.academy/api/users";
    const response = await fetch(registerNewUserUrl, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(registrationData),
    });

    if (response.status > 200) {
      throw new Error({ hasError: response.status });
    }

    if (!response.ok) {
      throw new Error({ hasError: response.status });
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (e) {
    return { hasError: 422 };
  }
}

export function dispatchNewUserDataFunc(registerData) {
  return async (dispatch) => {
    const newUserData = await registerNewUserFunc(registerData);
    dispatch(registerNewUserAction(newUserData, false));
  };
}
