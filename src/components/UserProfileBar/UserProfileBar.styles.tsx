import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #44444a;
`;

interface UserdataProps {
  $isSelected?: boolean;
}
export const UserDataContainer = styled.div<UserdataProps>`
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 320px;
  margin-left: 20px;
  padding-right: 10px;

  ${(props) =>
    props.$isSelected &&
    css`
      border-right: 1px solid gray;
    `}
`;

export const UserName = styled.p`
  color: #ffffff;
`;
