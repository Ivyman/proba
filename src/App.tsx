import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import GlobalStyle from "@src/styles/GlobalStyle";
import { ThemeProvider, theme } from "@src/styles";
import { Routes } from "@src/Routes";
import { paths } from "@src/Config/Paths";

export class App extends React.Component {
  public renderNav = () => (
    <nav>
      {paths.map(({ path, label }) => (
        <Link key={path} to={path}>
          {label}
        </Link>
      ))}
    </nav>
  );

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            {this.renderNav()}
            <Routes />
          </BrowserRouter>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
