import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useDispatch } from "@src/hooks/dispatch";
import { CircularProgress } from "@material-ui/core";
import { setOpenedStudio } from "@src/store/studios/actions";

const AboutScreen = lazy(() => import("@src/screens/About"));
const ContactScreen = lazy(() => import("@src/screens/Contact"));
const CatalogScreen = lazy(() => import("@src/screens/Catalog"));

export const RouterScreens: React.FC = () => {
    const location = useLocation();

    const dispatchOpenedStudio = useDispatch<typeof setOpenedStudio, string>(
        setOpenedStudio,
    );

    useEffect(() => {
        switch (location.pathname) {
            case "/catalog":
                dispatchOpenedStudio();
                break;
        }
    }, [location, dispatchOpenedStudio]);

    return (
        <Suspense fallback={<CircularProgress />}>
            <Switch>
                <Route path="/about" component={AboutScreen} exact />
                <Route path="/contact" component={ContactScreen} exact />
                <Route path="/catalog" component={CatalogScreen} />
                <Redirect from="/*" to="/catalog" />
            </Switch>
        </Suspense>
    );
};
