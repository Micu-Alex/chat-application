import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import User from "../entities/Users";
import Message from "../entities/Messages";
import { backend_URL } from "../utils/constants";
import { Navigate } from "react-router-dom";

interface Props {
  setUsersData: (users: User[]) => void;
  setOnlineUsers: (users: User[]) => void;
  selectedUser: User | undefined;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  newMessage: string | undefined;
  setFile: (img: File | undefined) => void;
  file: File | undefined;
  setNewMessage: (message: undefined) => void;
}

const SocketClient = ({
  setUsersData,
  setOnlineUsers,
  selectedUser,
  setMessages,
  newMessage,
  setFile,
  file,
  setNewMessage,
}: Props) => {
  const socketRef = useRef<any>(null);

  //deals with initial setup of socket

  const token = Cookies.get("token");
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  useEffect(() => {
    //io set up
    const socket = io(backend_URL, {
      auth: {
        token: token,
      },
      transports: ["websocket"],
    });
    socketRef.current = socket;
    // Clean up
    return () => {
      socket.disconnect();
    };
  }, []);

  //deals wiht online users
  useEffect(() => {
    socketRef.current.on("userOnline", (onlineUsers: User[]) => {
      setOnlineUsers(onlineUsers);
    });
    return () => {
      // Clean up the 'users online' event listener
      if (socketRef.current) {
        socketRef.current.off("userOnline");
      }
    };
  }, [setOnlineUsers]);

  //deals with the "users" event
  useEffect(() => {
    if (socketRef.current) {
      // Listen for 'all users' event from the server
      socketRef.current.on("AllUsers", (users: User[], senderID: any) => {
        const updatedUsers = users.map((user) => ({
          ...user,
          self: user.userID === senderID,
          status: "offline",
        }));

        updatedUsers.sort((a, b) => {
          if (a.self !== b.self) {
            return a.self ? -1 : 1;
          }
          return 0;
        });

        setUsersData(updatedUsers);
      });
    }

    return () => {
      // Clean up the 'users' event listener
      if (socketRef.current) {
        socketRef.current.off("AllUsers");
      }
    };
  }, [setUsersData]);

  // deals with selected user event
  useEffect(() => {
    if (selectedUser) {
      setMessages([]);
      socketRef.current.emit("selectedUser", selectedUser.userID);
    }
  }, [selectedUser, setMessages]);

  //deals with old messages
  useEffect(() => {
    socketRef.current.on("chat message", (data: any) => {
      const { sender, message, file } = data;
      if (message) {
        // Handle text message
        const newMessage: Message = {
          sender: sender.username,
          message: message,
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } else if (file) {
        // Handle file message
        const newFileMessage: Message = {
          sender: sender.username,
          file: {
            data: file.data,
            contentType: file.contentType,
            fileName: file.fileName,
          },
        };
        setMessages((prevMessages) => [...prevMessages, newFileMessage]);
      }
    });

    return () => {
      // Clean up the 'chat message' event listener
      if (socketRef.current) {
        socketRef.current.off("chat message");
      }
    };
  }, [setMessages]);

  //deals with new messages
  useEffect(() => {
    if (newMessage !== undefined) {
      if (file) {
        socketRef.current.emit("chat message", {
          type: "file",
          body: file,
          mimeType: file.type,
          fileName: file.name,
          toUserID: selectedUser?.userID,
        });
        setFile(undefined);
      } else if (newMessage.trim() !== "") {
        // It's a text message
        socketRef.current.emit("chat message", {
          msg: newMessage,
          toUserID: selectedUser?.userID,
        });
      }
      setNewMessage(undefined);
    }
  }, [newMessage]);

  return null;
};

export default SocketClient;
