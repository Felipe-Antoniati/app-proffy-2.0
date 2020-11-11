import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.bkglight};
    -webkit-font-smoothing: antialiased;
    font-family: Poppins, Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Poppins, Arial, sans-serif;
  }

`;
