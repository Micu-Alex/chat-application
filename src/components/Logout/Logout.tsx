import { Button } from "./logout.styles";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        Cookies.remove("token");
        return navigate("/login");
      }}
    >
      Logout
    </Button>
  );
};

export default Logout;
