import Cookies from "js-cookie";
export const registerUser = async (
  email: string,
  name: string,
  password: string
) => {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      const token = await response.text();
      Cookies.set("token", token, { expires: 7, secure: true });
      window.location.href = "/";
    } else {
      const errorData = await response.text();
      alert(errorData);
    }
  } catch (error) {
    console.error("Error occurred during registering:", error);
    alert("An error occurred during registering. Please try again.");
  }
};
