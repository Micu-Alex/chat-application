import Cookies from "js-cookie";

export const LogOutUser = () => {
  window.location.href = "/login";
  Cookies.remove("token");
};
