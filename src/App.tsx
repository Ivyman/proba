import React from "react";
import { connect } from "react-redux";

import { populateStudios } from "@src/store/studio/actions";
import { ThemeProvider, theme } from "@src/styles";
import GlobalStyle from "@src/styles/GlobalStyle";
import Layout from "@src/Components/layout";

interface IProps {
  populateStudios: any;
}

const { Column, Row, Container } = Layout;

export class App extends React.Component<IProps> {
  public componentDidMount() {
    this.props.populateStudios();
  }

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Container>
            <Row>
              <Column lg={9}>test 9</Column>
              <Column lg={3}>test 3</Column>
            </Row>
          </Container>
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
