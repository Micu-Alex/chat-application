import { useEffect, useRef, useState } from "react";
import { FileInput, FileInputLabel, InputField } from "./Input.styles";
import User from "../../entities/Users";
import { FaPaperclip } from "react-icons/fa";

interface Props {
  setNewMessage: (message: string) => void;
  selectedUser: User | undefined;
  setFile: (img: File) => void;
  setTyping: (userTyping: boolean) => void;
  Typing: boolean;
}

const Input = ({
  setNewMessage,
  selectedUser,
  setFile,
  setTyping,
  Typing,
}: Props) => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedUser]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setNewMessage(inputValue.trim());
      setInputValue("");
      setTyping(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (newValue !== "" && !Typing) {
      setTyping(true);
    } else if (newValue === "") {
      setTyping(false);
    }
  };

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setNewMessage(files[0].name);
      setFile(files[0]);
    }
  };
  return (
    <>
      <FileInputLabel htmlFor="fileInput">
        <FaPaperclip size={25} color="#5FFF78" />
      </FileInputLabel>
      <FileInput type="file" id="fileInput" onChange={selectFile} />
      <InputField
        ref={inputRef}
        placeholder="Enter your message..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default Input;
