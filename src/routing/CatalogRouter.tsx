import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import Studio from "@components/smart/Studio";
import Catalog from "@components/smart/Catalog";

export const CatalogRouter: React.FC = () => {
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
