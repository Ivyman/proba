import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "@src/styles/GlobalStyle";
import { ThemeProvider, theme } from "@src/styles";
import { Routes } from "@src/Routes";
import Header from "@src/Components/Header";

export class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes />
          </BrowserRouter>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
