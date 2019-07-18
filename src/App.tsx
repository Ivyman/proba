import React from "react";

import styled, { ThemeProvider, theme } from "./styles";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header>
          Edit <code>src/App.tsx</code> and save to reload.
        </Header>
      </>
    </ThemeProvider>
  );
};

export const Header = styled.header`
  border: 2px solid gray;
`;

export default App;
