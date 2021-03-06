import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.palette.background.default};
    color: ${(props) => props.theme.palette.text.primary};
    font-family: ${(props) => props.theme.typography.fontFamily};
  }

  html {
    font-size: ${(props) => props.theme.typography.htmlFontSize}px;
  }

  #root, html, body {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;
