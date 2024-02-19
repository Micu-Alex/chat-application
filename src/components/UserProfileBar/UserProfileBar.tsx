import User from "../../entities/Users";
import { getCurrentUser } from "../../utils/userUtils";
import Logout from "../Logout/Logout";
import {
  Container,
  UserDataContainer,
  UserName,
} from "./UserProfileBar.styles";

interface Props {
  usersData: User[];
  selectedUser: User | undefined;
}

const UserProfileBar = ({ usersData, selectedUser }: Props) => {
  const currentUser = getCurrentUser(usersData);

  return (
    <Container>
      <UserDataContainer $isSelected={!!selectedUser?.userID}>
        <UserName>{currentUser?.name}</UserName>
        <Logout />
      </UserDataContainer>
      <UserDataContainer>
        <UserName>{selectedUser?.name}</UserName>
      </UserDataContainer>
    </Container>
  );
};

export default UserProfileBar;
