import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import ItemBox from "@src/components/ItemBox";
import Catalog from "@src/components/Catalog";

export const RouterCatalog: React.FC<{
  studiosList: any;
  setHoveredItem: any;
}> = ({ studiosList, setHoveredItem }) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:studioId`}>
        <ItemBox />
      </Route>
      <Route path={path}>
        <Catalog studiosList={studiosList} onHoverItem={setHoveredItem} />
      </Route>
    </Switch>
  );
};
