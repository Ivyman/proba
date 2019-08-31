import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { IPath } from "@src/types/paths";
import { Container } from "@src/components/layout/Container";

type TRoutesComponent = React.FunctionComponent<{ paths: IPath[] }>;

export const Routes: TRoutesComponent = ({ paths }) => {
  const renderRoutesList = () =>
    paths.map(({ path, exact, component: Component }) => (
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
