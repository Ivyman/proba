import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import Studio from "@src/containers/Studio";
import Catalog from "@src/containers/Catalog";

export const RouterCatalog: React.FC = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/:studioId`}>
                <Studio />
            </Route>
            <Route path={path}>
                <Catalog />
            </Route>
        </Switch>
    );
};
