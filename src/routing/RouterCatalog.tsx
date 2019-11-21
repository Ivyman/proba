import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Studio from "@src/containers/Studio";
import Catalog from "@src/containers/Catalog";
import { useDispatch } from "@src/hooks/dispatch";
import { setOpenedStudio } from "@src/store/studios/actions";

export const RouterCatalog: React.FC = () => {
  const { path } = useRouteMatch();
  const { goBack } = useHistory();

  const dispatchOpenedStudio = useDispatch(setOpenedStudio);

  const handleGoBack = () => {
    dispatchOpenedStudio();
    goBack();
  };

  return (
    <Switch>
      <Route path={`${path}/:studioId`}>
        <Studio onGoBack={handleGoBack} />
      </Route>
      <Route path={path}>
        <Catalog />
      </Route>
    </Switch>
  );
};
