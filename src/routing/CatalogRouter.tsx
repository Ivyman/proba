import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import Unit from "@components/smart/Unit";
import Catalog from "@components/smart/Catalog";

export const CatalogRouter: React.FC = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/:unitId`}>
                <Unit />
            </Route>
            <Route path={path}>
                <Catalog />
            </Route>
        </Switch>
    );
};
