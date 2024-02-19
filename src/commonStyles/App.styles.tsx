import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 11fr;
  max-width: 100%;
  height: 100vh;
  overflow-y: hidden;
  font-family: "Roboto", sans-serif;
`;

export const Sidebar = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  overflow-y: auto;
`;

export const MainContent = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 0;
`;

export const WelcomeStatement = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 90px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const SubStatement = styled.div`
  opacity: 0.7;
  display: flex;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const TopBar = styled.div`
  display: flex;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;
