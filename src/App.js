// FileName: App.js

import styled from "styled-components";
import Tracker from "./components/Tracker";
import GlobalStyles from "./globalStyles";
import { ThemeProvider, useTheme, lightTheme } from "./ThemeContext"; // Import lightTheme and darkTheme
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

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
  display: flex;
  align-items: center;
  gap: 5px;
`;

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Main>
      <GlobalStyles />
      <Tracker />
      <ToggleButton onClick={toggleTheme}>
        {theme === lightTheme ? <MdDarkMode /> : <MdOutlineLightMode />}
        {theme === lightTheme ? "Dark Mode" : "Light Mode"}
      </ToggleButton>
    </Main>
  );
};

const WrappedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default WrappedApp;
