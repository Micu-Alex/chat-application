import User from "../../entities/Users";
import { Container, Title, ListContainer, UserItem, Dot } from "./Users.styles";
import { getCurrentUser } from "../../utils/userUtils";
import Logout from "../Logout/Logout";
import { IoMdMail } from "react-icons/io";

interface Props {
  users: User[];
  setSelectedUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  selectedUser: User | undefined;
  notification: string | undefined;
  setNotification: (notification: string | undefined) => void;
  userTyping: string | undefined;
}

const UsersList = ({
  users,
  setSelectedUser,
  selectedUser,
  notification,
  setNotification,
  userTyping,
}: Props) => {
  const currentUser = getCurrentUser(users);
  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    if (user.userID === notification) {
      setNotification("");
    }
  };

  return (
    <Container>
      <Title>{currentUser?.name}</Title>
      <ListContainer>
        {users
          .filter((user) => !user.self)
          .map((user) => (
            <UserItem
              key={user.userID}
              onClick={() => handleUserClick(user)}
              $isSelected={selectedUser?.userID === user.userID}
            >
              <Dot color={user.status === "online" ? "green" : "grey"} />
              Name: {user.name}
              {user.userID === notification ? (
                <IoMdMail style={{ marginLeft: "auto" }} color="green" />
              ) : (
                <></>
              )}
              {user.userID === userTyping ? (
                <div style={{ marginLeft: "auto" }}>Typing...</div>
              ) : null}
            </UserItem>
          ))}
        <Logout />
      </ListContainer>
    </Container>
  );
};

export default UsersList;
