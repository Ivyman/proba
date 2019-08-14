import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { ThemeProvider, theme } from "@src/styles";
import GlobalStyle from "@src/styles/GlobalStyle";

import { AboutScreen } from "@src/Screens/About";
import { ContactScreen } from "@src/Screens/Contact";
import { CatalogScreen } from "@src/Screens/Catalog";

export class App extends React.Component {
  public renderRoute = () => (
    <Switch>
      <Route
        exact
        path={"/"}
        component={(props: any) => <CatalogScreen {...props} />}
      />
      <Route
        exact
        path={"/contact"}
        component={(props: any) => <ContactScreen {...props} />}
      />
      <Route
        exact
        path={"/about"}
        component={(props: any) => <AboutScreen {...props} />}
      />
    </Switch>
  );

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              <Link to="/">Catalog</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            {this.renderRoute()}
          </Router>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
