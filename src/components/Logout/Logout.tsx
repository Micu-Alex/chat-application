import { Button } from "./logout.styles";
import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = () => {
  return (
    <Button
      onClick={() => {
        redirect("/login");
        Cookies.remove("token");
      }}
    >
      Logout
    </Button>
  );
};

export default Logout;
