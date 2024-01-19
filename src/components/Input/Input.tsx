import { useEffect, useRef, useState } from "react";
import { InputField } from "./Input.styles";
import User from "../../entities/Users";

interface Props {
  setNewMessage: (message: string) => void;
  selectedUser: User | undefined;
  setFile: (img: File) => void;
}

const Input = ({ setNewMessage, selectedUser, setFile }: Props) => {
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
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
      <InputField
        ref={inputRef}
        placeholder="Enter your message..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <input type="file" onChange={selectFile} />
    </>
  );
};

export default Input;
