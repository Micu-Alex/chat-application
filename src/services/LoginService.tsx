import Cookies from "js-cookie";
import { backend_URL } from "../utils/constants";

export const loginUser = async (
  email: string,
  password: string,
  navigate: Function
) => {
  try {
    const response = await fetch(`${backend_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const token = await response.text();
      Cookies.set("token", token, { expires: 7, secure: true });
      navigate("/");
    } else {
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  } catch (error) {
    console.error("Error occurred during login:", error);
    alert("An error occurred during login. Please try again.");
  }
};
