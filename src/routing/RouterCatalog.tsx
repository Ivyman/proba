import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { IStudio } from "@src/types/studio";

import ItemBox from "@src/components/ItemBox";
import Catalog from "@src/containers/Catalog";

export const RouterCatalog: React.FC<{
  openedStudio: IStudio | null;
}> = ({ openedStudio }) => {
  const { path } = useRouteMatch();
  const { goBack } = useHistory();

  const handleGoBack = () => goBack();

  return (
    <Switch>
      <Route path={`${path}/:studioId`}>
        <ItemBox openedItem={openedStudio} onGoBack={handleGoBack} />
      </Route>
      <Route path={path}>
        <Catalog />
      </Route>
    </Switch>
  );
};
