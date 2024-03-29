import { useRef, useEffect, useState } from "react";
import Message from "../../entities/Messages";
import Input from "../Input/Input";
import {
  ChatContainer,
  MessageWrapper,
  InputWrapper,
  MessageContainer,
  MessageBubble,
  MessageText,
  ImgContiner,
} from "./Chat.styles";
import User from "../../entities/Users";

interface Props {
  messages: Message[];
  currentUser: string | undefined;
  setNewMessage: (message: string) => void;
  selectedUser: User | undefined;
  setFile: (img: File) => void;
  setTyping: (userTyping: boolean) => void;
  Typing: boolean;
}

const Chat = ({
  messages,
  currentUser,
  setNewMessage,
  selectedUser,
  setFile,
  setTyping,
  Typing,
}: Props) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);

  const toggleEnlarged = (index: number) => {
    setEnlargedIndex(enlargedIndex === index ? null : index);
  };

  return (
    <>
      <ChatContainer>
        {messages.map((msg, index) => (
          <MessageWrapper key={index}>
            <MessageContainer $isCurrentUser={msg.sender === currentUser}>
              <MessageBubble
                $bgColor={msg.sender !== currentUser ? "#D9D9D9" : "#dcf8c6"}
                $isCurrentUser={msg.sender === currentUser}
              >
                {msg.file ? (
                  // Display file preview if the message contains a file
                  <ImgContiner
                    $enlarged={enlargedIndex === index}
                    onClick={() => toggleEnlarged(index)}
                  >
                    <img
                      src={`data:${msg.file.contentType};base64,${msg.file.data}`}
                      alt={msg.file.fileName}
                    />
                  </ImgContiner>
                ) : (
                  // Display text message if the message doesn't contain a file
                  <MessageText ref={endOfMessagesRef}>
                    {msg.message}
                  </MessageText>
                )}
              </MessageBubble>
            </MessageContainer>
          </MessageWrapper>
        ))}
      </ChatContainer>
      <InputWrapper>
        <Input
          {...{
            Typing,
            setTyping,
            setNewMessage,
            selectedUser,
            setFile,
          }}
        />
      </InputWrapper>
    </>
  );
};

export default Chat;
