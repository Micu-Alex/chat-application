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
  WelcomeStatement,
} from "./App.styles";
import Chat from "./components/chat/Chat";
function App() {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMeassage, setNewMessage] = useState<string | undefined>();
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
        setNotifications={setNotifications}
        setUsersData={setUsersData}
        selectedUser={selectedUser}
        setMessages={setMessages}
        newMessage={newMeassage}
        setFile={setFile}
        file={file}
        setOnlineUsers={setOnlineUsers}
        setNewMessage={setNewMessage}
        notifications={notifications}
        Typing={Typing}
        setUserTyping={setUserTyping}
      />
      <Sidebar>
        <UsersList
          setNotifications={setNotifications}
          notifications={notifications}
          users={usersData}
          setSelectedUser={setSelectedUser}
          selectedUser={selectedUser}
          userTyping={userTyping}
        />
      </Sidebar>
      <MainContent>
        {selectedUser ? (
          <Chat
            messages={messages}
            currentUser={currentUserName?.name}
            setNewMessage={setNewMessage}
            setFile={setFile}
            selectedUser={selectedUser}
            setTyping={setTyping}
            Typing={Typing}
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
