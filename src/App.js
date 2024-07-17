// FileName: App.js

import styled from "styled-components";
import Tracker from "./components/Tracker";
import GlobalStyles from "./globalStyles";
import { ThemeProvider, useTheme } from "./ThemeContext";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  height: 100vh;
  width: 100%;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonTextColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;

const App = () => {
  const { toggleTheme } = useTheme();

  return (
    <Main>
      <GlobalStyles />
      <Tracker />
      <ToggleButton onClick={toggleTheme}>Toggle Dark Mode</ToggleButton>
    </Main>
  );
};

const WrappedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default WrappedApp;
