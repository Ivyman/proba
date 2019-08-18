import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { paths } from "@src/Config/Paths";

type TRoutesComponent = React.FunctionComponent<{}>;

export const Routes: TRoutesComponent = () => {
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
      <Switch>{renderRoutesList}</Switch>
    </Suspense>
  );
};
