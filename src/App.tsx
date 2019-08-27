import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import GlobalStyle from "@src/styles/GlobalStyle";
import { ThemeProvider, theme } from "@src/styles";
import { Routes } from "@src/Routes";
import { RootState } from "./types/store";
import Header from "@src/Components/Header";

export class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header showSidebar={true} />
            <Routes />
          </BrowserRouter>
        </>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
