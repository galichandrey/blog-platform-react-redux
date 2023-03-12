export function transformRegistrationData(object) {
  const { username, password, email } = object;

  return { user: { username: username, password: password, email: email.toLowerCase() } };
}

export function transformLoginData(object) {
  const { email, password } = object;

  return { user: { email: email.toLowerCase(), password: password } };
}

export function transformUpdateData(object) {
  const { username, password, email, image } = object;

  return { user: { username: username, password: password, email: email.toLowerCase(), image: image } };
}
