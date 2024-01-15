import { LogOutUser } from "../../services/LogoutService";
import { Button } from "./logout.styles";

const Logout = () => {
  return <Button onClick={() => LogOutUser()}>Logout</Button>;
};

export default Logout;
