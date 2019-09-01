import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Paths from "./Paths";
import Layout from "@src/components/Layout";

type TRoutesComponent = React.FunctionComponent;

const { Container } = Layout;

export const Routes: TRoutesComponent = () => {
  const renderRoutesList = () =>
    Paths.app.paths.map(({ path, exact, component: Component }) => (
      <Route
        key={path}
        exact={exact}
        path={path}
        component={(props: any) => <Component {...props} />}
      />
    ));

  return (
    <Suspense fallback={<>Loading...</>}>
      <Container as="main">
        <Switch>{renderRoutesList()}</Switch>
      </Container>
    </Suspense>
  );
};
