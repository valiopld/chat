export const isUsernameValid = (username, setLoginError, allUsers) => {
  if (username.length < 3) {
    setLoginError("Username must be at least 3 characters long.");
    return false;
  }
  const takenUsername = allUsers.find((e) => e.name === username);
  if (takenUsername) {
    setLoginError("This username is busy");
    return false;
  }
  const checkcharacters = /^[0-9a-zA-Z_.-]+$/.test(username);
  if (!checkcharacters) {
    setLoginError(
      "The username should be composed only of number, letter and _, ., - characters"
    );
    return false;
  }

  setLoginError("");
  return true;
};
