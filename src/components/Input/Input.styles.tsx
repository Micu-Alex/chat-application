import styled from "styled-components";

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  margin: 6px;
  border: 1px solid #d4d4d4;
  border-radius: 25px;
  outline: none;
  font-size: 15px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 25px;
  font-size: 15px;
  margin: 6px;
`;
