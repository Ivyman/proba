import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import GlobalStyle from "@src/styles/GlobalStyle";
import { getSidebarStatus } from "@src/store/app/selectors";
import { switchSidebar } from "@src/store/app/actions";
import { ThemeProvider, theme } from "@src/styles";
import { Routes } from "@src/Routes";
import { RootState } from "./types/store";
import Header from "@src/Components/Header";

interface IProps {
  switchSidebarAction: () => void;
  showSidebar: boolean;
}

export class App extends React.Component<IProps> {
  public render() {
    const { switchSidebarAction, showSidebar } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header
              showSidebar={showSidebar}
              onSwitchSidebar={switchSidebarAction}
            />
            <Routes />
          </BrowserRouter>
        </>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  showSidebar: getSidebarStatus(state),
});

const mapDispatchToProps = { switchSidebarAction: switchSidebar };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
