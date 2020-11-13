import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
