// FileName: globalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;

export default GlobalStyles;
