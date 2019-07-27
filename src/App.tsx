import React from "react";
import { connect } from "react-redux";

import { populateStudios } from "@src/store/studio/actions";
import styled, { ThemeProvider, theme } from "@src/styles";
import GlobalStyle from "@src/styles/GlobalStyle";

interface IProps {
  populateStudios: any;
}

export class App extends React.Component<IProps> {
  public componentDidMount() {
    this.props.populateStudios();
  }

  public render() {
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
  }
}

export const Header = styled.header`
  border: 2px solid gray;
`;

const mapDispatchToProps = { populateStudios };

export default connect(
  null,
  mapDispatchToProps,
)(App);
