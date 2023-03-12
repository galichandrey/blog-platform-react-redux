export const setUserProfileInfo = (profile) => {
  const { username, image, following } = profile.user;
  localStorage.setItem("username", JSON.stringify(username));
  localStorage.setItem("image", JSON.stringify(image));
  localStorage.setItem("following", JSON.stringify(following));
};

export const setUserCredentials = (profile) => {
  const { username, email, token } = profile.user;
  localStorage.setItem("username", JSON.stringify(username));
  localStorage.setItem("email", JSON.stringify(email));
  localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("isLoggedIn", JSON.stringify(true));

  return username;
};

export const clearUserCredentials = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
};

export const getUserCredentials = () => {
  try {
    const username = JSON.parse(localStorage.getItem("username"));
    const email = JSON.parse(localStorage.getItem("email"));
    const token = JSON.parse(localStorage.getItem("token"));
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (username && email && token && isLoggedIn) {
      return { user: { username: username, email: email, token: token, isLoggedIn: true } };
    }
    return false;
  } catch {
    return false;
  }
};

export const getUserProfileInfo = () => {
  try {
    const username = localStorage.getItem("username");
    const image = localStorage.getItem("image");
    const following = localStorage.getItem("following");

    return { username, image, following };
  } catch {
    return {};
  }
};
