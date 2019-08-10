import React from "react";
import { connect } from "react-redux";

import { populateStudios } from "@src/store/studio/actions";
import { ThemeProvider, theme } from "@src/styles";
import GlobalStyle from "@src/styles/GlobalStyle";
import Grid from "@src/Components/Grid";

interface IProps {
  populateStudios: any;
}

const { Column, Row } = Grid;

export class App extends React.Component<IProps> {
  public componentDidMount() {
    this.props.populateStudios();
  }

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Row>
            <Column lg={12}>1</Column>
            <Column lg={1}>1</Column>
          </Row>
        </>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = { populateStudios };

export default connect(
  null,
  mapDispatchToProps,
)(App);
