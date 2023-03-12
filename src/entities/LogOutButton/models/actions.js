// import { v4 as uuid } from "uuid";

import { setUserCredentials } from "../../../shared/lib/localStorage";
// import { setUserProfileInfo, setUserCredentials } from "../../../shared/lib/localStorage";

import { LOG_OUT } from "./types";

export const logOutAction = (jsonData, isItLoading = true) => {
  return {
    type: LOG_OUT,
    username: "",
    email: "",
    token: "",
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

    if (response.status === 500) {
      throw new Error(`Response status: ${response.status}`);
    }

    if (!response.ok) {
      throw new Error(`Can't fetch URL ${signInUserUrl} Response status: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (e) {
    throw new Error(`${e}`);
  }
}

export function dispatchLoggedInUserDataFunc(data) {
  return async (dispatch) => {
    // const { username } = getState().signInReducer;
    // console.log("username >>>", username);
    // getUserCredentials
    const loggedInData = await signInFunc(data);
    console.log("jsonData", loggedInData);
    setUserCredentials(loggedInData);
    dispatch(logOutAction(loggedInData, false));
  };
}
