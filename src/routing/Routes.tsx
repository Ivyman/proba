import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Paths from "./Paths";

import { StyledContainer } from "./elements";

type TRoutesComponent = React.FunctionComponent;

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
      <StyledContainer as="main">
        <Switch>{renderRoutesList()}</Switch>
      </StyledContainer>
    </Suspense>
  );
};
