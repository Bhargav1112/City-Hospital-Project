export const isLoggedIn = () => {
  const user = localStorage.getItem("isLoggedin");

  if (user === "1") {
    return true;
  } else {
    return false;
  }
};
