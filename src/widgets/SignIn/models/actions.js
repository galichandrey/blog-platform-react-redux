import { setUserCredentials, getUserCredentials, clearUserCredentials } from "../../../shared/lib/localStorage";

import { SIGN_IN, CLEAR_HAS_ERROR, LOG_OUT } from "./types";

export const signInAction = (jsonData, isItLoading = true) => {
  return {
    type: SIGN_IN,
    username: jsonData.hasError ? "" : jsonData.user.username,
    email: jsonData.hasError ? "" : jsonData.user.email,
    token: jsonData.hasError ? "" : jsonData.user.token,
    hasError: jsonData.hasError ? jsonData.hasError : false,
    isLoggedIn: jsonData?.user?.token ? true : false,
    isLoading: isItLoading,
  };
};

export const logOutAction = (isItLoading = true) => {
  return {
    type: LOG_OUT,
    username: "",
    email: "",
    token: "",
    hasError: false,
    isLoggedIn: false,
    isLoading: isItLoading,
  };
};

export async function signInFunc(signInData) {
  try {
    const signInUserUrl = "https://blog.kata.academy/api/users/login";
    const response = await fetch(signInUserUrl, {
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
      body: JSON.stringify(signInData),
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

export function checkLocalStorageCredentials() {
  return async (dispatch) => {
    const credentialsFromLocalStorage = getUserCredentials();
    if (credentialsFromLocalStorage) {
      dispatch(signInAction(credentialsFromLocalStorage, false));
    }
  };
}

export function dispatchLoggedInUserDataFunc(data) {
  return async (dispatch) => {
    const loggedInData = await signInFunc(data);

    if (!loggedInData?.hasError) {
      setUserCredentials(loggedInData);
    }
    dispatch(signInAction(loggedInData, false));
    return;
  };
}

export function logOut() {
  return async (dispatch) => {
    clearUserCredentials();
    dispatch(logOutAction(false));
  };
}

export const clearHasErrorAction = () => {
  return {
    type: CLEAR_HAS_ERROR,
    hasError: false,
  };
};

export function clearHasErrorFunc() {
  return async (dispatch) => {
    dispatch(clearHasErrorAction());
  };
}
