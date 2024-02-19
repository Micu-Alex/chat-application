import User from "../../entities/Users";
import {
  Container,
  ListContainer,
  UserItem,
  Dot,
  NotificationsContainer,
  NotificationCount,
} from "./Users.styles";
import { IoMdMail } from "react-icons/io";

interface Props {
  users: User[];
  setSelectedUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  selectedUser: User | undefined;
  notifications: string[];
  setNotifications: React.Dispatch<React.SetStateAction<string[]>>;
  userTyping: string | undefined;
}

const UsersList = ({
  users,
  setSelectedUser,
  selectedUser,
  notifications,
  setNotifications,
  userTyping,
}: Props) => {
  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    if (notifications.includes(user.userID)) {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((noti) => noti !== user.userID)
      );
    }
  };

  return (
    <Container>
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
              {notifications.includes(user.userID) ? (
                <NotificationsContainer>
                  <NotificationCount>
                    {
                      notifications.filter((noti) => noti === user.userID)
                        .length
                    }
                  </NotificationCount>
                  <IoMdMail color="green" />
                </NotificationsContainer>
              ) : (
                <></>
              )}
              {user.userID === userTyping ? (
                <div style={{ marginLeft: "auto" }}>Typing...</div>
              ) : null}
            </UserItem>
          ))}
      </ListContainer>
    </Container>
  );
};

export default UsersList;
