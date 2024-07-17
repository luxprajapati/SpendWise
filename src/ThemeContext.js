// FileName: ThemeContext.js

import React, { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

const lightTheme = {
  background: "#fff",
  color: "#000",
  borderColor: "#000",
  buttonBackground: "rgb(68, 230, 16)",
  buttonTextColor: "#fff",
};

const darkTheme = {
  background: "#333",
  color: "#fff",
  borderColor: "#444",
  buttonBackground: "rgb(68, 230, 16)",
  buttonTextColor: "#fff",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
