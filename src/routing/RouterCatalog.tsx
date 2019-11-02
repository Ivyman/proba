import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import { IStudio } from "@src/types/studio";

import ItemBox from "@src/components/ItemBox";
import Catalog from "@src/components/Catalog";

export const RouterCatalog: React.FC<{
  studiosList: IStudio[];
  onHoverStudio: (itemId: string) => void;
  openedStudio: IStudio | null;
  onOpenStudio: (item: IStudio | null) => void;
}> = ({ studiosList, onHoverStudio, openedStudio, onOpenStudio }) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:studioId`}>
        <ItemBox openedItem={openedStudio} onOpenItem={onOpenStudio} />
      </Route>
      <Route path={path}>
        <Catalog studiosList={studiosList} onHoverItem={onHoverStudio} onOpenItem={onOpenStudio} />
      </Route>
    </Switch>
  );
};
