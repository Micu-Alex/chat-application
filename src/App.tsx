import { useState } from "react";
import SocketClient from "./services/SocketService";
import UsersList from "./components/UsersList/UsersList";

import User from "./entities/Users";
import Message from "./entities/Messages";
import { getCurrentUser, makeUsersOnline } from "./utils/userUtils";

import {
  AppContainer,
  MainContent,
  Sidebar,
  SubStatement,
  TopBar,
  WelcomeStatement,
} from "./commonStyles/App.styles";
import Chat from "./components/chat/Chat";
import UserProfileBar from "./components/UserProfileBar/UserProfileBar";
function App() {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string | undefined>();
  const [file, setFile] = useState<File | undefined>();
  const [notifications, setNotifications] = useState<string[]>([]);
  const [Typing, setTyping] = useState<boolean>(false);
  const [userTyping, setUserTyping] = useState<string | undefined>();

  const currentUserName = getCurrentUser(usersData);

  makeUsersOnline(usersData, onlineUsers);

  const notificationCount =
    notifications.length > 0 ? notifications.length : null;

  return (
    <AppContainer>
      <title>
        ChatApp &nbsp;
        {notificationCount}
      </title>
      <SocketClient
        {...{
          setNotifications,
          setUsersData,
          selectedUser,
          setMessages,
          newMessage,
          setFile,
          file,
          setOnlineUsers,
          setNewMessage,
          notifications,
          Typing,
          setUserTyping,
        }}
      />
      <TopBar>
        <UserProfileBar {...{ usersData, selectedUser }} />
      </TopBar>
      <Sidebar>
        <UsersList
          {...{
            setNotifications,
            notifications,
            users: usersData,
            setSelectedUser,
            selectedUser,
            userTyping,
          }}
        />
      </Sidebar>
      <MainContent>
        {selectedUser ? (
          <Chat
            {...{
              messages,
              currentUser: currentUserName?.name,
              setNewMessage,
              setFile,
              selectedUser,
              setTyping,
              Typing,
            }}
          />
        ) : (
          <WelcomeStatement>
            Welcome to my app.
            <SubStatement>please select a user from the list.</SubStatement>
          </WelcomeStatement>
        )}
      </MainContent>
    </AppContainer>
  );
}

export default App;
